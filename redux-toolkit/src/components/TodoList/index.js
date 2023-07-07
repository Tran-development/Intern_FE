import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux'
import { addToDo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';
import { useRef } from 'react';

export default function TodoList() {

  const currentValue = useRef()

  const [todoName, setTodoName] = useState('')
  const [prioriry, setPriority] = useState('Medium')

  const dispatch = useDispatch()
  const todoList = useSelector(todosRemainingSelector)
  const handleAddBtnClick = () => {
    dispatch(addToDo({
      id: uuidv4(),
      name: todoName,
      prioriry: prioriry,
      completed: false
    }))
    setTodoName('')
    setPriority('Medium')
    currentValue.current.focus()
  }

  const handleChangeInput = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }


  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList && todoList.map(todo =>
          <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.prioriry} completed={todo.completed}/>
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input
            ref={currentValue}
            value={todoName}
            onChange={handleChangeInput}
          />
          <Select
            defaultValue="Medium"
            value={prioriry}
            onChange={handlePriorityChange}
          >
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button
            onClick={handleAddBtnClick}
            type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
