<template>
<div>
    <img v-bind:src="url" style="height:100px;width:auto;" /> <br>
    <input type="text" v-model="textValue"/>
    <button type="button" v-bind:disabled="textValue==''">Click</button>  <!--입력이 없으면 click버튼이 비활성되게 하는 것-->
</div>
</template>
<script>

export default{ 
    name:'DatabindingAttribute',
    components:{},
    data(){
        return{
            url : 'https://kr.vuejs.org/images/logo.png',
            textValue : ''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>