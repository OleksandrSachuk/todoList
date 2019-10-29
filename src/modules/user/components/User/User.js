import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import AvatarImage from '../../../../assets/img/Sachuk.jpg';
import styles from './styles';

const User = ({ classes, userDetails }) => (
    <div className={classes.user}>
      <Avatar
        className={classes.avatar}
        alt={`${userDetails.firstName} ${userDetails.lastName}`}
        src={AvatarImage}
      />
      <div className={classes.userName}>{`${userDetails.firstName} ${userDetails.lastName}`}</div>
    </div>
  );

User.propTypes = {
  classes: PropTypes.object.isRequired,
  userDetails: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  })
};

User.defaultProps = {
  userDetails: {
    firstName: '',
    lastName: '',
  }
};

export default withStyles(styles)(User);
