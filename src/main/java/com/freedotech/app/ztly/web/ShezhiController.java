package com.freedotech.app.ztly.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Shezhi")
public class ShezhiController {

	@RequestMapping("/toBianmaku")
	public String toBianmakuPagePage() {
		return "bianmaku";
	}
}
