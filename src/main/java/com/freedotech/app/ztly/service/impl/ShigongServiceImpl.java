package com.freedotech.app.ztly.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freedotech.app.ztly.dao.DungouDao;
import com.freedotech.app.ztly.service.ShigongService;
@Service
public class ShigongServiceImpl implements ShigongService {
	@Autowired
	private DungouDao dungouDao;

	@Override
	public List<Map> getOneHData() {
		return dungouDao.getOneHData();
	}

	@Override
	public List<Map> getSomeHData() {
		return dungouDao.getSomeHData();
	}

}
