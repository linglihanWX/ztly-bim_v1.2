package com.freedotech.app.ztly.service.impl;

import java.text.DecimalFormat;
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

	/**
	 * 查询树数据（异步）
	 * @param projectId
	 * @param uid
	 * @param tablename
	 * @return
	 */
	@Override 
	public List getModelTreeAsyn(String projectId,String uid,String tablename) {
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
						node.setTablename(s);
						list.add(node);
					}

				}
				return list;
			}
		}else{
			List<Node4ZTree> treeList = pmodelDao.getChildrenByUid(tablename,uid);
			if(tablename.equals("t_unit16")){
				DecimalFormat f = new DecimalFormat("0000");
				for (Node4ZTree node: treeList) {
					node.setTablename(tablename);
					String id = node.getUid();
					int leaf = node.getLeaf();
					if(!id.equals("0")&&leaf!=1){
						String num = f.format((Integer.parseInt(id)-2)/18);
						String name = "第"+num+"环";
						node.setName(name);
					}

				}
				if(treeList.get(0).getLeaf()==1){
					Node4ZTree n1 = new Node4ZTree("camera1",uid,"监测点1","","",1);
					Node4ZTree n2 = new Node4ZTree("camera2",uid,"监测点2","","",1);
					treeList.add(n1);
					treeList.add(n2);
				}
			}else{
				for (Node4ZTree node: treeList) {
					node.setTablename(tablename);
				}
			}

			return treeList;
		}
		return null;
	}
	/**
	 * 查询树数据（同步）
	 * @param projectId
	 * @return
	 */
	@Override
	public List getModelTreeSyn(String projectId) {
		//得到项目相关的所有模型的部件表名
		List<String> unitNameList = pmodelDao.getUnitTableName(projectId);
		List list = new ArrayList();
		//根节点时查询所有部件表下的根节点
			for (String s : unitNameList) {
				//得到表下面的根节点
				List<Node4ZTree> treeList = pmodelDao.getTreeDataInUnit(s);
				//设置节点所在的表
				for (Node4ZTree node : treeList) {
					node.setTablename(s);
					list.add(node);
				}
			}
			return list;
	}

	@Override
	public List<PModel> getModelUrlByProjectId(String projectid) {
		List<PModel> modelList = pmodelDao.getModelUrlByProjectId(projectid);
		return modelList;
	}
	@Override
	public void insertTreeData(Node4ZTree node4zTree,String tablename) {
		pmodelDao.insertTreeData(node4zTree ,tablename);
	}

	@Override
	public String getGrandfatherUid(String uid) {
		return pmodelDao.getGrandfatherUid(uid);
	}
	@Override
	public Node4ZTree getAllAttrGrandfatherUid(String uid) {
		// TODO Auto-generated method stub
		return pmodelDao.getAllAttrGrandfatherUid(uid);
	}

	@Override
	public Node4ZTree getNode4ZTreeByUid(String uid) {
		return pmodelDao.getNode4ZTreeByUid(uid);
	}
}
