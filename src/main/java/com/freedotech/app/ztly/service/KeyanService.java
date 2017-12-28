package com.freedotech.app.ztly.service;

import java.util.List;

import com.freedotech.app.ztly.model.Dizhi;
import com.freedotech.app.ztly.model.Huanjing;
import com.freedotech.app.ztly.model.Shuiwen;

public interface KeyanService {
	/**
	 * 通过项目id得到水文数据
	 * @param
	 * @return 
	 */
	List<Shuiwen> getShuiwenDataByProjectId(int projectid);
	/**
	 * 通过项目id得到环境数据
	 * @param
	 * @return 
	 */
	List<Huanjing> getHuanjingDataByProjectId(int id);
	/**
	 * 通过项目id得到地质数据
	 * @param
	 * @return 
	 */
	List<Dizhi> getDizhiDataByProjectId(int id);
}
