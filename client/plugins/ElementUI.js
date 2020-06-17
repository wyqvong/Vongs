import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/en'
// 全局引用
// import ElementUI from 'element-ui'

// 按需引用
import { Button, Input } from 'element-ui'


// 自定义主题样式(这里我们会在这个文件内引入我们所需的组件的样式)
import '../assets/stylesheets/element-variables.scss'

// Vue.use(ElementUI)

// 按需使用
Vue.use(Button, { locale })
Vue.use(Input, { locale })
