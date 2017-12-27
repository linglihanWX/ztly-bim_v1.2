package com.freedotech.app.ztly.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/shigong")
public class ShigongController {

	@RequestMapping("/toGaikuang")
	public String toShigongPage() {
		return "/shigong/gaikuang";
	}
}
