package com.freedotech.app.ztly.model;

public class Shuiwen extends CommonEntity{
	/**
	 * 水文数据id
	 */
	private Integer id;
	/**
	 * 水源地名称
	 */
	private String name;
	/**
	 * 水源所在地
	 */
	private String address;
	/**
	 * 服务城镇
	 */
	private String servicetown;
	/**
	 * 取水口名称
	 */
	private String intakename;
	/**
	 * 设计能力
	 */
	private double designability;
	/**
	 * 取水口经度
	 */
	private double intakelon;
	/**
	 * 取水口纬度
	 */
	private double intakelat;
	/**
	 * 一级保护区水域
	 */
	private String onelevelwater;
	/**
	 * 一级保护区陆域
	 */
	private String onelevelland;
	/**
	 * 二级保护区水域
	 */
	private String twolevelwater;
	/**
	 * 二级保护区陆域
	 */
	private String twolevelland;
	/**
	 * 准保护区水域
	 */
	private String prospectivewater;
	/**
	 * 准保护区陆域
	 */
	private String prospectiveland;
	/**
	 * 备注
	 */
	private String remark;
	/**
	 * entity对象所需数据
	 */
	private String entity;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getServicetown() {
		return servicetown;
	}
	public void setServicetown(String servicetown) {
		this.servicetown = servicetown;
	}
	public String getIntakename() {
		return intakename;
	}
	public void setIntakename(String intakename) {
		this.intakename = intakename;
	}
	public double getDesignability() {
		return designability;
	}
	public void setDesignability(double designability) {
		this.designability = designability;
	}
	public double getIntakelon() {
		return intakelon;
	}
	public void setIntakelon(double intakelon) {
		this.intakelon = intakelon;
	}
	public double getIntakelat() {
		return intakelat;
	}
	public void setIntakelat(double intakelat) {
		this.intakelat = intakelat;
	}
	public String getOnelevelwater() {
		return onelevelwater;
	}
	public void setOnelevelwater(String onelevelwater) {
		this.onelevelwater = onelevelwater;
	}
	public String getOnelevelland() {
		return onelevelland;
	}
	public void setOnelevelland(String onelevelland) {
		this.onelevelland = onelevelland;
	}
	public String getTwolevelwater() {
		return twolevelwater;
	}
	public void setTwolevelwater(String twolevelwater) {
		this.twolevelwater = twolevelwater;
	}
	public String getTwolevelland() {
		return twolevelland;
	}
	public void setTwolevelland(String twolevelland) {
		this.twolevelland = twolevelland;
	}
	public String getProspectivewater() {
		return prospectivewater;
	}
	public void setProspectivewater(String prospectivewater) {
		this.prospectivewater = prospectivewater;
	}
	public String getProspectiveland() {
		return prospectiveland;
	}
	public void setProspectiveland(String prospectiveland) {
		this.prospectiveland = prospectiveland;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getEntity() {
		return entity;
	}
	public void setEntity(String entity) {
		this.entity = entity;
	}
	public Shuiwen() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Shuiwen(Integer id, String name, String address, String servicetown, String intakename, double designability,
			double intakelon, double intakelat, String onelevelwater, String onelevelland, String twolevelwater,
			String twolevelland, String prospectivewater, String prospectiveland, String remark, String entity) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.servicetown = servicetown;
		this.intakename = intakename;
		this.designability = designability;
		this.intakelon = intakelon;
		this.intakelat = intakelat;
		this.onelevelwater = onelevelwater;
		this.onelevelland = onelevelland;
		this.twolevelwater = twolevelwater;
		this.twolevelland = twolevelland;
		this.prospectivewater = prospectivewater;
		this.prospectiveland = prospectiveland;
		this.remark = remark;
		this.entity = entity;
	}
	@Override
	public String toString() {
		return "Shuiwen [id=" + id + ", name=" + name + ", address=" + address + ", servicetown=" + servicetown
				+ ", intakename=" + intakename + ", designability=" + designability + ", intakelon=" + intakelon
				+ ", intakelat=" + intakelat + ", onelevelwater=" + onelevelwater + ", onelevelland=" + onelevelland
				+ ", twolevelwater=" + twolevelwater + ", twolevelland=" + twolevelland + ", prospectivewater="
				+ prospectivewater + ", prospectiveland=" + prospectiveland + ", remark=" + remark + ", entity="
				+ entity + "]";
	}
	
	
	
}
