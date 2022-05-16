import React from 'react'
import { Button, FormGroup } from '@mui/material'
import TextField from '@mui/material/TextField'

import { gql, useQuery } from '@apollo/client'

function PostCreate() {
  return (
    <>
      <h2>Page PostCreate</h2>
      <FormGroup>
        <p>
          <TextField label="Title" />
        </p>
        <p>
          <TextField label="Content" multiline minRows={4} maxRows={10} />
        </p>
        <p>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </p>
      </FormGroup>
    </>
  )
}

export default PostCreate
