<template>
<div>
<h1>{{sampleData}}</h1>
<div>{{sampleData2}}</div>
</div>
</template>
<script>

export default{ 
    name:'DataBindingView',
    components:{},
    data(){
        return{
            sampleData:'Hello',
            sampleData2 : 'world'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>