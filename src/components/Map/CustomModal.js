import React, { useState } from 'react'
import SelectTool from './Components/SelectTool';

const Modal = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1000,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <SelectTool />
        </div>
    )
}

export default Modal
