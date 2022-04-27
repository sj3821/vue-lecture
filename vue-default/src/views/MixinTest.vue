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
import ApiMixin from '../api.js';
import MoniteringMixin from '../monitering.js';

export default{ 
    name:'MixinTest',
    mixins:[ApiMixin, MoniteringMixin], //공통함수 import한 것들 배열로 선언하면 사용가능
    components:{},
    data(){
        return{
            productList:[]
        };
    },
    setup(){},
    beforeCreate(){}, // 컴포넌트 실행되기 직전
    created(){}, 
    beforeMount(){}, // 마운트 되기 전
    mounted(){ // 컴포넌트가 마운트가 끝났을 때 자동 호출되는 메서드
        console.log('컴포넌트 mounted()')
    },
    beforeUpdate(){},
    updated(){}, // 데이터가 업데이트 된 후 실행
    beforeUnmount(){},
    unmounted(){},
    methods:{
        async getProductList(){
            this.productList = await this.$callAPI('https://63229e79-1030-47bb-a15c-0753d3b595be.mock.pstmn.io/productList','get',{}) // mixin으로 가져온? 함수는 앞에 $를 prefix로 붙여서 사용한다
            console.log(this.productList);
        } 
    }
}
</script>