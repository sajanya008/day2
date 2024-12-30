import React, { useEffect } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow  } from '@mui/material'
import axios from 'axios'
import {  useState } from 'react'
import { useNavigate} from 'react-router-dom'

const View = () => {
    var[user, setuser] = useState([])
    var navigate= useNavigate()
    useEffect(()=>{
    axios.get("http://localhost:3006/view")
    .then((response) => {
        
        console.log=(response.data)
        setuser(response.data)
    })
})


const delvalue = (id) => {
axios.delete('http://localhost:3006/remove/' +id)
.then((res) => {
    alert(res.data.message)
    window.location.reload()
    })
}

    const upval  = (val) => {
        navigate("/add",{state: { val }})
    }
    
        
    

  return (
    <div>
        <TableContainer>
            <Table border="2">
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>AGE</TableCell>
                        <TableCell>DEPARTMENT</TableCell>
                        <TableCell>SALARY</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {user.map((val) => {
                return(
               <TableRow>
                <TableCell>{val.Name}</TableCell>
                <TableCell>{val.Age}</TableCell>
                <TableCell>{val.Department}</TableCell>
                <TableCell>{val.Sal}</TableCell>
                <TableCell>
                    <Button variant='contained'  color='secondary' onClick={() =>{delvalue(val._id)}}>Delete</Button>&nbsp;
                    <Button variant='contained' color='primary'  onClick={() =>{upval(val)}}>UPDATE</Button>
                </TableCell>
                </TableRow>
                )
            })}
        
                </TableBody>
            </Table>
        </TableContainer>
      
    </div>
  )
}


export default View
