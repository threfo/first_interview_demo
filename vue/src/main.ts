import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

if (window.XInterviewClient) {
  window.XInterviewClient?.init(
    () => {
      // Token
      return "";
    },
    {
      // 配置参数
      thirdPartyPlatform: "wingman", // 第三方平台标识，用于token解析
      // apiUrl: "", // API接口地址
      // websocketUrl: "", // WebSocket地址
    }
  );
}
