import './loading.css'

export default function Loading() {
  return (
    <div className="fixed z-50 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="flex w-[150px] flex-col items-center gap-1">
        <img src={require(`assets/images/loading.jpg`)} alt="loading" className="object-contain" />
        <div className="h-2 w-[80%]">
          <div className="loading h-full rounded-lg bg-primary"></div>
        </div>
      </div>
    </div>
  )
}
