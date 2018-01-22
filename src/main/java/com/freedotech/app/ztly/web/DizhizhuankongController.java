package com.freedotech.app.ztly.web;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.freedotech.app.ztly.model.Dizhi;
import com.freedotech.app.ztly.model.Dizhizhuankong;
import com.freedotech.app.ztly.service.DizhizhuankongService;
import com.google.gson.Gson;

@Controller
@RequestMapping("/Zhuankong")

public class DizhizhuankongController {
	private static final Logger logger = LoggerFactory.getLogger(DizhizhuankongController.class);
	 @Autowired
	 private DizhizhuankongService dizhizhuankongService;
	 /**
	  * 跳转到盾构管理的安全风险页面
	  */
	 @RequestMapping(value="/zhuanKongDate",method=RequestMethod.GET,produces="application/json")
		@ResponseBody
	 public List<Dizhizhuankong> getZhuankongData(HttpServletRequest request){
	  
	    	//根据项目id得到项目相关的环境数据
	    	List<Dizhizhuankong> zhuankongList = dizhizhuankongService.getDzizhuankongData();
	    	return zhuankongList;
	    }
}
