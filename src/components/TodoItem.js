import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
      return {
        color: '#fff',
        background: '#375a7f',
        padding: '10px',
        borderBottom: '1px #689462 solid',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
    }


  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
          <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />   &nbsp; {'    '}
            { title }
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
          </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
  // markComplete: PropTypes.func.isRequired,
  // delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#E74C3C',
  color: '#ffffff',
  border: 'none',
  padding: '2px 5px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}



export default TodoItem
