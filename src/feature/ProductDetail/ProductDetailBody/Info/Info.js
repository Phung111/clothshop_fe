import Image from 'feature/ProductDetail/ProductDetailBody/Info/Image/Image'
import Name from 'feature/ProductDetail/ProductDetailBody/Info/Name/Name'

export default function Info() {
  return (
    <>
      <div className="flex gap-8 p-4">
        <Image />
        <Name />
      </div>
    </>
  )
}
