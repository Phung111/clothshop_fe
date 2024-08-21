import { useEffect, useState } from 'react'

export default function PartImg({ file, index, removeImg, error }) {
  const [objectURL, setObjectURL] = useState('')

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file)
      setObjectURL(url)
      return () => URL.revokeObjectURL(url)
    }
  }, [file])

  return (
    <>
      <div className="group relative aspect-square cursor-pointer rounded-lg bg-white">
        <img src={objectURL} alt="" className="h-full w-full rounded-lg object-cover" />
        {error && (
          <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-red/50">
            <div className="flex h-full w-full items-center justify-center p-5 text-center capitalize text-white">{error}</div>
          </div>
        )}
        <button type="button" onClick={() => removeImg(index)} className="absolute left-0 top-0 z-[70] hidden aspect-square w-[28px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary hover:bg-primary_dark group-hover:flex">
          <i className="fa-solid fa-xmark text-[20px] text-white" />
        </button>
      </div>
    </>
  )
}
