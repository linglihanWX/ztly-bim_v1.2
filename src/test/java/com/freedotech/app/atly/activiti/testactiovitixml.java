package com.freedotech.app.atly.activiti;

import java.io.InputStream;
import java.util.zip.ZipInputStream;

import org.activiti.engine.ProcessEngine;
import org.activiti.engine.ProcessEngines;
import org.activiti.engine.repository.Deployment;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring/spring-activiti.xml"})
public class testactiovitixml {
	    private final static Logger logger = org.slf4j.LoggerFactory.getLogger(testactiovitixml.class);
	
		ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
	    	/**部署流程定义（从inputStream）*/
	
	    		  @Test  
	    		  public void deployWithZip(){  
	    		      InputStream inputStream=this.getClass()  // 获取当前class对象  
	    		                          .getClassLoader()   // 获取类加载器  
	    		                          .getResourceAsStream("diagrams/HelloWorld.zip"); // 获取指定文件资源流  
	    		      ZipInputStream zipInputStream=new ZipInputStream(inputStream); // 实例化zip输入流对象  
	    		      // 获取部署对象  
	    		      Deployment deployment=processEngine.getRepositoryService() // 部署Service  
	    		                   .createDeployment()  // 创建部署  
	    		                   .name("HelloWorld流程2")  // 流程名称  
	    		                   .addZipInputStream(zipInputStream)  // 添加zip是输入流  
	    		                   .deploy(); // 部署  
	    		      System.out.println("流程部署ID:"+deployment.getId());  
	    		      System.out.println("流程部署Name:"+deployment.getName());  
	    		  }  
	    	}
	    
	    
	


