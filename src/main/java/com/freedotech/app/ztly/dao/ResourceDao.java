package com.freedotech.app.ztly.dao;

import java.util.List;

import com.freedotech.app.ztly.model.Resource;

/**
 * Created by Liwei on 2016/9/18.
 */
public interface ResourceDao {
    Integer add(Resource res);

    Integer update(Resource res);

    Integer delete(int id);

    Resource load(int id);

    List<Resource> listResource();
}
