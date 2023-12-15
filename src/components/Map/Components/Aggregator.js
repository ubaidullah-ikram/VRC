import React from 'react'
import { FaQuestionCircle } from "react-icons/fa";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Aggregator = ({ calculatorHandler, setQueryModalOpen }) => {
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
            }}>Select Zone</div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
            }}>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    size='small'
                    style={{
                        width: "180px"
                    }}
                >
                    <MenuItem value={10}>Transit Monthly</MenuItem>
                    <MenuItem value={20}>Wind Farm Daily</MenuItem>
                </Select>
                <Tooltip placement='right-start' title="Explanation will be inserted here...">
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
                }} onClick={() => setQueryModalOpen(true)}>Select Query</button>
            </div>
        </div>
    )
}

export default Aggregator