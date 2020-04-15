import NewItem from "./NewItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as FormActions } from "../../../store/actions/form";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FormActions, dispatch);

export default connect(null, mapDispatchToProps)(NewItem);
