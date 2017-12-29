package com.freedotech.app.ztly.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.freedotech.app.ztly.dao.DungouDao;
import com.freedotech.app.ztly.model.Dungou;
import com.freedotech.app.ztly.service.ShigongService;

public class ShigongServiceImpl implements ShigongService {
	@Autowired
	private DungouDao dungouDao;

	@Override
	public List<Dungou> getOneHData() {
		return dungouDao.getOneHData();
	}

	@Override
	public List<Dungou> getSomeHData() {
		return dungouDao.getSomeHData();
	}

}
