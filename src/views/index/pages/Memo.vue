<template>
    <div class="memo">
        <div v-if="store.infoList.length === 0" class="empty">
            <div class="con">
                <div class="tip">你的备忘录空空如也，去创建一个吧！</div>
                <button @click="skip">新建</button>
            </div>
        </div>
        <div v-else class="list">
            <div class="item"
                v-for="item in store.infoList"
                :key="item.time"
                @click="goDetail(item.id)"
            >
                <div class="left">
                    <h4>{{item.task}}</h4>
                    <div class="price">
                        <span style="margin-right:7px">本金{{item.principal}}</span>
                        <span>佣金{{item.commission}}</span>
                    </div>
                    <div class="time">{{ item.time }}</div>
                </div>
                <div class="right">
                    <div>{{item.isprincipal ? "本金" : ''}}</div>
                    <div>{{item.iscommission ? "佣金" : ''}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { RuleForm } from '@/stores/type';
import { useUserStore } from '../../../stores/index'
import { useRouter } from 'vue-router'

const store = useUserStore()
const router = useRouter()
console.log([...store.infoList])
const skip = () => {
    router.push({
        path: '/index/addition'
    })
}
const goDetail = (id: number) => {
    router.push({
        name: "detail",
        params:{
            id
        }
    })
}
</script>

<style lang="scss" scoped>
.memo{
    width:100%;
    height:100%;
    .empty{
        width:100%;
        height:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        .con{
            text-align: center;
            button{
                margin-top:10px;
                background:#ED7B30;
                padding:7px 80px;
                outline: none;
                border:none;
                border-radius: 3px;
                color:#fff;
            }
        }
    }
    .list{
        position: relative;
        .item{
            display:flex;
            padding:6px 8px;
            position: relative;
            border-bottom: 1px solid #888;
            .left{
                flex:1;
                color:#333;
                h4{
                    font-weight:700;
                }
            }
            .right{
                width:50px;
                color:#888;
                line-height:30px;
            }
            &::after{
                content:'';
                width:100%;
                height:100%;
                position: absolute;
                top:0;
                left:0;
            }
        }
    }
}
</style>