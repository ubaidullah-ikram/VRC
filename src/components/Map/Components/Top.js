import React, { useContext } from 'react'
import { IoIosCloseCircle } from "react-icons/io";

const Top = ({ close, children }) => {
    return (
        <div style={{
            backgroundColor: '#CBCBCB',
            height: '35px',
            borderRadius: '10px 10px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#17256E',
            padding: '0 20px',
        }}>
            {children}
            <IoIosCloseCircle size={25} onClick={close} style={{cursor: "pointer"}} />
        </div>
    )
}

export default Top