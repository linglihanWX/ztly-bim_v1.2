package com.freedotech.app.ztly.dao;

import java.util.List;

import com.freedotech.app.ztly.model.Project;

public interface ProjectDao {
	List<Project> listProjectByUserId(int id);
}
