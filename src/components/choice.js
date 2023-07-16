import React from 'react'
import { Link } from 'react-router-dom'
import { setToast } from '../hooks/hooks';

function Choice() {

    function copyText(entryText) {
        navigator.clipboard.writeText(entryText);
        setToast("Copied the Room id to the clipboard", "success")
    }

    return (
        <div
            className="h-screen w-full flex flex-col justify-center items-center"
            style={{
                background: 'linear-gradient(to right, #1D2671, #C33764)',
                /* fallback for old browsers */
                background: '-webkit-linear-gradient(to right, #1D2671, #C33764)',
                /* Chrome 10-25, Safari 5.1-6 */
                background: 'linear-gradient(to right, #1D2671, #C33764)',
                /* W3 IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }}
        >
            <div className="text-center flex flex-col">
                <div className="text-center flex flex-col items-center">
                    <div className="text-3xl hover:text-green cursor-pointer">Welcome to Code Play</div>
                    <div>
                        <button className="bg-lime hover:bg-blue-700 mr-4 ml-4 text-black font-bold py-2 px-4 mt-5 outline-none rounded">
                            <Link to="/play">Start a Portal</Link>
                        </button>
                        <button className="bg-lime hover:bg-blue-700 mr-4 ml-4 text-black font-bold py-2 px-4 mt-5 outline-none rounded">
                            <Link to="/join">Join a Portal</Link>
                        </button>
                    </div>
                </div>
                <div className="h-[40vh] flex w-[60%] items-center mt-2 justify-center">
                    <Link to="/info" className="flex items-center justify-center ml-40 mt-30 mr-0 py-2 bg-purple  px-4 hover:bg-blue-700 border border-blue-700 rounded">
                        <button className="flex items-center text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="flex items-center justify-between ml-1">Click</div>
                        </button>
                    </Link>
                </div>
                <div className="align-text-bottom mb-4">
                    Created By{" "}
                    <button className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 hover:bg-blue-700 mr-4 ml-4 text-white font-bold py-2 px-4 mt-5 border border-blue-700 rounded">
                        <a href="https://github.com/aham-vishal-yadav" className="no-underline hover:text-[#F2F6F8] hover:font-bold" target="_blank">
                            Vishal
                        </a>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Choice
