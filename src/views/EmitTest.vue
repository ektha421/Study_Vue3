<template>
    <div>
        <EmitTestChild @send-msg="sendMsg"/>
    </div>
</template>
<script>
import EmitTestChild from './EmitTestChild'
export default {
     data(){
        return{
          
        }
    },
    components:{
        EmitTestChild
    },
    methods: {
        sendMsg(data){
         alert(data);   
        }
    },
}
</script>