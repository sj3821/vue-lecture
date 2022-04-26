<template>
<div>
    <h1 v-if="bRender">bRender값이 true이면, h1 블록이 화면에 보여지게 됩니다.</h1>
    <h1 v-else>bRender값이 false이면, h1블록이 화면에 보여지게 됩니다.</h1>

    <h1 v-if="type=='A'">A</h1>
    <h1 v-else-if="type=='B'">B</h1>
    <h1 v-else-if="type=='C'">C</h1>
    <h1 v-else>Other</h1>

    <h1 v-show="showRender">A</h1>

    <!-- v-if는 조건에 따라 컴포넌트가 실제로 제거되고 생성된다.
    반면에 v-show 는 단순히 css 의 display 속성만 변경된다. -->

</div>
</template>
<script>

export default{ 
    name:'RenderingGrammar',
    components:{},
    data(){
        return{
            bRender : true,
            type : 'D',
            showRender : false

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>