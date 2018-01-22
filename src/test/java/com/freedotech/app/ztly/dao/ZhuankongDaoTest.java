package com.freedotech.app.ztly.dao;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.freedotech.app.ztly.model.Dizhizhuankong;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring/spring-dao.xml"})
public class ZhuankongDaoTest {
    private final static Logger logger = LoggerFactory.getLogger(ZhuankongDaoTest.class);
    @Autowired
    private DizhizhuankongDao dizhizhuankongDao;
    @Test
    public void getzhuankong() {
    	List<Dizhizhuankong> list = dizhizhuankongDao.getDzizhuankongData();
    	for (Dizhizhuankong d : list) {
			System.out.println(d.getDcxx());
		}
 
    }
}
