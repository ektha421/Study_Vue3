import axios from 'axios';

export default {
    methods:{
        //mixIn 사용할 때는 $ 프리픽스를 붙여서 사용함. 다른 곳에 import 됐을때 중복 안되게
        async $api(url, method, data){
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