package com.freedotech.app.ztly.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import com.freedotech.app.ztly.model.Node4ZTree;
import com.freedotech.app.ztly.model.PModel;


public interface PModelDao {
	/**
	 * 获取pmodel
	 * @param projectid
	 * @return
	 */
	List<PModel> getModelUrlByProjectId(String projectid);
	/**
	 * 获取项目模型的部件表名
	 * @param id
	 * @return
	 */
	List<String>  getUnitTableName(String id);

	/**
	 * 查询部件表中的数据
	 * @param unitName
	 * @return
	 */
	List<Node4ZTree> getTreeDataInUnit(@Param(value="tableName")String unitName);
	/**
	 * 获取该节点下的一级子节点
	 * @param unitName
	 * @param uid
	 * @return
	 */
	List<Node4ZTree>  getChildrenByUid(@Param(value="tableName")String unitName,@Param(value="uid")String uid);
	/**
	 * 插入树的一个节点
	 * @param node4zTree
	 */
	void insertTreeData(@Param(value="node4zTree")Node4ZTree node4zTree,@Param(value="tablename")String tablename);

	/**
	 * 根据点击uid查询爷爷的uid
	 * @param uid
	 * @return
	 */
    String getGrandfatherUid(@Param(value="uid")String uid);
    
    /**
	 * 根据点击uid查询爷爷的属性
	 * @param uid
	 * @return
	 */
    Node4ZTree getAllAttrGrandfatherUid(@Param(value="uid")String uid);

	Node4ZTree getNode4ZTreeByUid(@Param(value="uid")String uid);
}
