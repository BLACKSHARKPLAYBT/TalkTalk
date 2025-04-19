<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'; // 导入 useRouter
const router = useRouter(); // 获取路由实例
const user = ref('')
const password = ref('')
const msg = '未登录'

let temp = ()=>{
  localStorage.setItem('user', 'temp');
  localStorage.setItem('password', 'temp');
  localStorage.setItem('token', 'temp');
  router.push('/news');
};
</script>

<template>
  <el-container style="width: 100%;height: 100%">
    <el-form class="form">
      <h1>登录</h1>
      <el-input v-model="user" placeholder="请输入内容"></el-input>
      <h1>密码</h1>
      <el-input v-model="password" placeholder="请输入内容"></el-input>
      <el-button type="primary">登录</el-button>
      <router-link to="/register" style="color: #909399;text-decoration: none;transform: translateX(150px) translateY(8px)">注册</router-link>
    </el-form>
  </el-container>
  <el-aside>
    <el-alert type="error">{{msg}}</el-alert>
  </el-aside>
  <el-button type="primary" circle style="width: 100px;height: 100px;position: absolute;bottom: 200px;right: 200px" @click="temp">临时登录</el-button>
</template>

<style scoped>
.el-aside {
  position:relative;
  top: 10px;
  right: 20px;
  width: 200px;
  height: 100px;
  float: right;
}

.form {
  position: absolute;
  width: calc(60% - 20px);
  height: 400px;
  top: 20%;
  left: calc(50% - 30%);
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 0;
  box-shadow: 0 0 8px rgba(206, 212, 218,0.8);
}

.el-input {
  width: 40%;
  margin: 20px 0 20px 0;
}

.el-button {
  width: 40%;
  margin: 20px 0 20px 0;
}

</style>