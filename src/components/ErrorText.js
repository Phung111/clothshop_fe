export default function ErrorText({ children }) {
  return (
    <>
      <div className="mt-1 text-xs text-red">{children || <>&nbsp;</>}</div>
    </>
  )
}
