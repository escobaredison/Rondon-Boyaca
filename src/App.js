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
        <marquee><h3>Disfruta de un viaje👍 ----​ en un festivo😮​ ---- el cual tu puedes elejir👇</h3></marquee>
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
    </div>
  );
}

export default App;
