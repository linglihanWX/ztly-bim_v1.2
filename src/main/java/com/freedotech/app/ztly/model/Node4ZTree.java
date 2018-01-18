package com.freedotech.app.ztly.model;

public class Node4ZTree {

	private String uid;
	private String pid;
	private String name;
	private String boundsmin;
	private String boundsmax;
	private String tablename;
	private String isParent;
	private String checked;

	public String getChecked() {
		return checked;
	}

	public void setChecked(String checked) {
		this.checked = checked;
	}

	public String getIsParent() {
		return isParent;
	}

	public void setIsParent(String isParent) {
		this.isParent = isParent;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBoundsmin() {
		return boundsmin;
	}

	public void setBoundsmin(String boundsmin) {
		this.boundsmin = boundsmin;
	}

	public String getBoundsmax() {
		return boundsmax;
	}

	public void setBoundsmax(String boundsmax) {
		this.boundsmax = boundsmax;
	}

	public String getTablename() {
		return tablename;
	}

	public void setTablename(String tablename) {
		this.tablename = tablename;
	}

	public Node4ZTree(String uid, String pid, String name, String boundsmin, String boundsmax) {
		this.uid = uid;
		this.pid = pid;
		this.name = name;
		this.boundsmin = boundsmin;
		this.boundsmax = boundsmax;
	}

}
