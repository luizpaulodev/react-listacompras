import React from 'react'
import { Checkbox, Typography } from '@material-ui/core'

import ListItemFooter from '../ListItemFooter'
import CustomCard from '../../../common/CustomCard'

function ListItem ({ item, deleteProduct, toggleProduct }) {
  return (
    <CustomCard
      link='#'
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
      containerClass='list-item'
      footer={<ListItemFooter item={item} deleteProduct={deleteProduct} />}
    >
      <div>
        <div className='list-item-header'>
          <Typography variant='subtitle1' component='h2'>
            {item.product}
          </Typography>
          <Checkbox
            onClick={() => toggleProduct(item.id)}
            checked={item.checked}
          />
        </div>

        <Typography component='p'>
          {item.quantity} {item.unit}
        </Typography>
        <Typography component='p'>R$ {item.price}</Typography>
      </div>
    </CustomCard>
  )
}

export default ListItem
