import './Option.css';
import { Link } from 'react-router-dom';

const Option = () => {
    return (
        <div className='seleccion'>
            <Link  to="/lugar">
                <button className='select-buton'>Atractivos turísticos de la región</button>
            </Link>
            <Link  to="/eventos">
                <button className='select-buton'>Espectáculos en la zona</button>
            </Link>
            <Link  to="/comida">
                <button className='select-buton'>Comidas típicas del lugar</button>
            </Link>
            <Link  to="/hoteles">
                <button className='select-buton'>Hospedaje</button>
            </Link>

            <a className='link-video' href="https://www.youtube.com/watch?v=RCZbSg3Y8-Q&ab_channel=CulturaYTurismoDeBoyac%C3%A1YCundinamarca" target="_blank">
                <b>VER VIDEO</b>
                <img src="https://static.vecteezy.com/system/resources/previews/010/147/868/non_2x/video-camera-icon-sign-design-free-png.png" width={50} height={50}/>
            </a>
        </div>
    )
};

export default Option;