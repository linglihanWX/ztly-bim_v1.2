package com.freedotech.app.ztly.service;

import java.util.List;

import com.freedotech.app.ztly.model.Node4ZTree;
import com.freedotech.app.ztly.model.PModel;

public interface PModelService {
//	 获取树
 List getProjectModelTreeData(String projectId);
// 模型
 List<PModel> getModelUrlByProjectId(String projectid);
 
 void insertTreeData(Node4ZTree node4zTree);
}
