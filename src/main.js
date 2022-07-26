import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixin'
import store from './store';

const app = createApp(App);
app.use(router);
app.mixin(mixins) //모든 컴포넌트에서 사용가능. 글로벌 함수 등록
app.use(store);
app.mount('#app')
//발급 받은 앱키
window.Kakao.init('bdf01243116b811b322b913ea2b8739f');

