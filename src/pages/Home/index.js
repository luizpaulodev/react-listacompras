import Home from './Home'
import { connect } from 'react-redux'

import {
  getListTotal,
  getOpenedItems,
  getClosedItems
} from '../../store/reducers/list'

const mapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
  openedItems: getOpenedItems(state),
  closedItems: getClosedItems(state)
})

export default connect(mapStateToProps, null)(Home)
