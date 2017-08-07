package travelstudio.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import travelstudio.dao.PictureDao;
import travelstudio.domain.Picture;
import travelstudio.service.PictureService;

@Service
public class PictureServiceImpl implements PictureService {
  @Autowired PictureDao pictureDao;
  

 public void add(String filename) throws Exception {
   pictureDao.insert(filename);
   
 }
 
 public void add1(Picture picture) throws Exception {
   pictureDao.insert1(picture);
   
 }
 
 public List<Picture> selectPicNo(String path){
   return pictureDao.selectPicNo(path);
   
 };

@Override
public Picture selectByPost(String pictureno) {
    return pictureDao.selectByPost(pictureno);
    
};

}







