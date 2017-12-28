package com.freedotech.app.ztly.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freedotech.app.ztly.dao.DizhiDao;
import com.freedotech.app.ztly.dao.HuanjingDao;
import com.freedotech.app.ztly.dao.ShuiwenDao;
import com.freedotech.app.ztly.model.Dizhi;
import com.freedotech.app.ztly.model.Huanjing;
import com.freedotech.app.ztly.model.Shuiwen;
import com.freedotech.app.ztly.service.KeyanService;
@Service
public class KeyanServiceImpl implements KeyanService {

	@Autowired
	private ShuiwenDao shuiwenDao;
	@Autowired
	private HuanjingDao huanjingDao;
	@Autowired
	private DizhiDao dizhiDao;
	@Override
	public List<Shuiwen> getShuiwenDataByProjectId(int projectid) {
		return shuiwenDao.getShuiwenDataByProjectId(projectid);
	}
	@Override
	public List<Huanjing> getHuanjingDataByProjectId(int projectid) {
		return huanjingDao.getHuanjingDataByProjectId(projectid);
	}
	@Override
	public List<Dizhi> getDizhiDataByProjectId(int projectid) {
		return dizhiDao.getDizhiDataByProjectId(projectid);
	}
	
}
