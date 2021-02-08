import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'antd-mobile'
import OrderItem from '../Item'
import { ShowLoading } from '@/components'
export default function(props){

    useEffect(()=>{

    },[])

    return (
        <div>
            {props?.orders?.length? 
                <div className='tab-lists'>
                    {props.orders.map(item => (
                        <OrderItem type={props.type} key={item.id} {...item}/>
                    ))}
                    <ShowLoading showLoading={props.showLoading}/>
                </div> :
                <ActivityIndicator toast/> 
            }
        </div>
    )
}