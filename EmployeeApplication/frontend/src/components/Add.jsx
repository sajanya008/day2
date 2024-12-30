import React, { useEffect, useState } from 'react'
import {  TextField, Button, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Add = () => {
  
    
      var [input, setinput ] = useState({Name: "", Age: "", Department: "",Sal: ""})
      var navigate = useNavigate()

      var location = useLocation()
      console.log("a", location.state)

      const inputHandler = (e) => { 
        setinput({...input,[e.target.name]: e.target.value})
        console.log(input)

      }
      const addHandler = () => {
  if (location.state !==null){
    axios.post('http://localhost:3006/e', input)


  }
     a xios.put("http://localhost:3006/update/"+ location.state.val._id, input)
      .then((res) => {
        alert(res.data.message)
        navigate('/view')
      })
    }
    useEffect(()=>{
      if(location.state !== null)
      setinput({
    Name: location.state.val.Name,
    Age: location.state.val.Age,
    Department: location.state.val.Department,
    Sal: location.state.val.Sal
    })
  },[])
      return (
    <div>
        <Typography variant='h4'>DETAILS<br /></Typography>
            <TextField label="NAME" variant="filled" name='Name' value={input.Name}  onChange={inputHandler}/><br />
            <TextField label="AGE" variant="filled" name='Age' value={input.Age}  onChange={inputHandler}/><br />
            <TextField label="DEPARTMENT" variant="filled"  name='Department' value={input.Department}  onChange={inputHandler} /><br />
            <TextField label="SALARY" variant="outlined"  name='Sal' value={input.Sal}  onChange={inputHandler}/><br />
            <Button variant="contained" onClick={addHandler}>SUBMIT</Button>
        
      
    </div>
  )
}

export default Add
