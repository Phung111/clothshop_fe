export default function HomeBodyHead({ title, href, seeAll, top }) {
  return (
    <>
      <div className="flex h-[60px] items-center justify-between">
        <h2 className={`uppercase text-black/50 ${top ? 'text-primary' : ''}`}>{title}</h2>
        {seeAll && (
          <a href={href} className="flex items-center gap-2 text-primary hover:text-primary_dark">
            <p className="text-sm capitalize">see all</p>
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </a>
        )}
      </div>
    </>
  )
}
