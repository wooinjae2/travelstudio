package travelstudio.dao;

import java.util.List;

import travelstudio.domain.Post;

public interface PostDao {
  List<Post> selectList();
  List<Post> getWriteCount(Post post);
  int insert(Post post);
//  int getSize();
//  List<Member> selectListByNames(Map<String,Object> valueMap);
//  Member selectOne(int no);
//  Member selectOneByEmailPassword(Map<String,Object> valueMap);
//  int insert(Member member);
//  int update(Member member);
//  int delete(int no) throws Exception;
}
