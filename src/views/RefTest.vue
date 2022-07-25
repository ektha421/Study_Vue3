<template>
    <div>
        <button @click="callChildFunc">부모 클릭(자식 이벤트 호출)</button>
        <button @click="callChildFunc2">부모 클릭(자식 데이터 변경)</button>
        <ResfTestChild ref="child_component"/>
    </div>
</template>
<script>
import ResfTestChild from './RefTestChild'
export default {
     data(){
        return{
          
        }
    },
    components:{
        ResfTestChild
    },
    methods: {
        callChildFunc(){
            this.$refs.child_component.childFunc();
        },
        callChildFunc2(){
            this.$refs.child_component.msg = "부모에서 변경한 메시지";
        },
    },
}
</script>