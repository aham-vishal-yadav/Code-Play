import React from 'react'
import { Link } from "react-router-dom"
import About from './About'

function Info() {
    return (
        <div className='bg-accent-blue w-[100%] h-[100vh] flex flex-col  items-center' >
            <About />
        </div>
    )
}

export default Info
