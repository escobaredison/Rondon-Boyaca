import React, { useEffect, useRef, useState } from 'react';
import './Visit.css';
import data from './dataLugar.js';
import { Link } from 'react-router-dom';

const Visit = () => {
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
            <h1>Atractivos turísticos de la región</h1>
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
                    <Link className='return-menu' to="/">
                        <button className='select-buton'>MENU</button>
                    </Link>
                    <div className='parrafo'> 
                        <div className='espacio-parrafo-uno'>Geografía:</div>
                        <div className='espacio-parrafo'>Rondón tradicionalmente sigue ostentando sus linderos declarados en la ordenanza 05 de 1904 y los incorporados mediante el Decreto Eclesiástico 122 de 1920, por el cual fue creada la parroquia de San Rafael, hoy Rondón. El municipio de Rondón está dividido en 12 veredas que son: Centro, Bolívar, Sucre, Nueva Granada, Junín, Junín Vásquez, San José, San Antonio, San Isidro, Nariño, Ricaurte y San Ignacio.</div>
                        <div className='espacio-parrafo-uno'>Límites del municipio:</div>
                        <div className='espacio-parrafo'>Por el Norte : Viracachá y Siachoque</div>
                        <div className='espacio-parrafo'>Por el sur : Zetaquira y Ramiriquí</div>
                        <div className='espacio-parrafo'>Por el oriente : Pesca</div>
                        <div className='espacio-parrafo'>Por el occidente : Ramiriquí y Ciénega</div>
                        <div className='espacio-parrafo'>Extensión total: 258 Km2</div>
                        <div className='espacio-parrafo'>Extensión área urbana: 0.8 Km2</div>
                        <div className='espacio-parrafo'>Extensión área rural: 257.2 Km2</div>
                        <div className='espacio-parrafo'>Altitud de la cabecera municipal (metros sobre el nivel del mar):  2075</div>
                        <div className='espacio-parrafo'>Temperatura media:  17º C</div>
                        <div className='espacio-parrafo'>Distancia de referencia:  61 km de la capital del Departamento</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Visit;