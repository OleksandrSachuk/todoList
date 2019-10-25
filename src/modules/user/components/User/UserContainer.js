import { compose } from 'redux';
import { connect } from 'react-redux';

import User from './User';

const mapStateToProps = (state) => ({
  userDetails: state.user.userDetails
});

const mapDispatchToProps = {};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(User);
