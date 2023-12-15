import React, { useContext } from 'react'
import { tableInfo } from './tableInfo'
import Top from './Top'
import { AuthContext } from '../../Provider';

const VesselParameter = ({close}) => {
    return (
        <div style={{
            backgroundColor: 'white',
            width: '1100px',
            height: '500px',
            borderRadius: '10px',
            position: 'absolute',
            zIndex: 1000,
        }}>
            <Top close={close}>Vessel Parameters</Top>
            <img src="./fish.svg" alt="" width={300} style={{
                position: 'absolute',
                top: 0,
                left: -100,
                zIndex: 1001,
            }} />
            <div style={{
                display: 'flex',
                gap: 6,
                padding: '10px 20px',
                marginTop: 20,
                height: '400px',
            }}>
                <div style={{
                    backgroundColor: '#EBEBEB',
                    height: '100%',
                    width: '150px',
                    borderRadius: '5px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    alignItems: 'center',
                    border: '1px solid #CBCBCB',
                }}>
                    <div style={{
                        height: '250px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 20,
                        fontWeight: 'bold',
                        color: '#17256E',
                    }}>
                        <div>Vassel Category</div>
                        <div>Vassel Speed (km)</div>
                        <div>Aversion</div>
                        <div>Number of Trips</div>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    gap: 10,
                }}>
                    <div style={{
                        padding: '10px 50px',
                        border: '1px solid #CBCBCB',
                        borderRadius: '5px',
                        backgroundColor: '#EBEBEB',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        height: '60px',
                    }}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 10,
                        }}>
                            <div style={{
                                fontWeight: 'bold',
                                color: '#17256E',
                            }}>Month</div>
                            <select placeholder='Select Month' style={{
                                backgroundColor: '#EBEBEB',
                                border: 'none',
                                width: '100px',
                                height: '80%',
                                borderRadius: '5px',
                            }}>
                                <option value="jan">Jan</option>
                                <option value="feb">Feb</option>
                                <option value="mar">Mar</option>
                                <option value="may">may</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                        </div>
                    </div>

                    <div style={{
                        padding: '10px 50px',
                        border: '1px solid #CBCBCB',
                        borderRadius: '5px',
                        backgroundColor: '#EBEBEB',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        height: '100%',
                    }}>
                        <table style={{
                            width: '100%',
                            height: '100%',
                            marginBottom: '10px',
                        }}>
                            <tr style={{
                                backgroundColor: 'white',
                            }}>
                                <th>Crew Transfer</th>
                                <th>Tugs</th>
                                <th>{'Support Vessel < 100m'}</th>
                                <th>Heavy Cargo</th>
                                <th>Cable Lay</th>
                                <th>Construction/Crane</th>
                            </tr>
                            {
                                tableInfo.map(row => (
                                    <tr>
                                        {
                                            row.map(cell => (
                                                <td>
                                                    <select placeholder='Select Month' style={{
                                                        backgroundColor: 'white',
                                                        border: 'none',
                                                        width: '100px',
                                                        height: '80%',
                                                        borderRadius: '5px',
                                                    }}>
                                                        {
                                                            cell.map(option => (
                                                                <option value={option}>{option}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>

            </div>

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
                }}>Select Animal Parameters</button>
            </div>
        </div>
    )
}

export default VesselParameter