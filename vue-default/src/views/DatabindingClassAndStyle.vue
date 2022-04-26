<template>
<div class="body">
    <!-- <div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}">Class Binding</div> -->
    <div class="container" v-bind:class="[activeClass,redClass]">Class Binding</div>
    <br><br><br>
    <div v-bind:style="styleObject">인라인 스타일 Binding</div>
    <br><br><br>
    <div v-bind:style="[baseStyle,addStyle]">인라인 스타일 Binding</div>

</div>
</template>
<script>

export default{ 
    name:'DatabindingClassAndStyle',
    components:{},
    data(){
        return{
            isActive : true,
            isRed : true,
            activeClass: 'active',
            redClass:'text-red',
            styleObject:{
                backgroundColor: 'yellow',
                color:'red',
                fontWeight:'bold'
            },
            baseStyle:'background-color:yellow;width:100%;height:200px',
            addStyle:'color:red;font-weight:bold'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>
<style scoped>
.container{
    width: 100%;
    height: 200px;
}

.active {
    background-color: yellow;
    font-weight: bold;
}

.text-red {
    color: red;
}
</style>