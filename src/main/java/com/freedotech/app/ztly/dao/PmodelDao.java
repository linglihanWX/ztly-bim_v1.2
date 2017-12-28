package com.freedotech.app.ztly.dao;

import java.util.List;

import com.freedotech.app.ztly.model.Pmodel;

public interface PmodelDao {
    //获取pmodel
	List<Pmodel> getModelUrlByProjectId(String projectid);
	//获取项目模型的部件表名
	String  getUnitTableName(String id);
}
