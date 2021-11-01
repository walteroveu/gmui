/* eslint-disable  */
import button from "./src/button.vue";

button.install = (Vue) => {
    Vue.component(button.name, button)
}

export default button