import React from 'react'
import { useTranslation } from "react-i18next";

const Hero = () => {
    const {t} = useTranslation()
  return (
    <div className='relative'>
        <img src="https://gega-project.netlify.app/images/batman.jpg" alt="batman" className='w-full ' />
        <div className='bg-custom-gradient absolute bottom-0 w-full pb-20 container space-y-4' >
            <h2 className='text-[#f4a443] text-2xl'>{t("content")}</h2>
            <h4 className='text-white text-5xl'>{t("name")}</h4>
            <p className='text-md max-w-[60%] text-white' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam tempore accusamus illum commodi ipsum quasi officia mollitia esse optio?</p>
        </div>
    </div>
  )
}

export default Hero