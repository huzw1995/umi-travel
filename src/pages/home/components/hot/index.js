import React, { useState, useEffect } from 'react';

export default function (props) {

  useEffect(() => {}, []);

  return (
    <div className="hot">
      <h1>最热民宿</h1>
      <div className="hot-lists">
        {props?.houses?.data?.map((item) => (
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
