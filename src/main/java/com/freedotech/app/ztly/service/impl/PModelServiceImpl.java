package com.freedotech.app.ztly.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.freedotech.app.ztly.dao.PmodelDao;
import com.freedotech.app.ztly.dao.TreeNodeDao;
import com.freedotech.app.ztly.model.Node4ZTree;
import com.freedotech.app.ztly.model.Pmodel;
import com.freedotech.app.ztly.service.PModelService;

public class PModelServiceImpl implements PModelService {
	@Autowired
	private TreeNodeDao getTreeNodeDao;
	@Autowired
	private PmodelDao  pmodelDao;
//查询树节点数据
	@Override 
	public List<Node4ZTree> getProjectModelTreeData(String projectId) {
		String unitName = pmodelDao.getUnitTableName(projectId);
		if(null!=unitName&&unitName!="") {
		List<Node4ZTree> list = getTreeNodeDao.getNodesTreeData(unitName);
		return list;
		}
		return null;
	}
	@Override
	public List<Pmodel> getModelUrlByProjectId(String projectid) {
		List<Pmodel> modelList = pmodelDao.getModelUrlByProjectId(projectid);
		return modelList;
	}
}