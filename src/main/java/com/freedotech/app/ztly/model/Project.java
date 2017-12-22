package com.freedotech.app.ztly.model;

public class Project extends CommonEntity{
	
	private Integer id;
	private String name;
	private String imgurl;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	@Override
	public String toString() {
		return "Project [id=" + id + ", name=" + name + ", imgurl=" + imgurl + "]";
	}
	
	
}
