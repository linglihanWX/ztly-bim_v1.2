package com.freedotech.app.ztly.model;

import java.util.Date;

public class Dizhizhuankong extends CommonEntity{
//现编号
private String nowNumber;
//原编号
private String originalNumber;
//-图幅号
private String tfh;
//x坐标
private Double x;
//y坐标
private Double y;
//孔口标高
private Double kkbg;
//孔深
private Double ks;
//稳定水位
private String wdsw;
//钻孔类别
private String zklb;
//开孔日期
private Date kkrq;
//终孔日期
private Date zkrq;
//资料来源
private String zlly;
//工程名称
private String gcmc;
//描述
private String dcxx;
public String getNowNumber() {
	return nowNumber;
}
public void setNowNumber(String nowNumber) {
	this.nowNumber = nowNumber;
}
public String getOriginalNumber() {
	return originalNumber;
}
public void setOriginalNumber(String originalNumber) {
	this.originalNumber = originalNumber;
}
public String getTfh() {
	return tfh;
}
public void setTfh(String tfh) {
	this.tfh = tfh;
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
public Double getKkbg() {
	return kkbg;
}
public void setKkbg(Double kkbg) {
	this.kkbg = kkbg;
}
public Double getKs() {
	return ks;
}
public void setKs(Double ks) {
	this.ks = ks;
}
public String getWdsw() {
	return wdsw;
}
public void setWdsw(String wdsw) {
	this.wdsw = wdsw;
}
public String getZklb() {
	return zklb;
}
public void setZklb(String zklb) {
	this.zklb = zklb;
}
public Date getKkrq() {
	return kkrq;
}
public void setKkrq(Date kkrq) {
	this.kkrq = kkrq;
}
public Date getZkrq() {
	return zkrq;
}
public void setZkrq(Date zkrq) {
	this.zkrq = zkrq;
}
public String getZlly() {
	return zlly;
}
public void setZlly(String zlly) {
	this.zlly = zlly;
}
public String getGcmc() {
	return gcmc;
}
public void setGcmc(String gcmc) {
	this.gcmc = gcmc;
}
public String getDcxx() {
	return dcxx;
}
public void setDcxx(String dcxx) {
	this.dcxx = dcxx;
}


}
