package com.freedotech.app.ztly.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
* <p>Title: ShigongController</p>
* <p>Description:施工管理控制器 </p>
* <p>Company: freedo</p> 
*  @author freedoxiaolong 
   @date 2017年12月27日*/

@Controller
@RequestMapping("/shigong")
public class ShigongController {
	//跳转至施工管理概况页面
	@RequestMapping("/toGaikuang")
	public String toShigongPage() {
		return "/shigong/gaikuang";
	}
	//跳转至施工管理模块的进度管理功能页面
	@RequestMapping("/toJindu")
	public String toJinduPage() {
		return "/shigong/jindu";
	}
}
