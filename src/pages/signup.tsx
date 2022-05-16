import React from 'react'
import { Button, FormGroup } from '@mui/material'
import TextField from '@mui/material/TextField'

function Signup() {
  return (
    <>
      <h2>Page Signup</h2>
      <FormGroup>
        <p>
          <TextField label="Name" />
        </p>
        <p>
          <TextField label="Email" />
        </p>
        <p>
          <TextField label="Password" />
        </p>
        <p>
          <TextField label="Bio" />
        </p>
        <p>
          <Button type="submit" variant="contained">
            Signup
          </Button>
        </p>
      </FormGroup>
    </>
  )
}

export default Signup
