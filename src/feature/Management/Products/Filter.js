import { Select, Switch } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { getProductPage, setKeySearch, setLatest, setNameAsc, setPriceAsc, setTopsales, setECategories, setPriceFrom, setPriceTo, setETopLengths, setECountries, setESeasons, setEStyles, setEShipsFroms, setCurrentPage, clearAllFilters } from 'slice/productPageSlice'

import FilterPart from './FilterPart'

export default function Filter() {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.productPageSlice)
  // const respond = data.respond
  const request = data.request

  const latest = request.latest
  const nameAsc = request.nameAsc
  const priceAsc = request.priceAsc
  const topsales = request.topsales

  const classWCheck = 'w-[30px] bg-[#BFBFBF] shrink-0'
  const up = <i className="fa-solid fa-caret-up" />
  const down = <i className="fa-solid fa-caret-down" />
  const classSelect = 'w-full'

  const dataBaseSlice = useSelector((state) => state.baseSlice)
  const categories = dataBaseSlice.data.collections.categories
  const topLengths = dataBaseSlice.data.collections.topLengths
  const countries = dataBaseSlice.data.collections.countries
  const seasons = dataBaseSlice.data.collections.seasons
  const styles = dataBaseSlice.data.collections.styles
  const shipfroms = dataBaseSlice.data.collections.shipfroms

  const [keyWord, setKeyWord] = useState('')
  const [priceFromLc, setPriceFromLc] = useState('')
  const [priceToLc, setPriceToLc] = useState('')

  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTopLengths, setSelectedTopLengths] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])
  const [selectedSeasons, setSelectedSeasons] = useState([])
  const [selectedStyles, setSelectedStyles] = useState([])
  const [selectedShipFroms, setSelectedShipFroms] = useState([])

  const handleFilter = () => {
    dispatch(setPriceFrom(priceFromLc))
    dispatch(setPriceTo(priceToLc))
    dispatch(setKeySearch(keyWord))
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }

  const handleLatest = (value) => {
    dispatch(setLatest(value))
    dispatch(getProductPage())
  }

  const handleName = (value) => {
    dispatch(setNameAsc(value))
    dispatch(getProductPage())
  }

  const handlePrice = (value) => {
    dispatch(setPriceAsc(value))
    dispatch(getProductPage())
  }

  const handleTopSale = (value) => {
    dispatch(setTopsales(value))
    dispatch(getProductPage())
  }

  const handleCategory = (value) => {
    setSelectedCategories(value)
    dispatch(setECategories(value))
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }

  const handleTopLength = (value) => {
    setSelectedTopLengths(value)
    dispatch(setETopLengths(value))
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }

  const handleCountry = (value) => {
    setSelectedCountries(value)
    dispatch(setECountries(value))
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }

  const handleSeason = (value) => {
    setSelectedSeasons(value)
    dispatch(setESeasons(value))
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

  const handleClearAll = () => {
    setPriceFromLc('')
    setPriceToLc('')
    setKeyWord('')
    setSelectedCategories([])
    setSelectedTopLengths([])
    setSelectedCountries([])
    setSelectedSeasons([])
    setSelectedStyles([])
    setSelectedShipFroms([])
    dispatch(clearAllFilters())
    dispatch(setCurrentPage(1))
    dispatch(getProductPage())
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex h-10 w-full items-center gap-3">
          <FilterPart>
            <>Latest</>
            <>
              <Switch onChange={() => handleLatest(false)} value={latest === false ? true : false} size="small" checkedChildren={up} unCheckedChildren={up} defaultChecked className={classWCheck} />
              <Switch onChange={() => handleLatest(true)} value={latest === true ? true : false} size="small" checkedChildren={down} unCheckedChildren={down} defaultChecked className={classWCheck} />
            </>
          </FilterPart>
          <FilterPart>
            <>Name</>
            <>
              <Switch onChange={() => handleName(true)} value={nameAsc === true ? true : false} size="small" checkedChildren={up} unCheckedChildren={up} defaultChecked className={classWCheck} />
              <Switch onChange={() => handleName(false)} value={nameAsc === false ? true : false} size="small" checkedChildren={down} unCheckedChildren={down} defaultChecked className={classWCheck} />
            </>
          </FilterPart>
          <FilterPart>
            <>Price</>
            <>
              <Switch onChange={() => handlePrice(true)} value={priceAsc === true ? true : false} size="small" checkedChildren={up} unCheckedChildren={up} defaultChecked className={classWCheck} />
              <Switch onChange={() => handlePrice(false)} value={priceAsc === false ? true : false} size="small" checkedChildren={down} unCheckedChildren={down} defaultChecked className={classWCheck} />
            </>
          </FilterPart>
          <FilterPart>
            <>Top Sales</>
            <>
              <Switch onChange={() => handleTopSale(true)} value={topsales === true ? true : false} size="small" checkedChildren={up} unCheckedChildren={up} defaultChecked className={classWCheck} />
              <Switch onChange={() => handleTopSale(false)} value={topsales === false ? true : false} size="small" checkedChildren={down} unCheckedChildren={down} defaultChecked className={classWCheck} />
            </>
          </FilterPart>
          <div className="flex justify-between">
            <input type="number" placeholder="₫ MIN" className="h-8 w-20 rounded-lg border-[0.5px] border-black/20 px-2 text-sm" value={priceFromLc} onChange={(event) => setPriceFromLc(event.target.value)} />
            <div className="flex w-full items-center">
              <div className="line mx-2 !w-2" />
            </div>
            <input type="number" placeholder="₫ MAX" className="h-8 w-20 rounded-lg border-[0.5px] border-black/20 px-2 text-sm" value={priceToLc} onChange={(event) => setPriceToLc(event.target.value)} />
          </div>
          <input type="text" placeholder="Search" className="h-8 w-20 rounded-lg border-[0.5px] border-black/20 px-2 text-sm" value={keyWord} onChange={(event) => setKeyWord(event.target.value)} />
          <button className="flex h-full items-center gap-2 rounded-lg border-[0.5px] border-black/20 bg-blue/50 px-2 font-bold" onClick={handleFilter}>
            <i className="fa-solid fa-filter" />
            Filter
          </button>
          <button className="flex h-full items-center gap-2 rounded-lg border-[0.5px] border-black/20 bg-red/70 px-2 font-bold" onClick={handleClearAll}>
            Clear Filter
          </button>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          <Select onChange={(value) => handleCategory(value)} className={classSelect} mode="multiple" size="middle" placeholder="Category" maxTagCount={3} options={categories.map((item) => ({ label: item, value: item }))} value={selectedCategories} />
          <Select onChange={(value) => handleTopLength(value)} className={classSelect} mode="multiple" size="middle" placeholder="Top Length" maxTagCount={3} options={topLengths.map((item) => ({ label: item, value: item }))} value={selectedTopLengths} />
          <Select onChange={(value) => handleCountry(value)} className={classSelect} mode="multiple" size="middle" placeholder="Country" maxTagCount={3} options={countries.map((item) => ({ label: item, value: item }))} value={selectedCountries} />
          <Select onChange={(value) => handleSeason(value)} className={classSelect} mode="multiple" size="middle" placeholder="Season" maxTagCount={3} options={seasons.map((item) => ({ label: item, value: item }))} value={selectedSeasons} />
          <Select onChange={(value) => handleStyle(value)} className={classSelect} mode="multiple" size="middle" placeholder="Style" maxTagCount={3} options={styles.map((item) => ({ label: item, value: item }))} value={selectedStyles} />
          <Select onChange={(value) => handleShipFrom(value)} className={classSelect} mode="multiple" size="middle" placeholder="Ship From" maxTagCount={3} options={shipfroms.map((item) => ({ label: item, value: item }))} value={selectedShipFroms} />
        </div>
      </div>
    </>
  )
}
