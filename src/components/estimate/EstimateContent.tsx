import { useTranslation } from 'next-i18next'
import React from 'react'
import ContactForm from '../utils/ContactForm'
import AutoEstimate from '../utils/AutoEstimate'

function EstimateContent() {
  return (
    <main >
      <div className='block sm:flex md:justify-center'>
        <AutoEstimate></AutoEstimate>
        <ContactForm></ContactForm>
      </div>
    </main>
  )
}

export default EstimateContent