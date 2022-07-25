<template>
    <div>
        <ProductInjectChild/>
    </div>
</template>
<script>
import ProductInjectChild from './ProvideInjectChild'
export default {
    components:{
        ProductInjectChild
     },
    data(){
        return{
            items: ['A','B']
        }
    },
    provide(){
        //컴포넌트 구조가 복잡할때 사용하면 좋음. 일반적인 구조에선 props.
        //하지만 코드추적이 어려워 질 수 있으므로 사용시 주의가 필요함
        //최상위 컴포넌트에서 최하위 컴포넌트에 보낼 데이터 정의
        return{
            itemLength : this.items.length
        }
    }
}
</script>