<template>
<div>
    <h1>{{title}}</h1>
    <input type="text" v-model="title"/>
</div>
</template>
<script>
export default {
    name : 'basicViewScript',
    components: {},
    data(){
        return{
            title : 'Hello world2'
        }
    },
    setup(){},
    created(){},    // vue 컴포넌트가 실행(생성)이 되는 순간에 자동으로 실행
    mounted(){},    // 실제 화면에 로딩이 다 되는 순간 자동으로 실행
    unmounted() {}, // 이 컴포넌트에서 다른 컴포넌트로 이동을 할 때 unmount가 일어나면서 자동으로 실행
    methods: {      // function 함수를 정의해서 이 컴포넌트 안에서 사용할 수 있도록 정의

        
    },
}
</script>
<style scoped>

</style>

