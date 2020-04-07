import React from 'react'
import { Checkbox, Typography } from '@material-ui/core'

import ListItemFooter from '../ListItemFooter'
import CustomCard from '../../../common/CustomCard'

function ListItem () {
  return (
    <CustomCard
      link='#'
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG'
      containerClass='list-item'
      footer={<ListItemFooter />}
    >
      <div>
        <div className='list-item-header'>
          <Typography variant='subtitle1' component='h2'>
            Café
          </Typography>
          <Checkbox />
        </div>

        <Typography component='p'>1 Unidade</Typography>
        <Typography component='p'>R$ 10.00</Typography>
      </div>
    </CustomCard>
  )
}

export default ListItem
