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
                    <div>Historia:
                        Fecha de fundación: 30 de junio de 1905
                        Nombre del/el fundador (es): Ignacio Arístides Medina Ávila “Presbítero”
                        Reseña histórica:
                        Con el nombre de la “Galera “fue en tiempos remotos conocido el territorio selvático que vino a constituir lo que hoy forma el Municipio de “San Rafael “. Esta porción de territorio fue rematada en público subasta por don Pedro González, quien el veintidós (22) de Agosto de 1846 la vendió a Sebastián Jaime y este a Valentín Vásquez, el 26 de febrero de 1853. A la muerte de Vásquez la heredaron sus seis hijos, quienes, subdividida, la vendieron a los actuales poseedores.
                        Hasta esta fecha hallabas este inmenso territorio cubierto de selvas vírgenes, con excepción de unas quinientas fanegadas donde Valentín Vásquez tenía su habitación prados y plantíos; y solo a su muerte comenzó la tala y destrucción de las selvas. El territorio de “San Rafael “se ha poblado en su totalidad por emigrantes de las poblaciones vecinas de Ramiriquí, Ciénega, Viracachá y pesca. En la fatal reyerta política de los tres años—- 1900, 1901, 1902, los moradores de las veredas de Gacal, Galera, Porquera y Renanica, con recuentes con sus ideas de verdaderos católicos, empuñaron las armas en defensa del gobierno.
                        El señor Doctor Medina, el Señor Ignacio Vásquez, el Señor Quevedo, la familia Soler y otros vecinos honorables de la Galera, como los Señores Peregrino Rojas, Luis F. Vásquez, Peregrino Vargas, etc., para que el corregimiento fuera elevado a la categoría del Municipio: Levantaron documentación a la Asamblea de 1904 y la Corporación expidió la Ordenanza No. 05 del 30 de Junio de 1904.
                    </div>
                    <Link className='return-menu' to="/">
                        <button className='select-buton'>MENU</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Visit;