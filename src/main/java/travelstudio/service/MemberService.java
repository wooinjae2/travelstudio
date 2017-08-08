package travelstudio.service;

import java.util.List;

import travelstudio.domain.Member;

public interface MemberService {
  List<Member> info() throws Exception;

  void add(Member member) throws Exception;
  Member get(int no) throws Exception;
  List<Member> list() throws Exception;
  Member getByEmailPassword(String email, String password) throws Exception;
  void update(Member member) throws Exception;
  void insertPhoto(Member member);
  
  /*우인재*/
}







