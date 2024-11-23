import React from 'react'
import { FilimsData } from '../data/filims'
import { useTranslation } from 'react-i18next';
const Filims = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='bg-black container'>
        <div className=' space-x-5'>
            {
              FilimsData[i18n.language].map((item) =>{
               return <a href="#" className='border-r-2  text-lg text-white border-red-900 pr-3 py-1 hover:text-red-900 transition-all uppercase tracking-wider'>{item.title}</a>
              })
            }
        </div>
        <div className='bg-gray-600 w'>
            
        </div>
    </div>
  )
}

export default Filims