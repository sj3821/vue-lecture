<template>
<div>Item Length: {{this.itemLength}}</div>
<div>Itmes: {{this.items}}</div>
</template>
<script>

export default{ 
    name:'ProvideInjectChildChild',
    // props:{
    //     itemLength:{
    //         type: Number,
    //         default: 0
    //     }
    // },
    inject: ['itemLength','items']
};
</script>