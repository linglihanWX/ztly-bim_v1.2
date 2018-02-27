package com.freedotech.app.ztly.model;

public class Project extends CommonEntity{
	
	private Integer id;
	private String name;
	private String imgurl;
	private Double positionLon;
	private Double positionLat;
	private Double positionHeight;
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
	public Double getPositionLon() {
		return positionLon;
	}
	public void setPositionLon(Double positionLon) {
		this.positionLon = positionLon;
	}
	public Double getPositionLat() {
		return positionLat;
	}
	public void setPositionLat(Double positionLat) {
		this.positionLat = positionLat;
	}
	public Double getPositionHeight() {
		return positionHeight;
	}
	public void setPositionHeight(Double positionHeight) {
		this.positionHeight = positionHeight;
	}
	@Override
	public String toString() {
		return "Project [id=" + id + ", name=" + name + ", imgurl=" + imgurl + ", positionLon=" + positionLon
				+ ", positionLat=" + positionLat + ", positionHeight=" + positionHeight + "]";
	}
}
