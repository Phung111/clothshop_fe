import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Checkbox } from 'antd'
import Button from 'components/Button'
import 'index.css'
import Head from 'feature/Home/HomeBody/Products/SideBar/Head'

import { getProductPage, setKeySearch, setLatest, setNameAsc, setPriceAsc, setTopsales, setECategories, setPriceFrom, setPriceTo, setETopLengths, setECountries, setESeasons, setEStyles, setEShipsFroms, setCurrentPage, clearAllFilters } from 'slice/productPageSlice'

export default function SideBar() {
  const dispatch = useDispatch()

  const dataBaseSlice = useSelector((state) => state.baseSlice)
  const categories = dataBaseSlice.data.collections.categories
  const styles = dataBaseSlice.data.collections.styles
  const shipfroms = dataBaseSlice.data.collections.shipfroms

  const [priceFromLc, setPriceFromLc] = useState('')
  const [priceToLc, setPriceToLc] = useState('')

  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedStyles, setSelectedStyles] = useState([])
  const [selectedShipFroms, setSelectedShipFroms] = useState([])

  const handleCategory = (value) => {
    setSelectedCategories(value)
    dispatch(setECategories(value))
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }

  const handleStyle = (value) => {
    setSelectedStyles(value)
    dispatch(setEStyles(value))
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }

  const handleShipFrom = (value) => {
    setSelectedShipFroms(value)
    dispatch(setEShipsFroms(value))
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }

  const handleFilter = () => {
    dispatch(setPriceFrom(priceFromLc))
    dispatch(setPriceTo(priceToLc))
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }

  const handleClearAll = () => {
    setPriceFromLc('')
    setPriceToLc('')
    setSelectedCategories([])
    setSelectedStyles([])
    setSelectedShipFroms([])
    dispatch(clearAllFilters())
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }

  return (
    <>
      <div className="flex w-[190px] flex-col gap-4">
        <Head title={'all categories'}>
          <i className="fa-solid fa-list-ul" />
        </Head>
        <Checkbox.Group options={categories.map((item) => ({ label: item, value: item }))} value={selectedCategories} onChange={handleCategory} className="custom-checkbox flex flex-col gap-2" />
        <div className="line" />
        <Head title={'search filter'}>
          <i className="fa-solid fa-filter text-xs" />
        </Head>
        <p className="text-sm capitalize">styles</p>
        <Checkbox.Group options={styles.map((item) => ({ label: item, value: item }))} value={selectedStyles} onChange={handleStyle} className="custom-checkbox flex flex-col gap-2" />
        <div className="line" />
        <p className="text-sm capitalize">shipped from</p>
        <Checkbox.Group options={shipfroms.map((item) => ({ label: item, value: item }))} value={selectedShipFroms} onChange={handleShipFrom} className="custom-checkbox flex flex-col gap-2" />
        <div className="line" />
        <div className="flex justify-between">
          <input type="number" placeholder="₫ MIN" className="h-8 w-20 rounded-lg border-[0.5px] border-black/20 px-2 text-sm" value={priceFromLc} onChange={(event) => setPriceFromLc(event.target.value)} />
          <div className="flex w-full items-center">
            <div className="line mx-2 !w-2" />
          </div>
          <input type="number" placeholder="₫ MAX" className="h-8 w-20 rounded-lg border-[0.5px] border-black/20 px-2 text-sm" value={priceToLc} onChange={(event) => setPriceToLc(event.target.value)} />
        </div>
        <div className="h-8" onClick={handleFilter}>
          <Button type={'solid'}>
            <p className="uppercase">apply</p>
          </Button>
        </div>
        <div className="line" />
        <div className="h-8" onClick={handleClearAll}>
          <Button type={'solid'}>
            <p className="uppercase">clear all</p>
          </Button>
        </div>
      </div>
    </>
  )
}
