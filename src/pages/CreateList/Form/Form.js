import React, { Component } from 'react'
import {
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  Select,
  InputLabel,
  FormControl
} from '@material-ui/core'

const units = ['kilos', 'litros', 'unidades']

class Form extends Component {
  state = {
    list: '',
    product: '',
    quantity: '',
    unit: '',
    price: '',
    showErrors: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    const { list, product, quantity, unit, price, showErrors } = this.state

    console.log(list && showErrors === '')

    if (!list || !product || !quantity || !unit) {
      this.setState({ showErrors: true })
    } else {
      this.props.addProduct({ list, product, quantity, unit, price }, list)

      this.setState({
        product: '',
        quantity: '',
        unit: '',
        price: '',
        showErrors: false
      })
    }
  }

  render () {
    return (
      <form className='form-container'>
        <div className='form-row'>
          <TextField
            label='Lista'
            name='list'
            value={this.state.list}
            onChange={this.handleChange}
            error={this.state.list === '' && this.state.showErrors}
            required
          />

          <Button
            variant='outlined'
            color='secondary'
            onClick={this.handleSubmit}
          >
            Adicionar
          </Button>
        </div>

        <div className='form-row'>
          <TextField
            label='Produto'
            name='product'
            value={this.state.product}
            onChange={this.handleChange}
            error={this.state.product === '' && this.state.showErrors}
            required
          />
          <TextField
            label='Quantidade'
            name='quantity'
            value={this.state.quantity}
            onChange={this.handleChange}
            error={this.state.quantity === '' && this.state.showErrors}
            required
          />
          <FormControl>
            <InputLabel id='unit'>Unidade</InputLabel>
            <Select
              id='unit'
              name='unit'
              value={this.state.unit}
              onChange={this.handleChange}
              error={this.state.unit === '' && this.state.showErrors}
              required
            >
              {units.map(option => (
                <MenuItem value={option}>{option}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label='Preço'
            name='price'
            value={this.state.price}
            onChange={this.handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>R$</InputAdornment>
              )
            }}
          />
        </div>
      </form>
    )
  }
}

export default Form
