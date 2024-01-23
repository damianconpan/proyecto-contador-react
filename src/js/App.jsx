import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { FaClock } from 'react-icons/fa6'



const App = () => {
    const [nUno, setNUno] = useState(0);
    const [nDos, setNDos] = useState(0);
    const [nTres, setNTres] = useState(0);
    const [nCuatro, setNCuatro] = useState(0);
    const [nCinco, setNCinco] = useState(0);
    const [nSeis, setNSeis] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setNTres((prev) => (prev + 1) % 10);

            if (nTres === 9) {
                setNDos((prev) => (prev + 1) % 10);
                
                if (nDos === 9) {
                    setNUno((prev) => (prev + 1) % 10);

                    if (nUno === 9){
                        setNCuatro((prev) => (prev+1) % 10);

                        if (nCuatro === 9){
                            setNCinco((prev) => (prev+1) % 10);

                            if(nCinco === 9)
                            setNSeis((prev) => (prev+1) % 10);
                        }
                    }
                }
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [nUno, nDos, nTres, nCuatro, nCinco, nSeis]);

    return (
        <div className="contenedor">
            <div className="reloj"><FaClock /></div>
            <div className='nSeis'>{nSeis}</div>
            <div className="nCinco">{nCinco}</div>
            <div className="nCuatro">{nCuatro}</div>
            <div className="nUno">{nUno}</div>
            <div className="nDos">{nDos}</div>
            <div className="nTres">{nTres}</div>
        </div>
    );
};

export default App;
