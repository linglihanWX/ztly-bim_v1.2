package com.freedotech.app.ztly.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/keyan")
public class KeyanController {
    private static final Logger logger = LoggerFactory.getLogger(RoleController.class);
    
    @RequestMapping(value = "/toGaikuang",method = RequestMethod.GET)
    public String toGaikuangPage(){
    	return "keyan/gaikuang";
    }

}
