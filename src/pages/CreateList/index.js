import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CreateList from "./CreateList";
import { Creators as ListActions } from "../../store/actions/list";

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
