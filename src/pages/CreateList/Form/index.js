import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as FormActions } from "../../../store/actions/form";
import Form from "./Form";

const mapStateToProps = (state, ownProps) => ({
  form: state.form,
  showForm: state.form.action || ownProps.url === "novo",
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FormActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
