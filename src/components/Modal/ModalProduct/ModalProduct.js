import PartImg from './PartImg'
import React, { useState, useEffect } from 'react'
import { Select, DatePicker } from 'antd'
import PartItem from './PartItem'
import PartHeader from './PartHeader'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setModalProduct } from 'slice/modalSlice'
import { createProduct } from 'slice/baseSlice'

export default function ModalProduct() {
  const dispatch = useDispatch()

  const modalSlice = useSelector((state) => state.modalSlice)
  const isCreateProduct = modalSlice.isCreateProduct
  const isUpdateProduct = modalSlice.isUpdateProduct

  const { RangePicker } = DatePicker

  const styleItem = {
    width: '100%',
    height: '100%',
  }

  const categories = ['SHIRT', 'SHOE', 'JACKET', 'PANT', 'BULL']
  const colors = ['BLACK', 'WHITE', 'YELLOW', 'ORANGE', 'BLUE']
  const sizes = ['L']
  const topLengths = ['LONG']
  const countries = ['VIETNAM']
  const seasons = ['SUMMER']
  const styles = ['KOREA']
  const shipForms = ['HANOI']

  const [percentBar, setPercentBar] = useState('0')
  const [isUploadImg, setUploadImg] = useState(false)

  const [formData, setFormData] = useState(new FormData())

  const [multipartFiles, setMultipartFiles] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')

  const [topLength, setTopLength] = useState('')
  const [country, setCountry] = useState('')
  const [season, setSeason] = useState('')
  const [style, setStyle] = useState('')
  const [shipFrom, setShipFrom] = useState('')

  const [percent, setPercent] = useState('')
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')

  const [description, setDescription] = useState('')

  const uploadImg = (event) => {
    setUploadImg(true)
    const files = event.target.files
    const fileList = [...files]

    setMultipartFiles([...multipartFiles, ...fileList])
  }

  const cancelUploadImg = () => {
    setUploadImg(false)
    setMultipartFiles([])
    const fileInput = document.getElementById('multipartFiles')
    if (fileInput) {
      fileInput.value = ''
    }
  }

  const removeImg = (index) => {
    const updatedFiles = [...multipartFiles]
    updatedFiles.splice(index, 1)
    setMultipartFiles(updatedFiles)
    if (multipartFiles.length - 1 == 0) {
      cancelUploadImg()
    }
  }

  const handlePercentChange = (event) => {
    const newValue = event.target.value
    setPercent(newValue)
    setPercentBar(newValue)
  }

  const handlePercentBarChange = (event) => {
    const newValue = event.target.value
    setPercentBar(newValue)
    setPercent(newValue)
  }

  const changeDate = (value) => {
    if (value) {
      let start = moment(value[0].$d).format('DD-MM-YYYY')
      let end = moment(value[1].$d).format('DD-MM-YYYY')
      setDateStart(start)
      setDateEnd(end)
    } else {
      setDateStart('')
      setDateEnd('')
    }
  }

  const getFormData = () => {
    return new Promise((resolve, reject) => {
      let formData = new FormData()

      formData.set('name', name)
      formData.set('price', price)
      formData.set('quantity', quantity)
      formData.set('eCategory', category)
      formData.set('eColor', color)
      formData.set('eSize', size)
      formData.set('eCountry', country)
      formData.set('eTopLength', topLength)
      formData.set('eSeason', season)
      formData.set('eStyle', style)
      formData.set('eShipsFrom', shipFrom)
      formData.set('percent', percent)
      formData.set('dateStart', dateStart)
      formData.set('dateEnd', dateEnd)
      formData.set('description', description)

      multipartFiles.forEach((file, index) => {
        formData.append(`multipartFiles[${index}]`, file)
      })
      resolve(formData)
    })
  }

  // const create = () => {
  //   getFormData()
  //   dispatch(createProduct(Object.fromEntries(formData)))
  // }

  const create = () => {
    getFormData()
      .then((formData) => {
        setFormData(formData)
        dispatch(createProduct(formData))
      })
      .catch((error) => {
        console.error('Error while getting form data:', error)
      })
  }

  const update = () => {
    getFormData()
      .then((formData) => {
        dispatch(createProduct(formData))
      })
      .catch((error) => {
        console.error('Error while getting form data:', error)
      })
  }

  const cancel = () => {
    dispatch(setModalProduct(false))
    cancelUploadImg()
    setMultipartFiles([])
    setName('')
    setPrice('')
    setQuantity('')
    setCategory('')
    setColor('')
    setSize('')
    setCountry('')
    setTopLength('')
    setSeason('')
    setStyle('')
    setShipFrom('')
    setPercent('')
    setDateStart('')
    setDateEnd('')
    setDescription('')
  }

  useEffect(() => {
    console.log('formData', Object.fromEntries(formData))
  }, [formData])

  return (
    <div className="fixed z-[60] h-full w-full bg-black/50 ">
      <div className="relative flex h-full items-center justify-center p-[5%]">
        <div className="relative flex h-full w-full rounded-xl bg-white p-8">
          <button onClick={cancel} className="absolute right-0 top-0 z-[70] flex aspect-square w-[40px] -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary hover:bg-primary_dark">
            <i className="fa-solid fa-xmark text-[28px] text-white" />
          </button>
          <div className="absolute bottom-0 left-0 h-10 w-full translate-y-1/2 px-8">
            <div className="flex h-full w-full justify-end gap-5">
              {isCreateProduct && (
                <button onClick={create} className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-green-500 capitalize text-white hover:bg-green-700">
                  create
                </button>
              )}
              {isUpdateProduct && (
                <button onClick={update} className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-yellow-500 capitalize text-white hover:bg-yellow-700">
                  Update
                </button>
              )}

              <button onClick={cancel} className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-rose-500 capitalize text-white hover:bg-rose-700">
                cancel
              </button>
            </div>
          </div>
          <form action="" className="flex h-full w-full justify-between gap-5 2xl:gap-8">
            <div className="group relative flex aspect-square h-full gap-10 rounded-xl bg-gray">
              <input className="hidden" id="multipartFiles" type="file" multiple onChange={uploadImg} />
              {!isUploadImg && (
                <label htmlFor="multipartFiles" className="absolute flex h-full w-full cursor-pointer items-center justify-center rounded-xl border-dashed border-black/50 group-hover:border-2">
                  <img className="aspect-square w-[240px] opacity-40" src={require('assets/images/add_image.png')} alt="add_image" />
                </label>
              )}
              {isUploadImg && (
                <div className="relative h-full w-full">
                  <button onClick={cancelUploadImg} className="absolute right-0 top-0 z-[70] flex aspect-square w-[32px] -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-black/50 hover:bg-black">
                    <i className="fa-solid fa-xmark text-[28px] text-white" />
                  </button>
                  <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-5 p-5">
                    {multipartFiles.map((file, index) => (
                      <PartImg key={index} file={file} index={index} removeImg={removeImg} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex h-full w-full flex-col gap-5 overflow-auto rounded-xl bg-gray p-5">
              <PartHeader>Info</PartHeader>

              <div className="flex flex-col gap-2">
                <PartItem>
                  <>Name</>
                  <input onChange={(event) => setName(event.target.value)} type="text" className="h-8 w-full rounded-lg pl-5" placeholder="Name" id="name" value={name} />
                </PartItem>
                <PartItem>
                  <>Price</>
                  <input onChange={(event) => setPrice(event.target.value)} type="text" className="h-8 w-full rounded-lg pl-5" placeholder="Price" id="price" value={price} />
                </PartItem>
                <PartItem>
                  <>Quantity</>
                  <input onChange={(event) => setQuantity(event.target.value)} type="text" className="h-8 w-full rounded-lg pl-5" placeholder="Quantity" id="quantity" value={quantity} />
                </PartItem>
                <PartItem>
                  <>Category</>
                  <Select onChange={(value) => setCategory(value)} options={categories.map((item) => ({ label: item, value: item }))} style={styleItem} />
                </PartItem>
                <PartItem>
                  <>Color</>
                  <Select onChange={(value) => setColor(value)} options={colors.map((item) => ({ label: item, value: item }))} style={styleItem} />
                </PartItem>
                <PartItem>
                  <>Size</>
                  <Select onChange={(value) => setSize(value)} options={sizes.map((item) => ({ label: item, value: item }))} style={styleItem} />
                </PartItem>
              </div>

              <PartHeader>More Info</PartHeader>

              <div className="flex flex-col gap-2">
                <PartItem>
                  <>Country</>
                  <Select onChange={(value) => setCountry(value)} options={countries.map((item) => ({ label: item, value: item }))} style={styleItem} />
                </PartItem>
                <PartItem>
                  <>Top Length</>
                  <Select onChange={(value) => setTopLength(value)} options={topLengths.map((item) => ({ label: item, value: item }))} style={styleItem} />
                </PartItem>
                <PartItem>
                  <>Season</>
                  <Select onChange={(value) => setSeason(value)} options={seasons.map((item) => ({ label: item, value: item }))} style={styleItem} />
                </PartItem>
                <PartItem>
                  <>Style</>
                  <Select onChange={(value) => setStyle(value)} options={styles.map((item) => ({ label: item, value: item }))} style={styleItem} />
                </PartItem>
                <PartItem>
                  <>Ship From</>
                  <Select onChange={(value) => setShipFrom(value)} options={shipForms.map((item) => ({ label: item, value: item }))} style={styleItem} />
                </PartItem>
              </div>

              <PartHeader>Discount</PartHeader>

              <div className="flex flex-col gap-5">
                <PartItem>
                  <>Percent</>
                  <div className="flex w-full gap-5">
                    <input id="percent" type="text" className="h-8 w-[100px] rounded-lg pl-5" placeholder="Percent" value={percent} onChange={handlePercentChange} />
                    <input id="percentbar" type="range" className="h-8 w-full rounded-lg pl-5" placeholder="Name" value={percentBar} onChange={handlePercentBarChange} />
                  </div>
                </PartItem>
                <PartItem>
                  <>Range</>
                  <RangePicker onChange={(value) => changeDate(value)} format="DD-MM-YYYY" style={styleItem} />
                </PartItem>
              </div>

              <PartHeader>Description</PartHeader>

              <textarea onChange={(event) => setDescription(event.target.value)} id="description" className="w-full shrink-0 !resize-none rounded-lg bg-white px-5 py-2 text-black/50 outline-none" rows="6"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
