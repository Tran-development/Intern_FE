import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { searchFilterChange, statusFilterChange, prioritiesFilterChange } from '../../redux/actions';
import {filtersSlide} from './filterSlice';
const { Search } = Input;

export default function Filters() {

  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState('')
  const [selectFilterChange, setSelectFilterChange] = useState('All')
  const [priorityFilterChange, setPriorityFilterChange] = useState('All')

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    dispatch(filtersSlide.actions.searchFilterChange(e.target.value))
  }

  const handleSelectFilterChange = (e) => {
    setSelectFilterChange(e.target.value)
    // console.log(e.target.value);
    dispatch(filtersSlide.actions.statusFilterChange(e.target.value))
  }

  const handlePriorityFilterChange = (value) => {
    // tại vì đang sd các components từ antd design, ta phải luôn check xem nó trả về cái gì
    // như ở đây là multi select nên nó sẽ trả về array vs cái value ở phía trong đó 
    setPriorityFilterChange(value)
    dispatch(filtersSlide.actions.prioritiesFilterChange(value))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}

        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder='input search text'
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={selectFilterChange} onChange={handleSelectFilterChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priorityFilterChange}
          onChange={handlePriorityFilterChange}
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
      </Col>
    </Row>
  );
}
