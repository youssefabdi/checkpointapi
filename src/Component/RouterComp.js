import axios from 'axios';
import {useEffect, useState} from 'react';

import { Routes,Route } from 'react-router-dom';
import App from '../App.js'
import Detaill from './Detaill.js'

const RouterComp = () =>
{
      const [users, setUsers] = useState([]);


  const getDataUsers = async () =>
{
  try
  {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    )
    setUsers( data )
  } catch ( err )
  {
  console.log(err)}
}

  useEffect( () => { getDataUsers() }, [] )

  return (
    <div>
      
      <Routes>
        <Route path='/' element={ <App users={users} /> } />
        <Route path='/:idd' element={ <Detaill users={users} /> } />

      </Routes>
    </div>
  )
}

export default RouterComp