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
/**
 * 专业系统：盾构管理
 * @author dxlc2
 *
 */
@Controller
@RequestMapping("ProSystem/dungou")
public class DungouController {
	
	@Autowired
	private ShigongService shigongService;
	/**
	 * 跳转到项目概况页面
	 * @return
	 */
	@RequestMapping(value="toGaikuang")
	public String toGaikuangPage() {
		return "dungou/gaikuang";

	}
	/**
	 * 跳转到盾构监控页面
	 * @return
	 */
	@RequestMapping(value="toJiankong")
	public String toJiankongPage() {
		return "dungou/jiankong";
		
	}
	/**
	 * 获取盾构的实时数据和30条历史数据
	 * @param model
	 * @return
	 */
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
