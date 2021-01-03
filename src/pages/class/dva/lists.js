import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile'
import { List } from 'antd-mobile'

export default class Lists extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render(){
        const { text, lists } = this.props.search;
        console.log('lists',lists)
        return (
            <div>
               <h1>text:</h1>
               <List>
                   {lists.map((item,index)=>{
                    return <List.Item key={index}>
                        {item}
                    </List.Item>
                   })}
                </List>
            </div>
        )
    }
}