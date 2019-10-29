import { connect } from 'react-redux';

import User from './User';
import {userDetailsSelector } from '../../selectors';

const mapStateToProps = (state) => ({
  userDetails: userDetailsSelector(state)
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(User);
