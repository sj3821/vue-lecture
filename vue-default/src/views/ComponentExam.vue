<template>
<div>
    <!-- <PageTitle :title="title" /> --> 

   
    
    <page-title :title="title" />
    <button type="button" @click="callChildFunc">부모에 있는 클릭</button>
    <h1>{{parentMsg}}</h1>
   <ChildComponent :likes="23" :isOk="isOk" :commentIds="commentIds" :author="author" ref="child_component" @send-message="sendMessage" /> 
    <!-- :likes="23" 처럼 바로 숫자로 선언하면 텍스트가 아닌 숫자로 인식함 -->
    <button type="button" @click="showData">부모 버튼</button>
    
</div>
</template>
<script>
import PageTitle from '../components/PageTitle';
import ChildComponent from './ChildComponent';

export default{ 
    name:'ComponentExam',
    components:{'page-title': PageTitle, ChildComponent},
    data(){
        return{
            title:'부모컴포넌트에서 전송할 페이지 타이틀',
            likes:23,
            isOk:true,
            commentIds:[1,5,2,3],
            author:{name:'홍길동',company:'회사이름'},
            parentMsg:''
        };
    },
    computed:{
        msg2(){
            return this.$refs.child_component.msg2;
        }
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        callChildFunc(){
            // this.$refs.child_component.$refs.child_btn.click(); // 객체 접근 $refs 사용
            // this.$refs.child_component.childFunc(); //함수접근시에는 그냥 함수만 쓰면 됨
            this.$refs.child_component.msg ='부모컴포넌트에서 변경한 메세지';
        },
        sendMessage(data){
            alert(data);
            this.parentMsg=data;
        },
        showData(){
            alert(this.msg2);
        }
    }
}
</script>