<template>
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-form-item label="平台" prop="platform">
        <el-radio-group v-model="ruleForm.platform">
          <el-radio value="淘宝">淘宝</el-radio>
          <el-radio value="京东">京东</el-radio>
          <el-radio value="拼多多">拼多多</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="任务" prop="task">
        <el-input v-model="ruleForm.task" placeholder='如"拍台灯"'/>
      </el-form-item>
      <el-form-item label="本金" prop="principal">
        <el-form-item>
          <el-input style="width:40px;margin-right:5px" v-model="ruleForm.principal"/>
        </el-form-item>
        元
          <el-checkbox v-model="ruleForm.isprincipal" style="margin-left:15px">
            本金已返
          </el-checkbox>
      </el-form-item>
      <el-form-item label="佣金" prop="commission">
        <el-form-item>
          <el-input style="width:40px;margin-right:5px" v-model="ruleForm.commission"/>
        </el-form-item>
        元
        <el-checkbox v-model="ruleForm.iscommission" style="margin-left:15px">
          佣金已返
        </el-checkbox>
      </el-form-item>
      <el-form-item label="备注" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" placeholder="输入备注，没有可不写"/>
      </el-form-item>
      <el-form-item>
        <el-button class="btn" type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
      </el-form-item>
    </el-form>
</template>
  
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../../stores/index'
import type { RuleForm } from '../../../stores/type'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'

const store = useUserStore()
const router = useRouter()
const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = ref<RuleForm>({
  id: new Date().getTime(),
  platform: '',
  task: '',
  principal: '0',
  isprincipal: false,
  commission: '0',
  iscommission: false,
  desc: '',
  time: new Date().toLocaleString()
})

const rules = reactive<FormRules<RuleForm>>({
  platform: [
    { required: true, message: '请选择平台', trigger: 'change', },
  ],
  task: [
    { required: true, message: '请填写任务', trigger: 'change' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
        store.infoList.push(ruleForm.value)
        router.push({
          path: '/'
        })
        console.log('submit!' , store.infoList)
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>

<style lang="scss" scoped>
.demo-ruleForm{
    padding:20px 15px;
    .btn{
        width:100%;
        background:#EC7B31;
        outline: none;
        border:none;
    }
}
</style>