import PriceRange from 'feature/Home/HomeBody/Products/SideBar/PriceRange'
import Part from 'feature/Home/HomeBody/Products/SideBar/Part'
import Head from 'feature/Home/HomeBody/Products/SideBar/Head'

import Button from 'components/Button'

export default function SideBar() {
  return (
    <>
      <div className="flex w-[190px] flex-col gap-4">
        <Head title={'all categories'}>
          <i className="fa-solid fa-list-ul" />
        </Head>
        <div className="line" />
        <Part category={true} />
        <div className="line" />
        <Head title={'search filter'}>
          <i className="fa-solid fa-filter text-xs" />
        </Head>
        <div className="line" />
        <Part />
        <div className="line" />
        <Part />
        <div className="line" />
        <PriceRange />
        <div className="line" />
        <div className="h-8">
          <Button type={'solid'}>
            <p className="uppercase">clear all</p>
          </Button>
        </div>
      </div>
    </>
  )
}
