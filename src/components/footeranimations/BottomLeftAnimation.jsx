import { motion } from 'framer-motion'
import React from 'react'

const BottomLeftAnimation = () => {
    return (
        <div className='w-fit overflow-hidden'>


            <svg width="60" height="500">
                <path
                    d="M 56 179 L 56 -90 L -127 -212"
                    stroke="gray"
                    strokeWidth="2"
                    fill="transparent"
                />
            </svg>

        </div>
    )
}

export default BottomLeftAnimation