import React, { useEffect, useState } from "react";
import Http from '@/utils/http'

export default function useHttpHook({
    url,
    method = 'post',
    headers,
    body = {}
}){
    const [result,setResult] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        Http({
            url,
            method,
            headers,
            body,
            setResult,
            setLoading
        })
    },[])

    return [result, loading];
}