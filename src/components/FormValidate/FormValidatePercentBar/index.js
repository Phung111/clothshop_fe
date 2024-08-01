import { useFormContext } from 'react-hook-form'
import ErrorText from 'components/ErrorText'

const FormValidatePercentBar = ({ name, validationRules }) => {
  const {
    register,
    setError,
    clearErrors,
    setValue,
    trigger,
    formState: { errors },
    watch,
  } = useFormContext()

  const percent = watch(name, '')

  const handlePercentChange = (event) => {
    const newValue = event.target.value
    setValue(name, newValue)
    if (newValue !== '' && (!/^[0-9]*$/.test(newValue) || newValue < 0 || newValue > 100)) {
      setError(name, { type: 'manual', message: 'Percent must be a number between 0 and 100' })
    } else {
      clearErrors(name)
    }
    trigger(name)
  }

  return (
    <>
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full gap-5">
          {/* prettier-ignore */}
          <input
            {...register(name, validationRules)}
            id={name}
            type="text"
            className={`input ${errors[name] ? 'error' : 'normal'}`} 
            placeholder="Percent"
            value={percent}
            onChange={handlePercentChange}
          />
          <input id={`${name}Bar`} type="range" className="h-8 w-full rounded-lg pl-5" value={percent} onChange={handlePercentChange} />
        </div>
        <ErrorText>{errors[name] && errors[name].message}</ErrorText>
      </div>
    </>
  )
}

export default FormValidatePercentBar
