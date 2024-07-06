import PartProfile from 'feature/Account/Content/MyAccount/Profile/PartProfile'

export default function Profile() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex h-10 items-center justify-between gap-1">
          <h2 className="text-lg font-medium capitalize">my profile</h2>
        </div>
        <div className="line" />
        <div className="flex flex-col gap-3">
          <PartProfile>
            <>username</>
            <p className="text-sm">men22998</p>
          </PartProfile>
          <PartProfile>
            <>email</>
            <p className="text-sm">admin@gmail.com</p>
          </PartProfile>
          <PartProfile>
            <>phone number</>
            <p className="text-sm">0766606996</p>
          </PartProfile>
          <PartProfile>
            <>gender</>
            <p className="text-sm">male</p>
          </PartProfile>
          <PartProfile>
            <>date of birth</>
            <p className="text-sm">01/01/2000</p>
          </PartProfile>
        </div>
      </div>
    </>
  )
}
