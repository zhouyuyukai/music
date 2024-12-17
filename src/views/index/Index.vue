<template>
    <div class="index">
        <RouterView></RouterView>
        <div class="footer">
            <RouterLink to="/index/memo"><el-icon><Tickets /></el-icon>备忘录</RouterLink>
            <RouterLink to="/index/addition"><el-icon><CirclePlus /></el-icon>新建</RouterLink>
            <RouterLink to="/index/mine"><el-icon><UserFilled /></el-icon>我的</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView , RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
.index{
    width:100%;
    height:100%;
    position: relative;
}
.footer{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    a{
        flex:1;
        text-align: center;
        color:#666;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .router-link-active{
        color:#ED7B30;
    }
}
</style>