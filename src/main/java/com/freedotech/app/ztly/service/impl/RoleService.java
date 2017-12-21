package com.freedotech.app.ztly.service.impl;

import com.freedotech.app.ztly.cache.BaseCacheService;
import com.freedotech.app.ztly.dao.RoleDao;
import com.freedotech.app.ztly.dao.UserDao;
import com.freedotech.app.ztly.model.Resource;
import com.freedotech.app.ztly.model.Role;
import com.freedotech.app.ztly.model.RoleResource;
import com.freedotech.app.ztly.model.UserRole;
import com.freedotech.app.ztly.service.IRoleService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Liwei on 2016/9/18.
 */
@Service
public class RoleService implements IRoleService {
    @Autowired
    private RoleDao roleDao;

    @Override
    public Integer add(Role role) {
        return roleDao.add(role);
    }

    @Override
    public Integer delete(int id) {
        return roleDao.delete(id);
    }

    @Transactional
    @Override
    public void deleteRoleAndResource(List<Integer> ids) {
        roleDao.batchDelete(ids);
        roleDao.batchDeleteRoleResource(ids);
    }

    @Override
    public Role load(int id) {
        return roleDao.load(id);
    }

    @Override
    public List<Role> list() {
        return roleDao.listRole();
    }

    @Override
    public Integer update(Role role) {
        return roleDao.update(role);
    }

    @Override
    public List<Role> listRole() {
        return roleDao.listRole();
    }

    @Override
    public UserRole loadUserRole(int uid, int roleId) {
        return roleDao.loadUserRole(uid, roleId);
    }

    @Override
    public void addUserRole(int uid, int roleId) {
        roleDao.addUserRole(uid, roleId);
    }

    @Override
    public void deleteUserRole(int uid, int roleId) {
        roleDao.deleteUserRole(uid, roleId);
    }

    @Override
    public void deleteUserRoles(int uid) {
        roleDao.deleteUserRoles(uid);
    }

    @Override
    public List<Resource> listRoleResource(int roleId) {
        return roleDao.listRoleResource(roleId);
    }

    @Override
    public void addRoleResource(int roleId, int resId) {
        roleDao.addRoleResource(roleId, resId);
    }

    @Override
    public void deleteRoleResource(int roleId, int resId) {
        roleDao.deleteRoleResource(roleId, resId);
    }

    @Override
    public RoleResource loadResourceRole(int roleId, int resId) {
        return roleDao.loadResourceRole(roleId, resId);
    }

    @Override
    public Integer deleteRoleAndUser(List<Integer> ids) {
        return roleDao.deleteRoleAndUser(ids);
    }
}
