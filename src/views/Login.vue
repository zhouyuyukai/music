<template>
    <div class="login">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="auto"
          class="demo-ruleForm"
        >
          <h3>登录</h3>
          <el-form-item label="姓名" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%" @click="submitForm(ruleFormRef)">登录</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
interface RuleForm {
  username: string,
  password: string
}

const ruleForm = reactive({
  username: '',
  password: ''
})
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
        const token:string = ruleForm.username + ruleForm.password;
        localStorage.setItem("token" , token);
        router.push({path: '/'})
        ElMessage.success("登录成功！")
    } else {
        ElMessage.error("登录失败！")
    }
  })
}
</script>

<style lang="scss" scoped>
.login{
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center
}
.demo-ruleForm{
    width:300px;
    height:240px;
    border:1px solid #888;
    border-radius: 5px;
    padding:15px;
    h3{
        text-align: center;
        margin-bottom:15px;
    }
}
</style>