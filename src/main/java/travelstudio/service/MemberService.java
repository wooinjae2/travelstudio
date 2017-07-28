package travelstudio.service;





import java.util.List;

import travelstudio.domain.Member;

public interface MemberService {
  void add(Member member) throws Exception;
  Member getByEmailPassword(String email, String password) throws Exception;
  List<Member> list() throws Exception;
}







