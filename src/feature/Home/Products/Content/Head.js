import Button from 'components/Button'
import { Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getProductPage, setLatest, setPriceAsc, setTopsales } from 'slice/productPageSlice'

export default function Head() {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.productPageSlice)
  const request = data.request
  const priceAsc = request.priceAsc
  const latest = request.latest
  const topsales = request.topsales

  const handlePrice = (value) => {
    dispatch(setPriceAsc(value))
    dispatch(getProductPage())
  }

  const handleLatest = () => {
    dispatch(setLatest(true))
    dispatch(getProductPage())
  }

  const handleTopSales = (value) => {
    dispatch(setTopsales(false))
    dispatch(getProductPage())
  }

  return (
    <>
      <div className="h-[60px] w-full bg-gray2 px-5 py-3">
        <div className="flex h-full justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="flex h-full items-center justify-center">
              <h4 className="capitalize">sort by</h4>
            </div>
            <div className="flex h-full w-[90px] items-center justify-center" onClick={handleLatest}>
              <Button type={latest ? 'solid' : undefined}>latest</Button>
            </div>
            <div className="flex h-full w-[90px] items-center justify-center" onClick={handleTopSales}>
              <Button type={topsales === false ? 'solid' : undefined}>top sales</Button>
            </div>
            <div className="flex h-full w-[200px] items-center justify-center">
              <Select
                value={priceAsc === null || priceAsc === '' ? undefined : priceAsc}
                onChange={(value) => handlePrice(value)}
                className="w-full"
                size="large"
                placeholder="Price"
                options={[
                  { label: 'Price Low to High', value: true },
                  { label: 'Price High to Low', value: false },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
