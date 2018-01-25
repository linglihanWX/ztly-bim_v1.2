package com.freedotech.app.ztly.service;

import java.util.List;

import com.freedotech.app.ztly.model.Node4ZTree;
import com.freedotech.app.ztly.model.PModel;

public interface PModelService {
 /**
  * 查询树数据（同步）
  * @param projectId
  * @return
  */
 List getModelTreeSyn(String projectId);

 /**
  * 查询树数据（异步）
  * @param projectId
  * @param uid
  * @param tablename
  * @return
  */
 List getModelTreeAsyn(String projectId,String uid,String tablename);
// 模型
 List<PModel> getModelUrlByProjectId(String projectid);

 /**
  * 插入树的一个节点数据
  * @param node4zTree
  */
 void insertTreeData(Node4ZTree node4zTree,String tablename);

 /**
  * 根据点击uid查询爷爷的uid
  * @param uid
  * @return
  */
 String getGrandfatherUid(String uid);
}
