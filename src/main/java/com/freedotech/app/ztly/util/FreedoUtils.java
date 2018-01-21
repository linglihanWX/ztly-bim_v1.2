package com.freedotech.app.ztly.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.springframework.core.io.ClassPathResource;

import com.freedotech.app.ztly.model.Node4ZTree;

public abstract class FreedoUtils {
	
	@SuppressWarnings("unchecked")
	public static List<Node4ZTree> getDatadFromModelPropertyXml(String filepath,String rootname) throws IOException, DocumentException {
		ClassPathResource xmlResource = new ClassPathResource(filepath);
		Document doc = new SAXReader().read(xmlResource.getFile());
		Element pNode = (Element) doc.selectSingleNode("//*[@name='"+rootname+"']");
		
		List<Element> childrenNode = pNode.selectNodes(".//*");
		int nodeSize = childrenNode.size();
		ArrayList<Node4ZTree> nodes = new ArrayList<Node4ZTree>(nodeSize);
		String uId = pNode.attributeValue("uid");
		String pName = pNode.attributeValue("name");
		String BoundsMin = pNode.attributeValue("BoundsMin");
		String BoundsMax = pNode.attributeValue("BoundsMax");
		
		
		nodes.add(new Node4ZTree(uId,"-1", pName,BoundsMin,BoundsMax,0));
		if(nodeSize==0) {
			System.out.println("XXX.xml读取失败");
		}else {
			/*for (int i = 0; i < childrenNode.size(); i++){
				nodes.add(new Node4ZTree(String.valueOf(i+1),"",childrenNode.get(i).attributeValue("name"),childrenNode.get(i).attributeValue("BoundsMin"),childrenNode.get(i).attributeValue("BoundsMax")));
			}
			for(int i = 1 ;i<nodes.size();i++){
				Element parent = childrenNode.get(i-1).getParent();
				int index = childrenNode.indexOf(parent);
				String pId = String.valueOf(index+1);
				nodes.get(i).setpId(pId);
			}*/

			for (Element e : childrenNode) {
				String id = e.attributeValue("uid");
				String name = e.attributeValue("name").replaceFirst("/", "");
				String pid = e.getParent().attributeValue("uid");
				String boundsmin = e.attributeValue("BoundsMin");
				String boundsmax = e.attributeValue("BoundsMax");
				Integer leaf = 0;
				int size = e.selectNodes(".//*").size();
				if(size>0) {
					leaf = 0;
				}else {
					leaf = 1;
				}
					nodes.add(new Node4ZTree(id, pid, name, boundsmin, boundsmax,leaf));
			}
		}
		return nodes;
	}
	public static JsonArray transfListToJSONstr(List<Node4ZTree> list){
		JsonArray json = new JsonArray();
		long starttime =  System.currentTimeMillis();
		for (Node4ZTree node:list) {
			JsonObject jobj = new JsonObject();
			String id =node.getUid();
			String text = node.getName();
			String state = node.getLeaf()==1? "open":"closed";
			String tablename = node.getTablename();
			String boundsmax = node.getBoundsmax();
			String boundsmin = node.getBoundsmin();
			jobj.addProperty("id",id);
			jobj.addProperty("text",text);
			jobj.addProperty("state",state);
			jobj.addProperty("tablename",tablename);
			jobj.addProperty("boundsmax",boundsmax);
			jobj.addProperty("boundsmin",boundsmin);
			//jobj.addProperty("checked","true");
			json.add(jobj);
		}
		long endtime =  System.currentTimeMillis();
		long time = endtime-starttime;
		System.out.println(time+"ms");
		return json;
	}
}
