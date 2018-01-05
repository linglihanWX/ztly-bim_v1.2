package com.freedotech.app.ztly.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DungouController {
	
	@RequestMapping(value="dungou")
	public String toDungouPage() {
		return "dungou/dungou";
	}
	
}
