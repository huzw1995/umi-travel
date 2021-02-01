export default {
    'post /api/house/search': (req, res) => {
        setTimeout(()=>{
            let data;
            if(req.body.pageNum < 4){
                data = [
                    {
                        id: 1,
                        img:'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
                        title: '东城民宿',
                        info: '东城区交通方便',
                        price: '100',
                    },
                    {
                        id: 2,
                        img:'http://img3.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
                        title: '西城民宿',
                        info: '西城区山水怡情',
                        price: '120',
                    },
                    {
                        id: 3,
                        img:'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
                        title: '东城民宿',
                        info: '东城区交通方便',
                        price: '100',
                    },
                    {
                        id: 4,
                        img:'http://img3.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
                        title: '西城民宿',
                        info: '西城区山水怡情',
                        price: '120',
                    },
                    {
                        id: 5,
                        img:'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
                        title: '东城民宿',
                        info: '东城区交通方便',
                        price: '100',
                    },
                    {
                        id: 6,
                        img:'http://img3.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
                        title: '西城民宿',
                        info: '西城区山水怡情',
                        price: '120',
                    },
                    {
                        id: 7,
                        img:'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg',
                        title: '东城民宿',
                        info: '东城区交通方便',
                        price: '100',
                    },
                    {
                        id: 8,
                        img:'http://img3.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
                        title: '西城民宿',
                        info: '西城区山水怡情',
                        price: '120',
                    }
                ]
            }else {
                data = []
            }
            res.json({
                status: 200,
                data
            })
        },500)
    }
}