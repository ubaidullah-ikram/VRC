import React, { useContext } from 'react'
import Top from './Top'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FaQuestionCircle } from "react-icons/fa";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AuthContext } from '../../Provider';

const Query = ({ close, setInfoModal }) => {
    const { calculatorHandler } = useContext(AuthContext);
    return (
        <div style={{
            backgroundColor: 'white',
            width: '800px',
            height: '400px',
            borderRadius: '10px',
            position: 'absolute',
            zIndex: 1000,
        }}>
            <Top close={close}>Vessel Parameters</Top>

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
                }}>Select Project</div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: '20px',
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
            </div>

            <div style={{
                margin: '0px 50px',
                backgroundColor: 'black',
            }}>
                <hr />
            </div>


            <FormGroup style={{
                margin: '0px 50px',
            }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label={`Aggregate risk values for the month of for all Species for all scenarios to get total risk per month`} />
                <FormControlLabel control={<Checkbox />} label="Aggregate risk values species for all scenarios to get total risk per month of {} to get total risk per species" />
                <FormControlLabel control={<Checkbox />} label="Aggregate risk values for all scenarios in the selected project to get total risk per project" />
            </FormGroup>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                marginBottom: '20px',
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
                    onClick={close}>Cancel</button>
                <button style={{
                    backgroundColor: '#17256E',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '10px 20px',
                    marginBottom: '10px',
                    cursor: 'pointer',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
                    onClick={() => { close(); setInfoModal(true) }}
                >Run Aggregator</button>
            </div>
        </div>
    )
}

export default Query