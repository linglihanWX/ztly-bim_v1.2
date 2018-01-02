package com.freedotech.app.ztly.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.freedotech.app.ztly.model.Node4ZTree;
import com.freedotech.app.ztly.model.Pmodel;
import com.freedotech.app.ztly.service.PModelService;
import com.freedotech.app.ztly.service.YunweiService;

@RequestMapping(value = "/PModel")
@Controller
public class PModelController {
	@Autowired
	private PModelService pmodelService;
//	从数据库中查询树
	@RequestMapping(value="/getProjectModelTreeData",method=RequestMethod.GET,produces="application/json")
	@ResponseBody
	public List<Node4ZTree> getProjectModelTreeData(HttpServletRequest request) {
		//取得session中项目的id
		HttpSession session = request.getSession();
		String projectid= session.getAttribute("projectid")+"";
		//取到模型树形列表
		List<Node4ZTree> treeData = pmodelService.getProjectModelTreeData(projectid);
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
		List<Pmodel> modelList=pmodelService.getModelUrlByProjectId(projectId);
		System.out.println(modelList.toString());
		return modelList;
	}
}