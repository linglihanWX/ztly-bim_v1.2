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
	 * 跳转到	项目概况页面
	 * @return
	 */
	@RequestMapping(value="toGaikuang")
	public String toGaikuangPage() {
		return "dungou/gaikuang";

	}
	/**
	 * 跳转到	盾构监控页面
	 * @return
	 */
	@RequestMapping(value="toJiankong")
	public String toJiankongPage() {
		return "dungou/jiankong";
		
	}
	/**
	 * 跳转到 盾构监控页面>盾构检测页面
	 * @return
	 */
	@RequestMapping(value="toDaopanjiance")
	public String toDungoujiancePage() {
		return "dungou/daopanjiance";

	}
	/**
	 * 跳转到 盾构监控页面>自动导向系统页面
	 * @return
	 */
	@RequestMapping(value="toZidongdaoxiang")
	public String toZiDongDaoXiangPage() {
		return "dungou/zidongdaoxiang";

	}
	/**
	 * 跳转到 盾构监控页面>动态风险页面
	 * @return
	 */
	@RequestMapping(value="toDongtaifengxian")
	public String toDongtaifengxian() {
		return "dungou/dongtaifengxian";

	}
	/**
	 * 跳转到 盾构监控页面>盾构预警页面
	 * @return
	 */
	@RequestMapping(value="toDungouyujing")
	public String toDungouyujingPage() {
		return "dungou/dungouyujing";

	}
	/**
	 * 跳转到 盾构监控页面>异常盾构环关键数据展示页面
	 * @return
	 */
	@RequestMapping(value="toYichangdungouhuan")
	public String toYichangdungouhuanPage() {
		return "dungou/yichangdungouhuan";

	}
	/**
	 * 跳转到 盾构监控页面>材料消耗页面
	 * @return
	 */
	@RequestMapping(value="toCailiaoxiaohao")
	public String toCailiaoxiaohaoPage() {
		return "dungou/cailiaoxiaohao";

	}
	/**
	 * 跳转到 盾构监控页面>辅助决策页面
	 * @return
	 */
	@RequestMapping(value="toFuzhujuece")
	public String toFuzhujuecePage() {
		return "dungou/fuzhujuece";

	}
	/**
	 * 跳转到 盾构监控页面>管片破损页面
	 * @return
	 */
	@RequestMapping(value="toGuanpianposui")
	public String toGuanpianposunPage() {
		return "dungou/guanpianposui";

	}
	/**
	 * 跳转到 盾构安全风险页面-zzw
	 * 
	 */
	@RequestMapping(value="toFengxian")
	public String tofengxianPage() {
		return "dungou/fengxian";
		
	}


	/**
	 * 跳转到 资料管理页面
	 * @return
	 */
	@RequestMapping(value="toZiliao")
	public String toZiliao() {
		return "dungou/ziliao";

	}
	/**
	 * 跳转到 报表管理页面
	 * @return
	 */
	@RequestMapping(value="toBaobiao")
	public String toBaobiaoPage() {
		return "dungou/baobiao";
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
