package com.freedotech.app.ztly.service;

import java.util.List;

import com.freedotech.app.ztly.model.Node4ZTree;
import com.freedotech.app.ztly.model.Pmodel;

public interface YunweiService {
//	 获取树
  List<Node4ZTree> getProjectModelTreeData(String projectId);
//  模型
  List<Pmodel> getModelUrlByProjectId(String projectid);
}