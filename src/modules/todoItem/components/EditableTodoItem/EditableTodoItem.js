import React, { PureComponent } from 'react';
import { TextField, withStyles } from '@material-ui/core';

import styles from './styles';

class EditableTodoItem extends PureComponent {
  state={
    value:''
  };

  render(){
    const {
      classes,
      item: {id, text},
      onSubmit
    } = this.props;

    const {value} = this.state;

    return (
      <form onSubmit ={ (e) => {
        e.preventDefault();
        onSubmit(id,value);
      }}>
        <TextField
          defaultValue={text}
          margin="normal"
          onChange={(e)=>this.setState({value: e.target.value})}
          onBlur={()=>onSubmit(id,value)}
          autoFocus
        />
      </form>
    );
  }
}

EditableTodoItem.propTypes = {};

export default withStyles(styles)(EditableTodoItem);
