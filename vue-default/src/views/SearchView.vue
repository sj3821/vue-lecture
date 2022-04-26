<template>
<div>
    <div>
        <select v-model="selectedCity">
            <option :value="city.code" :key="i" v-for="(city,i) in cityList">{{city.name}}</option>

        </select>
        <input type="text" v-model="userName" @keyup.enter="searchUserList" />
        <button type="button" @click="searchUserList">조회</button>
    </div> 
    <div>
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>직업</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(person,i) in userList">
                    <td>{{person.name}}</td>
                    <td>{{person.age}}</td>
                    <td>{{person.job}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>

export default{ 
    name:'SearchView',
    components:{},
    data(){
        return{
            cityList : [
                {name:'서울',code:'02'},
                {name:'부산',code:'21'},
                {name:'제주',code:'064'},
            ],
            selectedCity:'',
            userName : '',
            userList : []

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        searchUserList(){
            const selectedCity = this.selectedCity; // eslint-disable-line no-unused-vars
            const userName = this.userName; // eslint-disable-line no-unused-vars
            const params = { // eslint-disable-line no-unused-vars
                selectedCity : this.selectedCity,
                userName : this.userName
            }
            this.userList = this.getUserList();
        },
        getUserList(params){
            console.log(params);

            let list = [
                {name:'A', age:50, job:'AA'},
                {name:'B', age:40, job:'BB'},
                {name:'C', age:37, job:'CC'},
                {name:'D', age:46, job:'DD'}
            ];

            return list;
        }
    }
}
</script>