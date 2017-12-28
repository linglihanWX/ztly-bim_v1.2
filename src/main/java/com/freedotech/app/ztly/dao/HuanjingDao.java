package com.freedotech.app.ztly.dao;

import java.util.List;

import com.freedotech.app.ztly.model.Huanjing;

public interface HuanjingDao {

	public List<Huanjing> getHuanjingDataByProjectId(int projectid);

}
