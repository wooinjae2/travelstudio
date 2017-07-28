package travelstudio.dao;

import java.util.List;

import travelstudio.domain.Profile;

public interface ProfileDao {
  List<Profile> selectList();
  Profile selectOne(int no);
//  Notice selectOneByEmailPassword(Map<String,Object> valueMap);
//  int countAll();
//  int insert(Notice notice);
//  int delete(int no);
  int update(Profile profile);
  
  void insertPhoto(String newFile);
//  void insertPhoto(Map<String,Object> valueMap);
//  List<String> selectPhotoList(int teacherNo);
//  void deletePhoto(int teacherNo);
}
