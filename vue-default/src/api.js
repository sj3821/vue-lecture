import axios from 'axios';

export default {
    mounted() {
        console.log('믹스인 mounted()')
    },
    methods: {
        async $callAPI(url, method, data){ // async-await 비동기방식 통신 :: 서버로 호출을 하고 데이터를 받을 때까지 대기를 한 후에 완료가 되면 그 다음 코드를 실행
            return (await axios({
                method: method, // get, post, put ... 어떤 방식으로 통신할 것이냐
                url: url, // 통신할 대상 주소(url)
                data: data // 서버에 보낼 데이터
            }).catch(e =>{
                console.log(e);
            })).data;
        }
    }
}