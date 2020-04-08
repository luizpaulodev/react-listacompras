import React from 'react'
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import CustomCard from '../../../common/CustomCard'
import ListFooter from '../ListFooter'
import ListItem from '../ListItem'

import './List.css'

function List ({ list, total }) {
  return (
    <CustomCard
      containerClass='list-container'
      link='/lista'
      footer={<ListFooter total={total} />}
    >
      <div>
        <p className='title'>{list}</p>
        <div className='list-card-body'>
          <ListItem icon={faShoppingBasket} text='1 Items(s) Restante' />
          <ListItem icon={faCheck} text='2 Items(s) Comprados' />
        </div>
      </div>
    </CustomCard>
  )
}

export default List
