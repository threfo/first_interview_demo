<script setup lang="ts">
import { ref } from 'vue'

const data = ref({
  createUrl: "", // 创建面试方案的链接
  editUrl: "", // 编辑面试方案的链接

  // 配置参数
  thirdPartyPlatform: "wingman", // 第三方平台标识，用于token解析
  // apiUrl: "", // API接口地址
  // websocketUrl: "", // WebSocket地址
})

</script>

<template>
  <first-interview component-name="InterviewPlanManage"
    :component-data="data"
   />
</template>
