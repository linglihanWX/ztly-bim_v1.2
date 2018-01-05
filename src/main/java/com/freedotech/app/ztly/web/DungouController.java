package com.freedotech.app.ztly.web;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.freedotech.app.ztly.service.ShigongService;

@Controller
public class DungouController {
	
	@Autowired
	private ShigongService shigongService;
	
	@RequestMapping(value="dungou")
	public String toDungouPage() {
		return "dungou/dungou";

	}
	@RequestMapping(value="getdungoudata",produces="application/json")
	@ResponseBody
	public List getdungoudata(Model model) {
		List<Map> list1 = shigongService.getOneHData();
		List<Map> listsome = shigongService.getSomeHData();
		List list = new ArrayList();
		list.add(list1);
		list.add(listsome);
		return list;

	}
}
