<template>
<div>
    <!--ProvideInjectChild :itemLength="items.length" -->
    <ProvideInjectChild />
</div>
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild";
export default{ 
    name:'ProvideInject',
    components:{ ProvideInjectChild },
    data(){
        return{
            items: ['A','B']
        };
    },
    provicde(){
        return{
            itemLength: this.items.length, // key : value
            items : this.items
        }
    },
}
</script>