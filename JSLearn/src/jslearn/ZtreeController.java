package jslearn;

import java.util.List;
import java.util.Map;

import javax.servlet.ServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import service.ZtreeServcie;
import util.AjaxResult;

@Controller
@RequestMapping("/ztree")
public class ZtreeController {
	
	
	@Autowired
	public ZtreeServcie ztreeServcie;
	
	@RequestMapping("/toIndex")
	public String toIndex(){
		return "ztree/index";
	}
	
	@RequestMapping("/getZtreeList")
	@ResponseBody
	public Map getHostdepartment(ServletRequest request) {
		try{
			List<Map> resultHost = ztreeServcie.getHostdepartment();
			return AjaxResult.ajaxResult("查询主办机构成功", resultHost);
		}catch(Exception e){
			e.printStackTrace();
			return AjaxResult.ajaxResult("查询主办机构失败", true);
		}
	}
}
