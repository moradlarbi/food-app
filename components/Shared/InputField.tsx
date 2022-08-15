import React from 'react'
import { useField, ErrorMessage } from 'formik'
const InputField = ({type, label, ...props}) => {
    //const [field, meta] = useField(props)
    return (
        <div className='flex flex-col my-1 mb-3 w-1/2'>
            <div className='py-3 pl-5 w-full border-2 border-white/5 rounded-md flex justify-between items-center'>
                <input className='outline-none w-10/12 bg-transparent capitalize' {...props} type={type || "text"} placeholder={label} autoComplete='off' />
            </div>
            <div className='text-xs text-red-400 mt-1 ml-2'><ErrorMessage name={props.name} /></div>
        </div>
    )
}

export default InputField
