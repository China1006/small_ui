import {RouteRecordRaw} from 'vue-router'
import {SAvatar} from '../../components/Avatar'
import layout from '../../layout'
const componentRouter: RouteRecordRaw = {
    path: '/components',
    name: 'components',
    meta: {title: '组件'},
    component: layout,
    children: [
        {
            path: 'avatar',
            component: SAvatar
        }
    ]
}
export default componentRouter