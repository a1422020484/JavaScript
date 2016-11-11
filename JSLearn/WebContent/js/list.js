/***ztree**/
$(function(){
  $('.zzjg').click();$('.zhzl').click();
  /******changeID******/
  $('.z-treed .tab-d a').click(function(){
    var idx=$(this).attr('class');
    $('.bodyer-left .ztree').each(function(){
      if($(this).attr('id')!==idx){
        $(this).hide();
      }else{
        $(this).show();
      }
    })      
  });
  $('.btn-get').click(function(){
  	$('.z-treed .tab-d a').eq(0).click();
  	$('.z-treed .tab-d a').eq(2).click();
  });
})


/**********主办单位按区划分类*************/
function zzjg(){
	var setting = {
		view: {dblClickExpand: false,},
		data: {simpleData: {enable: true}},
		callback: {onClick: onClick}
	};
	
	var url = rootPath + "/ztree/getZtreeList";
	var data = {};
	var zNodes = [];
	doPost(url,data,function(result) {
		if(result){
			if(result.IsError == true){
				alert(result.error_message);
			}else{
				for(var i=0;i<result.Data.length;i++){
					zNodes.push({"id":parseInt(result.Data[i].ID),"pId":parseInt(result.Data[i].PID),"name":result.Data[i].NAME,"groupid":result.Data[i].GROUPID,"target":result.Data[i].TARGET});
				}
				//console.log(zNodes);
			}	
		}
	});
	/*var zNodes =[
		{ id:11, pId:1, name:"成员单位"},
		{ id:111, pId:11, name:"成员单位查询"},
		{ id:112, pId:11, name:"成员单位添加"},
		{ id:12, pId:1, name:"机构人员"},
		{ id:121, pId:12, name:"机构人员查询"},
		{ id:122, pId:12, name:"业务培训"},
		{ id:1221, pId:122, name:"业务培训添加"},
		{ id:1221, pId:122, name:"业务培训查询"},
		{ id:123, pId:12, name:"机构人员统计"},
		{ id:13, pId:1, name:"工作网格"},
		{ id:131, pId:13, name:"工作网格添加"},
		{ id:132, pId:13, name:"工作网格查询"},
		{ id:133, pId:13, name:"是否划分到工作网格房屋信息查询"},
		{ id:134, pId:13, name:"工作网格添加（新）"},
		{ id:135, pId:13, name:"工作网格统计"}
	];*/

	function onClick(e,treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("zzjg");
		zTree.expandNode(treeNode);
		var sNodes = zTree.getSelectedNodes();
		if (sNodes.length > 0) {
			var isParent = sNodes[0].isParent;
			if(isParent==false){
				$('.hostU').val(sNodes[0].name);
				$('.tit .close').click();
			}
		}
	}

	$(document).ready(function(){
		$.fn.zTree.init($("#zzjg"), setting, zNodes);
	});
}
/**********主办单位按类别分类*************/
function jcxx(){
	var setting = {
		view: {dblClickExpand: false,},
		data: {simpleData: {enable: true}},
		callback: {onClick: onClick}
	};
	var zNodes =[
		{ id:10, pId:1, name:"行政区划"},
		{ id:101, pId:10, name:"行政区划管理"},
		{ id:102, pId:10, name:"行政区划查询"},
		{ id:11, pId:1, name:"地理网格"},
		{ id:111, pId:11, name:"网格信息查询"},
		{ id:112, pId:11, name:"网格信息注销"},
		{ id:12, pId:1, name:"房屋信息"},
		{ id:121, pId:12, name:"房屋信息添加"},
		{ id:122, pId:12, name:"房屋信息查询"},
		{ id:123, pId:12, name:"房间信息查询"},
		{ id:124, pId:12, name:"房屋信息统计"},
		{ id:125, pId:12, name:"房间信息统计"},
		{ id:13, pId:1, name:"人口信息"},
		{ id:131, pId:13, name:"人口信息录入"},
		{ id:132, pId:13, name:"人口信息查询"},
		{ id:133, pId:13, name:"人口信息统计"},
		{ id:134, pId:13, name:"人口信息分项统计"},
		{ id:14, pId:1, name:"物业信息"},
		{ id:141, pId:14, name:"物业管理公司信息添加"},
		{ id:142, pId:14, name:"物业管理公司信息查询"},
		{ id:15, pId:1, name:"计划生育"},
		{ id:151, pId:15, name:"育龄人口查询"},
		{ id:152, pId:15, name:"育龄人口统计"},
		{ id:16, pId:1, name:"交流平台"},
		{ id:17, pId:1, name:"系统消息发布"},
		{ id:18, pId:1, name:"重点场所"},
		{ id:181, pId:18, name:"重点场所录入"},
		{ id:182, pId:18, name:"重点场所查询"}
	];

	function onClick(e,treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("jcxx");
		zTree.expandNode(treeNode);
		var sNodes = zTree.getSelectedNodes();
		if (sNodes.length > 0) {
			var isParent = sNodes[0].isParent;
			if(isParent==false){
				$('.hostU').val(sNodes[0].name);
				$('.tit .close').click();
			}
		}
	}

	$(document).ready(function(){
		$.fn.zTree.init($("#jcxx"), setting, zNodes);
	});
}
/**********协办单位按区划分类*************/
function zhzl(){
	var setting = {
		view: {dblClickExpand: false,},
		data: {simpleData: {enable: true}},
		check: {
				enable: true
			},
		callback: {onClick: onClick}
	};
/*************父节点需添加target:"parentnd"*******************/
	var zNodes =[
		{ id:1, pId:0, name:"全选",open:true, target:"parentnd"},
		{ id:11, pId:1, name:"社会治安", target:"parentnd"},
		{ id:111, pId:11, name:"治安状况", target:"parentnd"},
		{ id:1111, pId:111, name:"社会治安评估分析"},
		{ id:112, pId:11, name:"重点人口管理", target:"parentnd"},
		{ id:1121, pId:112, name:"C类人员管理"},
		{ id:1121, pId:112, name:"C类人口统计"},
		{ id:1121, pId:112, name:"重点人口添加"},
		{ id:113, pId:11, name:"安置帮教", target:"parentnd"},
		{ id:1131, pId:113, name:"安置帮教(刑事类)查询"},
		{ id:1131, pId:113, name:"安置帮教(帮教类)查询"},
		{ id:114, pId:11, name:"综治监督"},
		{ id:12, pId:1, name:"矛盾纠纷调解", target:"parentnd"},
		{ id:121, pId:12, name:"调解流程"},
		{ id:122, pId:12, name:"矛盾纠纷受理"},
		{ id:123, pId:12, name:"受理事项处理"},
		{ id:124, pId:12, name:"受理事项查询"},
		{ id:125, pId:12, name:"矛盾纠纷统计"},
		{ id:13, pId:1, name:"流动人口和出租屋综管", target:"parentnd"},
		{ id:131, pId:13, name:"出租屋分类管理"},
		{ id:132, pId:13, name:"业主信息管理"},
		{ id:133, pId:13, name:"租赁合同管理"}
	];

	function onClick(e,treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("zhzl");
		zTree.expandNode(treeNode);
	};
	$(document).ready(function(){
		$.fn.zTree.init($("#zhzl"), setting, zNodes);
		$('.btnztree').click(function(){
			var zTree = $.fn.zTree.getZTreeObj("zhzl");
			var nodes = zTree.getCheckedNodes();
			var v="";
			for(var i=0;i<nodes.length;i++){
				if(nodes[i].target !== "parentnd"){
					v+=nodes[i].name + ",";
					$('.coU').val(v);
				}		
			};
		})
	});
}


/**********协办单位按类别分类*************/
function sjcl(){
	var setting = {
		view: {dblClickExpand: false,},
		data: {simpleData: {enable: true}},
		check: {
				enable: true
			},
		callback: {onClick: onClick}
	};
/*************父节点需添加target:"parentnd"********************/
	var zNodes =[
		{ id:1, pId:0, name:"全选",open:true, target:"parentnd"},
		{ id:11, pId:1, name:"受理事件", target:"parentnd"},
		{ id:111, pId:11, name:"矛盾纠纷事件登记"},
		{ id:112, pId:11, name:"问题隐患事件登记"},
		{ id:113, pId:11, name:"暂存(退回)事件"},
		{ id:114, pId:11, name:"正在处理事件"},
		{ id:115, pId:11, name:"确认办结事件"},
		{ id:116, pId:11, name:"已销案事件"},
		{ id:12, pId:1, name:"研判分流", target:"parentnd"},
		{ id:121, pId:12, name:"待分流事件"},
		{ id:122, pId:12, name:"待确认事件"},
		{ id:123, pId:12, name:"待销案事件"},
		{ id:124, pId:12, name:"全部分流事件"},
		{ id:13, pId:1, name:"调处整治", target:"parentnd"},
		{ id:131, pId:13, name:"主办事件"},
		{ id:132, pId:13, name:"协办事件"},
		{ id:133, pId:13, name:"全部调处事件"},
		{ id:14, pId:1, name:"领导办公", target:"parentnd"},
		{ id:141, pId:14, name:"待批示事件"},
		{ id:141, pId:14, name:"疑难件审核"},
		{ id:141, pId:14, name:"疑难件审批"},
		{ id:141, pId:14, name:"待延期审批"},
		{ id:141, pId:14, name:"延期审批记录"},
		{ id:141, pId:14, name:"督办事件"},
		{ id:141, pId:14, name:"催办事件"},
		{ id:15, pId:1, name:"事件查询"},
		{ id:16, pId:1, name:"事件统计"},
		{ id:17, pId:1, name:"事件统计分析"}
	];

	function onClick(e,treeId, treeNode) {
		var zTree = $.fn.zTree.getZTreeObj("sjcl");
		zTree.expandNode(treeNode);
	};
	$(document).ready(function(){
		$.fn.zTree.init($("#sjcl"), setting, zNodes);
		$('.btnztree').click(function(){
			var zTree = $.fn.zTree.getZTreeObj("sjcl");
			var nodes = zTree.getCheckedNodes(true);
			var v="";
			for(var i=0;i<nodes.length;i++){
				if(nodes[i].target !== "parentnd"){
					v+=nodes[i].name + ",";
					$('.coU').val(v);
				}			
			};
		})
	});
}

