<template>
    <div class="WebSiteInfo-container">
        <h3 class="CardTitle tl">
            <i class="el-icon-data-line"></i>站点信息
        </h3>
        <ul class="InfoList">
            <li class="ListItem" v-for="item in InfoList" :key="item.id">
                <span>{{ item.title }}</span>
                <span>{{ item.nums }}{{ item.unit }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            InfoList: [
                {
                    id: 1,
                    title: '文章数目',
                    nums: 284,
                    unit: '篇'
                },
                {
                    id: 2,
                    title: '运行天数',
                    nums: 42,
                    unit: '天'
                },
                {
                    id: 3,
                    title: '本站访客数',
                    nums: 42,
                    unit: '人'
                },
                {
                    id: 4,
                    title: '本站总访问量',
                    nums: 99,
                    unit: '次'
                }
            ]
        }
    }
}
</script>
<style>
.WebSiteInfo-container {
    height: 220px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
}
.WebSiteInfo-container .CardTitle {
    font-size: 16px;
    margin: 0 12px;
    padding: 3px 0;
}
.WebSiteInfo-container .InfoList {
    height: 180px;
    width: 100%;
    /* background-color: rgb(41, 198, 77); */
}
.WebSiteInfo-container .InfoList .ListItem {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 5px;
    line-height: 45px;
    height: 45px;
    margin: 0 6px;
}
</style>