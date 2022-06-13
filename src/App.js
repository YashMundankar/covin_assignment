import * as React from 'react';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import Card from './components/Card'

function App() {
  // let a=true;
  const [data, setdata] = useState([]);
  const [display, setdisplay] = useState(false);
  const [btn, setbtn] = useState('');
  let intial_state={"data":{id:0,email:"--",first_name:"--",last_name:"--",avatar:"#"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}
  const [singleUser, setsingleUser] = useState(intial_state);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res=>{
      return res.json();
      // console.log(res)
    }).then(data=>{
      console.log(data);
      setdata(data.data)
    })
    }, [])

    useEffect(() => {
      fetch(`https://reqres.in/api/users/${btn}`)
      .then(res=>{
        return res.json();
      }).then(data=>{
        // console.log(data);
        setsingleUser(data.data)
      })
      }, [btn])
  
  const handleClick=(id)=>{
    setbtn(id);
    setdisplay(true)
    // console.log(id)
  }
  return (
    <div className="App">
      <header className="App-header">
        {display&&<Card userData={singleUser}/>}
        {!display&&<h2>Click a button</h2>}
        <div className="btn_container">
            {
            data.map(d=>(
              <div key={d.id}>
                 <Button variant="contained" onClick={()=>{handleClick(d.id)}} style={{margin : '15px'}}>{d.id}</Button>
              </div>
            ))
            }
        
        </div>
      </header>
    </div>
  );
}

export default App;
