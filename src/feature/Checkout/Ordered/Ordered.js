import Head from 'feature/Checkout/Ordered/Head'
import Item from 'feature/Checkout/Ordered/Item'

export default function Ordered() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-10">
          <Head />
          <div className="flex flex-col gap-5">
            <Item />
            <div className="line" />
            <Item />
            <div className="line" />
            <Item />
            <div className="line" />
            <Item />
          </div>
        </div>
      </div>
    </>
  )
}
