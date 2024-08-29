import {RouteRecordRaw} from 'vue-router'
import Avatar from '../../components/Avatar'
import layout from '../../layout'
const componentRouter: RouteRecordRaw = {
    path: '/components',
    name: 'components',
    meta: {title: '组件'},
    component: layout,
    children: [
        {
            path: 'avatar',
            component: Avatar
        }
    ]
}
export default componentRouter