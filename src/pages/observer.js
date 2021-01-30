import React, { useState, useEffect } from 'react'
import { history } from 'umi'

export default function(props){
    const [state, setState ] = useState()

    const handleClick = () => {
        history.push('/')
    }
    useEffect(() => {
        console.log('进入页面')
        const observer = new IntersectionObserver(entries => {
            console.log(entries)
        })
        observer.observe(document.querySelector('#loading'));
        return () => {
            console.log('离开页面')
            if(observer){
                observer.unobserve(document.querySelector('#loading'));
                observer.disconnect();
            }
        }
    },[])

    return (
        <div>
            observer
            <button onClick={handleClick}>首页</button>
            <div id="loading" style={{width:'100px',height:'100px',background:'#f60'}}>
                loading
            </div>
        </div>
    )
}