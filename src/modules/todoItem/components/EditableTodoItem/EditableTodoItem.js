import React, { PureComponent } from 'react';
import { InputBase, withStyles } from '@material-ui/core';
import classnames from 'classnames';

import styles from './styles';
import PropTypes from 'prop-types';

class EditableTodoItem extends PureComponent {
  constructor() {
    super();
    this.inputRef = React.createRef();

    this.state = {
      value:''
    };
  }

  handleEnter = (event) => {
    if (event.charCode === 13) {
      this.inputRef.current.blur();
    }
  };

  render(){
    const {
      classes,
      item: {id, text, checked},
      onSubmit
    } = this.props;

    const {value} = this.state;

    return (
      <form onSubmit ={ (e) => {
        e.preventDefault();
        onSubmit(id,value);
      }}>
        <InputBase
          className={classnames(classes.todoItemText, {
            [classes.checked]: checked
          })}
          defaultValue={text}
          onChange={(e)=>this.setState({value: e.target.value})}
          onBlur={()=>onSubmit(id,value)}
          inputRef={this.inputRef}
          onKeyPress={this.handleEnter}
          autoFocus
        />
      </form>
    );
  }
}

EditableTodoItem.propTypes = {
  classes: PropTypes.object.isRequired,
  item:  PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }),
  onSubmit: () => null,
};

export default withStyles(styles)(EditableTodoItem);
