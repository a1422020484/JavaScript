package util;

import java.lang.reflect.InvocationTargetException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletRequest;

import com.mysql.jdbc.StringUtils;

import oracle.sql.CLOB;

public class AjaxResult {
	public static HashMap<String, ?> ajaxRows(final List<?> list) {
		return new HashMap<String, Object>() {
			{
				put("Rows", list);
				put("Total", list.size());
			}
		};
	}

	public static HashMap ajaxRows(final java.util.List list,
			final long totalElements) throws IllegalAccessException,
			InvocationTargetException, NoSuchMethodException, SQLException {
		return new HashMap<String, Object>() {
			{
				// put("Rows",ajaxResetList(list,totalElements));
				put("Rows", list);
				put("Total", totalElements);
			}
		};
	}

	public static LinkedHashMap ajaxBootGridRows(final java.util.List list,
			final int current, final int rowCount, final long totalElements) {
		return new LinkedHashMap<String, Object>() {
			{
				put("current", current);
				put("rowCount", rowCount);
				put("rows", list);
				put("total", totalElements);
			}
		};
	}

	public static HashMap ajaxGeoJsons(final java.util.List list,
			final long totalElements) {
		// TODO Auto-generated method stub

		Map rst = new HashMap<String, Object>();
		rst.put("type", "FeatureCollection");
		for (Object obj : list) {

		}

		return new HashMap<String, Object>() {
			{
				put("Rows", list);
				put("Total", totalElements);
			}
		};
	}

	/**
	 * 将数据库查询处理的List数据进行处理，返回pointGeoJson(点GeoJson),pointGeoJson(面GeoJson),total(结果总数)
	 * @param list
	 * @param totalElements
	 * @return
	 * @throws IllegalArgumentException
	 * @throws IllegalAccessException
	 * @throws InvocationTargetException
	 * @throws NoSuchMethodException
	 * @throws SecurityException
	 * @throws SQLException
	 */
	public static Map<String, Object> ajaxGJsonsByMap(List<Map> list,
			final int totalElements) throws IllegalArgumentException,
			IllegalAccessException, InvocationTargetException,
			NoSuchMethodException, SecurityException, SQLException {
		// JSONObject pointRst = new JSONObject();
		// JSONObject polyRst = new JSONObject();
		Map<String, Object> pointRst = new HashMap<String, Object>();
		Map<String, Object> polyRst = new HashMap<String, Object>();
		pointRst.put("type", "FeatureCollection");
		polyRst.put("type", "FeatureCollection");
		List<Map<String, Object>> pointFeatures = new ArrayList<>();
		List<Map<String, Object>> polyFeatures = new ArrayList<>();
		list = ajaxResetList(list, totalElements);
		for (Map<String, Object> map : list) {
			Map<String, Object> pointFeature = new HashMap<String, Object>();
			Map<String, Object> polyFeature = new HashMap<String, Object>();
			pointFeature.put("geom", "");
			polyFeature.put("geom", "");
			Set<String> keys = map.keySet();
			for (String key : keys) {
				Object keyValue = map.get(key);
				if (keyValue != null) {
					if (key.equalsIgnoreCase("point")) {
						pointFeature.put("geom", keyValue);
					} else if (key.equalsIgnoreCase("polygon")) {
						polyFeature.put("geom", keyValue);
					} else {
						pointFeature.put(key, keyValue);
						polyFeature.put(key, keyValue);
					}
				}
			}
			pointFeatures.add(pointFeature);
			polyFeatures.add(polyFeature);
		}
		pointRst.put("Rows", pointFeatures);
		polyRst.put("Rows", polyFeatures);
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("pointGeoJson", pointRst);
		resultMap.put("polyGeoJson", polyRst);
		resultMap.put("total", totalElements);
		return resultMap;
	}
	

	public static List ajaxResetList(final List<Map> list,
									 final long totalElements) throws IllegalArgumentException,
			IllegalAccessException, InvocationTargetException,
			NoSuchMethodException, SecurityException, SQLException {

		//移除掉数据库中查出来的空数据
		List<Map> nullmap = new ArrayList<Map>();
		nullmap.add(null);
		list.removeAll(nullmap);

		for (Map map : list) {
			if (map != null && map.size() > 0) {
				Set<String> keys = map.keySet();
				for (String key : keys) {
					Object keyValue = map.get(key);
					//判断map是否为空
					if (key == null || keyValue == null) continue;
					if (key.equalsIgnoreCase("point")
							|| key.equalsIgnoreCase("polygon")
							|| key.equalsIgnoreCase("poly")) {
						if (StringUtils.isNullOrEmpty(keyValue.toString()))
							continue;
						if (keyValue instanceof CLOB) {
							CLOB clob = (CLOB) keyValue;
							keyValue = clob.getSubString((long) 1,
									(int) clob.length());
							map.put(key, keyValue);
						}
					}
				}
				map.put("TOTALSIZE", totalElements);
			}
		}
		List reuslt = list;
		return reuslt;
	}

	public static HashMap ajaxResult(final String message, final Object obj) {
		// TODO Auto-generated method stub
		return new HashMap<String, Object>() {
			{
				put("IsError", false);
				put("status", 200);
				put("Message", message);
				put("Data", obj);
			}
		};
	}

	public static HashMap ajaxResult(final String error_message,
			final boolean isError, final int status) {
		return new HashMap<String, Object>() {
			{
				put("IsError", isError);
				put("status", status);
				put("error_message", error_message);
			}
		};
	}

	public static HashMap ajaxResult(final String error_message,
			final boolean isError, final int status, final Object object) {
		return new HashMap<String, Object>() {
			{
				put("IsError", isError);
				put("status", status);
				put("error_message", error_message);
				put("Data", object);
			}
		};
	}

	public static HashMap ajaxResult(final String error_message,
			final boolean isError, final String status, final Object obj1,
			final Object obj2, final Object obj3) {
		return new HashMap<String, Object>() {
			{
				put("IsError", isError);
				put("status", status);
				put("error_message", error_message);
				put("building", obj1);
				put("buildingpoint", obj2);
				put("buildingpoly", obj3);
			}
		};
	}

	@SuppressWarnings("unchecked")
	public static LinkedHashMap ajaxResultLinkedHashMap(
			final String error_message, final boolean isError,
			final String status, final Object obj1, final Object obj2,
			final Object obj3, final Object obj4) {
		return new LinkedHashMap() {
			{
				put("IsError", isError);
				put("status", status);
				put("error_message", error_message);
				put("building", obj1);
				put("buildingpoint", obj2);
				put("buildingpoly", obj3);
				put("misbuilding", obj4);
			}
		};
	}

	@SuppressWarnings("unchecked")
	public static LinkedHashMap ajaxResultLinkedHashMap(
			final String error_message, final boolean isError,
			final String status, final Object obj1, final Object obj2,
			final Object obj3) {
		return new LinkedHashMap() {
			{
				put("IsError", isError);
				put("status", status);
				put("error_message", error_message);
				put("building", obj1);
				put("buildingpoint", obj2);
				put("buildingpoly", obj3);
			}
		};
	}

	@SuppressWarnings("unchecked")
	public static LinkedHashMap ajaxResultWorkNet(final String error_message,
			final boolean isError, final String status, final Object obj1,
			final Object obj2, final Object obj3) {
		return new LinkedHashMap() {
			{
				put("IsError", isError);
				put("status", status);
				put("error_message", error_message);
				put("point_geom", obj1);
				put("poly_geom", obj2);
				put("buildings", obj3);
			}
		};
	}

	@SuppressWarnings("unchecked")
	public static LinkedHashMap ajaxResultLinkedHashMap(
			final String error_message, final boolean isError,
			final String message, final Object objs) {
		return new LinkedHashMap() {
			{
				put("IsError", isError);
				put("status", message);
				put("error_message", error_message);
				put("buildings", objs);
			}
		};
	}

	public static HashMap<String, Object> requestParameters(
			ServletRequest request) {
		Enumeration<String> keys = request.getParameterNames();
		HashMap<String, Object> parameters = new HashMap<String, Object>();
		for (Enumeration e = keys; e.hasMoreElements();) {
			String thisName = e.nextElement().toString();
			String thisValue = request.getParameter(thisName);
			System.out.println(thisName + "--------------" + thisValue);
			parameters.put(thisName, thisValue);
		}
		parameters = changeValue(parameters);
		return parameters;
	}

	public static HashMap changeValue(HashMap parameters) {
		if (parameters.get("parms") != null) {
			String parms = (String) parameters.get("parms");
			String[] parmList = parms.split("&");
			for (String parmObj : parmList) {
				String[] parmObjStr = parmObj.split("=");
				if (parmObjStr.length > 1) {
					String value = parmObjStr[1];
					// value = URLEncoder.encode(value, "UTF-8");
					System.out
							.println(parmObjStr[0] + "--------------" + value);
					parameters.put(parmObjStr[0], value);
				}
			}
		}
		return parameters;
	}

	/**
	 * 处理参数：把用“,”分隔的字符串转换为List
	 * 
	 * @param parameters
	 * @param name
	 */
	public static void changeArrayValues(HashMap parameters, String name) {
		final List<String> valueArray = new ArrayList<String>();
		String valueStr = (String) parameters.get(name);
		if (!StringUtils.isNullOrEmpty(valueStr)) {
			String[] values = valueStr.split(",");
			for (String subValue : values) {
				if (!StringUtils.isNullOrEmpty(subValue)) {
					valueArray.add(subValue);
				}
			}
			parameters.put(name, valueArray);
		}
	}

	/**
	 * 处理参数1：区间值类型字段，下拉框模式,数据格式：xx-xx,转换为List 处理参数2：区间值类型字段，前后输入框模式,转换为List
	 * 
	 * @param parameters
	 * @param request
	 * @param name
	 */
	public static void changeArrayValues2(HashMap<String, Object> parameters,
										  ServletRequest request, String name) {
		String[] valueArrs = null;
		if (name.indexOf("ArrayDown") != -1) { // 区间值类型字段，但是是下拉框模式,数据格式：xx-xx
			if (request.getParameter(name).equalsIgnoreCase("")) {
				valueArrs = new String[]{"", ""};
			} else {
				valueArrs = request.getParameter(name).split("-");
			}
		} else { // 区间值类型字段，但是是前后输入框模式
			valueArrs = request.getParameterValues(name);
		}
		final List<String> values = new ArrayList<String>();
		if (valueArrs != null && valueArrs.length > 0) {
			for (String value : valueArrs) {
				if (!StringUtils.isNullOrEmpty(value)) {
					values.add(value);
				}
			}
		}
		parameters.put(name, values);
	}

	/**
	 * 获取参数为数组的值，并转换为List,且验证值为不为空，空值不要
	 * 
	 * @param parameters
	 * @param request
	 * @param name
	 */
	public static void changeArrayKeys(HashMap<String, Object> parameters,
									   ServletRequest request, String name) {
		String[] keyArray = request.getParameterValues(name);
		final List<String> keys = new ArrayList<String>();
		if (keyArray != null && keyArray.length > 0) {
			for (String key : keyArray) {
				if (!StringUtils.isNullOrEmpty(key)) {
					String realValue = request.getParameter(key);
					String[] realValueArr = request.getParameterValues(key);
					if (!StringUtils.isNullOrEmpty(realValue)) {
						if (realValueArr != null && 2 == realValueArr.length) {
							//若为时间区间，第二个参数为空，将第二个参数赋未来时间（2999/01/01）
							if (realValueArr[1].isEmpty() && name.equals("dateValue")) {
								realValueArr[1] = "2999/01/01";
								parameters.put(key, realValueArr);
							}
						}
						keys.add(key);
					} else {
						if (realValueArr != null && 2 == realValueArr.length) {

							if (realValueArr[0].isEmpty() && !realValueArr[1].isEmpty()) {
								//若为时间区间，第一个参数为空，将第一个参数赋过去时间（1900/01/01）
								if (name.equals("dateValue")) {
									realValueArr[0] = "1900/01/01";
									parameters.put(key, realValueArr);
								}
								keys.add(key);
							}
						}
					}
				}
			}
		}
		parameters.put(name, keys);
	}

	/**
	 * 获取参数为时间区间数组的值，并转换为List,且验证值为不为空，空值不要
	 *
	 * @param parameters
	 * @param request
	 * @param name
	 */
	public static void changeDataArrayKeys(HashMap<String, Object> parameters,
										   ServletRequest request, String name) {
		String[] keyArray = request.getParameterValues(name);
		final List<String> keys = new ArrayList<String>();
		if (keyArray != null && keyArray.length > 0) {
			for (String key : keyArray) {
				if (!StringUtils.isNullOrEmpty(key)) {
					String[] realValueArr = request.getParameterValues(key);
					if (realValueArr[0].isEmpty() && realValueArr[1].isEmpty()) {

					} else if (!realValueArr[0].isEmpty() && !realValueArr[1].isEmpty()) {
						keys.add(key);
					} else {
						if (realValueArr[0].isEmpty()) {
							realValueArr[0] = "1900/01/01";
							parameters.put(key, realValueArr);
							keys.add(key);
						}else if (realValueArr[1].isEmpty()) {
							realValueArr[1] = "2999/01/01";
							parameters.put(key, realValueArr);
							keys.add(key);
						}
					}
				}
			}
		}
		parameters.put(name, keys);
	}

	/**
	 * 获取参数为数组的值，并转换为List,不验证值为不为空
	 * 
	 * @param parameters
	 * @param request
	 * @param name
	 */
	public static void changeArrayKeys2(HashMap<String, Object> parameters,
			ServletRequest request, String name) {
		String[] keyArray = request.getParameterValues(name);
		final List<String> keys = new ArrayList<String>();
		if (keyArray != null && keyArray.length > 0) {
			for (String key : keyArray) {
				keys.add(key);
			}
		}
		parameters.put(name, keys);
	}

}