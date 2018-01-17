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
	public List getProjectModelTreeData(String projectId,String uid,String tablename) {
		//得到项目相关的所有模型的部件表名
		List<String> unitNameList = pmodelDao.getUnitTableName(projectId);
		List list = new ArrayList();
		//根节点时查询所有部件表下的根节点
		if(tablename==null){
			if(unitNameList.size()!=0) {
				for (String s : unitNameList) {
					//得到表下面的根节点
					List<Node4ZTree> treeList = pmodelDao.getChildrenByUid(s,uid);
					//设置节点所在的表
					for (Node4ZTree node: treeList) {
						Node4ZTree n4t = pmodelDao.isParent(s,node.getUid());
						if(n4t!=null){
							node.setIsParent("true");
						}else {
							node.setIsParent("false");
						}
						node.setTablename(s);
						list.add(node);
					}

				}
				return list;
			}
		}else{
			List<Node4ZTree> treeList = pmodelDao.getChildrenByUid(tablename,uid);
			for (Node4ZTree node: treeList) {
				Node4ZTree n4t = pmodelDao.isParent(tablename,node.getUid());
				if(n4t!=null){
					node.setIsParent("true");
				}else {
					node.setIsParent("false");
				}
				node.setTablename(tablename);
			}
			return treeList;
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
