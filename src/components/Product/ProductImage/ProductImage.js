export default function ProductImage({ children, src, type, product }) {
  return (
    <>
      <div className="relative flex aspect-square w-[180px] shrink-0">
        {children}
        <img src={src} alt="product" className="aspect-square h-full w-full object-contain" />
        {type !== 'onSale' && (
          <>
            <div className="absolute bottom-0 left-0 z-10 h-5">
              <img src={require(`assets/images/tem.png`)} alt="label" className="h-full w-full object-contain" />
            </div>
          </>
        )}
      </div>
    </>
  )
}
