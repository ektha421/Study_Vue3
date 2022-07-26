import axios from 'axios';

export default {
    mounted() {
        //mixIn mounted가 먼저 실행되고 컴포넌트 mounted가 실행됨.
        console.log("component mounted")
    },
    methods:{
        //mixIn 사용할 때는 $ 프리픽스를 붙여서 사용함. 다른 곳에 import 됐을때 중복 안되게
        async $callAPI(url, method, data){
            return (await axios({
                method: method,
                url: url,
                data:data
            }).catch(e=>{
                console.log(e);
            })).data;
        }
    }
}
