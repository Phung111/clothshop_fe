import Head from 'feature/ProductDetail/ProductDetailBody/Detail/Head'
import Specifications from 'feature/ProductDetail/ProductDetailBody/Detail/Specifications/Specifications'
import Description from 'feature/ProductDetail/ProductDetailBody/Detail/Description/Description'

export default function Detail() {
  return (
    <>
      <div className="p-4">
        <Head>product specifications</Head>
        <Specifications />
        <Head>product decription</Head>
        <Description />
      </div>
    </>
  )
}
