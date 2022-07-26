import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixin'

const app = createApp(App);
app.use(router);
app.mixin(mixins) //모든 컴포넌트에서 사용가능. 글로벌 함수 등록
app.mount('#app')
