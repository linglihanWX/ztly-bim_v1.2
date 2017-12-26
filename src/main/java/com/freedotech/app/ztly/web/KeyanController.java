package com.freedotech.app.ztly.web;

import java.util.ArrayList;
import java.util.List;
import org.apache.shiro.SecurityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.freedotech.app.ztly.model.Shuiwen;
import com.freedotech.app.ztly.service.KeyanService;
import com.google.gson.Gson;

@Controller
@RequestMapping("/keyan")
public class KeyanController {
    private static final Logger logger = LoggerFactory.getLogger(KeyanController.class);
    
    @Autowired
    private KeyanService keyanService;
    /**
     * 跳转到项目概况页面
     * @return
     */
    @RequestMapping(value = "/toGaikuang/{projectid}",method = RequestMethod.GET)
    public String toGaikuangPage(@PathVariable String projectid){
    	//获取当前认证实体，并把所进入项目的id存到其session中
    	SecurityUtils.getSubject().getSession().setAttribute("projectid", Integer.parseInt(projectid));
    	return "keyan/gaikuang";
    }
    /**
     * 跳转到水文数据页面
     * @param model 存储返回的水文数据
     * @return
     */
    @RequestMapping(value = "/toShuiwen",method = RequestMethod.GET)
    public String toShuiwenPage(Model model){
    	//得到当前认证实体所进入项目的id
    	int id = (int) SecurityUtils.getSubject().getSession().getAttribute("projectid");
    	//根据项目id得到项目相关的水文数据
    	List<Shuiwen> list = keyanService.getShuiwenDataByProjectId(id);
    	//json字符串格式的水文数据，用于三维页面
    	String nodeJson = new Gson().toJson(list, ArrayList.class);
    	//存储list和nodeJson，在页面上获取
     	model.addAttribute("shuiwenList", list);
     	model.addAttribute("shuiwenJson", nodeJson);
    	return "keyan/shuiwen";
    }

}
