<template>
<div>
    <div>likes: {{likes}}</div>
    <div>isOk:{{isOk}}</div>
    <div>commentIds:{{commentIds}}</div>
    <div>author name: {{author.name}}</div>
    <div> author company:{{author.company}} </div>
    <br><br><br>
    <button type="button" @click="childFunc" ref="child_btn">자식에 있는 클릭</button>
    <br><br><br>
    <button type="button" @click="sendFromChild">자식 컴포넌트 버튼</button>
    <br><br>
    <button type="button" @click="changeData"> 자식 컴포넌트 데이터 변경</button>
    <br><br>
    <h1>{{msg}}</h1>

</div>
</template>
<script>

export default{ 
    name:'ChildComponent',
    props:{
        likes:{
            type: Number,
            default: 0
        },
        isOk:{
            type: Boolean,
            default: false
        },
        commentIds:{
            type: Array
        },
        author:{
            type:Object
        }
    },
    components:{},
    data(){
        return{
            sampleData:'',
            msg:'자식에 있던 메세지',
            msg1:'자식 컴포넌트로부터 보내는 메세지',
            msg2:'자식 컴포넌트로부터 보내는 메세지'
        };
    },
    setup(){},
    created(){},
    mounted(){
        console.log(this.commentIds);
    },
    unmounted(){},
    methods:{
        childFunc(){
            alert('부모 컴포넌트에서 직접 발생시킨 이벤트');
        },
        sendFromChild(){
            this.$emit('send-message', this.msg1); //커스텀이벤트 자식-> 부모 이벤트 
        },
        changeData(){
            this.msg2='자식 컴포넌트에서 데이터 변경이 일어났습니다.';
        }
    }
}
</script>