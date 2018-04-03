/*
* 这里是所有api的url地址
* */

var server = 'http://10.2.130.104';
//var server = 'http://10.0.53.230';

var url = {
	// 登入登出操作
	login:'/CTT-MS-server/login',
    logout:'/CTT-MS-server/logout',
	// 密码操作
	change_password:'/CTT-MS-server/index/ChangePassword',
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
	// 生产商名称操作
	check_manufacturer:'/CTT-MS-server/manufacturer/check',
	add_manufacturer:'/CTT-MS-server/manufacturer/add',
	delete_manufacturer:'/CTT-MS-server/manufacturer/delete',
	change_manufacturer:'/CTT-MS-server/manufacturer/change',
	// 材料入库操作
	stuff_in:'/CTT-MS-server/stuffin',
	stuff_check:'/CTT-MS-server/stuffin/check',
	stuff_change:'/CTT-MS-server/stuffin/change',
	stuff_enabled:'/CTT-MS-server/stuffin/enabled',
	// 库存操作
	inventory_check:'/CTT-MS-server/inventory/check',
	inventory_leave:'/CTT-MS-server/stuffleave/leave',
	inventory_leave_count:'/CTT-MS-server/stuffleave/newcount',
    inventory_leave_check:'/CTT-MS-server/stuffleave/newapplication', // 查看未处理的申请
    inventory_leave_check_confirm:'/CTT-MS-server/stuffleave/receive', // 接受申请
    inventory_leave_check_deny:'/CTT-MS-server/stuffleave/cancel', // 取消申请
    inventory_leave_check_application:'/CTT-MS-server/stuffleave/check', // 查看本仓库的所有调库申请
    inventory_leave_change_application:'/CTT-MS-server/stuffleave/change', // 修改申请
	// 材料盘存查询
	stuff_inventory_check:'/CTT-MS-server/stuffinventory',

	// 查询已发放材料的发放记录
	stuff_out_record:'/CTT-MS-server/stuffoutrecord',
    stuff_out_check_not_received:'/CTT-MS-server/stuffoutrecord2',//查看已經發放但未接收的申請


	// 材料第一级审批操作
	stuff_review_count:'/CTT-MS-server/stuffreview/newcount', // 待审批的数量
	stuff_review_check:'/CTT-MS-server/stuffreview/newapplication', // 待审批的数据详情
	stuff_review_agree:'/CTT-MS-server/stuffreview/agree', // 同意审批
	stuff_review_refuse:'/CTT-MS-server/stuffreview/refuse', // 拒绝审批
	stuff_review_change:'/CTT-MS-server/stuffreview/change', // 修改申请
    stuff_review_check_by_name:'/CTT-MS-server/stuffreview/newappbyname',// 按名字查找申请
    stuff_review_agree_all:'/CTT-MS-server/stuffreview/agreeall',// 批量同意
	stuff_review_get_name:'/CTT-MS-server/stuffreview/staffs',// 获取装维名字
	stuff_review_get_stuffs:'/CTT-MS-server/stuffreview/stuffs',// 获取所有的物资名称
	stuff_review_get_types:'/CTT-MS-server/stuffreview/stufftype',// 根据物资名称查型号
	stuff_review_by_type:'/CTT-MS-server/stuffreview/newappbytype',// 按物资名称和型号查申请


	// 材料第二级审批操作
    stuff_out_count:'/CTT-MS-server/stuffout/newcount', // 待审批的数量
    stuff_out_check:'/CTT-MS-server/stuffout/newapplication', // 待审批的数据详情
    stuff_out_agree:'/CTT-MS-server/stuffout/agree', // 同意审批
    stuff_out_refuse:'/CTT-MS-server/stuffout/refuse', // 拒绝审批
    stuff_out_change:'/CTT-MS-server/stuffout/change', // 修改申请
    stuff_out_check_by_name:'/CTT-MS-server/stuffout/newappbyname',// 按名字查找申请
    stuff_out_agree_all:'/CTT-MS-server/stuffout/agreeall',// 批量同意
    stuff_out_get_name:'/CTT-MS-server/stuffout/staffs',// 获取装维名字
    stuff_out_get_stuffs:'/CTT-MS-server/stuffout/stuffs',// 获取所有的物资名称
    stuff_out_get_types:'/CTT-MS-server/stuffout/stufftype',// 根据物资名称查型号
    stuff_out_by_type:'/CTT-MS-server/stuffout/newappbytype',// 按物资名称和型号查申请







    // 各种获取级联及选择框的操作
	get_area:'/CTT-MS-server/areaquery',
	get_store_house:'/CTT-MS-server/storehousequery',
	get_team:'/CTT-MS-server/teamquery',
	get_category:'/CTT-MS-server/categoryquery',
	get_stuff:'/CTT-MS-server/stuffquery',
	get_manufacturer:'/CTT-MS-server/manufacturerquery',
	get_user_store_house:'/CTT-MS-server/userstorehousequery',
	get_stuff_with_id:'/CTT-MS-server/stuffwithidquery',
	get_inventory_by_stuff:'/CTT-MS-server/stuffleave/query'

};

