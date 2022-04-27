<template>
    <div class="modal-container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>

export default{ 
    name:'SlotModalLayout',
    components:{},
    data(){
        return{
            sampleData:''
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

</style>