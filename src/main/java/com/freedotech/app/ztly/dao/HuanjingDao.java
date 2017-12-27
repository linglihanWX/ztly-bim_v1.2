package com.freedotech.app.ztly.dao;

import java.util.List;

import com.freedotech.app.ztly.model.Shuiwen;

public interface HuanjingDao {

	public List<Shuiwen> getHuanjingDataByProjectId(int projectid);

}
