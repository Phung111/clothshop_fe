import { useFormContext, Controller, useWatch } from 'react-hook-form'
import moment from 'moment'
import ErrorText from 'components/ErrorText'
import { DatePicker } from 'antd'

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
    // setValue(name, value)
    trigger(name)
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
    <div className="flex h-full w-full flex-col">
      {/* prettier-ignore */}
      <Controller
        name={name}
        control={control}
        rules={validationRules}
        render = {({ field }) => 
          <RangePicker 
            {...field} 
            className={`input ${errors[name] ? 'error' : 'normal'}`} 
            format="DD-MM-YYYY" 
            onChange={(value) => changeDate(value)}
            value={dateStart && dateEnd ? [moment(dateStart, 'DD-MM-YYYY'), moment(dateEnd, 'DD-MM-YYYY')] : null}
          />
        }
      />
      <ErrorText>{errors[name] && errors[name].message}</ErrorText>
    </div>
  )
}

export default FormValidateDateRange
