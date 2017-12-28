package com.freedotech.app.ztly.dao;

import java.util.List;

import com.freedotech.app.ztly.model.Dizhi;

public interface DizhiDao {
	public List<Dizhi> getDizhiDataByProjectId(int projectid);
}
