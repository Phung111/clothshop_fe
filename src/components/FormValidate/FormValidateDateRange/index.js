import { useFormContext, Controller, useWatch } from 'react-hook-form'
import ErrorText from 'components/ErrorText'
import { DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import moment from 'moment'
const { RangePicker } = DatePicker

const FormValidateDateRange = ({ name, validationRules }) => {
  const {
    control,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext()

  const dateStart = useWatch({ name: 'dateStart' })
  const dateEnd = useWatch({ name: 'dateEnd' })

  const changeDate = (value) => {
    trigger(name)
    if (value) {
      // let start = moment(value[0])
      // let end = moment(value[1])
      let start = value[0]
      let end = value[1]
      setValue('dateStart', start)
      setValue('dateEnd', end)
    } else {
      setValue('dateStart', '')
      setValue('dateEnd', '')
    }
  }

  return (
    <div className="flex h-full w-full flex-col">
      {/* prettier-ignore */}
      <Controller 
        name={name} 
        control={control} 
        rules={validationRules} 
        render={({ field }) => 
          <RangePicker {...field} 
            className={`input ${errors[name] ? 'error' : 'normal'}`} 
            format="DD-MM-YYYY" 
            onChange={(value) => 
              changeDate(value)} 
              // value={dateStart && dateEnd ? [dateStart, dateEnd] : null} 
              // value={dateStart && dateEnd ? [moment(dateStart, 'DD-MM-YYYY'), moment(dateEnd, 'DD-MM-YYYY')] : null} 
              value={dateStart && dateEnd 
                ? [dayjs(dateStart), dayjs(dateEnd)] 
                : null}
            />
          } 
      />
      <ErrorText>{errors[name] && errors[name].message}</ErrorText>
    </div>
  )
}

export default FormValidateDateRange
