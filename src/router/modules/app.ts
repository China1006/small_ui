import {RouteRecordRaw} from 'vue-router'
import layout from '../../layout'
import dashboard from '../../views/dashboard'
const appRouter: RouteRecordRaw = {
    path: '/',
    name: 'dashboard',
    meta: {title: '主页'},
    redirect: '/dashboard',
    component: layout,
    children: [
        {
            path: 'dashboard',
            component: dashboard
        }
    ]
}
export default appRouter