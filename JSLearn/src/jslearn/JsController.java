package jslearn;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/js")
public class JsController {
	
		@RequestMapping("/tojsIndex")
		public String tojsIndex(Model model){
			return "javascript/index";
		}
	}
