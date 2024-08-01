import { useFormContext, useWatch } from 'react-hook-form'
import ErrorText from 'components/ErrorText'
import { Select } from 'antd'

const FormValidateSelect = ({ name, validationRules, options }) => {
  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext()

  const selectedValue = useWatch({ name })

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const placeholder = capitalizeFirstLetter(name)

  return (
    <>
      <div className="flex h-full w-full flex-col">
        {/* prettier-ignore */}
        <Select
          {...register(name, validationRules)}
          onChange={(value) => {
              setValue(name, value, { shouldValidate: true })
              trigger(name)
            }}
          className={`input !p-0 ${errors[name] ? 'error' : 'normal'}`} 
          placeholder={placeholder}
          options={options}
          value={selectedValue} // Thiết lập giá trị mặc định
        />
        <ErrorText>{errors[name] && errors[name].message}</ErrorText>
      </div>
    </>
  )
}

export default FormValidateSelect
