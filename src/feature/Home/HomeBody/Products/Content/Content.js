import Head from 'feature/Home/HomeBody/Products/Content/Head'
import Body from 'feature/Home/HomeBody/Products/Content/Body'

export default function Content() {
  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <Head />
        <Body />
      </div>
    </>
  )
}
