import React, { useEffect, useRef, useState } from 'react';
import './Comida.css';
import data from './dataComida.js';
import { Link } from 'react-router-dom';

const Comida = () => {
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
            <h1>Comidas típicas del lugar</h1>
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
                </div>
            </div>
            <Link className='return-menu' to="/">
                <button className='select-buton'>MENU</button>
            </Link>
            <div className='parrafo'> 
                <div className='espacio-parrafo-uno'>Ecología:</div>
                <div className='espacio-parrafo'>Debido a la ubicación del Departamento de Boyacá en la región Andina y por sus características propias de topografía y altitud, le corresponde una variedad climática con las siguientes variaciones en precipitación, temperaturas y vientos, lo cual de alguna manera se refleja en la vegetación natural, expresión típica del clima de una región.</div>
                <div className='espacio-parrafo-uno'>Economía:</div>
                <div className='espacio-parrafo'>La producción agrícola y la ganadería son la base de la economía del municipio de Rondón, destacándose entre otros la producción de lulo, la caña de azúcar, café, plátano, naranja, yuca, arracacha, fríjol, arveja, aguacate, guayaba, chirimoya, guanábana, papa, haba, maíz, ibias, arveja, fríjol, rubas, nabos.</div>
            </div>
        </div>
    )
};

export default Comida;