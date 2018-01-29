package com.freedotech.app.ztly.web;

import org.apache.shiro.SecurityUtils;

import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.freedotech.app.ztly.model.User;

import javax.security.auth.login.AccountLockedException;


/**
 * Created by Liwei on 2016/9/19.
 */
@RequestMapping(value = "/")
@Controller
public class LoginController {
    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
    /**
     * 跳转到登录界面
     * @return
     */
    @RequestMapping(value = {"/","login"},method = RequestMethod.GET)
    public String login(){
        System.out.println("我来登录了");
        return "login";
    }
    /**
     * 跳转到用户管理登录界面
     * @return
     */
    @RequestMapping(value = "/shiro",method = RequestMethod.GET)
    public String login1(){
    	return "shiro/login";
    }

    @RequestMapping(value = "/toLogin")
    public String login(User user, Model model){
    	 String msg = null;
        String username = user.getUsername();
        String password = user.getPassword();
        logger.debug("username => " + username);
        logger.debug("password => " + password);
        Subject subject = SecurityUtils.getSubject();

        UsernamePasswordToken token = new UsernamePasswordToken(username,password);
        try {
            subject.login(token);
        } catch (UnknownAccountException e) {
            e.printStackTrace();
            msg = e.getMessage();
        } catch (IncorrectCredentialsException e){
            e.printStackTrace();
            msg = "密码不匹配(生产环境中应该写:用户名和密码的组合不正确)";
        } catch (LockedAccountException e){
            e.printStackTrace();
            msg = e.getMessage();
        }
        if(msg == null){
            return "redirect:main";
        }

        model.addAttribute("msg",msg);
        return "login";
    }
    @RequestMapping(value = "/toShiroLogin",method = RequestMethod.POST)
    public String login1(User user, Model model){

    	String username = user.getUsername();
    	String password = user.getPassword();
    	logger.debug("username => " + username);
    	logger.debug("password => " + password);
    	UsernamePasswordToken token = new UsernamePasswordToken(username,password);
    	Subject subject = SecurityUtils.getSubject();
    	String msg = null;
    	try {
    		subject.login(token);
    	} catch (UnknownAccountException e) {
    		e.printStackTrace();
    		msg = e.getMessage();
    	} catch (IncorrectCredentialsException e){
    		e.printStackTrace();
    		msg = "密码不匹配(生产环境中应该写:用户名和密码的组合不正确)";
    	} catch (LockedAccountException e){
    		e.printStackTrace();
    		msg = e.getMessage();
    	}
    	if(msg == null){
    		return "redirect:/admin/user/list";
    	}
    	
    	model.addAttribute("msg",msg);
    	return "shiro/login";
    }

    /**
     * 退出登录，跳转到登录页面
     * @param model
     * @return
     */
    @RequestMapping(value = "/logout",method = RequestMethod.GET)
    public String logout(Model model){
        Subject subject = SecurityUtils.getSubject();
        subject.logout();
        model.addAttribute("msg","您已经退出登录");
        return "login";
    }
    /**
     * 退出登录，跳转到登录页面(shiro用户管理)
     * @param model
     * @return
     */
    @RequestMapping(value = "/tuichu",method = RequestMethod.GET)
    public String tuichu(Model model){
    	Subject subject = SecurityUtils.getSubject();
    	subject.logout();
    	model.addAttribute("msg","您已经退出登录");
    	return "shiro/login";
    }
	/**
	 * 跳转到页面（没有访问权限）
	 * @return
	 */
    @RequestMapping(value = "/unAuthorization")
    public String unAuthorization(){
        return "shiro/unAuthorization";
    }
}
