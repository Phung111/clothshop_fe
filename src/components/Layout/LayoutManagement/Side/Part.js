export default function Part({ children, select, href }) {
  return (
    <>
      <a href={href} className="flex h-10 justify-between gap-3">
        <div className="grow pl-4">
          <button className={`flex h-full  w-full items-center gap-3 rounded px-4 ${select ? 'bg-primary/30 text-primary' : 'text-black/40 hover:bg-black/10'} `}>
            {children && (
              <>
                {children[0]}
                <p className="text-base capitalize">{children[1]}</p>
              </>
            )}
          </button>
        </div>
        <div className={`w-1 rounded-bl rounded-tl ${select && 'bg-primary/80'}`}></div>
      </a>
    </>
  )
}
