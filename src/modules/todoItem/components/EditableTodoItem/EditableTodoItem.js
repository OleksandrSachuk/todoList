import React, { PureComponent } from 'react';
import { InputBase } from '@material-ui/core';

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
      item: {id, text},
      onSubmit
    } = this.props;

    const {value} = this.state;

    return (
      <form onSubmit ={ (e) => {
        e.preventDefault();
        onSubmit(id,value);
      }}>
        <InputBase
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

EditableTodoItem.propTypes = {};

export default EditableTodoItem;
