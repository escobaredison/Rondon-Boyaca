import './Festivos.css';

const Festivos = (props) => {
    return (
        <div className='container-crypto'>
            <div className='header-crypto'>
                <p>DIA:<span className='price-crypto'> {props.name}</span></p>
                
                <p>FECHA:<span className='price-crypto'> {props.fecha}</span></p>
            </div>
            <div className='body-crypto'>
                {/* <p>{'Ranking: ' +props.rank}</p> */}
                <p>{props.nameEnglish}</p>
                <p>{'País: ' +props.pais}</p>
            </div>
        </div>
    )
};

export default Festivos;