import Home from "./Home";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  getListTotal,
  getOpenedItems,
  getClosedItems,
} from "../../store/reducers/list";

import { Creators as ListActions } from "../../store/actions/list";

const mapStateToProps = (state) => ({
  list: state.list,
  total: getListTotal(state),
  openedItems: getOpenedItems(state),
  closedItems: getClosedItems(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
