import Side from 'feature/Account/AccountBody/Side/Side'
import Content from 'feature/Account/AccountBody/Content/Content'

export default function AccountBody() {
  return (
    <>
      <div className="bg-gray">
        <div className="container py-5">
          <div className="flex min-h-[600px] gap-5">
            <div className="w-[180px]">
              <Side />
            </div>
            <div className="grow bg-white">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
