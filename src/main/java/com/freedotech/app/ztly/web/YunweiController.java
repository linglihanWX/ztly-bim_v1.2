package com.freedotech.app.ztly.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.freedotech.app.ztly.model.Node4ZTree;
import com.freedotech.app.ztly.model.PModel;
import com.freedotech.app.ztly.service.YunweiService;

@Controller
@RequestMapping("/yunwei")
public class YunweiController {

	private static final Logger logger = LoggerFactory.getLogger(YunweiController.class);
//	跳转至运维概况首页
	@RequestMapping("/toGaikuang")
	public String toGaiKuangPage() {
		return "yunwei/gaikuang";
	}
//	跳转至资产管理
	@RequestMapping(value="/toZichan")
	public String toZichanPage() {
//		System.out.println(projectid);
//		String url=yunweiService.getModelUrlByProjectId(projectid);
//		model.addAttribute("URL", url);
		return "yunwei/zichan";
		}

    //	跳转至空间管理页面
	@RequestMapping("toKongjianManage")
	public String toKongjianPage() {
		return "yunwei/kongjian";
	}
	//  跳转至其他系统页面
	@RequestMapping("toJicheng")
	public String toJichengPage() {
		return "/yunwei/jicheng";
	}
}
