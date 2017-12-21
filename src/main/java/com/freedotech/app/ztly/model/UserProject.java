package com.freedotech.app.ztly.model;

public class UserProject {
	private Integer id;
	private Integer userId;
	private Integer projectId;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getProjectId() {
		return projectId;
	}
	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}
	@Override
	public String toString() {
		return "UserProject [id=" + id + ", userId=" + userId + ", projectId=" + projectId + "]";
	}
	
}
