//UI组件

import React from "react";
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{margin: '10px'}}>
          <Input 
            value={props.inputValue}
            placeholder="todo info"
            style={{width: '300px', margin: '10px'}}
            onChange={props.handleInputChange}
            />
          <Button 
            type="primary"
            onClick={props.handleBtnClick}
          >
            提交
          </Button>
          <List
            style={{margin: '10px', width: '300px'}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item onClick={ () => {props.handleItemDelete(index)}}>{item}
              </List.Item>
            )}
          />
        </div>
  )
}


export default TodoListUI