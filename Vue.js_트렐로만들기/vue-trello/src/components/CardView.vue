<template>
  <div>
    Card
    <div v-if="loading">loading Card...</div>
    <div v-else>cid : {{cid}}</div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cid : 0,
            loading: false
        }
    },
    watch: {
        //route는 함수가 아닌 객체로도 호출이 가능, handler와 immediate로 즉시 호출 가능
        '$route': {
            handler: 'fetchData',
            immediate: true
        }
    },
    methods: {
        fetchData(){
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading = false
            }, 500)
        }
    },
}
</script>

<style>

</style>