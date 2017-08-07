package travelstudio.control.json;




import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import travelstudio.domain.Detail;

import travelstudio.service.DetailService;





@RestController
@RequestMapping("/detail/")
public class detailControl {
  
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
  
  @RequestMapping("selectedOneDetail")
  public JsonResult selectedOneDetail(String number) throws Exception {
    
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", detailService.selectedOneDetail(number));
//    dataMap.put("totalCount", noticeService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  
}









