package service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import mapper.GzwMapmgeDictMapper;
import service.ZtreeServcie;
@Service
@Transactional
public class ZtreeServcieImpl implements ZtreeServcie {

	@Autowired
	public GzwMapmgeDictMapper gzwMapmgeDictMapper;

	@Override
	public List<Map> getHostdepartment() {
		// TODO Auto-generated method stub
		return gzwMapmgeDictMapper.getHostdepartment();
	}

}
