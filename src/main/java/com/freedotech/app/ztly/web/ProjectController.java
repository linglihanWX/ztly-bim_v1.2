package com.freedotech.app.ztly.web;

import java.util.List;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import com.freedotech.app.ztly.model.Project;
import com.freedotech.app.ztly.model.User;
import com.freedotech.app.ztly.service.IProjectService;

@RequestMapping(value = "/")
@Controller
public class ProjectController {
	
	@Autowired
	private IProjectService projectService;
	/**
	 * 登录后跳转到主页面
	 * @param model
	 * @return
	 */
    @RequestMapping(value = "/main",method = RequestMethod.GET)
    public String index(Model model){
    	//得到当前认证实体，并强转为User对象
    	User user = (User) SecurityUtils.getSubject().getPrincipal();
    	//得到当前用户的id
    	int userid = user.getId();
    	//根据用户的id得到与其相关联的项目
    	List<Project> plist = projectService.listProjectByUserId(userid);
    	//保存项目列表
    	model.addAttribute("plist", plist);
        return "main";
    }
}
