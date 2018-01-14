package com.freedotech.app.ztly.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import com.freedotech.app.ztly.model.Node4ZTree;
import com.freedotech.app.ztly.model.PModel;


public interface PModelDao {
    //获取pmodel
	List<PModel> getModelUrlByProjectId(String projectid);
	//获取项目模型的部件表名
	List<String>  getUnitTableName(String id);
	//  获取树节点列表
	List<Node4ZTree>  getNodesTreeData(@Param(value="tableName")String unitName);
	//插入从XML中解析出来的模型树的数据
	void insertTreeData(Node4ZTree node4zTree);
}
