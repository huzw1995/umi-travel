import React,{ useState, useEffect } from 'react'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Info from './components/Info'
import Lists from './components/Lists'
import './index.less'

export default function(props){
    const [state, setState] = useState()

    useEffect(()=>{

    },[])

    return (
        <div className="house-page">
            <Banner/>
            <Info/>
            <Lists/>
            <Footer/>
        </div>
    )
}