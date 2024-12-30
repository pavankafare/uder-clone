import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (<div className="">
        <div className="bg-cover bg-current bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400">
            <img className='w-16  ml-8 left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

            <div className="bg-white py-5  pb-7 px-10">
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to="/login" className='w-full inline-block text-center bg-black text-white py-3 rounded mt-5'>Contine</Link>
            </div>
        </div>
    </div>
    )
}

export default Start