import Part from 'feature/Cart/Part'

export default function CartItemHead({ children }) {
  return (
    <>
      <Part head={true}>
        <p className="text-sm capitalize">product</p>
        <p className="text-sm capitalize">price</p>
        <p className="text-sm capitalize">quantity</p>
        <p className="text-sm capitalize">total price</p>
        <p className="text-sm capitalize">actions</p>
      </Part>
    </>
  )
}
