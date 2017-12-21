package com.freedotech.app.ztly.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freedotech.app.ztly.dao.ProjectDao;
import com.freedotech.app.ztly.model.Project;
import com.freedotech.app.ztly.service.IProjectService;
@Service
public class ProjectService implements IProjectService {
	
	@Autowired
	private ProjectDao projectDao;
	@Override
	public List<Project> listProjectByUserId(int id) {
		return projectDao.listProjectByUserId(id);
	}

}
