package com.freedotech.app.ztly.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freedotech.app.ztly.dao.HuanjingDao;
import com.freedotech.app.ztly.dao.ShuiwenDao;
import com.freedotech.app.ztly.model.Shuiwen;
import com.freedotech.app.ztly.service.KeyanService;
@Service
public class KeyanServiceImpl implements KeyanService {

	@Autowired
	private ShuiwenDao shuiwenDao;
	@Autowired
	private HuanjingDao huanjingDao;
	@Override
	public List<Shuiwen> getShuiwenDataByProjectId(int projectid) {
		return shuiwenDao.getShuiwenDataByProjectId(projectid);
	}
	@Override
	public List<Shuiwen> getHuanjingDataByProjectId(int projectid) {
		return huanjingDao.getHuanjingDataByProjectId(projectid);
	}

}
