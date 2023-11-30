import React from 'react';
import './App.css';
import Festivos from './components/Festivos/Festivos';
import Option from './components/Option/Option';

const sample = {
  date	:	20230101,
  localName	:	"Neujahr",
  name	:	"New Year's Day",
  countryCode	:	"AT",
  fixed	:	true,
  global	:	true,
  counties	:	null,
  launchYear	:	1967
}

const limit = 1;
function App() {
  const[listCryptos, setListCryptos] = React.useState([]);
  const[displayCryptos, setDisplayCryptos] = React.useState([]);
  const[search, setSearch] = React.useState("");

  const[page, setPage] = React.useState(1);
  const offSet = (page-1)*limit;

  const miInput = React.useRef(null);

  React.useEffect(()=>{
    if(miInput&& miInput.current){
      miInput.current.addEventListener('keyup', (e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
      })
    }
  },[])

  React.useEffect(()=>{
    const filteredData = listCryptos.filter((crypto) => {
      console.log(crypto.name, search)
      return crypto.name.toLowerCase().includes(search.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(search.toLowerCase())
    });
    setDisplayCryptos(filteredData);
  },[search])

  const fetchData = () => {
    fetch("https://date.nager.at/api/v3/publicholidays/2023/co")
      .then((response) => response.json())
      .then((dataJson) => {
        setListCryptos(dataJson);
        setDisplayCryptos(dataJson);
        console.log(dataJson)
      });
  }

  React.useEffect(()=> {
    fetchData();
  },[offSet])

  
  return (
    <div className="App">
      <h1>RONDON BOYACA</h1>
      {/* <input type="text" ref={miInput}/> */}
      <div className='texto-Mov'>
        <marquee className='texto-mov'>Disfruta de un viaje👍 -----​ En un festivo😮​ ----- El cual tu puedes elejir👇</marquee>
      </div>
      <div className='panel-principal'>
        <div className="box-festivos">
          {displayCryptos.map((crypto) => <Festivos 
                name={crypto.localName}
                fecha={crypto.date}
                nameEnglish={crypto.name}
                pais={crypto.countryCode}
              />
            )
          }
        </div>
        <Option></Option>
      </div>
      <div className='parrafo'> <div className='espacio-parrafo-uno'>Historia:</div>
        <div className='espacio-parrafo'>Fecha de fundación: 30 de junio de 1905</div>
        <div className='espacio-parrafo'>Nombre del/el fundador (es): Ignacio Arístides Medina Ávila “Presbítero”</div>
        <div className='espacio-parrafo'>Reseña histórica:</div>
        <div className='espacio-parrafo'>Con el nombre de la “Galera “fue en tiempos remotos conocido el territorio selvático que vino a constituir lo que hoy forma el Municipio de “San Rafael “. Esta porción de territorio fue rematada en público subasta por don Pedro González, quien el veintidós (22) de Agosto de 1846 la vendió a Sebastián Jaime y este a Valentín Vásquez, el 26 de febrero de 1853. A la muerte de Vásquez la heredaron sus seis hijos, quienes, subdividida, la vendieron a los actuales poseedores.
        Hasta esta fecha hallabas este inmenso territorio cubierto de selvas vírgenes, con excepción de unas quinientas fanegadas donde Valentín Vásquez tenía su habitación prados y plantíos; y solo a su muerte comenzó la tala y destrucción de las selvas. El territorio de “San Rafael “se ha poblado en su totalidad por emigrantes de las poblaciones vecinas de Ramiriquí, Ciénega, Viracachá y pesca. En la fatal reyerta política de los tres años—- 1900, 1901, 1902, los moradores de las veredas de Gacal, Galera, Porquera y Renanica, con recuentes con sus ideas de verdaderos católicos, empuñaron las armas en defensa del gobierno.
        El señor Doctor Medina, el Señor Ignacio Vásquez, el Señor Quevedo, la familia Soler y otros vecinos honorables de la Galera, como los Señores Peregrino Rojas, Luis F. Vásquez, Peregrino Vargas, etc., para que el corregimiento fuera elevado a la categoría del Municipio: Levantaron documentación a la Asamblea de 1904 y la Corporación expidió la Ordenanza No. 05 del 30 de Junio de 1904.</div>
      </div>
    </div>
  );
}

export default App;
