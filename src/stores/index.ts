import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { RuleForm } from './type'

export const useUserStore = defineStore('user', () => {
  const infoList = ref<RuleForm[]>([
    {
      'commission': "20",
      'desc': "",
      'id': 1734316529357,
      'iscommission': false,
      'isprincipal': true,
      'platform': "淘宝",
      'principal': "10",
      'task': "111",
      'time': "2024/12/16 10:35:29"
    },
    {
      'commission': "60",
      'desc': "",
      'id': 1734316543867,
      'iscommission': true,
      'isprincipal': false,
      'platform': "京东",
      'principal': "40",
      'task': "22222",
      'time': "2024/12/16 10:35:43"
    }
  ]);
  return { 
    infoList
  }
})
