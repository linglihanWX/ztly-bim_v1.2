package com.freedotech.app.ztly.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.freedotech.app.ztly.dao.PModelDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.freedotech.app.ztly.model.Node4ZTree;
import com.freedotech.app.ztly.model.PModel;
import com.freedotech.app.ztly.service.PModelService;
@Service
public class PModelServiceImpl implements PModelService {
	@Autowired
	private PModelDao pmodelDao;
	//查询树节点数据
	@Override 
	public List getProjectModelTreeData(String projectId) {
		List<String> unitNameList = pmodelDao.getUnitTableName(projectId);
		List list = new ArrayList();
		if(unitNameList.size()!=0) {
			for (String s : unitNameList) {
				List<Node4ZTree> treeList = pmodelDao.getNodesTreeData(s);
				list.add(treeList);
			}
		return list;
		}
		return null;
	}
	@Override
	public List<PModel> getModelUrlByProjectId(String projectid) {
		List<PModel> modelList = pmodelDao.getModelUrlByProjectId(projectid);
		return modelList;
	}
	@Override
	public void insertTreeData(Node4ZTree node4zTree) {
		pmodelDao.insertTreeData(node4zTree);
	}
}
