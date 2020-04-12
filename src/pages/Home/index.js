import Home from "./Home";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getListTotal } from "../../store/reducers/list";

const mapStateToProps = (state) => ({
  list: state.list,
  total: getListTotal(state),
});

export default connect(mapStateToProps, null)(Home);
