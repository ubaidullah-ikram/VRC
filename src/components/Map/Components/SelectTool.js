import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Provider';
import Top from './Top';
import VesselParameter from './VesselParameter';
import Transit from './Transit';
import Aggregator from './Aggregator';
import Query from './Query';

const SelectTool = () => {
    const { calculatorHandler } = useContext(AuthContext);
    const [selected, setSelected] = useState("transit")
    const [modalOpen, setModalOpen] = useState(false)
    const [queryModalOpen, setQueryModalOpen] = useState(false)
    const [infoModal, setInfoModal] = useState(false)
    return (
        <>
            <div style={{
                backgroundColor: 'white',
                width: '600px',
                height: '280px',
                borderRadius: '10px',
                position: 'relative',
            }}>
                <Top close={calculatorHandler}>Select Tool</Top>

                <div style={{
                    display: 'flex',
                }}>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 40,
                            width: '150px',
                            height: '240px',
                            borderRight: '1px solid #CBCBCB',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: selected === 'transit' ? '#25006f' : 'white',
                                padding: '10px 20px',
                                color: selected === 'transit' ? 'white' : 'black',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                            onClick={() => setSelected('transit')}
                        >Transit Monthly</div>
                        <div
                            style={{
                                backgroundColor: selected === 'wind' ? '#25006f' : 'white',
                                padding: '10px 20px',
                                color: selected === 'wind' ? 'white' : 'black',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                            onClick={() => setSelected('wind')}
                        >Wind Farm Daily</div>
                        <div
                            style={{
                                backgroundColor: selected === 'aggregator' ? '#25006f' : 'white',
                                padding: '10px 20px',
                                color: selected === 'aggregator' ? 'white' : 'black',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                            onClick={() => setSelected('aggregator')}
                        >Aggregator</div>
                    </div>

                    {(selected === "transit" || selected === "wind") && <Transit calculatorHandler={calculatorHandler} setModalOpen={setModalOpen} />}
                    {selected === "aggregator" && <Aggregator calculatorHandler={calculatorHandler} setQueryModalOpen={setQueryModalOpen} />}
                </div>

            </div>
            {
                modalOpen &&
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
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <VesselParameter close={() => setModalOpen(false)} />
                </div>
            }

            {
                queryModalOpen &&
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
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <Query close={() => setQueryModalOpen(false)} setInfoModal={setInfoModal} />
                </div>
            }

            {
                infoModal &&
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
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        width: '500px',
                        height: '180px',
                        borderRadius: '10px',
                        position: 'absolute',
                        zIndex: 1000,
                    }}>
                        <Top close={() => setInfoModal(false)}>Information</Top>

                        <div style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <div style={{ marginBottom: 20, fontSize: 15 }}>Proceding finished output aggregate filkes are in GUI workspace folder</div>
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
                                onClick={() => { calculatorHandler(); setInfoModal(false) }}>ok</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SelectTool