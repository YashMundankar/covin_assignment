import * as React from 'react';
import {useEffect } from 'react';
import Button from '@mui/material/Button';
import './App.css';
import Card from './components/Card'
import {useSelector , useDispatch} from "react-redux"
import {updateData,updateBtn,updateSingleUserData,displayAction} from  "./redux/actions/index"

function App() {
  const dataState=useSelector((state)=>state.DataReducer);
  const btnState=useSelector((state)=>state.BtnReducer);
  const displayState=useSelector((state)=>state.DisplayReducer);


  const dispatch=useDispatch();

  
  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res=>{
      return res.json();
    }).then(data=>{
      dispatch(updateData(data.data))

    })
    }, [])

    useEffect(() => {
      fetch(`https://reqres.in/api/users/${btnState}`)
      .then(res=>{
        return res.json();
      }).then(data=>{
        dispatch(updateSingleUserData(data.data))
      })
      }, [btnState])
  
  const handleClick=(id)=>{
    dispatch(updateBtn(id));
    dispatch(displayAction());
  }
  return (
    <div className="App">
      <header className="App-header">
        {displayState&&<Card/>}
        {!displayState&&<h2>Click a button</h2>}
        <div className="btn_container">
            {
            dataState.map(d=>(
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
