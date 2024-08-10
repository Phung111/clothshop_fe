import Image from 'feature/ProductDetail/Info/Image'
import Name from 'feature/ProductDetail/Info/Name'

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
