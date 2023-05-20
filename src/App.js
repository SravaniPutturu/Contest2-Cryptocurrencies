import './App.css';
import React,{useEffect,useState} from 'react';
import TableRow from './TableRow';



function App() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const responce = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      
        const jsonData = await responce.json();
        setData(jsonData);
        console.log(jsonData)
      
      }catch(error){
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[]);


  return (

      <div>
        <h1>Top Ten Cryptocurrencies by Market Cap</h1>
        <table>
        <thead> 
          <th>Name</th>
          <th>ID</th>
          <th>Image</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Volume</th>
          
        </thead>
        <tbody>
          {
            data.map(item=>(
              <TableRow key={item.id} item={item} />
            ))
          }
        </tbody>
      </table>
      </div>
  );
}

export default App;
