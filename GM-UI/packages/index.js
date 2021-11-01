/* eslint-disable  */
// 导入组件
import GMButton from './button/index'
// import GMskeleton from './skeleton/index'

// 存储组件列表
const components = [
    GMButton,
    // GMskeleton
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
    install,
    GMButton,
    // GMskeleton
};