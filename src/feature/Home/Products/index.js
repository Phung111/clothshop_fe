import SideBar from 'feature/Home/Products/SideBar/SideBar'
import Content from 'feature/Home/Products/Content/Content'

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
