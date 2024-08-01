export default function ErrorText({ children }) {
  return (
    <>
      {children && (
        <div className="mt-1 flex items-center gap-2 text-xs capitalize text-red">
          <i className="fa-solid fa-circle-exclamation" /> {children}
        </div>
      )}
    </>
  )
}
