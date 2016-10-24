package jslearn;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

public class JsController {
	@Controller
	@RequestMapping("/js")
	public class FruitController{
		@RequestMapping("/tojsIndex")
		public String toIndex(Model model){
			return "javascript/index";
		}
	}

}
