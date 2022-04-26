<template>
<div>
    <!-- <button type="button" v-on:click="increaseCounter">Add 1</button> -->
    <!-- v-on:의 약어 @ -->
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The count is : {{counter}} </p>
    <br>
    <button type="button" @click="one(), two()">one-two</button> <!-- 한 element에 여러 메소드가 들어갈 수 있음 -->
    <br>
    <br>
    <select v-model="city" @change="changeSelect">
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="제주">제주</option>
    </select>
    <br>
    <br>
    <input type="text" v-model="textValue" @keyup.enter="showValue" />
    <br> 
</div>
</template>
<script>

export default{ 
    name:'EventHandling',
    components:{},
    data(){
        return{
            counter: 0,
            city:"",
            textValue:""

        }
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        increaseCounter(){
            this.counter = this.counter + 1;
        },
        one(){
            alert('One');
        },
        two(){
            alert('Two');
        },
        changeSelect(){
            alert(this.city);
        },
        showValue(){
            // tab, delete, esc, space, up, down, left, right
            alert(this.textValue);
        }
    }
}
</script>