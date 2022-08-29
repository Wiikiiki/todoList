import React, { Component, Fragment } from "react";

class TodoList extends Component {
  render() {
    return(
      <Fragment>
        <div>
          <input /><button>提交</button>
          <ul>
            <li>task 1</li>
            <li>task 2</li>
            <li>task 3</li>
          </ul>
        </div>
      </Fragment>
    )
}
}

export default TodoList;