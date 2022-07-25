<template>
    <div>
        <input type="text" v-model="valModel">

        <input type="number" v-model.number="valModel2"/>

        <textarea cols="30" rows="10" v-model="valModel3"></textarea>

        <select v-model="select">
            <option value="02">서울</option>
            <option value="032">인천</option>
        </select>

        <label for=""><input type="checkbox" v-model="checked">체크</label>

        <br>

        <label><input type="checkbox" v-model="checkList" value="서울">서울</label>
        <label><input type="checkbox" v-model="checkList" value="인천">인천</label>
        {{checkList}}
        <br>
        <label><input type="radio" value="서울" v-model="picked">서울</label>
        <label><input type="radio" value="부산" v-model="picked">부산</label>
        <label><input type="radio" value="제주" v-model="picked">제주</label>
        <p>선택한 지역: {{picked}}</p>

    </div>
</template>
<script>
export default {
    name: 'DataBinding',
    data(){
        return{
            valModel:'Hi',
            valModel2: 12,
            valModel3: '안녕',
            select:'032',
            checked: true,
            checkList: [],
            picked:''
        }
    },
    setup() {
        
    },
    created(){},
    mounted() {
        
    },
    unmounted() {
        
    },
    methods: {
        
    },
}
</script>