package com.freedotech.app.ztly.model;

public class Huanjing extends CommonEntity{
	/**
	 * 环境数据id
	 */
	private Integer id;
	/**
	 * 征地编号
	 */
	private String reqlandnum;
	/**
	 * 结构物名称
	 */
	private String structurename;
	/**
	 * 单位
	 */
	private String unit;
	/**
	 * 线路左侧数量
	 */
	private double lineleftnum;
	/**
	 * 线路右侧数量
	 */
	private double linerightnum;
	/**
	 * 备注
	 */
	private String remark;
	/**
	 * 操作
	 */
	private String operation;
	/**
	 * entity实体
	 */
	private String entity;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getReqlandnum() {
		return reqlandnum;
	}
	public void setReqlandnum(String reqlandnum) {
		this.reqlandnum = reqlandnum;
	}
	public String getStructurename() {
		return structurename;
	}
	public void setStructurename(String structurename) {
		this.structurename = structurename;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public double getLineleftnum() {
		return lineleftnum;
	}
	public void setLineleftnum(double lineleftnum) {
		this.lineleftnum = lineleftnum;
	}
	public double getLinerightnum() {
		return linerightnum;
	}
	public void setLinerightnum(double linerightnum) {
		this.linerightnum = linerightnum;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getOperation() {
		return operation;
	}
	public void setOperation(String operation) {
		this.operation = operation;
	}
	public String getEntity() {
		return entity;
	}
	public void setEntity(String entity) {
		this.entity = entity;
	}
	public Huanjing(Integer id, String reqlandnum, String structurename, String unit, double lineleftnum,
			double linerightnum, String remark, String operation, String entity) {
		super();
		this.id = id;
		this.reqlandnum = reqlandnum;
		this.structurename = structurename;
		this.unit = unit;
		this.lineleftnum = lineleftnum;
		this.linerightnum = linerightnum;
		this.remark = remark;
		this.operation = operation;
		this.entity = entity;
	}
	public Huanjing() {
		super();
	}
	@Override
	public String toString() {
		return "Huanjing [id=" + id + ", reqlandnum=" + reqlandnum + ", structurename=" + structurename + ", unit="
				+ unit + ", lineleftnum=" + lineleftnum + ", linerightnum=" + linerightnum + ", remark=" + remark
				+ ", operation=" + operation + ", entity=" + entity + "]";
	}
	
}
