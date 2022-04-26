<template>
<div>
    <button type="button" @click="getProductList">조회</button>
    <table>
        <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>배송료</th>
                <th>카테고리</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(product,i) in productList">
                <td>{{product.product_name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.delivery_price}}</td>
                <td>{{product.category}}</td>
            </tr>
        </tbody>
    </table>

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
        // get : 데이터를 가져올 때
        // delete : 삭제할 때
        // post : 데이터를 추가할 때
        // put : 데이터를 수정할 때
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