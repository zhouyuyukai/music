<template>
    <div class="detail">
        <div class="number">任务编号：第<span>{{ i! + 1 }}</span>个任务</div>
        <div class="con">
            <div class="top">
                <div class="left">
                    <div class="first">{{data?.task}}</div>
                    <div class="same">本金  {{  data?.principal  }}  元</div>
                    <div class="same">佣金  {{  data?.commission  }}  元</div>
                </div>
                <div class="right">
                    <div class="first">{{data?.platform}}</div>
                    <div class="same">
                        {{ data?.isprincipal }}
                        <el-switch v-model="data!.isprincipal" />
                    </div>
                    <div class="same">
                        {{ data?.iscommission }}
                        <el-switch v-model="data!.iscommission" />
                    </div>
                </div>
            </div>
            <div class="bottom">备注</div>
        </div>
        <button class="save">保存</button>
        <button class="del">删除</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute , useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useUserStore } from '../stores/index'
import type { RuleForm } from '../stores/type'

const store = useUserStore()
const route = useRoute()
const router = useRouter()
const data = ref<RuleForm>()
const i = ref<number>()

const index = store.infoList.findIndex(v => v.id + '' === route.params.id)
if( index >= 0 ){
    data.value = store.infoList[index];
    i.value = index;
    console.log(data.value)
}else{
    router.push({
        path: '/'
    })
    ElMessage.error("任务不存在")
}
</script>

<style lang="scss" scoped>
.detail{
    width:100%;
    height:100%;
    padding:0 15px;
    background:#F5F5F5;
    .number{
        padding:10px 0;
    }
    .con{
        width:100%;
        min-height:200px;
        background:#fff;
        padding:10px;
        border-radius: 5px;
        display:flex;
        flex-direction: column;
        .top{
            flex:1;
            border-bottom: 1px solid #eee;
            display:flex;
            .left{
                flex:1;
            }
            .right{
                width:80px;
            }
        }
        .bottom{
            margin:5px 0;
            height:30px;
        }
    }
}
.first{
    height:50px;
}
.same{
    height:40px;
    line-height:40px;
}
</style>