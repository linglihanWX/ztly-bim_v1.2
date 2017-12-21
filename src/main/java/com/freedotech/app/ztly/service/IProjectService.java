package com.freedotech.app.ztly.service;

import java.util.List;

import com.freedotech.app.ztly.model.Project;

public interface IProjectService {
	List<Project> listProjectByUserId(int id);
}
