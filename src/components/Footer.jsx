import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className='bg-[#25252D] py-16 flex flex-col justify-center items-center rounded-tr-[100px] md:flex-row md:justify-around md:items-start md:pr-60'>
        <img src={logo} alt="" />
        <div className='flex flex-col text-center py-4 mt-12 md:mt-0'>
            <h1 className='text-white font-ubuntu text-lg font-medium pb-4'>Product</h1>
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>Overview</a>    
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>Pricing</a>
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>Marketplace</a>
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>Features</a>
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>Integration</a>
        </div>
        <div className='flex flex-col text-center py-4 mt-12 md:mt-0'>
            <h1 className='text-white font-ubuntu text-lg font-medium pb-4'>Company</h1>
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>About</a>    
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>Team</a>
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>Blog</a>
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>Careers</a>
        </div>
        <div className='flex flex-col text-center py-4 mt-12 md:mt-0'>
            <h1 className='text-white font-ubuntu text-lg font-medium pb-4'>Connect</h1>
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>Contact</a>    
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>Newsletter</a>
            <a className='text-gray-300 font-medium py-1 hover:underline' href='/'>LinkedIn</a>
        </div>
    </div>
  )
}

export default Footer