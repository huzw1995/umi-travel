import { Toast } from 'antd-mobile'
import axios from 'axios'

export default function Http({
    url,
    method = 'post',
    headers,
    body = {},
    setLoading,
    setResult
}){
    setLoading && setLoading(true);
    const defaultHeader = {
        'Content-type':'application/json'
    }
    let params;
    if(method.toUpperCase() === 'GET'){
        params = {
            method:'get',
            url:'/api' + url,
            headers:{
                ...defaultHeader,
                headers
            }
        }
    }else{
        params = {
            method:'post',
            url:'/api' + url,
            headers:{
                ...defaultHeader,
                headers
            },
            body:JSON.stringify(body)
        }
    }
    return new Promise((resolve,reject)=>{
        axios(params).then(function(response){
            let { status,data } = response
            if(response){
                if(status && status === 200){
                    resolve(data)
                    setResult && setResult(data)
                }
            }
        }).catch(function(error){
            let {response,request,message} = error;
            if(response){
                Toast.fail(response.status)
                reject(response.status)
            } else if (request){
                Toast.fail(request)
                reject(request)
            } else {
                Toast.fail(message)
                reject(message)
            }
        }).finally(()=>{
            setLoading && setLoading(false)
        })
    })
}