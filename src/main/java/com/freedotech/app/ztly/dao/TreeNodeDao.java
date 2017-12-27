package com.freedotech.app.ztly.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.freedotech.app.ztly.model.Node4ZTree;

public interface TreeNodeDao {
//     获取树节点列表
   List<Node4ZTree>  getNodesTreeData(@Param(value="tableName")String unitName);
}
