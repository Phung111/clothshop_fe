import Part from 'components/Footer/Categories/Part'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCollection } from 'slice/baseSlice'

export default function Categories() {
  let a1 = ['shirt', 'pant', 'jacket', 'shoe', 'croc']

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCollection())
  }, [])

  const baseSlice = useSelector((state) => state.baseSlice)
  const collections = baseSlice.data.collections

  const categories = collections.categories
  const topLengths = collections.topLengths
  const countries = collections.countries
  const seasons = collections.seasons
  const styles = collections.styles
  const shipfroms = collections.shipfroms

  return (
    <>
      <div className="flex flex-col gap-4 text-black/50">
        <div className="grid grid-cols-6 gap-4 text-xs">
          <Part array={categories}>category</Part>
          <Part array={topLengths}>top length</Part>
          <Part array={countries}>country</Part>
          <Part array={seasons}>season</Part>
          <Part array={styles}>style</Part>
          <Part array={shipfroms}>ship from</Part>
        </div>
      </div>
    </>
  )
}
