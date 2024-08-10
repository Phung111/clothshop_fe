import Button from 'components/Button'
import Part from './PartAdresses'
import PartAdresses from 'feature/Account/MyAddesses/PartAdresses'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setIsCreateAddress, setModalEditAddress } from 'slice/modalSlice'
import { getAllAddress } from 'slice/otherSlice'

export default function MyAddesses() {
  const dispatch = useDispatch()

  const otherSlice = useSelector((state) => state.otherSlice)
  const addresses = otherSlice.addresses

  const handleClickCreateAddress = () => {
    dispatch(setIsCreateAddress(true))
    dispatch(setModalEditAddress(true))
  }

  useEffect(() => {
    dispatch(getAllAddress())
  }, [])

  return (
    <>
      <div className="grow bg-white p-[30px]">
        <div className="flex flex-col gap-5">
          <div className="flex h-10 items-center justify-between gap-1">
            <h2 className="text-lg font-medium capitalize">my addresses</h2>
            <div className="h-full w-[180px]" onClick={handleClickCreateAddress}>
              <Button type={'solid'}>
                <i className="fa-solid fa-plus" />
                add new address
              </Button>
            </div>
          </div>
          <div className="line" />
          <div className="flex flex-col gap-3">{addresses && addresses.map((item, index) => <PartAdresses item={item} key={index} noRadio={true} />)}</div>
        </div>
      </div>
    </>
  )
}
