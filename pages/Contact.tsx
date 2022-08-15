import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from "../styles/Contact.module.css"
import { Formik, Form, Field } from 'formik'
import InputField from '../components/Shared/InputField'
import * as Yup from "yup"
const Contact = () => {
    const validate = Yup.object({
        // name: Yup.string()
        //     .required("Name is required"),
        // email: Yup.string().email()
        //     .required("Email is required"),
    })
  return (
    <div className='px-4 md:px-[120px] w-full'>
        <Header />
        <div className=' flex md:flex-row flex-col py-8 mt-10 relative'>
            <div className=' flex flex-col pt-12 w-full md:w-1/2 pr-16'>
                <h1 className=' text-5xl mb-3'>Have a Question ?
                Get in Touch with us 👋</h1>
                <h3 className=' text-grey text-sm'>Fill up the Form  and ou team will get back to within 24 hrs</h3>
                <Formik
                initialValues={{
                    name: "",
                    email: '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    

                }}
                >
                    {formik => (
                        <div className='flex items-center flex-col py-6'>
                            <Form className='w-full'>
                                <div className='flex justify-between gap-2'>
                                    <InputField label="Name" name="name" type="text" />
                                    <InputField label="Email" name="email" type="email" />
                                </div>
                                <textarea className=' bg-transparent w-full outline-none py-3 pl-5 border-2 border-white/5 capitalize rounded-md' placeholder="message"></textarea>
                                <button className={styles.btn+' outline-none flex bg-secondary w-fit px-6 py-3 mt-3 rounded-sm items-center font-semibold text-base mb-10 duration-200 hover:text-secondary hover:bg-primary '}>Send Message <img src='/assets/arrow.svg' alt='arrow' className=' pl-2 w-8 h-8'></img> </button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
            <div className=' flex relative z-10'>
                <img src='/assets/contact1.png' alt='coffe image' className=' md:w-60 w-2/5 md:h-story mr-16 md:mt-24'></img>
                <img src='/assets/contact2.png' alt='coffe image' className=' md:w-60 w-2/5 md:h-story md:mt-8'></img>
            </div>
      </div>
        <Footer />
    </div>
  )
}

export default Contact