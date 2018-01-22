package com.freedotech.app.ztly.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freedotech.app.ztly.dao.DizhizhuankongDao;
import com.freedotech.app.ztly.model.Dizhizhuankong;
import com.freedotech.app.ztly.service.DizhizhuankongService;
@Service
public class DizhizhuankongServiceImpl implements DizhizhuankongService {
	@Autowired
	private DizhizhuankongDao dizhizhuankongDao;
	@Override
	public List<Dizhizhuankong> getDzizhuankongData() {
		
		return dizhizhuankongDao.getDzizhuankongData();
	}

}
