package travelstudio.dao;

import java.util.List;

import travelstudio.domain.Detail;

public interface DetailDao {
  List<Detail> selectList();
  int insert(Detail detail);
  void insert_map(Detail detail);
//  int getSize();
//  List<Member> selectListByNames(Map<String,Object> valueMap);
//  Member selectOne(int no);
//  Member selectOneByEmailPassword(Map<String,Object> valueMap);
//  int insert(Member member);
//  int update(Member member);
//  int delete(int no) throws Exception;
//int getSize();
//List<Member> selectListByNames(Map<String,Object> valueMap);
//Member selectOne(int no);
//Member selectOneByEmailPassword(Map<String,Object> valueMap);
//int insert(Member member);
//int update(Member member);
//int delete(int no) throws Exception;
void insertDetailByEmail(Detail detail);
void deleteEmail(String writer);
void insertDetailContent(Detail detail);
void insertDetailCaption(Detail detail);
void insertDetailDate(Detail detail);
List<Detail> selectedOneDetail(String postno);
List<Detail> selectAddress(int mno);
void addAllphoto(Detail detail);
}
