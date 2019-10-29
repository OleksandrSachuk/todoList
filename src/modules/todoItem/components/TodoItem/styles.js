const styles = ({
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    // padding: '0 10px',
    '&:hover': {
      backgroundColor: '#F3F0FE',
    },
  },
  todoItemText: {
    width: '100%',
    height: 32,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  checked: {
    textDecoration: 'line-through',
    color: 'grey'
  }
});

export default styles;
