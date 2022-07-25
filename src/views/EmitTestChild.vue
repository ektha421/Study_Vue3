<template>
    <div>
        <button @click="sendFromChild">자식 버튼</button>
    </div>
</template>
<script>

export default {
     data(){
        return{
            msg:'자식 컴포넌트가 보내는 메시지',
        }
    },
    methods: {
        sendFromChild(){
            this.$emit('send-msg', this.msg)
        }
    },
}
</script>