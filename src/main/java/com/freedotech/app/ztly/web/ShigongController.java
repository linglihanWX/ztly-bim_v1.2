package com.freedotech.app.ztly.web;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.freedotech.app.ztly.service.ShigongService;

/**
* <p>Title: ShigongController</p>
* <p>Description:施工管理控制器 </p>
* <p>Company: freedo</p> 
*  @author freedoxiaolong 
   @date 2017年12月27日*/

@Controller
@RequestMapping("/shigong")
public class ShigongController {
	private static final Logger logger = LoggerFactory.getLogger(ShigongController.class);
	@Autowired
	private ShigongService shigongService;
	//跳转至施工管理概况页面
	@RequestMapping("/toGaikuang")
	public String toShigongPage() {
		return "/shigong/gaikuang";
	}
	//跳转至施工管理模块的进度管理功能页面
	@RequestMapping("/toJindu")
	public String toJinduPage() {
		return "/shigong/jindu";
	}
	//跳转至施工管理模块的场景管理模块
	@RequestMapping("/toChangjing")
	public String toChangjingPage() {
		return "/shigong/changjing";
	}
	//跳转至施工管理模块的安全管理模块
		@RequestMapping("/toAnquan")
		public String toAnquanPage() {
			return "/shigong/anquan";
		}
		@RequestMapping("/toAnquan3d")
		public String toAnquan3dPage() {
			return "/shigong/anquan3d";
		}
	/**
	 * 跳转到盾构页面
	 * @return
	 */
	@RequestMapping("/toDungou")
	public String toDungouPage(Model model) {
		List<Map> list1 = shigongService.getOneHData();
		List<Map> listsome = shigongService.getSomeHData();
		System.out.println(list1.toString());
		model.addAttribute("runtimedata", list1);
		model.addAttribute("historydata", listsome);
		return "/shigong/dungou";
	}
	//跳转至施工管理模块的风险页面
		@RequestMapping("/toFengxian")
		public String toFengxianPage() {
			return "/shigong/fengxian";
		}
		//跳转至施工管理模块的摄像头页面
		@RequestMapping("/toShexiangtou")
		public String toShexiangtouPage() {
			return "/shigong/shexiangtou";
		}
		//跳转至施工管理模块的沉降点页面
		@RequestMapping("/toChenjiangdian")
		public String toChenjiangdianPage() {
			return "/shigong/chenjiangdian";
		}
		//跳转至施工管理模块的展示管理模块
		@RequestMapping("/toZhanshi")
		public String toZhanshiPage() {
			return "/shigong/zhanshi";
		}
}
