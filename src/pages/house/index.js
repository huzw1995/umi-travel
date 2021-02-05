import React,{ useState, useEffect } from 'react'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Info from './components/Info'
import Lists from './components/Lists'
import { useStoreHook } from 'think-react-store'
import { useObserverHook } from '@/hooks'
import { CommonEnum } from '@/enums'
import { useLocation } from 'umi'
import './index.less'

export default function(props){
    const { house:{ detail, getDetailAsync, getCommentsAsync, 
            comments, reloadComments, reloadCommentsNum, showLoading, resetData } } = useStoreHook()

    useObserverHook('#' + CommonEnum.LOADING_ID,(entries) => {
        console.log('comments',comments)
        console.log('showLoading',showLoading)
        console.log('entries',entries[0].isIntersecting)
        if(comments && comments.length && showLoading && entries[0].isIntersecting){
            reloadComments()
        }
    },[comments,showLoading])
    const { query } = useLocation()

    useEffect(()=>{
        getDetailAsync({
            id: query?.id
        })
    },[])

    useEffect(()=>{
        getCommentsAsync({

        })
    },[reloadCommentsNum])

    useEffect(()=>{
        return () => {
            resetData({
               detail:{} 
            })
        }
    },[])
    return (
        <div className="house-page">
            <Banner banner = {detail?.data?.banner}/>
            <Info detail = {detail?.data?.info}/>
            <Lists showLoading={showLoading} lists={comments}/>
            <Footer/>
        </div>
    )
}