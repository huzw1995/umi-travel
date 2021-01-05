import React, { useState, useEffect } from 'react';
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile';
import dayjs from 'dayjs';
import useHttpHook from '@/hooks/useHttpHook'
import { history } from 'umi'

export default function (props) {
  const [selectedCity, setSelectedCity] = useState(['10001']);
  const [times, setTimes] = useState('可选时间');
  const [dateShow, setDateShow] = useState(false);
  const handleCityChange = (value) => {
    console.log(value);
    setSelectedCity(value);
  };
  const handleDate = () => {
    setDateShow(!dateShow);
  };
  const handleDateConfirm = (startTime, endTime) => {
    setDateShow(!dateShow);
    setTimes(
      dayjs(startTime).format('YYYY-MM-DD') +
        '~' +
        dayjs(endTime).format('YYYY-MM-DD'),
    );
  };
  const handleClick = () => {
    if(times.includes('~')){
      history.push({
        pathname:'/search',
        query:{
          code:selectedCity,
          startTime:times.split('~')[0],
          endTime:times.split('~')[1]
        }
      })
    }else{
      Toast.fail('请选择时间');
    }
  }

  return (
    <div className="search">
      <div className="search-addr">
        {!props.citysLoading && Array.isArray(props.citys.data) && <Picker
          title="城市"
          data={props.citys.data}
          value={selectedCity}
          cascade={false}
          cols={1}
          onChange={handleCityChange}
        >
          <List.Item>可选城市</List.Item>
        </Picker>}
      </div>
      <div className="search-time" onClick={handleDate}>
        <p className="search-time_left">出租时间</p>
        <p className="search-time_right">{times}</p>
      </div>
      <Button type="warning" size="large" onClick={handleClick}>
        搜索民宿
      </Button>
      <Calendar
        visible={dateShow}
        onCancel={handleDate}
        onConfirm={handleDateConfirm}
      />
    </div>
  );
}
