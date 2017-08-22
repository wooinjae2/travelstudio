package travelstudio.control.json;




import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import travelstudio.domain.Detail;
import travelstudio.domain.Member;
import travelstudio.domain.Picture;
import travelstudio.service.DetailService;





@RestController
@RequestMapping("/detail/")
public class detailControl {
  
  private static final String String = null;
  @Autowired ServletContext servletContext;
  @Autowired DetailService detailService;
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", detailService.list());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  
// 9
  
  @RequestMapping("add")
  public String add(Detail detail) throws Exception {
    System.out.println("1");
    detailService.add(detail);
    return "a";
  }  
  
  @RequestMapping("addMap")
  public String addMap(Detail detail, HttpServletRequest req) throws Exception {
    HttpServletRequest httpRequest = (HttpServletRequest) req;
    Member loginMember = (Member)httpRequest.getSession().getAttribute("loginMember");
    detail.setWriter(loginMember.getEmail());
    System.out.println(detail);
    detailService.addMap(detail);
    return "a";
    
  }  
  
  @RequestMapping("selectedOneDetail")
  public JsonResult selectedOneDetail(String number) throws Exception {
    
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", detailService.selectedOneDetail(number));
//    dataMap.put("totalCount", noticeService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("selectAddress")
  public JsonResult selectAddress(int mno) throws Exception {
    System.out.println("------");
   System.out.println(mno);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("selectAddress", detailService.selectAddress(mno));
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("addAllphoto")
  public Object addAllphoto(int[] picnoandparentno, HttpServletRequest req) throws Exception {
    HttpServletRequest httpRequest = (HttpServletRequest) req;
    Member loginMember = (Member)httpRequest.getSession().getAttribute("loginMember");
    Detail detail= new Detail();
    detail.setWriter(loginMember.getEmail());
    
    System.out.println("picnoandparentno 01");
    System.out.println(picnoandparentno[0]);
    System.out.println(picnoandparentno[1]);
    List<Picture> pictureList = new ArrayList();
    for(int i=0; i<picnoandparentno.length;i+=2){
      detail.setSrtno(picnoandparentno[i]);
      detail.setPicno(picnoandparentno[i+1]);
      detailService.addAllphoto(detail);
    }
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("pictureList", pictureList);
    return resultMap;
    
  }  
}
  










