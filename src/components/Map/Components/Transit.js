import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { FaQuestionCircle } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Transit = ({ calculatorHandler, setModalOpen }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            gap: 10,
        }}>
            <div style={{
                padding: '10px 50px',
                fontWeight: 'bold',
                color: '#17256E',
                fontSize: 15,
                textAlign: 'center',
                marginTop: 20,
            }}>Enter Project Name</div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
            }}>
                <TextField variant="filled" size='small' style={{
                    width: '180px',
                }} />
                <Tooltip placement='right-start' title="Enter the project name so that it can be easily found among the layers">
                    <IconButton>
                        <FaQuestionCircle size={22} />
                    </IconButton>
                </Tooltip>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 50,
                marginTop: '40px',
            }}>
                <button style={{
                    backgroundColor: '#CBCBCB',
                    color: 'black',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    marginBottom: '10px',
                    cursor: 'pointer',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
                    onClick={calculatorHandler}>Cancel</button>
                <button style={{
                    backgroundColor: '#17256E',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    marginBottom: '10px',
                    cursor: 'pointer',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }} onClick={() => setModalOpen(true)}>Select Animal Parameters</button>
            </div>
        </div>
    )
}

export default Transit