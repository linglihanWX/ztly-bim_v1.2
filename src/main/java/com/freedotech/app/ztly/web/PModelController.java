package com.freedotech.app.ztly.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.reflect.TypeToken;
import org.dom4j.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.freedotech.app.ztly.model.Node4ZTree;
import com.freedotech.app.ztly.model.PModel;
import com.freedotech.app.ztly.service.PModelService;
import com.freedotech.app.ztly.service.YunweiService;
import com.freedotech.app.ztly.util.FreedoUtils;

@RequestMapping(value = "/PModel")
@Controller
public class PModelController {
    @Autowired
    private PModelService pmodelService;

    //从数据库中查询树（同步）
    @RequestMapping(value = "/getModelTreeSyn", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<Node4ZTree> getModelTreeSyn(HttpServletRequest request) {
        //取得session中项目的id
        HttpSession session = request.getSession();
        String projectid = session.getAttribute("projectid") + "";
        //取到模型树形列表
        List treeData = pmodelService.getModelTreeSyn(projectid);
        return treeData;
    }
    //从数据库中查询树（异步）
    @RequestMapping(value = "/getModelTreeAsyn", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public List getModelTreeAsyn(HttpServletRequest request, String uid, @RequestParam(value = "tablename", required = false) String tablename) {
        //取得session中项目的id
        HttpSession session = request.getSession();
        String projectid = session.getAttribute("projectid") + "";
        //取到模型树形列表
        List treeData = pmodelService.getModelTreeAsyn(projectid, uid, tablename);
        JsonArray json = FreedoUtils.transfListToJSONstr(treeData);
        Gson gson = new Gson();
        List list = gson.fromJson(json, new TypeToken<List>(){}.getType());
        return list;
    }
    //获取模型
    @RequestMapping(value = "/getPmodel", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<PModel> getModelUrl(HttpServletRequest request) {
        //取得session中项目的id
        HttpSession session = request.getSession();
        String projectId = session.getAttribute("projectid") + "";
        //获取模型
        List<PModel> modelList = pmodelService.getModelUrlByProjectId(projectId);
        System.out.println(modelList.toString());
        return modelList;
    }

    @RequestMapping(value = "/insertTreeData", method = RequestMethod.GET)
    @ResponseBody
    public void insertTreeData() {
        List<Map> maplist = new ArrayList();
        Map map1 = new HashMap();
        map1.put("filepath","com/freedotech/app/ztly/util/dalian2.xml");
        map1.put("rootname","0");
        map1.put("tablename","t_unit16");
        maplist.add(map1);

        try {
            for (Map map : maplist) {
                List<Node4ZTree> nodesList = FreedoUtils.getDatadFromModelPropertyXml(map.get("filepath").toString(),map.get("rootname").toString());
                for (Node4ZTree node4zTree : nodesList) {
                    pmodelService.insertTreeData(node4zTree,map.get("tablename").toString());
                }
            }

        } catch (IOException e) {
            e.printStackTrace();
        } catch (DocumentException e) {
            e.printStackTrace();
        }
    }
    @RequestMapping(value = "/getGrandfatherUid", method = RequestMethod.GET)
    @ResponseBody
    public String getGrandfatherUid(String uid) {
        String grandfatheruid = pmodelService.getGrandfatherUid(uid);
        return grandfatheruid;
    }
    @RequestMapping(value = "/getAllAttrGrandfatherUid", method = RequestMethod.GET)
    @ResponseBody
    public Node4ZTree getAllAttrGrandfatherUid(String uid) {
    	Node4ZTree grandfatheruid = pmodelService.getAllAttrGrandfatherUid(uid);
        return grandfatheruid;
    }
    @RequestMapping(value = "/getNode4ZTreeByUid", method = RequestMethod.GET)
    @ResponseBody
    public Node4ZTree getTwoGrandfatherUid(String uid) {
        Node4ZTree node = pmodelService.getNode4ZTreeByUid(uid);
        return node;
    }
}
