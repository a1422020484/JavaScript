package fruitGame.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/fruit")
public class FruitController{
	@RequestMapping("/toIndex")
	public String toIndex(Model model){
		return "index";
	}
}
