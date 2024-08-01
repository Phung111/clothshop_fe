import PartVouchers from 'feature/Account/Content/MyVouchers/PartVouchers'

export default function MyVouchers() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex h-10 items-center justify-between gap-1">
          <h2 className="text-lg font-medium capitalize">my voucher</h2>
        </div>
        <div className="line" />
        <div className="grid grid-cols-2 gap-5">
          <PartVouchers noRadio={true} />
          <PartVouchers noRadio={true} />
          <PartVouchers noRadio={true} />
          <PartVouchers noRadio={true} />
          <PartVouchers noRadio={true} />
          <PartVouchers noRadio={true} />
          <PartVouchers noRadio={true} />
          <PartVouchers noRadio={true} />
          <PartVouchers noRadio={true} />
        </div>
      </div>
    </>
  )
}
