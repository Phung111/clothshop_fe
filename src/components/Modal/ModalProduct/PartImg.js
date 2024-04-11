import React from 'react'

export default function PartImg({ file, index, removeImg }) {
  return (
    <div className="group relative rounded-lg bg-white">
      <button type="button" onClick={() => removeImg(index)} className="absolute left-0 top-0 z-[70] hidden aspect-square w-[28px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary hover:bg-primary_dark group-hover:flex">
        <i className="fa-solid fa-xmark text-[20px] text-white" />
      </button>
      <img src={URL.createObjectURL(file)} alt="" className="h-full w-full rounded-lg object-cover" />
    </div>
  )
}
