package jslearn.bootstrap;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/bootstrap")
public class BootStrapController {
	
	@RequestMapping("/toIndex")
	public String toIndex(){
		return "bootstrap/index";
	}
	@RequestMapping("/toTable")
	public String toTable(){
		return "bootstrap/table/ShanGe";
	}
	
}
