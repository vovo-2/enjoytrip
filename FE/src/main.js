import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import axios from "axios";
import vuetify from "@/plugins/vuetify";
import { createPinia } from "pinia";
import { loadFonts } from "@/plugins/webfontloader";
import HBtn from "@/components/common/Button.vue";
import HInput from "@/components/common/Input.vue";
import Hselect from "@/components/common/Select.vue";
import HChip from "@/components/common/PoinChip.vue";
loadFonts();

const app = createApp(App);
const pinia = createPinia();
app.component("HBtn", HBtn);
app.component("HChip", HChip);
app.component("HSelect", Hselect);
app.component("HInput", HInput);
app.config.globalProperties.$axios = axios;
app.use(router);
app.use(pinia);
app.use(vuetify);
app.mount("#app");
