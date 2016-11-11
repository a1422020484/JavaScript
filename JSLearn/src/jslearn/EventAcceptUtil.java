package jslearn;

import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletRequest;

public class EventAcceptUtil {
	
	public static String maxNum(List<String> list) {
		int length = list.size();
		String resultNum = "001";
		int[] numbers = new int[length];
		if (length > 0) {
			for (int i = 0; i < length; i++) {
				Object obj = list.get(i);

				int objLen = obj.toString().length();
				numbers[i] = Integer.valueOf(obj.toString().substring(objLen - 3, objLen));
			}
			Arrays.sort(numbers);

			resultNum = getNormDispcode(String.valueOf(numbers[length - 1] + 1));

		}
		return resultNum;
	}
	public static String getNormDispcode(String num) {
		String noZero = "";
		if (num != null && !"".equals(num)) {
			try {
				int intnum = Integer.parseInt(num);
				if (intnum < 10) {
					noZero = "00" + intnum;
				} else if (intnum < 100) {
					noZero = "0" + intnum;
				} else if (intnum < 1000) {
					noZero = String.valueOf(intnum);
				}

			} catch (Exception e) {
				// TODO: handle exception
			}

		}
		return noZero;
	}
	public static String getNextNumber(String num) {
		String noZero = "";
		if (num != null && !"".equals(num)) {
			try {
				int intnum = Integer.parseInt(num);
				if (intnum < 10) {
					intnum +=1;
					noZero = "00" + intnum;
				} else if (intnum < 100) {
					intnum +=1;
					noZero = "0" + intnum;
				} else if (intnum < 1000) {
					noZero = String.valueOf(intnum);
				}
				
			} catch (Exception e) {
				// TODO: handle exception
			}
			
		}
		return noZero;
	}
	public static String createTag(HashMap<String, Object> parameters) {
		String _tag = ""; // 显示在页面上行的事件编号字段 临时变量
		String TAG = "";//
		String kind = (String) parameters.get("kind");
		String OWNERDISTRICTCODE = (String) parameters.get("ownerdistrictcode");
		String SUBKIND = (String) parameters.get("threekind");
		/*if ("3".equals(SOURCE)) {
			String CALLTYPE = (String) parameters.get("calltype");
		} else if ("5".equals(SOURCE)) {
			String UPLEVEL = (String) parameters.get("uplevel");
		} else if ("8".equals(SOURCE)) {
			String EXPOSURELEVEL = (String) parameters.get("exposurelevel");
		}
		if ("1".equals(ISLETTER)) {
			String LETTERLEVEL = (String) parameters.get("letterlevel");
		}*/
		Calendar date = Calendar.getInstance();
		date.setTime(new Date());
		int year = date.get(date.YEAR);
		int month = date.get(date.MONTH) + 1;
		String m = String.valueOf(month);
		if (month < 10){m = "0" + month;}
		String kinds = "";
		// 矛盾纠纷事件1(A) 问题隐患2(B)
		if ("1".equals(kind)) {
			kinds = "A";
		} else if ("2".equals(kind)) {
			kinds = "B";
		}
		_tag = OWNERDISTRICTCODE.substring(4, OWNERDISTRICTCODE.length());
		while (_tag.length() < 8) {
			_tag += "0";
		}
		TAG = _tag + year + m + kinds + SUBKIND.substring(1, 3);
		return TAG;
	}
}
