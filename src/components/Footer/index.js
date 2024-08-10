import Text from 'components/Footer/Text'
import Categories from 'components/Footer/Categories/Categories'
import Country from 'components/Footer/Country'
import Privacy from 'components/Footer/Privacy'

export default function Footer() {
  return (
    <>
      <div className="border-t-4 border-primary">
        <div className="bg-gray4 py-10">
          <div className="container">
            <div className="flex flex-col gap-10">
              <Text />
              <div className="line" />
              <Categories />
              <div className="line" />
              <Country />
            </div>
          </div>
        </div>
        <div className="bg-gray py-10">
          <div className="flex justify-center ">
            <Privacy />
          </div>
        </div>
      </div>
    </>
  )
}
