<template>
    <div>
        <p>&copy;Ganxy|2024</p>
        <p @click="LinkToICP">浙ICP备2022019862号-1</p>
    </div>
</template>
<script>
export default {
    methods: {
        LinkToICP() {
            window.location.href = 'https://beian.miit.gov.cn/#/home';
        }
    }
}
</script>
<style>

</style>