package com.freedotech.app.ztly.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class Dizhi extends CommonEntity{

	/**
	 * 钻井柱id
	 */
	private Integer id;
	/**
	 * 钻井柱编号
	 */
	private String drillingnum;
	/**
	 * 钻井柱日期
	 */
	private Date drillingdate;
	/**
	 * 钻孔深度
	 */
	private double drillingdepth;
	/**
	 * 孔口高程
	 */
	private double drillingaltitude;
	/**
	 * 坐标经度
	 */
	private double drillinglon;
	/**
	 * 坐标纬度
	 */
	private double drillinglat;
	/**
	 * 钻井柱数据
	 */
	private String primitive;
	/**
	 * 取样深度
	 */
	private double samplingdepth;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDrillingnum() {
		return drillingnum;
	}
	public void setDrillingnum(String drillingnum) {
		this.drillingnum = drillingnum;
	}
	public Date getDrillingdate() {
		return drillingdate;
	}
	public void setDrillingdate(Date drillingdate) {
		this.drillingdate = drillingdate;
	}
	public double getDrillingdepth() {
		return drillingdepth;
	}
	public void setDrillingdepth(double drillingdepth) {
		this.drillingdepth = drillingdepth;
	}
	public double getDrillingaltitude() {
		return drillingaltitude;
	}
	public void setDrillingaltitude(double drillingaltitude) {
		this.drillingaltitude = drillingaltitude;
	}
	public double getDrillinglon() {
		return drillinglon;
	}
	public void setDrillinglon(double drillinglon) {
		this.drillinglon = drillinglon;
	}
	public double getDrillinglat() {
		return drillinglat;
	}
	public void setDrillinglat(double drillinglat) {
		this.drillinglat = drillinglat;
	}
	public String getPrimitive() {
		return primitive;
	}
	public void setPrimitive(String primitive) {
		this.primitive = primitive;
	}
	public double getSamplingdepth() {
		return samplingdepth;
	}
	public void setSamplingdepth(double samplingdepth) {
		this.samplingdepth = samplingdepth;
	}
	public Dizhi() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Dizhi(Integer id, String drillingnum, Date drillingdate, double drillingdepth, double drillingaltitude,
			double drillinglon, double drillinglat, String primitive, double samplingdepth) {
		super();
		this.id = id;
		this.drillingnum = drillingnum;
		this.drillingdate = drillingdate;
		this.drillingdepth = drillingdepth;
		this.drillingaltitude = drillingaltitude;
		this.drillinglon = drillinglon;
		this.drillinglat = drillinglat;
		this.primitive = primitive;
		this.samplingdepth = samplingdepth;
	}
	@Override
	public String toString() {
		return "Dizhi [id=" + id + ", drillingnum=" + drillingnum + ", drillingdate=" + drillingdate
				+ ", drillingdepth=" + drillingdepth + ", drillingaltitude=" + drillingaltitude + ", drillinglon="
				+ drillinglon + ", drillinglat=" + drillinglat + ", primitive=" + primitive + ", samplingdepth="
				+ samplingdepth + "]";
	}

	
}
