/*
* 这里是所有api的url地址
* */

var server = 'http://10.2.130.178';

var url = {
	// 登入登出操作
	login:'/CTT-MS-server/login',
    logout:'/CTT-MS-server/logout',
	// 装维人员操作
	delete_staff:'/CTT-MS-server/staff/delete',
	check_staff:'/CTT-MS-server/staff/check',
	change_staff:'/CTT-MS-server/staff/change',
	add_staff:'/CTT-MS-server/staff/add',
	// 权限操作
	check_auth:'/CTT-MS-server/checkauth',
	// 管理员操作
	check_user:'/CTT-MS-server/user/check',
	delete_user:'/CTT-MS-server/user/delete',
	add_user:'/CTT-MS-server/user/add',
	change_user:'/CTT-MS-server/user/change',
	// 地区操作
	add_area:'/CTT-MS-server/area/add',
	check_area:'/CTT-MS-server/area/check',
	delete_area:'/CTT-MS-server/area/delete',
	change_area:'/CTT-MS-server/area/change',
	// 仓库操作
	add_storehouse:'/CTT-MS-server/storehouse/add',
	delete_storehouse:'/CTT-MS-server/storehouse/delete',
	check_storehouse:'/CTT-MS-server/storehouse/check',
	change_storehouse:'/CTT-MS-server/storehouse/change',
	// 班组操作
	change_team:'/CTT-MS-server/team/change',
	add_team:'/CTT-MS-server/team/add',
	delete_team:'/CTT-MS-server/team/delete',
	check_team:'/CTT-MS-server/team/check',
	// 材料大类操作
	check_category:'/CTT-MS-server/category/check',
	add_category:'/CTT-MS-server/category/add',
	change_category:'/CTT-MS-server/category/change',
	delete_category:'/CTT-MS-server/category/delete',
	// 材料名称操作
	check_stuff:'/CTT-MS-server/stuff/check',
	add_stuff:'/CTT-MS-server/stuff/add',
	delete_stuff:'/CTT-MS-server/stuff/delete',
	change_stuff:'/CTT-MS-server/stuff/change',

	// 各种获取级联及选择框的操作
	get_area:'/CTT-MS-server/areaquery',
	get_store_house:'/CTT-MS-server/storehousequery',
	get_team:'/CTT-MS-server/teamquery',
	get_category:'/CTT-MS-server/categoryquery',
	get_stuff:'/CTT-MS-server/stuffquery'

};

