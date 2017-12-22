package com.freedotech.app.ztly.web;

import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
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
    @RequestMapping(value = "/main",method = RequestMethod.GET)
    public String index(Model model){
    	User user = (User) SecurityUtils.getSubject().getPrincipal();
    	int userid = user.getId();
    	List<Project> plist = projectService.listProjectByUserId(userid);
    	model.addAttribute("plist", plist);
        return "main";
    }
}
