import Head from 'feature/ProductDetail/ProductDetailBody/Detail/Head'
import Specifications from 'feature/ProductDetail/ProductDetailBody/Detail/Specifications/Specifications'
import Description from 'feature/ProductDetail/ProductDetailBody/Detail/Description/Description'

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
