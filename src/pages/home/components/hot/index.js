import React, { useState, useEffect } from 'react';

export default function (props) {
  const [houses, setHouses] = useState([
    {
      id: 1,
      img:
        'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
      title: '东城民宿',
      info: '东城区交通方便',
      price: '100',
    },
    {
      id: 2,
      img:
        'http://img3.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
      title: '西城民宿',
      info: '西城区山水怡情',
      price: '120',
    },
  ]);

  useEffect(() => {}, []);

  return (
    <div className="hot">
      <h1>最热民宿</h1>
      <div className="hot-lists">
        {houses.map((item) => (
          <div className="hot-lists-item">
            <img className="img" alt="img" src={item.img} />
            <div className="title">{item.title}</div>
            <div className="info">{item.info}</div>
            <div className="price">￥{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
