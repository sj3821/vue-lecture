<template>
<div>
    <input type="text" v-model="valueModel" />
    <br>
    <input type="number" v-model.number="valueModel2"/>
    <br>
    <textarea v-model="valueModel3"></textarea>
    <div>{{valueModel3}}</div>
    <br>
    <select v-model="city">
        <option value="02">서울</option>
        <option value="21">부산</option>
        <option value="064">제주</option>
    </select>
    <br>
    <label><input type="checkbox" v-model="checked_t">{{checked_t}}</label>

    <br>
    <label><input type="checkbox" value="서울" v-model="checked">서울</label>
    <label><input type="checkbox" value="부산" v-model="checked">부산</label>
    <label><input type="checkbox" value="제주" v-model="checked">제주</label>
    <br>
    <span> 체크한 지역 : {{checked}} </span> 
    <br>
    <label><input type="radio" value="서울" v-model="picked1" />서울</label>
    <label><input type="radio" value="부산" v-model="picked1" />부산</label>
    <label><input type="radio" value="제주" v-model="picked1" />제주</label>
    <br>
    <span> 선택한 지역 : {{picked1}} </span>
    <br>
    <label><input type="radio" v-bind:value="radio1" v-model="picked2" />서울</label>
    <label><input type="radio" v-bind:value="radio2" v-model="picked2" />부산</label>
    <label><input type="radio" v-bind:value="radio3" v-model="picked2" />제주</label>
    <br>
    <span> 선택한 지역 : {{picked2}} </span>
    <br>
    <label><input type="radio" v-bind:value="radio[0]" v-model="picked3" />서울</label>
    <label><input type="radio" v-bind:value="radio[1]" v-model="picked3" />부산</label>
    <label><input type="radio" v-bind:value="radio[2]" v-model="picked3" />제주</label>
    <br>
    <span> 선택한 지역 : {{picked3}} </span>
    <br>
    

</div>
</template>
<script>

export default{ 
    name:'DatabindingInputTxt',
    components:{},
    data(){ 
        return{
            valueModel : 'South Korea',
            valueModel2 : 12,
            valueModel3 : '안녕하세요!',
            city:"21",
            checked_t:true,
            checked:[],
            radio:["서울3","부산3","제주3"],
            radio1:"서울2",
            radio2:"부산2",
            radio3:"제주2",
            picked1 : "",
            picked2 : "",
            picked3 : ""
            
        };
    },
    setup(){},
    created(){},
    mounted(){
        let valueModel_method = 11;
        console.log(this.valueModel2); // 같은 파일 안의 다른데서 만든 건 가져오려면this객체를 이용해야 됨
        console.log(valueModel_method);
    },
    unmounted(){},
    methods:{}
}
</script>