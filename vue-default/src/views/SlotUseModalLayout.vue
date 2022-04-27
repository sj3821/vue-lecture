<template>
    <modal-layout>
        <template v-slot:footer>  <!-- 순서 상관 없음. SlotModalLayout의 순서를 따라서 표시하게 됨 -->
            <button type="button">닫기</button>
        </template>
        <template v-slot:header>
            <h1>팝업 타이틀</h1>
        </template>
        <!--<template v-slot:default>  이름을 정의하지 않은 곳을 default 로 들어가게됨 -->
        <template v-slot:main>
            <p>팝업 컨텐츠 1</p>
            <p>팝업 컨텐츠 2</p>
        </template>
    </modal-layout>
</template>
<script>
import SlotModalLayout from "./SlotModalLayout";
export default{ 
    name:'SlotUseModalLayout',
    components:{"modal-layout":SlotModalLayout},
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