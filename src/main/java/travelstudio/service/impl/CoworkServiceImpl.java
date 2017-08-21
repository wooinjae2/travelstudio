package travelstudio.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import travelstudio.dao.CoworkDao;
import travelstudio.domain.Cowork;
import travelstudio.service.CoworkService;

@Service
public class CoworkServiceImpl implements CoworkService {
  @Autowired CoworkDao coworkDao;
  

 @Override
 public void invite(Cowork cowork) throws Exception {
   coworkDao.invite(cowork);
 }
 @Override
 public void delete(Cowork cowork) throws Exception {
   coworkDao.delete(cowork);
 }


}







