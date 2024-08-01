import { useFormContext } from 'react-hook-form'
import ErrorText from 'components/ErrorText'

const FormValidateInput = ({ name, validationRules }) => {
  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext()

  // const cnInput = 'h-10 w-full rounded-[8px] border-[0.5px] border-black/20 px-4 text-sm'
  // const cnError = 'border-red border-[1px]'
  // const cnNormal = 'border-black/20'

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const placeholder = capitalizeFirstLetter(name)

  return (
    <>
      <div className="flex h-full w-full flex-col">
        {/* prettier-ignore */}
        <input 
          {...register(name, validationRules)} 
          // className={`${cnInput} ${errors[name] ? cnError : cnNormal}`} 
          className={`input ${errors[name] ? 'error' : 'normal'}`} 
          onChange={(event) => setValue(name, event.target.value)} 
          onBlur={() => trigger(name)} 
          type="text" 
          placeholder={placeholder} 
          id={name} />
        <ErrorText>{errors[name] && errors[name].message}</ErrorText>
      </div>
    </>
  )
}

export default FormValidateInput
