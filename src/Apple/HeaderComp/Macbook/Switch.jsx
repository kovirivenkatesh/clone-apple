
import React from 'react'

const Switch = () => {
    return (
        <div className='bg-gray-100 pb-6' >
            <div className="pt-20 sm:pt-36 pl-6 sm:pl-16 flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap">
                <h1 className="text-4xl sm:text-5xl font-semibold mb-4 sm:mb-0">
                    Switch to Mac.
                </h1>
            </div>

            <div className='pt-4 sm:pt-20'>
                <div className="px-4 sm:px-16">
                    <div className="relative bg-white rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_8px_20px_rgba(0,0,0,0.06)]
                 border border-gray-100 snap-center w-full h-[500px] flex flex-col justify-center 
                 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1">

                        
                        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center px-6 sm:px-12 h-full">

                            
                            <div className="flex flex-col items-center sm:items-start">
                                <h1 className="font-semibold text-2xl sm:text-3xl mb-2">Mac does that.</h1>
                                <p className="text-gray-700 mb-4 text-xl">See how easy it is to switch to Mac.</p>
                                <button className="hover:underline text-blue-800 font-medium">
                                    Learn more <span className="ml-1 text-xl">&gt;</span>
                                </button>
                            </div>

                            
                            <div>
                                <img
                                    src="Images/Mac/Switch/switch.png"
                                    alt="Switch"
                                    className="h-[200px] sm:h-[250px] w-[400px] sm:w-[500px] object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Switch