import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { DatePicker } from 'antd'
import moment from 'moment'
import ErrorText from 'components/ErrorText'

const FormValidateDate = ({ name, validationRules }) => {
  const {
    control,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext()

  const cnInput = 'h-10 w-full rounded-[8px] border-[0.5px] border-black/20 px-4 text-sm'
  const cnError = 'border-red border-[1px]'
  const cnNormal = 'border-black/20'

  const handleDateChange = (date) => {
    setValue(name, date)
    trigger(name)
  }

  return (
    <>
      <div className="flex h-full w-full flex-col">
        {/* prettier-ignore */}
        <Controller
          name={name}
          control={control}
          rules={validationRules}
          render={({ field }) => (
            <DatePicker
              {...field}
              className={`${cnInput} ${errors[name] ? cnError : cnNormal}`}
              format="DD-MM-YYYY"
              onChange={(date) => handleDateChange(date)}
              value={field.value ? moment(field.value) : null}
            />
          )}
        />
        <ErrorText>{errors[name] && errors[name].message}</ErrorText>
      </div>
    </>
  )
}

export default FormValidateDate
