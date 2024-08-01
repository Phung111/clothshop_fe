import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setModalCreateVoucher } from 'slice/modalSlice'
import Button from 'components/Button'
import { DatePicker } from 'antd'
import moment from 'moment'
import ErrorText from 'components/ErrorText'
import { useForm, Controller } from 'react-hook-form'
import { createVoucher } from 'slice/otherSlice'

export default function ModalCreateVoucher() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.slice)
  const [price, setPrice] = useState('')
  const [percent, setPercent] = useState('')
  const [percentBar, setPercentBar] = useState('')

  const { RangePicker } = DatePicker

  const {
    register,
    handleSubmit,
    trigger,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors: errorsFE },
  } = useForm()

  const classItem = 'h-10 border border-black/20 p-3 rounded-[7px]'
  const cnError = 'border-red border-2'
  const cnNormal = 'border-black/20'

  const validatePriceAndPercent = () => {
    if ((price === '0' || price === '' || price === 0) && (percent === '0' || percent === '' || percent === 0)) {
      return false
    }
    return true
  }

  const handleCreateVoucher = (data) => {
    const isValid = validatePriceAndPercent()
    if (!isValid) {
      setError('price', { type: 'manual', message: 'Either price or percent is required' })
      setError('percent', { type: 'manual', message: 'Either price or percent is required' })

      return
    }
    dispatch(createVoucher(data))
  }

  const handleCloseModalCreateVoucher = () => {
    dispatch(setModalCreateVoucher(false))
  }

  const handlePriceChange = (event) => {
    const newValue = event.target.value
    setPrice(newValue)
    if (newValue !== '' && !/^[0-9]*$/.test(newValue)) {
      setError('price', { type: 'manual', message: 'Price must be a number' })
    } else {
      clearErrors('price')
      clearErrors('percent')
    }
    trigger('price')
  }

  const handlePercentChange = (event) => {
    const newValue = event.target.value
    setPercentBar(newValue)
    setPercent(newValue)
    if (newValue !== '' && (!/^[0-9]*$/.test(newValue) || newValue < 0 || newValue > 100)) {
      setError('percent', { type: 'manual', message: 'Percent must be a number between 0 and 100' })
    } else {
      clearErrors('price')
      clearErrors('percent')
    }
    trigger('percent')
  }

  const changeDate = (value) => {
    setValue('dateRange', value)
    trigger('dateRange')
    if (value) {
      let start = moment(value[0].$d).format('DD-MM-YYYY')
      let end = moment(value[1].$d).format('DD-MM-YYYY')
      setValue('dateStart', start)
      setValue('dateEnd', end)
    } else {
      setValue('dateStart', '')
      setValue('dateEnd', '')
    }
  }

  return (
    <>
      <div className="item fixed z-[100] flex h-full w-full items-center justify-center bg-black/50">
        <form onSubmit={handleSubmit(handleCreateVoucher)} action="#" className="w-[500px] rounded-sm bg-white p-8">
          <div className="flex h-full w-full flex-col gap-1">
            <h2 className="mb-3 text-2xl font-bold capitalize">create voucher</h2>
            <input
              {...register('quantity', {
                required: 'Quantity is required',
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Quantity must be a number',
                },
              })}
              className={`${classItem} ${errorsFE.quantity ? cnError : cnNormal}`}
              type="text"
              placeholder="Quantity"
              onBlur={() => trigger('quantity')}
            />
            <ErrorText>{errorsFE.quantity && errorsFE.quantity.message}</ErrorText>
            <input
              {...register('price', {
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'price must be a number',
                },
                // min: {
                //   value: 1000,
                //   message: 'Price must be at least 1000',
                // },
              })}
              value={price}
              onChange={handlePriceChange}
              type="text"
              className={`${classItem} ${errorsFE.price ? cnError : cnNormal}`}
              placeholder="Price"
              id="price"
            />
            <ErrorText>{errorsFE.price && errorsFE.price.message}</ErrorText>
            <div className="flex w-full gap-5">
              <input
                {...register('percent', {
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
                })}
                id="percent"
                type="number"
                className={`${classItem} w-[100px] ${errorsFE.percent ? cnError : cnNormal}`}
                placeholder="Percent"
                value={percent}
                onChange={handlePercentChange}
              />
              <input id="percentbar" type="range" className="h-8 w-full rounded-lg pl-5" placeholder="Name" value={percentBar} onChange={handlePercentChange} />
            </div>
            <ErrorText>{errorsFE.percent && errorsFE.percent.message}</ErrorText>

            <Controller
              rules={{
                required: 'Date is required',
                validate: {
                  validateDateRange: (dates) => {
                    if (!dates || dates.length !== 2) {
                      return 'Date is required'
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
              name="dateRange"
              control={control}
              render={({ field }) => <RangePicker {...field} className={`${classItem} ${errorsFE.dateRange ? cnError : cnNormal}`} format="DD-MM-YYYY" onChange={(value) => changeDate(value)} />}
            />
            <ErrorText>{errorsFE.dateRange && errorsFE.dateRange.message}</ErrorText>

            <div className="flex justify-end gap-3">
              <div className="h-9 w-[140px] overflow-hidden rounded-sm" onClick={handleCloseModalCreateVoucher}>
                <Button>cancel</Button>
              </div>
              <div className="h-9 w-[140px] overflow-hidden rounded-sm">
                <Button type={'solid'} submit={true}>
                  submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
