package travelstudio.dao;

import java.util.List;
import java.util.Map;

import travelstudio.domain.Member;

public interface MemberDao {
  List<Member> selectList();
  Member selectOne(int no);
//  Notice selectOneByEmailPassword(Map<String,Object> valueMap);
//  int countAll();
//  int insert(Notice notice);
//  int delete(int no);
  int update(Member member);
  
  void insertPhoto(String newFile);
//  void insertPhoto(Map<String,Object> valueMap);
//  List<String> selectPhotoList(int teacherNo);
//  void deletePhoto(int teacherNo);
  
  
  /*우인재*/
  Member selectOneByEmailPassword(Map<String,Object> valueMap);
  int insert(Member member);
}
