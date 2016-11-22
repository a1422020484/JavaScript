package jslearn.bootstrap;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import util.AjaxResult;

@Controller
@RequestMapping("/bsform")
public class BsFormController {
	
	@RequestMapping("/toForm")
	public String toForm(){
		return "bootstrap/form/Form";
	}
	
	@RequestMapping("/form")
	@ResponseBody
	public Map form(HttpServletRequest request){
		
		HashMap<String, Object> parameters = AjaxResult.requestParameters(request);
		
		String name = parameters.get("name").toString();
		if(name.length()>0){
			return AjaxResult.ajaxResult("请求成功", false);
		}else{
			return AjaxResult.ajaxResult("请求失败", true, 400);
		}
	}
}
