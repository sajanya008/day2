import React from 'react'
import { AppBar, Toolbar, Button,  Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar color='success'>
        <Toolbar>
            <Typography variant='h5'>Employee Details</Typography>&nbsp;&nbsp;
            <Link to='/add'>
            <Button variant='contained' color='warning'>ADD</Button>
            </Link>&nbsp;&nbsp;
            <Link to='/view'>
            <Button variant='contained' color='warning'>VIEW</Button>
            </Link>&nbsp;&nbsp;
            
        </Toolbar>
      </AppBar><br></br><br></br>
    </div>
  )
}

export default NavBar
