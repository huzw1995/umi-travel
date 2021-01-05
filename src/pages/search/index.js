import React, { useState, useEffect } from 'react'
import{ SearchBar } from 'antd-mobile'
import './index.less'

export default function(props){
    const [houseName, setHouseName] = useState('')

    const handleChange = (value) => {
        console.log(value)
    };

    const handleCancel = () => {

    };

    const handleSubmit = (value) => {

    };

    useEffect(()=>{

    },[])

    return (
        <div className='search-page'>
            {/** 顶部搜索栏 */}
            <SearchBar
                placeholder='搜索民宿'
                value={houseName}
                onChange={handleChange}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
            />
            {/** 搜索结果 */}
        </div>
    )
}