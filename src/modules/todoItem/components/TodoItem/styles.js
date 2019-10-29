const styles = ({
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#F3F0FE',
    },
  },
  todoItemRow: {
    width: '100%',
    height: 32,
    textAlign: 'left',
    fontWeight: 'bold',
  }
});

export default styles;
