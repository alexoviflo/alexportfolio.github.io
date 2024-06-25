import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles} from '../styles'
import {EarthCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion'

//d-7v#cQ3P7mNta!
//service_v007onn
//DLt0esok7K7WCtnft

const Contact = () => {
  const formRef = useRef()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({...form, [name]: value})

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    //d-7v#cQ3P7mNta!
//service_v007onn
//DLt0esok7K7WCtnft


    emailjs.send(
      'service_v007onn',
      'template_ov5krba', {
        from_name: form.name,
        to_name: 'Alexander',
        from_email: form.email,
        to_email: 'alexander.roan12@gmail.com',
        message: form.message,
      },
      'DLt0esok7K7WCtnft'
    )
    .then(() => {
      setLoading(false);
      alert('Takk! Jeg kommer tilbake til deg');

      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      alert('noe gikk galt')
    })
    
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hiddem '>
        <motion.div variants={slideIn('left', "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>For å komme i kontakt med meg</p>
          <h3 className={styles.sectionHeadText}>Kontakt.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white  font-medium mb-4'>Ditt navn</span>
              <input type='text' name='name' value={form.name} onChange={handleChange} placeholder='Hva er ditt navn?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />

            </label>
            <label className='flex flex-col'>
              <span className='text-white  font-medium mb-4'>Din email</span>
              <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='Hva er din email?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />

            </label>
            <label className='flex flex-col'>
              <span className='text-white  font-medium mb-4'>Din beskjed</span>
              <textarea rows="7" name='message' value={form.message} onChange={handleChange} placeholder='Noe du vil si?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />

            </label>
            <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
              {loading ? 'sender...' : 'sendt'}
            </button>

          </form>
        </motion.div>
        <motion.div variants={slideIn('right', "tween", 0.2, 1)} 
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
            <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")