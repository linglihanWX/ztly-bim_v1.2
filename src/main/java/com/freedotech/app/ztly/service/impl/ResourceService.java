package com.freedotech.app.ztly.service.impl;

import com.freedotech.app.ztly.cache.BaseCacheService;
import com.freedotech.app.ztly.dao.ResourceDao;
import com.freedotech.app.ztly.model.Resource;
import com.freedotech.app.ztly.service.IResourceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Liwei on 2016/9/19.
 */
@Service
public class ResourceService implements IResourceService {
    @Autowired
    private ResourceDao resourceDao;

    @Override
    public Integer add(Resource res) {
        return resourceDao.add(res);
    }

    @Override
    public Integer update(Resource res) {
        return resourceDao.update(res);
    }

    @Override
    public Integer delete(int id) {
        return resourceDao.delete(id);
    }

    @Override
    public Resource load(int id) {
        return resourceDao.load(id);
    }

    @Override
    public List<Resource> listResource() {
        return resourceDao.listResource();
    }
}
