import PartImg from 'components/FormValidate/FormUploadImage/PartImg'
import { useFormContext, useWatch } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function FormUploadImage({ name }) {
  const {
    register,
    setValue,
    setError,
    trigger,
    watch,
    clearErrors,
    formState: { errors },
  } = useFormContext()

  const dispatch = useDispatch()

  const [isUploadImg, setUploadImg] = useState(false)

  const multipartFiles = watch(name, [])

  const images = useWatch({ name })

  const validateImage = (files) => {
    if (files || files.length > 0) {
      files.forEach((file, index) => {
        const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp']
        const fileExtension = file.name.split('.').pop().toLowerCase()

        if (!validExtensions.includes(fileExtension)) {
          setError(`${name}Errors.${index}`, { type: 'manual', message: `Invalid image format.` })
        }

        if (file.size > 5 * 1024 * 1024) {
          setError(`${name}Errors.${index}`, { type: 'manual', message: `5MB size limit.` })
        }
      })
    }
  }

  const uploadImg = (event) => {
    // setUploadImg(true)
    const files = Array.from(event.target.files)
    const newFiles = [...multipartFiles, ...files]
    validateImage(newFiles)
    setValue(name, newFiles)
    trigger(name)
  }

  const cancelUploadImg = () => {
    // setUploadImg(false)
    const fileInput = document.getElementById(name)
    if (fileInput) {
      fileInput.value = ''
    }
    setValue(name, [])
    clearErrors(name)
    clearErrors(`${name}Errors`)
  }

  const removeImg = (index) => {
    const updatedFiles = [...multipartFiles]
    updatedFiles.splice(index, 1)
    setValue(name, updatedFiles)
    clearErrors(`${name}Errors.${index}`)
    if (updatedFiles.length === 0) {
      cancelUploadImg()
    }
  }

  useEffect(() => {
    images && images.length > 0 ? setUploadImg(true) : setUploadImg(false)
  }, [images])

  return (
    <>
      <div className="group relative flex aspect-square h-full gap-10 rounded-xl bg-gray">
        <input {...register(name)} className="hidden" id={name} type="file" multiple onChange={uploadImg} />
        {!isUploadImg && (
          <label htmlFor={name} className="absolute flex h-full w-full cursor-pointer items-center justify-center rounded-xl border-dashed border-black/50 group-hover:border-2">
            <img className="aspect-square w-[240px] opacity-40" src={require('assets/images/add_image.png')} alt="add_image" />
          </label>
        )}
        {multipartFiles.length > 0 && (
          <div className="relative h-full w-full">
            <button onClick={cancelUploadImg} className="absolute right-0 top-0 z-[70] flex aspect-square w-[32px] -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-black/50 hover:bg-black">
              <i className="fa-solid fa-xmark text-[28px] text-white" />
            </button>
            <div className="grid h-full w-full auto-rows-min grid-cols-4 gap-5 overflow-auto p-5">
              {multipartFiles.map((file, index) => (
                <PartImg key={index} file={file} index={index} removeImg={removeImg} error={errors[`${name}Errors`]?.[index]?.message} />
              ))}
              <div className="aspect-square rounded-lg bg-gray6 p-2.5 hover:bg-gray7">
                <label htmlFor={name} className="flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white">
                  <i className="fa-solid fa-plus text-[80px] text-gray6 hover:text-gray7" />
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
