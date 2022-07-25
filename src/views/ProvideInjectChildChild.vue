<template>
    <div>
        Item Length: {{this.itemLength}}
    </div>
</template>
<script>
export default {
    //중간 컴포넌트를 거치지 않고 최상위 컴포넌트에서 바로 데이터 받을 수 있음.
   inject: ["itemLength"]
}
</script>