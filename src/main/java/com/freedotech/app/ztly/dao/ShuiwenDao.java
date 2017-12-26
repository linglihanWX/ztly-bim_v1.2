package com.freedotech.app.ztly.dao;

import java.util.List;

import com.freedotech.app.ztly.model.Shuiwen;

public interface ShuiwenDao {

	public List<Shuiwen> getShuiwenDataByProjectId(int projectid);

}
