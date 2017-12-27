package com.freedotech.app.ztly.model;

public class Node4ZTree {

	private String uid;
	private String pid;
	private String name;
	private String boundsmin;
	private String boundsmax;
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
	public Node4ZTree() {
		super();
	}
	public Node4ZTree(String uid, String pid, String name, String boundsmin, String boundsmax) {
		super();
		this.uid = uid;
		this.pid = pid;
		this.name = name;
		this.boundsmin = boundsmin;
		this.boundsmax = boundsmax;
	}
	
	
}
