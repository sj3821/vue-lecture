<template>
<div>
    <div>
        <select v-model="selectedCity">
            <option :value="city.code" :key="i" v-for="(city,i) in cityList">{{city.name}}</option>

        </select>
        <input type="text" v-model="userName" />
        <button type="button">조회</button>
    </div>
</div>
</template>
<script>

export default{ 
    name:'SearchAndSaveView',
    components:{},
    data(){
        return{
            cityList : [
                {name:'서울',code:'02'},
                {name:'부산',code:'21'},
                {name:'제주',code:'064'},
            ],
            selectedCity:''

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>