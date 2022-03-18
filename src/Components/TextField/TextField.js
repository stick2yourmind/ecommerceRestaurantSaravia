import { useField, ErrorMessage } from 'formik';
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className='TextFieldContainer'>
        {/* <label className='labelField' htmlFor={field.name}>{label}</label> */}
        <input className={`textField ${meta.touched && meta.error ? 'isInvalid' : ''} `} 
            {...field} {...props} />
        <ErrorMessage className='errorField' name={field.name} component="div" />
    </div>
  )
}
