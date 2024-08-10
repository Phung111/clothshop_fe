import Head from 'feature/ProductDetail/Detail/Head'
import Specifications from 'feature/ProductDetail/Detail/Specifications'
import Description from 'feature/ProductDetail/Detail/Description'

export default function Detail() {
  return (
    <>
      <div className="p-4">
        <Head>Product Specifications</Head>
        <Specifications />
        <Head>Product Decription</Head>
        <Description />
      </div>
    </>
  )
}
