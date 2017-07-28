package travelstudio.control.json;




import java.util.HashMap;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import travelstudio.domain.Member;
import travelstudio.service.MemberService;




@RestController
@RequestMapping("/member/")
public class MemberControl {
  
  @Autowired ServletContext servletContext;
  @Autowired MemberService memberService;
  

  
  @RequestMapping("add.json")
  public JsonResult add(Member member) throws Exception {
    memberService.add(member);
    System.out.println("1");
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }
  
  @RequestMapping("header.json")
  public Member header(HttpServletRequest req, HttpServletResponse res) throws Exception {
    HttpServletRequest httpRequest = (HttpServletRequest) req;
    Member loginMember = (Member)httpRequest.getSession().getAttribute("loginMember");
    System.out.println('1');
    System.out.println(loginMember);
    return loginMember;
  }
  
  
  
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", memberService.list());
//    dataMap.put("totalCount", noticeService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
}









