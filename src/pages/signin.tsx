import React from 'react'
import { Button, FormGroup } from '@mui/material'
import TextField from '@mui/material/TextField'

function Signin() {
  return (
    <>
      <h2>Page Signin</h2>
      <FormGroup>
        <p>
          <TextField label="Email" />
        </p>
        <p>
          <TextField label="Password" />
        </p>
        <p>
          <Button type="submit" variant="contained">
            Signin
          </Button>
        </p>
      </FormGroup>
    </>
  )
}

export default Signin
