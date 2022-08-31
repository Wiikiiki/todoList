import React from "react";
import { connect } from 'react-redux'
import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
// import { changeInputValue, handleClick, handleDelete } from './store/actionCreators'

const TodoList = (props) => {
  //结构赋值
  const { inputValue, changeInputValue, handleClick, list, handleDelete } = props

  return (
    <>
      <div>
        <input 
          value = {inputValue} 
          onChange={changeInputValue}
        />
        <button
          onClick={handleClick}
        >提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li 
                key = {index}
                onClick = {handleDelete}
              >
                {item}
              </li>)
          })
        }
      </ul>
    </>
  )
}



const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    // changeInputValue: (e) => dispatch(),
    // handleClick: () => dispatch(handleClick()),
    // handleDelete: () => dispatch(handleDelete())

    changeInputValue(e) {
      const action = {
        type: CHANGE_INPUT_VALUE,
        value: e.target.value
      }
      dispatch(action)
    },

    handleClick() {
      const action = {
        type: ADD_ITEM
      }
      dispatch(action)
    },

    handleDelete(index) {
      const action = {
        type: DELETE_ITEM,
        index: index
      }
      dispatch(action)
    }
  }
}

// TodoList本身是UI组件，connect整体导出的是容器组件
export default connect(mapStateToProps, mapDispatchToProps) (TodoList)