<template>
  <div>
    Board
    <div v-if="loading">loading board...</div>
    <div v-else>
        <div>bid : {{bid}}</div>
        <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
        <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
    </div>
    <hr /> 
    <!-- 중첩라우팅 -->
    <router-view />
  </div>
</template>

<script>
export default {
    data() {
        return {
            bid : 0,
            loading: false
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 로딩시 로딩화면이 나오도록 설정 (임의의 딜레이 설정)
        fetchData(){
            this.loading = true
            setTimeout(() => {
                this.bid = this.$route.params.bid
                this.loading = false
            }, 500)
        }
    },
}
</script>

<style>

</style>