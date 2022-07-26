<template>
    <div>
       <h1>Cart: {{cartCount}}</h1>
       <h2>Count: {{count}}</h2>
       <button @click="increment">증가</button>
    </div>
</template>
<script>
export default {
  computed: {
    count(){
        //count 변경사항 감시
        return this.$store.state.count
    },
    cartCount(){
        return this.$store.getters.cartCount
    },
    prodictAcount: (state) => {
        return state.cart.filter(p => p.category == 'A')
    }
  },
  methods: {
    increment(){
        //호출할 메서드명 commit에 보냄
        this.$store.commit('increment'); 
    }
  },
}
</script>