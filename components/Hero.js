import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="text-center bg-white pb-10">
            <div className='w-60 mx-auto'>
                <Image src={"/home_cinema.png"} width={150} height={150} layout="responsive" />
                <h1 className="text-xs text-gray-700 uppercase font-bold ">Welcome to WatchMe</h1>
                <p className="text-gray-500 whitespace-nowrap text-center">Produce FILM feature.</p>
                <Link href="/contact">
                 <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-1">CONTACT US</button>
                </Link>
               
               
            </div>
        </div>
    )
}

export default Hero