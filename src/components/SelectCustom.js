import React, { useState, useEffect, useRef } from 'react'

const SelectCustom = ({ id, array, className, onSelect, selectedValue }) => {
  const [showOptions, setShowOptions] = useState(false)
  const selectRef = useRef(null)

  const handleSelectChange = (event) => {
    const newValue = event.target.textContent
    onSelect(id, newValue)
    setShowOptions(false)
  }

  const toggleOptions = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setShowOptions(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const borderClasses = className
    .split(' ')
    .filter((cls) => cls.includes('border') || cls.includes('round'))
    .join(' ')

  return (
    <>
      <div ref={selectRef} onClick={toggleOptions} className={`${className} relative flex cursor-pointer items-center justify-between gap-3 ${showOptions ? 'z-30' : 'z-0'}`}>
        <div>{selectedValue}</div>
        <div>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        {array && showOptions && (
          <div className={`absolute left-0 top-full w-full overflow-hidden pt-1 ${borderClasses}`}>
            {array.map((item, index) => (
              <div className={`${className} relative z-0 flex items-center !rounded-none !border-none`} key={index} onClick={handleSelectChange}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default SelectCustom
