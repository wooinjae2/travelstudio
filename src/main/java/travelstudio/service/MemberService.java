package travelstudio.service;

import java.util.List;

import travelstudio.domain.Member;

public interface MemberService {
  List<Member> info() throws Exception;
  Member get(int no) throws Exception;
  void update(Member member) throws Exception;
  void insertPhoto(String newFile);
  
  /*우인재*/
  void add(Member member) throws Exception;
  Member getByEmailPassword(String email, String password) throws Exception;
}







