import React from 'react'

const Offers = () => {
    return (
        <div className="bg-white border-b border-gray-200 p-2">
            <div className="px-4 py-3 flex justify-center items-center text-center">
                <p className="text-gray-800 text-sm font-semibold">
                    Get up to 6 months of No Cost EMI<sup>§</sup> plus up to ₹10000.00 instant cashback<sup>§§</sup> on selected products with eligible cards.{' '}
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-500 hover:underline inline-flex items-center gap-1"
                    >
                        See offers
                        <span className="w-3 h-3 border border-blue-600 rounded-full flex items-center justify-center text-blue-600 text-xs font-semibold leading-none">
                            +
                        </span>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Offers