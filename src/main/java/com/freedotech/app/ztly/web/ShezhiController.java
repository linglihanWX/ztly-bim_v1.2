package com.freedotech.app.ztly.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
* <p>Title: ShezhiController</p>
* <p>Description: 跳转至编码库控制器</p>
* <p>Company: freedo</p> 
*  @author freedoxiaolong 
   @date 2018年1月2日*/
@Controller
@RequestMapping("/")
public class ShezhiController {
 
	//跳转至编码库页面
	@RequestMapping("/toBianmaku")
	public String toBianmakuPagePage() {
		return "bianmaku";
	}
}
