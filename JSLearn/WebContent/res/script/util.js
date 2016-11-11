
var emptyOrNull = function (value){
	if (!value || value == null || value == ""){
		return true;
	}else{
		return false;
	}
}

function GetObjectValue(obj) {
	if (typeof (obj) == "undefined") {
		return "";
	} else if(!obj && obj == "null"){
		return "";
	}else{
		return obj;
	}
}

/**
 * 字符串截取
 * @param str 需要截取的原字符串
 * @param start 从第几个字符开始截取
 * @param subLength 截取的长度
 */
function subString(str,start,subLength){
	if (typeof (str) == "undefined") {
		return "";
	} else if(!str && str == "null"){
		return "";
	}else{
		if (str.length > subLength) {
			return str.substr(start, subLength) + "...";
		}else{
			return str;
		}
	}
}


/**
 * 字符串替换
 * @param obj 原字符串
 * @param str1 被替换的字符串
 * @param str2 替换字符串
 * @returns
 */
function replaceAll(obj,str1,str2){ 
	 var result = obj.replace(eval("/"+str1+"/gi"),str2); 
	 return result; 
	 } 

/**
 * 获取几位小数点
 * @param data
 * @param fixedNum
 * @returns {String}
 */
function fixed(data,fixedNum){
	if(typeof (data) == "undefined"){
		return "";
	}else if(typeof (data) == "string"){
		return parseFloat(data).toFixed(fixedNum);
	}else{
		return parseFloat(data.toFixed(fixedNum));
	}
}
/**
 * json字符串转json对象
 * @param jsonStr
 * @returns
 */
function strToJson(jsonStr){
	var jsonObj = eval("(" + jsonStr + ")");
	return jsonObj;
}
//序号
function getIndex(g,rowindex) {
	return (g.options.page - 1) * g.options.pageSize + rowindex + 1;
}