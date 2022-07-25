<template>
    <div>
        <button @click="childFunc">자식 클릭</button>
        <div>{{msg}}</div>
    </div>
</template>
<script>

export default {
     data(){
        return{
            msg:'자식이지롱',
        }
    },
    methods: {
        childFunc(){
            alert("부모에서 직접 발생시킨 이벤트")
        }
    },
}
</script>