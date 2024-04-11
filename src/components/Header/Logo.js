export default function Logo({ orange }) {
  return (
    <>
      {!orange && (
        <a href="#" className="flex shrink-0 gap-2">
          <img src={require(`assets/images/logo2.png`)} alt="logo" className="aspect-square w-10 object-contain" />
          <h1 className="flex items-end text-3xl text-white">Clothshop</h1>
        </a>
      )}

      {orange && (
        <a href="#" className="flex shrink-0 gap-2">
          <img src={require(`assets/images/logo.png`)} alt="logo" className="aspect-square w-10 object-contain" />
          <h1 className="flex items-end text-3xl text-primary">Clothshop</h1>
        </a>
      )}
    </>
  )
}
