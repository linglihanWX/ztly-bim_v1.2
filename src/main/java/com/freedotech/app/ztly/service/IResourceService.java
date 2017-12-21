package com.freedotech.app.ztly.service;

import java.util.List;

import com.freedotech.app.ztly.model.Resource;

/**
 * Created by Liwei on 2016/9/19.
 */
public interface IResourceService {
    Integer add(Resource res);

    Integer update(Resource res);

    Integer delete(int id);

    Resource load(int id);

    List<Resource> listResource();
}
