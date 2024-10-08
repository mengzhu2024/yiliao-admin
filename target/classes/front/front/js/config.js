
var projectName = '医疗服务系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '公告信息',
	url: './pages/gonggaoxinxi/list.html'
}, 
{
	name: '医疗地图',
	url: './pages/yiliaoditu/list.html'
}, 
{
	name: '医疗药品',
	url: './pages/yiliaoyaopin/list.html'
}, 

{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springbootwssjx/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["查看","修改","删除"],"menu":"普通村民","menuJump":"列表","tableName":"putongcunmin"}],"menu":"普通村民管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"乡村医生","menuJump":"列表","tableName":"xiangcunyisheng"}],"menu":"乡村医生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"公告信息","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"乡村诊室","menuJump":"列表","tableName":"xiangcunzhenshi"}],"menu":"乡村诊室管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"健康档案","menuJump":"列表","tableName":"jiankangdangan"}],"menu":"健康档案管理"},{"child":[{"buttons":["新增","查看","修改","删除","考核奖励"],"menu":"学习培训","menuJump":"列表","tableName":"xuexipeixun"}],"menu":"学习培训管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"考核信息","menuJump":"列表","tableName":"kaohexinxi"}],"menu":"考核信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医疗地图","menuJump":"列表","tableName":"yiliaoditu"}],"menu":"医疗地图管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医疗药品","menuJump":"列表","tableName":"yiliaoyaopin"}],"menu":"医疗药品管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"类型信息","menuJump":"列表","tableName":"leixingxinxi"}],"menu":"类型信息管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"购买信息","menuJump":"列表","tableName":"goumaixinxi"}],"menu":"购买信息管理"},{"child":[{"buttons":["查看","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"管理员","tableName":"users"}],"menu":"管理员管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"},{"child":[{"buttons":["查看"],"menu":"医疗地图列表","menuJump":"列表","tableName":"yiliaoditu"}],"menu":"医疗地图模块"},{"child":[{"buttons":["查看","购买申请"],"menu":"医疗药品列表","menuJump":"列表","tableName":"yiliaoyaopin"}],"menu":"医疗药品模块"}],"roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"健康档案","menuJump":"列表","tableName":"jiankangdangan"}],"menu":"健康档案管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"紧急事故","menuJump":"列表","tableName":"jinjishigu"}],"menu":"紧急事故管理"},{"child":[{"buttons":["查看","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"},{"child":[{"buttons":["查看"],"menu":"医疗地图列表","menuJump":"列表","tableName":"yiliaoditu"}],"menu":"医疗地图模块"},{"child":[{"buttons":["查看","购买申请"],"menu":"医疗药品列表","menuJump":"列表","tableName":"yiliaoyaopin"}],"menu":"医疗药品模块"}],"roleName":"普通村民","tableName":"putongcunmin"},{"backMenu":[{"child":[{"buttons":["查看","新增"],"menu":"公告信息","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息管理"},{"child":[{"buttons":["新增","查看"],"menu":"乡村诊室","menuJump":"列表","tableName":"xiangcunzhenshi"}],"menu":"乡村诊室管理"},{"child":[{"buttons":["查看"],"menu":"健康档案","menuJump":"列表","tableName":"jiankangdangan"}],"menu":"健康档案管理"},{"child":[{"buttons":["查看","审核"],"menu":"紧急事故","menuJump":"列表","tableName":"jinjishigu"}],"menu":"紧急事故管理"},{"child":[{"buttons":["查看"],"menu":"学习培训","menuJump":"列表","tableName":"xuexipeixun"}],"menu":"学习培训管理"},{"child":[{"buttons":["查看"],"menu":"考核信息","menuJump":"列表","tableName":"kaohexinxi"}],"menu":"考核信息管理"},{"child":[{"buttons":["查看","支付","删除"],"menu":"购买信息","menuJump":"列表","tableName":"goumaixinxi"}],"menu":"购买信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"客服管理","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"公告信息列表","menuJump":"列表","tableName":"gonggaoxinxi"}],"menu":"公告信息模块"},{"child":[{"buttons":["查看"],"menu":"医疗地图列表","menuJump":"列表","tableName":"yiliaoditu"}],"menu":"医疗地图模块"},{"child":[{"buttons":["查看","购买申请"],"menu":"医疗药品列表","menuJump":"列表","tableName":"yiliaoyaopin"}],"menu":"医疗药品模块"}],"roleName":"乡村医生","tableName":"xiangcunyisheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
