package com.freedotech.app.ztly.web;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.freedotech.app.ztly.service.ShejiService;

/**
* <p>Title: ShejiController</p>
* <p>Description: 设计模块  跳转页面控制器</p>
* <p>Company: freedo</p> 
*  @author freedoxiaolong 
   @date 2017年12月29日*/
@Controller
@RequestMapping("/sheji")
public class ShejiController {
	@Autowired
	private ShejiService shejiService;;
	//跳转至概况页面
   @RequestMapping("/toGaikuang")
	public String toGaikuangPage() {
		return "/sheji/gaikuang";
	}
   //跳转至任务页面
   @RequestMapping("/toRenwu")
  	public String toRenwuPage() {
  		return "/sheji/renwu";
  	}
   //跳转至文档管理页面
   @RequestMapping("/toWendang")
  	public String toWendangPage() {
  		return "/sheji/wendang";
  	}
   //跳转至bim管理页面
   @RequestMapping("/toBIMfangansheji")
  	public String toBimPage() {
  		return "/sheji/BIMfangansheji";
  	}
   //跳转至数字移交页面
   @RequestMapping("/toYijiao")
  	public String toYijiaoPage() {
  		return "/sheji/yijiao";
  	}
   //跳转至3d展示页面
   @RequestMapping("/toZhanshi")
  	public String toZhanshiPage() {
  		return "/sheji/zhanshi";
  	}
   //跳转至主体建筑页面
   @RequestMapping("/toZhutijianzhu")
   public String toZhutijianzhuPage() {
	   return "/sheji/zhutijianzhu";
   }
   //跳转至版本对比页面
   @RequestMapping("/toDuibi")
   public String toDuibiPage() {
	   return "/sheji/duibi";   
	   }
   //文件下载控制器
   @RequestMapping("/download")
   public ResponseEntity<byte[]> downloadFile(HttpServletRequest request,@RequestParam("filename") String filename,Model model){
		ResponseEntity<byte[]> entity = null;
		try {
			String path = request.getSession().getServletContext().getRealPath("/static/page/sheji/wendang/wendang/");
			System.out.println(path);
			File file =new File(path+File.separator+filename);
			HttpHeaders headers = new HttpHeaders();
			String downloadfilename = new String(filename.getBytes("UTF-8"), "iso-8859-1");
			//System.out.println(downloadfilename);
			headers.setContentDispositionFormData("attachment", downloadfilename);
			headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
			entity = new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(file),headers,HttpStatus.CREATED);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			return entity;
		}
	}

}
