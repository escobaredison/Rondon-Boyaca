import React, { useEffect, useRef, useState } from 'react';
import './Eventos.css';
import data from './dataEvento.js';
import { Link } from 'react-router-dom';

const Eventos = (props) => {
    const listRef = useRef();
    const [currentIndex, setcurrentIndex] = useState(0);
    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [currentIndex])

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setcurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr -1
            })
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            if (!isLastSlide) {
                setcurrentIndex(curr => curr + 1);
            }
        }
    }
    const goToSlide = (slideIndex) => {
        setcurrentIndex(slideIndex);
    }

    return (
        <div>
            <h1>Espectáculos en la zona</h1>
            <div className='main-conteiner'>
                <div className='slide'>
                    <div className='boton-left' onClick={() => scrollToImage('prev')}>&#10092;​</div>
                    <div className='boton-rigth' onClick={() => scrollToImage('next')}>&#10093;​</div>
                    <div className='con-imagen'>
                        <ul ref={listRef}>
                            {
                                data.map((item) => {
                                    return <li key={item.id}>
                                        <img src={item.imgUrl} width={500} height={280}></img>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className='punto-imagn'>
                        {
                            data.map((_, idx) => (
                                <div key={idx} className={`punto-item ${idx === currentIndex ? "activo" : ""}`} onClick = {() => goToSlide(idx)}>
                                    &#9865;
                                </div>
                            ))
                        }
                    </div>
                    <div className='box-evento'>
                        <Link  to="/eventos/brujas">
                            <button className='select-buton'>HALLOWEEN</button>
                        </Link>
                        <Link  to="/eventos/santa">
                            <button className='select-buton'>SEMANA SANTA</button>
                        </Link>
                        <Link  to="/eventos/navidad">
                            <button className='select-buton'>NAVIDAD</button>
                        </Link>
                    </div>
                    <Link className='return-menu' to="/">
                        <button className='select-buton'>MENU</button>
                    </Link>
                </div>
            </div>
        </div>   
    )
};

export default Eventos;