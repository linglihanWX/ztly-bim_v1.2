package com.freedotech.app.ztly.model;

public class Pmodel {

	private Integer id;
	private String name;
	private String url;
	private Double x;
	private Double y;
	private Double z;
	private Double heading;
	private Double pitch;
	private Double roll;
	private Double scalex;
	private Double scaley;
	private Double scalez;
	private String hole;
	public String imagelayer;
	private  String unitname;
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
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Double getX() {
		return x;
	}
	public void setX(Double x) {
		this.x = x;
	}
	public Double getY() {
		return y;
	}
	public void setY(Double y) {
		this.y = y;
	}
	public Double getZ() {
		return z;
	}
	public void setZ(Double z) {
		this.z = z;
	}
	public Double getHeading() {
		return heading;
	}
	public void setHeading(Double heading) {
		this.heading = heading;
	}
	public Double getPitch() {
		return pitch;
	}
	public void setPitch(Double pitch) {
		this.pitch = pitch;
	}
	public Double getRoll() {
		return roll;
	}
	public void setRoll(Double roll) {
		this.roll = roll;
	}
	public Double getScalex() {
		return scalex;
	}
	public void setScalex(Double scalex) {
		this.scalex = scalex;
	}
	public Double getScaley() {
		return scaley;
	}
	public void setScaley(Double scaley) {
		this.scaley = scaley;
	}
	public Double getScalez() {
		return scalez;
	}
	public void setScalez(Double scalez) {
		this.scalez = scalez;
	}
	public String getHole() {
		return hole;
	}
	public void setHole(String hole) {
		this.hole = hole;
	}
	public String getImagelayer() {
		return imagelayer;
	}
	public void setImagelayer(String imagelayer) {
		this.imagelayer = imagelayer;
	}
	public String getUnitname() {
		return unitname;
	}
	public void setUnitname(String unitname) {
		this.unitname = unitname;
	}
	public Pmodel() {
		super();
	}
	public Pmodel(Integer id, String name, String url, Double x, Double y, Double z, Double heading, Double pitch,
			Double roll, Double scalex, Double scaley, Double scalez, String hole, String imagelayer, String unitname) {
		super();
		this.id = id;
		this.name = name;
		this.url = url;
		this.x = x;
		this.y = y;
		this.z = z;
		this.heading = heading;
		this.pitch = pitch;
		this.roll = roll;
		this.scalex = scalex;
		this.scaley = scaley;
		this.scalez = scalez;
		this.hole = hole;
		this.imagelayer = imagelayer;
		this.unitname = unitname;
	}
	
}
