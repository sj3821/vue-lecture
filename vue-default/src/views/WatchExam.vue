<template>
<div>
    <input type="text" v-model="x1" />
    <input type="text" v-model="x2" />
    <button type="button" @click="plusNumber()">계산</button>
    <input type="text" v-model="y" />
    <br><br>
    <input type="text" v-model.number="xx1" />
    <input type="text" v-model.number="xx2" />
    <button type="button" @click="plusNumber1()">계산</button>
    <input type="text" v-model="yy" />
    <br><br>
    WATCH
    <input type="text" v-model.number="num1" />
    <input type="text" v-model.number="num2" />
    <input type="text" v-model="sum" />
    <br><br>
    COMPUTED
    <input type="text" v-model.number="num11" />
    <input type="text" v-model.number="num22" />
    <input type="text" v-model="sum1" />
    <br><br><br>
    <a href="https://blog.jeongwoo.in/vue-js-watch%EC%99%80-computed-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%99%80-%EC%82%AC%EC%9A%A9%EB%B2%95-e2edce37ec34" target="blank">[Vue.js] watch와 computed 의 차이와 사용법(링크) </a>
    
</div>
</template>
<script>

export default{ 
    name:'WatchExam',
    components:{},
    data(){
        return{
            x1:0,
            x2:0,
            y:0,
            xx1:0,
            xx2:0,
            yy:0,
            num1:0,
            num2:0,
            sum:0,
            num11:0,
            num22:0 
        };
    },
    watch:{
        num1(){
            this.sum=this.num1 + this.num2;
        },
        num2(){
            this.sum=this.num1 + this.num2;
        }
    },
    computed:{
        sum1(){
            return this.num11 + this.num22;
        }
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        plusNumber(){
            this.y = parseInt(this.x1) + parseInt(this.x2);
        },
        plusNumber1(){
            this.yy= this.xx1 + this.xx2;
        }

    }
}
</script>