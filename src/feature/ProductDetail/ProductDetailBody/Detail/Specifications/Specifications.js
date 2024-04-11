import Model from 'feature/ProductDetail/ProductDetailBody/Detail/Specifications/Model'

export default function Specifications() {
  return (
    <>
      <div className="flex flex-col gap-3 p-4">
        <Model spec={'category'} info={'shirts'} />
        <Model spec={'chiều dài tay áo'} info={'tay ngắn'} />
        <Model spec={'cổ áo'} info={'cổ tròn'} />
        <Model spec={'chất liệu'} info={'cotton'} />
        <Model spec={'stock'} info={'77442'} />
        <Model spec={'ships from'} info={'TP.Hồ Chí Minh'} />
      </div>
    </>
  )
}
