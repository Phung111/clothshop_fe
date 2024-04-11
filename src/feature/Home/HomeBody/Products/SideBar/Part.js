import PartSub from 'feature/Home/HomeBody/Products/SideBar/PartSub'

export default function Part({ arrayIn, category }) {
  const array = ['shirt', 'shoe', 'pant', 'hat', 'coach', 'jacket']

  return (
    <>
      <div className="flex flex-col gap-3">
        {!category && <p className="text-sm">Style</p>}
        {array.map((item, index) => {
          const idString = `category_${item}`
          return <PartSub key={index} id={idString} title={item} />
        })}
      </div>
    </>
  )
}
