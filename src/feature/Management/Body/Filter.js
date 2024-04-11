import { Select, Switch, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

import { getProductPage, setKeySearch, setLatest, setNameAsc, setPriceAsc, setTopsales, setECategories, setPriceFrom, setPriceTo, setETopLengths, setECountries, setESeasons, setEStyles, setEShipsFroms } from 'slice/productPageSlice'

export default function Filter() {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.productPageSlice)
  const respond = data.respond
  const request = data.request
  const priceFrom = request.priceFrom
  const priceTo = request.priceTo

  const classWCheck = 'w-[70px] bg-[#BFBFBF] shrink-0'
  const classSelect = 'w-full'

  const categories = ['SHIRT', 'SHOE', 'JACKET', 'PANT', 'BULL']
  const topLengths = ['LONG']
  const countries = ['VIETNAM']
  const seasons = ['SUMMER']
  const styles = ['KOREA']
  const shipForms = ['HANOI']

  const latests = [
    { label: 'None', value: '' },
    { label: 'Latest', value: true },
    { label: 'Oldest', value: false },
  ]

  const names = [
    { label: 'None', value: '' },
    { label: 'Name ASC', value: true },
    { label: 'Name DESC', value: false },
  ]

  const prices = [
    { label: 'None', value: '' },
    { label: 'Price ASC', value: true },
    { label: 'Price DESC', value: false },
  ]

  const topSales = [
    { label: 'None', value: '' },
    { label: 'Top Sales', value: true },
    { label: 'Bottom Sales', value: false },
  ]

  const [keyWord, setKeyWord] = useState('')
  const [priceFromLc, setPriceFromLc] = useState('')
  const [priceToLc, setPriceToLc] = useState('')

  const handleFilter = () => {
    dispatch(setPriceFrom())
    dispatch(setPriceTo())
    dispatch(setKeySearch(keyWord))
    // dispatch(getProductPage(request))
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex h-10 w-full items-center gap-3">
          {/* <Switch onChange={(value) => dispatch(setLatest(value))} checkedChildren="Latest" unCheckedChildren="Latest" defaultChecked className={classWCheck} /> */}
          <Select id="latest" onChange={(value) => dispatch(setLatest(value))} className={classSelect} size="middle" placeholder="Latest" maxTagCount={3} options={latests.map((item) => ({ label: item.label, value: item.value }))} />
          <Select onChange={(value) => dispatch(setNameAsc(value))} className={classSelect} size="middle" placeholder="Name" maxTagCount={3} options={names.map((item) => ({ label: item.label, value: item.value }))} />
          <Select onChange={(value) => dispatch(setPriceAsc(value))} className={classSelect} size="middle" placeholder="Price" maxTagCount={3} options={prices.map((item) => ({ label: item.label, value: item.value }))} />
          <Select onChange={(value) => dispatch(setTopsales(value))} className={classSelect} size="middle" placeholder="TopSales" maxTagCount={3} options={topSales.map((item) => ({ label: item.label, value: item.value }))} />
          <div className="flex justify-between">
            <input type="number" placeholder="₫ MIN" className="h-8 w-20 rounded-lg border-[0.5px] border-black/20 px-2 text-sm" value={priceFromLc} onChange={(event) => setPriceFromLc(event.target.value)} />
            <div className="flex w-full items-center">
              <div className="line mx-2 !w-2" />
            </div>
            <input type="number" placeholder="₫ MAX" className="h-8 w-20 rounded-lg border-[0.5px] border-black/20 px-2 text-sm" value={priceToLc} onChange={(event) => setPriceToLc(event.target.value)} />
          </div>
          <input type="text" placeholder="Search" className="h-8 w-20 rounded-lg border-[0.5px] border-black/20 px-2 text-sm" value={keyWord} onChange={(event) => setKeyWord(event.target.value)} />
          <button className="flex h-full items-center gap-2 rounded-lg border-[0.5px] border-black/20 bg-blue/50 px-2 font-bold" onClick={handleFilter()}>
            <i className="fa-solid fa-filter" />
            Filter
          </button>
          {/* <Search placeholder="input search text" onChange={(event) => setKeyWord(event.target.value)} onSearch={onSearch} enterButton /> */}
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          <Select onChange={(value) => dispatch(setECategories(value))} className={classSelect} mode="multiple" size="middle" placeholder="Category" maxTagCount={3} options={categories.map((item) => ({ label: item, value: item }))} />
          <Select onChange={(value) => dispatch(setETopLengths(value))} className={classSelect} mode="multiple" size="middle" placeholder="Top Length" maxTagCount={2} options={topLengths.map((item) => ({ label: item, value: item }))} />
          <Select onChange={(value) => dispatch(setECountries(value))} className={classSelect} mode="multiple" size="middle" placeholder="Country" maxTagCount={2} options={countries.map((item) => ({ label: item, value: item }))} />
          <Select onChange={(value) => dispatch(setESeasons(value))} className={classSelect} mode="multiple" size="middle" placeholder="Season" maxTagCount={2} options={seasons.map((item) => ({ label: item, value: item }))} />
          <Select onChange={(value) => dispatch(setEStyles(value))} className={classSelect} mode="multiple" size="middle" placeholder="Style" maxTagCount={2} options={styles.map((item) => ({ label: item, value: item }))} />
          <Select onChange={(value) => dispatch(setEShipsFroms(value))} className={classSelect} mode="multiple" size="middle" placeholder="Ship From" maxTagCount={2} options={shipForms.map((item) => ({ label: item, value: item }))} />
        </div>
      </div>
    </>
  )
}
