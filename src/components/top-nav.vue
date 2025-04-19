<script setup>
let searchValue = '';
</script>

<template>
  <el-header class="header">
    <el-image class="icon" src="/public/talktalk.png" fit="cover" style="width: 45px;height: 45px"></el-image>
    <p class="name">TalkTalk</p>
    <el-tabs class="nav" tab-position="top">
      <el-tab-pane label="首页" class="navs"></el-tab-pane>
      <el-tab-pane label="分类" class="navs"></el-tab-pane>
      <el-tab-pane label="工具箱" class="navs"></el-tab-pane>
      <el-tab-pane label="我的" class="navs"></el-tab-pane>
      <el-tab-pane label="设置" class="navs"></el-tab-pane>
    </el-tabs>
    <el-input
        v-model="searchValue"
        style="width: 280px;height: 40px"
        placeholder="输入搜索"
        class="search"
        :prefix-icon="Search"
    />
    <el-avatar class="avatar"></el-avatar>
  </el-header>
</template>

<style scoped>
.header{
  height: 60px;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
}

.icon {
  position: fixed;
  left: 1%;
  top: 5px;
}

.name {
  position: fixed;
  left: 5%;
  top: 15px;
  font-size: 20px;
}

.nav{
  width: auto;
  position: fixed;
  left: 25%;
}

.el-tabs {
  --el-tabs-header-height: 60px;
}

.navs {
  width: 80px;
  height: 60px;
  font-size: 20px;
  line-height: 60px;
  text-align: center;
  color: #000000;
  margin: 0 10px;
  padding: 0;
  border: none;
  background-color: #ffffff;
}

.search {
  position: fixed;
  top: 10px;
  left: 55%;
}

.avatar {
  position: fixed;
  right: 1%;
  top: 10px;
}

</style>