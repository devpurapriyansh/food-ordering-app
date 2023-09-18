import { defaultConfig } from 'next/dist/server/config-shared'
import react from 'react'

const Notification = () =>{
    return(
        <div className='h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer'>Free Delivery for all orders over Rs.299. Order your favourite products now</div>
    )
}

export default Notification;