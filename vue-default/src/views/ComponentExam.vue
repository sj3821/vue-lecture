<template>
<div>
    <PageTitle :title="title" />
</div>
</template>
<script>
import PageTitle from '../components/PageTitle';

export default{ 
    name:'ComponentExam',
    components:{PageTitle},
    data(){
        return{
            title:'부모컴포넌트에서 전송할 페이지 타이틀'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>