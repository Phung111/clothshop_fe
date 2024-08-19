import PartImg from './PartImg'
import PartItem from './PartItem'
import PartHeader from './PartHeader'
import moment from 'moment'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModalProduct } from 'slice/modalSlice'
import { createProduct, updateProduct, deleteProduct, emptyProduct } from 'slice/productSlice'
import { setArlert, setArlertIcon, setArlertTitle } from 'slice/baseSlice'
import { getProductPage } from 'slice/productPageSlice'
import Swal from 'sweetalert2'
import { useForm, FormProvider, useWatch } from 'react-hook-form'
import FormValidateInput from 'components/FormValidate/FormValidateInput'
import FormValidateSelect from 'components/FormValidate/FormValidateSelect'
import FormValidatePercentBar from 'components/FormValidate/FormValidatePercentBar'
import FormValidateDateRange from 'components/FormValidate/FormValidateDateRange'
import FormUploadImage from 'components/FormValidate/FormUploadImage'

export default function ModalProduct() {
  const dispatch = useDispatch()

  const modalSlice = useSelector((state) => state.modalSlice)
  const isCreateProduct = modalSlice.isCreateProduct
  const isUpdateProduct = modalSlice.isUpdateProduct

  const productSlice = useSelector((state) => state.productSlice)
  const product = productSlice.product

  const baseSlice = useSelector((state) => state.baseSlice)
  const collections = baseSlice.data.collections

  const colors = collections.colors
  const sizes = collections.sizes
  const categories = collections.categories
  const topLengths = collections.topLengths
  const countries = collections.countries
  const seasons = collections.seasons
  const styles = collections.styles
  const shipfroms = collections.shipfroms

  const create = (data) => {
    dispatch(createProduct(data))
      .unwrap()
      .then(() => {
        dispatch(getProductPage())
        cancel()
        dispatch(setArlertIcon('success'))
        dispatch(setArlertTitle('Create Product Successfully!'))
      })
      .catch((error) => {
        dispatch(setArlertIcon('error'))
        dispatch(setArlertTitle('Some thing wrong'))
      })
      .finally(() => {
        dispatch(setArlert(true))
      })
  }

  const update = (data) => {
    dispatch(updateProduct(data))
      .unwrap()
      .then(() => {
        dispatch(getProductPage())
        cancel()
        dispatch(setArlertIcon('success'))
        dispatch(setArlertTitle('Update Product Successfully!'))
      })
      .catch((error) => {
        dispatch(setArlertIcon('error'))
        dispatch(setArlertTitle('Some thing wrong'))
      })
      .finally(() => {
        dispatch(setArlert(true))
      })
  }

  const deleted = () => {
    Swal.fire({
      title: `Are you sure?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(product.id))
          .then(() => {
            dispatch(getProductPage())
            cancel()
            dispatch(setArlertIcon('success'))
            dispatch(setArlertTitle('Deleted Product Successfully!'))
          })
          .catch((error) => {
            dispatch(setArlertIcon('error'))
            dispatch(setArlertTitle('Some thing wrong'))
          })
          .finally(() => {
            dispatch(setArlert(true))
          })
      }
    })
  }

  function cancel() {
    dispatch(emptyProduct())
    dispatch(setModalProduct(false))
  }

  const methods = useForm({
    defaultValues: {
      name: '',
      price: '',
      quantity: '',
      category: '',
      color: '',
      size: '',
      country: '',
      topLength: '',
      season: '',
      style: '',
      shipsFrom: '',
      percent: '',
      dateStart: '',
      dateEnd: '',
      description: '',
      // multipartFiles: [],
    },
  })

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods

  const submitEditProduct = (data) => {
    if (isCreateProduct) {
      create(data)
    }
    if (isUpdateProduct) {
      update(data)
    }
  }

  useEffect(() => {
    if (product && Object.keys(product).length !== 0) {
      if (product.images) {
        product.images.forEach((element) => {
          const fileObjects = product.images.map((image) => {
            return fetch(image.fileUrl)
              .then((response) => response.blob())
              .then((blob) => new File([blob], `${image.fileName}.${image.fileType}`))
          })

          Promise.all(fileObjects).then((files) => {
            setValue('multipartFiles', files)
          })
        })
      }

      setValue('name', product.name || '')
      setValue('price', product.price || '')
      setValue('quantity', product.quantity || '')

      setValue('category', product.category || '')
      setValue('color', product.color || '')
      setValue('size', product.size || '')

      if (product.productDetail) {
        setValue('country', product.productDetail.country || '')
        setValue('topLength', product.productDetail.topLength || '')
        setValue('season', product.productDetail.season || '')
        setValue('style', product.productDetail.style || '')
        setValue('shipsFrom', product.productDetail.shipsFrom || '')
      }

      setValue('percent', product.discountResDTO ? product.discountResDTO.percent : '')
      setValue('dateStart', product.discountResDTO ? product.discountResDTO.dateStart : '')
      setValue('dateEnd', product.discountResDTO ? product.discountResDTO.dateEnd : '')

      if (product.decription) {
        setValue('description', product.decription || '')
      }
    }
  }, [product])

  return (
    <div className="fixed z-[60] h-full w-full bg-black/50 ">
      <div className="relative flex h-full items-center justify-center p-[5%]">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submitEditProduct)} className="relative flex h-full w-full rounded-xl bg-white p-8">
            <button onClick={cancel} className="absolute right-0 top-0 z-[70] flex aspect-square w-[40px] -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-primary hover:bg-primary_dark">
              <i className="fa-solid fa-xmark text-[28px] text-white" />
            </button>
            <div className="absolute bottom-0 left-0 h-10 w-full translate-y-1/2 px-8">
              <div className="flex h-full w-full justify-end gap-5">
                {isCreateProduct && <button className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-green-500 capitalize text-white hover:bg-green-700">create</button>}
                {isUpdateProduct && (
                  <button onClick={deleted} className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-red capitalize text-white hover:bg-rose-900">
                    delete
                  </button>
                )}
                {isUpdateProduct && <button className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-yellow-500 capitalize text-white hover:bg-yellow-700">Update</button>}

                <button onClick={cancel} className="flex h-[40px] w-[80px] items-center justify-center rounded-full bg-rose-500 capitalize text-white hover:bg-rose-700">
                  cancel
                </button>
              </div>
            </div>
            <div className="flex h-full w-full justify-between gap-5 2xl:gap-8">
              <FormUploadImage name="multipartFiles" />

              <div className="flex h-full w-full flex-col gap-5 overflow-auto rounded-xl bg-gray p-5">
                <PartHeader>Info</PartHeader>

                <div className="flex flex-col gap-2">
                  <PartItem>
                    <>name</>
                    <FormValidateInput
                      name="name"
                      validationRules={{
                        required: 'name is Required',
                        minLength: {
                          value: 5,
                          message: 'name need longer',
                        },
                      }}
                    />
                  </PartItem>

                  <PartItem>
                    <>price</>
                    <FormValidateInput
                      name="price"
                      validationRules={{
                        required: 'Price is required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'price must be a number',
                        },
                        min: {
                          value: 1000,
                          message: 'Price must be at least 1000',
                        },
                      }}
                    />
                  </PartItem>

                  <PartItem>
                    <>quantity</>
                    <FormValidateInput
                      name="quantity"
                      validationRules={{
                        required: 'quantity is required',
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'quantity must be a number',
                        },
                        minLength: {
                          value: 1,
                          message: 'quantity must be at least 1',
                        },
                      }}
                    />
                  </PartItem>

                  <PartItem>
                    <>category</>
                    {/* prettier-ignore */}
                    <FormValidateSelect 
                      name="category" 
                      validationRules={{ required: 'category is required' }} 
                      options={categories.map((item) => ({ label: item, value: item }))} 
                    />
                  </PartItem>

                  <PartItem>
                    <>color</>
                    {/* prettier-ignore */}
                    <FormValidateSelect 
                      name="color" 
                      validationRules={{ required: 'color is required' }} 
                      options={colors.map((item) => ({ label: item, value: item }))} 
                    />
                  </PartItem>

                  <PartItem>
                    <>size</>
                    {/* prettier-ignore */}
                    <FormValidateSelect 
                      name="size" 
                      validationRules={{ required: 'size is required' }} 
                      options={sizes.map((item) => ({ label: item, value: item }))} 
                    />
                  </PartItem>
                </div>

                <PartHeader>More Info</PartHeader>

                <div className="flex flex-col gap-2">
                  <PartItem>
                    <>country</>
                    {/* prettier-ignore */}
                    <FormValidateSelect 
                      name="country" 
                      validationRules={{ required: 'country is required' }} 
                      options={countries.map((item) => ({ label: item, value: item }))} 
                    />
                  </PartItem>

                  <PartItem>
                    <>topLength</>
                    {/* prettier-ignore */}
                    <FormValidateSelect 
                      name="topLength" 
                      validationRules={{ required: 'topLength is required' }} 
                      options={topLengths.map((item) => ({ label: item, value: item }))} 
                    />
                  </PartItem>

                  <PartItem>
                    <>season</>
                    {/* prettier-ignore */}
                    <FormValidateSelect 
                      name="season" 
                      validationRules={{ required: 'season is required' }} 
                      options={seasons.map((item) => ({ label: item, value: item }))} 
                    />
                  </PartItem>

                  <PartItem>
                    <>style</>
                    {/* prettier-ignore */}
                    <FormValidateSelect 
                      name="style" 
                      validationRules={{ required: 'style is required' }} 
                      options={styles.map((item) => ({ label: item, value: item }))} 
                    />
                  </PartItem>

                  <PartItem>
                    <>shipFrom</>
                    {/* prettier-ignore */}
                    <FormValidateSelect 
                      name="shipsFrom" 
                      validationRules={{ required: 'shipFrom is required' }} 
                      options={shipfroms.map((item) => ({ label: item, value: item }))} 
                    />
                  </PartItem>
                </div>

                <PartHeader>Discount</PartHeader>

                <div className="flex flex-col gap-5">
                  <PartItem>
                    <>percent</>
                    {/* prettier-ignore */}
                    <FormValidatePercentBar 
                      name="percent" 
                      validationRules={{
                        pattern: {
                          value: /^[0-9]*$/,
                          message: 'Percent must be a number',
                        },
                        min: {
                          value: 0,
                          message: 'Percent must be at least 0',
                        },
                        max: {
                          value: 100,
                          message: 'Percent must be at most 100',
                        },
                      }}
                    />
                  </PartItem>

                  <PartItem>
                    <>date</>
                    <FormValidateDateRange
                      name="dateRange"
                      validationRules={{
                        validate: {
                          validateDateRange: (dates) => {
                            if (!dates || dates.length === 0) {
                              return true
                            }

                            const [startDate, endDate] = dates
                            const today = moment().startOf('day')

                            if (startDate.isBefore(today)) {
                              return 'Start date must be today or later'
                            }

                            if (startDate.isAfter(endDate)) {
                              return 'Start date must be before or on the same day as end date'
                            }

                            return true
                          },
                        },
                      }}
                    />
                  </PartItem>
                </div>

                <PartHeader>Description</PartHeader>
                <textarea name="description" onChange={(event) => setValue('description', event.target.value)} id="description" className="w-full shrink-0 !resize-none rounded-lg bg-white px-5 py-2 text-black/50 outline-none" rows="6" />
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
