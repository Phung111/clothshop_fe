export default function Part({ children, array }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h4 className="font-bold uppercase ">{children}</h4>
        {array &&
          array.slice(0).map((item, index) => (
            <a href="#" className="capitalize hover:text-primary" key={index}>
              {item}
            </a>
          ))}
      </div>
    </>
  )
}
