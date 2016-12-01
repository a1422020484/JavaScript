package jslearn.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@RequestMapping("/tologin")
	public String tologin(){
		return "login/login";
	}
	
	
	@RequestMapping()
	public void login(){
		
	}
}
