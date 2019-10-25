import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import styles from './styles';

const User = ({ classes, userDetails }) => (
    <div>
      <Avatar
        className={classes.avatar}
        alt={`${userDetails.firstName} ${userDetails.lastName}`}
        src=""
      />
      <div>{`${userDetails.firstName} ${userDetails.lastName}`}</div>
    </div>
  );

User.propTypes = {};

export default withStyles(styles)(User);
