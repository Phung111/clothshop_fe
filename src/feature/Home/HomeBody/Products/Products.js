import SideBar from 'feature/Home/HomeBody/Products/SideBar/SideBar'
import Content from 'feature/Home/HomeBody/Products/Content/Content'

export default function Products() {
  return (
    <>
      <div id="products" />
      <div className="flex gap-5">
        <SideBar />
        <Content />
      </div>
    </>
  )
}
