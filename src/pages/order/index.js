import React, { useState, useEffect } from 'react'
import { Tabs } from 'antd-mobile'
import Lists from './components/Lists'
import { useHttpHook, useObserverHook } from '@/hooks'
import { CommonEnum } from '@/enums'
import './index.less'
import { Http } from '@/utils'
import order from '../../../mock/order'
import { isRegularExpressionLiteral } from 'typescript'

export default function(props){
    const [page, setPage] = useState(CommonEnum.PAGE)
    const [orders, setOrders] = useState([])
    const [showLoading,setShowLoading] = useState(true)
    const [type, setType] = useState(0)
    // const [orders] = useHttpHook({
    //     url:'/order/lists',
    //     body:{
    //         ...page
    //     }
    // })
    const invokeHttp = async (pageNum) => {
        const result = await Http({
            url:'/order/lists',
            body:{
                ...page,
                pageNum,
                type
            }
        })
        return result
    }
    const fetchOrder = async (pageNum) => {
        const result = await invokeHttp(pageNum)
        if(result?.data?.length && result.data.length === page.pageSize){
            setOrders(result.data)
            setShowLoading(true)
        }else{
            setShowLoading(false)
        }
    }

    const handleChange = (e) => {
        setType(e.sub)
        setPage(CommonEnum.PAGE)
        setOrders([])
        setShowLoading(true)
    }

    const tabs = [
      { title:'未支付', sub: 0},
      { title:'已支付', sub: 1}
    ]

    useObserverHook('#' + CommonEnum.LOADING_ID,async (entires)=>{
        console.log('entires order',entires)
        if(entires[0].isIntersecting){
            const result = await invokeHttp(page.pageNum + 1)
            if(orders.length && result?.data?.length && result.data.length === page.pageSize){
                setOrders([...orders,...result.data])
                setPage({
                    ...page,
                    pageNum: page.pageNum + 1
                })
                setShowLoading(true)
            }else{
                setShowLoading(false)
            }
        }
    },null)
    
    useEffect(()=>{
        fetchOrder(1)
    },[type])

    return (
        <div className='order-page'>
            <Tabs
              tabs={tabs}
              onChange={handleChange}
            >
                <div className='tab'>
                    <Lists orders={orders} type={0} showLoading={showLoading}/>
                </div>
                <div className='tab'>
                    <Lists orders={orders} type={1} showLoading={showLoading}/>
                </div>
            </Tabs>
        </div>
    )
}