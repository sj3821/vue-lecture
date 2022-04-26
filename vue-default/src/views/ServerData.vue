<template>
<div>
    <button type="button" @click="getProductList">조회</button>
</div>
</template>
<script>
import axios from 'axios';

export default{ 
    name:'ServerData',
    components:{},
    data(){
        return{
            productList:[]
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        async getProductList(){
            this.productList = await this.api('https://63229e79-1030-47bb-a15c-0753d3b595be.mock.pstmn.io/productList','get',{})
            console.log(this.productList);
        },
        async api(url, method, data){ // async-await 비동기방식 통신 :: 서버로 호출을 하고 데이터를 받을 때까지 대기를 한 후에 완료가 되면 그 다음 코드를 실행
            return (await axios({
                method: method, // get, post, put ... 어떤 방식으로 통신할 것이냐
                url: url, // 통신할 대상 주소(url)
                data: data // 서버에 보낼 데이터
            }).catch(e =>{
                console.log(e);
            })).data;

        }
    }
}
</script>