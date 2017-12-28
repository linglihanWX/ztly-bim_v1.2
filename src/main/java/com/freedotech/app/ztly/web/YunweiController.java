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
import com.freedotech.app.ztly.model.Pmodel;
import com.freedotech.app.ztly.service.YunweiService;

@Controller
@RequestMapping("/yunwei")
public class YunweiController {
	@Autowired
	private YunweiService yunweiService;
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
//	从数据库中查询树
	@RequestMapping(value="/getProjectModelTreeData",method=RequestMethod.GET,produces="application/json")
	@ResponseBody
	public List<Node4ZTree> getProjectModelTreeData(HttpServletRequest request) {
		//取得session中项目的id
		HttpSession session = request.getSession();
		String projectid= session.getAttribute("projectid")+"";
		//取到模型树形列表
		List<Node4ZTree> treeData = yunweiService.getProjectModelTreeData(projectid);
		return treeData;
	}
	//获取模型
	@RequestMapping(value="/getPmodel",method=RequestMethod.GET,produces="application/json")
	@ResponseBody
	public List<Pmodel> getModelUrl(HttpServletRequest request) {
		//取得session中项目的id
		HttpSession session = request.getSession();
		String projectId=session.getAttribute("projectid")+"";
		//获取模型
		List<Pmodel> modelList=yunweiService.getModelUrlByProjectId(projectId);
		System.out.println(modelList.toString());
		return modelList;
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
