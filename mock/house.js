export default {
    'post /api/house/search': (req, res) => {
        setTimeout(()=>{
            res.json({
                status: 200,
                data:[{
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
                    }]
            })
        },500)
    }
}