import React from 'react'

const AlertMessage = ({ Message }) => {
    return (
        <>
            <div className="bg-yellow-300 text-center w-full py-4 z-10 " style={{ marginTop: '89px' }}>
                <h1 className="font-semibold">
                    Now offering 35% off on JEE and NEET courses for Repeaters. Launch offer. <span className="text-purple-700">View packs</span>
                    {Message}
                </h1>
            </div>
        </>
    )
}

export default AlertMessage
