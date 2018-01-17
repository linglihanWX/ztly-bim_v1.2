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
	List<Node4ZTree>  getChildrenByUid(@Param(value="tableName")String unitName,@Param(value="uid")String uid);
	//插入从XML中解析出来的模型树的数据
	void insertTreeData(Node4ZTree node4zTree);
	//判断是否是父节点
	Node4ZTree isParent(@Param(value="tableName")String unitName,@Param(value="uid")String uid);
}
