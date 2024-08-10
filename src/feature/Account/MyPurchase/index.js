import Part from 'feature/Account/MyPurchase/Part'
import Button from 'components/Button'

export default function MyPurchase() {
  const handleSeeMore = () => {}
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-[30px]">
            <Part />
          </div>
          <div className="bg-white p-[30px]">
            <Part />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="h-[40px] w-[100px]" onClick={handleSeeMore}>
            <Button type="button">See More</Button>
          </div>
        </div>
      </div>
    </>
  )
}
