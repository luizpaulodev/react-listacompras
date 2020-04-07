import React from 'react'
import { TextField, MenuItem, InputAdornment, Button } from '@material-ui/core'

const units = ['kg', 'lt', 'un']

function Form () {
  return (
    <form className='form-container'>
      <div className='form-row'>
        <TextField
          label='Lista'
          name='list'
          value={''}
          onChange={() => {}}
          required
        />

        <Button variant='outlined' color='secondary'>
          Adicionar
        </Button>
      </div>

      <div className='form-row'>
        <TextField
          label='Produto'
          name='product'
          value={''}
          onChange={() => {}}
          required
        />
        <TextField
          label='Quantidade'
          name='quantity'
          value={''}
          onChange={() => {}}
          required
        />
        <TextField
          style={{ width: '100px' }}
          select
          label='Unidade'
          name='unity'
          value={''}
          onChange={() => {}}
          required
        >
          {units.map(option => (
            <MenuItem key={option}>{option}</MenuItem>
          ))}
        </TextField>
        <TextField
          label='Preço'
          name='price'
          value={''}
          onChange={() => {}}
          InputProps={{
            startAdornment: <InputAdornment position='start'>R$</InputAdornment>
          }}
        />
      </div>
    </form>
  )
}

export default Form
