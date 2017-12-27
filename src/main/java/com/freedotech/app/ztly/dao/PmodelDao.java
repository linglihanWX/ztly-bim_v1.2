package com.freedotech.app.ztly.dao;

public interface PmodelDao {
    //获取pmodel路径名  
	String getModelUrlByProjectId(String projectid);
	//获取项目模型的部件表名
	String  getUnitTableName(String id);
}
