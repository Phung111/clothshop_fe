import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { createBanner } from 'slice/otherSlice'
import FormUploadImage from 'components/FormValidate/FormUploadImage'
import { useForm, FormProvider } from 'react-hook-form'
import { setModalBanner } from 'slice/modalSlice'
import { getBannerPage } from 'slice/bannerPageSlice'

export default function ModalBanner() {
  const dispatch = useDispatch()

  const methods = useForm({
    defaultValues: {
      files: [],
    },
  })

  const { handleSubmit } = methods

  const submit = (data) => {
    dispatch(createBanner(data))
      .unwrap()
      .then(() => {
        dispatch(getBannerPage())
        cancel()
      })
      .catch((error) => {})
      .finally(() => {})
  }

  const cancel = () => {
    dispatch(setModalBanner(false))
  }

  useEffect(() => {}, [])

  return (
    <>
      <div className="fixed z-[60] h-full w-full bg-black/50 ">
        <div className="relative flex h-full items-center justify-center">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submit)} className="relative flex aspect-square w-[600px] rounded-xl bg-white p-8">
              <button onClick={cancel} className="absolute right-0 top-0 z-[70] flex aspect-square w-[40px] -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary hover:bg-primary_dark">
                <i className="fa-solid fa-xmark text-[28px] text-white" />
              </button>
              <div className="absolute bottom-0 left-0 h-10 w-full translate-y-1/2 px-8">
                <div className="flex h-full w-full justify-end gap-5">
                  <button className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-green-500 capitalize text-white hover:bg-green-700">create</button>

                  <button onClick={cancel} className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-rose-500 capitalize text-white hover:bg-rose-700">
                    cancel
                  </button>
                </div>
              </div>
              <FormUploadImage name="files" />
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  )
}
