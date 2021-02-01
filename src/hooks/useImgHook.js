import { useEffect } from 'react'

let observer;
export default function useImgHook(ele, callback, watch = []){
    useEffect(()=>{
        const nodes = document.querySelectorAll(ele)
        if(nodes && nodes.length){
            observer = new IntersectionObserver((entries)=>{
                callback && callback(entries)
                entries.forEach(item => {
                    if(item.isIntersecting){
                        const dataSrc = item.target.getAttribute('data-src')
                        item.target.setAttribute('src',dataSrc)
                        observer.unobserve(item.target)
                    }
                    console.log(item)
                })
            })
            nodes.forEach(item => {
                observer.observe(item)
            })
        }
        return ()=>{
            if(nodes && nodes.length && observer){
                observer.disconnect()
            }
        }
    },watch)
}