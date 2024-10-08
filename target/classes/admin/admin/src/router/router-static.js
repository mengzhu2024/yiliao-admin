import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import xiangcunyisheng from '@/views/modules/xiangcunyisheng/list'
    import jiankangdangan from '@/views/modules/jiankangdangan/list'
    import putongcunmin from '@/views/modules/putongcunmin/list'
    import yiliaoditu from '@/views/modules/yiliaoditu/list'
    import kaohexinxi from '@/views/modules/kaohexinxi/list'
    import xuexipeixun from '@/views/modules/xuexipeixun/list'
    import leixingxinxi from '@/views/modules/leixingxinxi/list'
    import users from '@/views/modules/users/list'
    import yiliaoyaopin from '@/views/modules/yiliaoyaopin/list'
    import jinjishigu from '@/views/modules/jinjishigu/list'
    import chat from '@/views/modules/chat/list'
    import messages from '@/views/modules/messages/list'
    import xiangcunzhenshi from '@/views/modules/xiangcunzhenshi/list'
    import gonggaoxinxi from '@/views/modules/gonggaoxinxi/list'
    import config from '@/views/modules/config/list'
    import goumaixinxi from '@/views/modules/goumaixinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/xiangcunyisheng',
        name: '乡村医生',
        component: xiangcunyisheng
      }
          ,{
	path: '/jiankangdangan',
        name: '健康档案',
        component: jiankangdangan
      }
          ,{
	path: '/putongcunmin',
        name: '普通村民',
        component: putongcunmin
      }
          ,{
	path: '/yiliaoditu',
        name: '医疗地图',
        component: yiliaoditu
      }
          ,{
	path: '/kaohexinxi',
        name: '考核信息',
        component: kaohexinxi
      }
          ,{
	path: '/xuexipeixun',
        name: '学习培训',
        component: xuexipeixun
      }
          ,{
	path: '/leixingxinxi',
        name: '类型信息',
        component: leixingxinxi
      }
          ,{
	path: '/users',
        name: '管理员',
        component: users
      }
          ,{
	path: '/yiliaoyaopin',
        name: '医疗药品',
        component: yiliaoyaopin
      }
          ,{
	path: '/jinjishigu',
        name: '紧急事故',
        component: jinjishigu
      }
          ,{
	path: '/chat',
        name: '客服管理',
        component: chat
      }
          ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
          ,{
	path: '/xiangcunzhenshi',
        name: '乡村诊室',
        component: xiangcunzhenshi
      }
          ,{
	path: '/gonggaoxinxi',
        name: '公告信息',
        component: gonggaoxinxi
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/goumaixinxi',
        name: '购买信息',
        component: goumaixinxi
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
