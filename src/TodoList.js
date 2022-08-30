//容器组件

import React from "react";
// import TodoItem from "./TodoItem";
// import { getAllByAltText } from "@testing-library/react";
import store from './store/index';
import { Provider } from 'react-redux';
import { getInputChangeAction, getAddItem, getDeleteItem, getTodoList } from './store/actionCreators'
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'
import TodoListUI from "./TodoListUI";

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange);
  }
  
  render() {
    return (
      <TodoListUI 
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        handleItemDelete = {this.handleItemDelete}
      />
    )
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }
  
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = getAddItem()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteItem(index)
    store.dispatch(action)
  }
}

export default TodoList