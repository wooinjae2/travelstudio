package travelstudio.control.json;




import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import travelstudio.domain.Cowork;
import travelstudio.service.CoworkService;





@RestController
@RequestMapping("/cowork/")
public class CoworkControl {
  
  @Autowired ServletContext servletContext;
  @Autowired CoworkService coworkService;
  
  @RequestMapping("invite")
  public JsonResult invite(Cowork cowork) throws Exception {
    System.out.println("print cowork-------------------");
    System.out.println(cowork);
    ArrayList<String> aa = new ArrayList();
    aa.add("ok");
    coworkService.invite(cowork);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", aa);
//    dataMap.put("totalCount", noticeService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }  
  
  @RequestMapping("delete")
  public JsonResult delete(Cowork cowork) throws Exception {
    System.out.println("print cowork-------------------");
    System.out.println(cowork);
    ArrayList<String> aa = new ArrayList();
    aa.add("ok");
    coworkService.delete(cowork);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", aa);
//    dataMap.put("totalCount", noticeService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }  
  

  
  /*@RequestMapping("searchBymnomno2")
  public JsonResult searchBymnopostno(Follow follow) throws Exception {
    if(follow.getMno()==0){
      return new JsonResult(JsonResult.FAIL, follow);
    }
    System.out.println(follow);
    System.out.println("--------------------good");
    Follow follow2 = followService.searchBymnomno2(follow);
    System.out.println(follow2);
    System.out.println("good2===============================");
    if(follow2==null){
      return new JsonResult(JsonResult.FAIL, follow2);
    }else{
      return new JsonResult(JsonResult.SUCCESS, follow2);
    }
  }  
  
  
  @RequestMapping("delete")
  public String delete(Follow follow) throws Exception {
    
    followService.delete(follow);
    return "ok";
  }  
  
  @RequestMapping("listByloginMember")
  public JsonResult listByloginMember(HttpServletRequest req) throws Exception {
    HttpServletRequest httpRequest= (HttpServletRequest) req;
    Member loginMember = (Member)httpRequest.getSession().getAttribute("loginMember");
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", followService.listByloginMember(loginMember.getMno()));
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }  
*/
 
  
  
  
}














