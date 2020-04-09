import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListItemFooter from "./ListItemFooter";
import { Creators as FormActions } from "../../../store/actions/form";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FormActions, dispatch);

export default connect(null, mapDispatchToProps)(ListItemFooter);
