package jslearn;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/welcome")
public class JsController {
	
		@RequestMapping("/index")
		public String toIndex(Model model){
			return "/index";
		}
		
		
		
	}
