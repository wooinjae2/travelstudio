package travelstudio.control.json;




import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import travelstudio.domain.Post;
import travelstudio.service.PostService;




@RestController
@RequestMapping("/post/")
public class PostControl {
  
  @Autowired ServletContext servletContext;
  @Autowired PostService postService;
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", postService.list());
//    dataMap.put("totalCount", noticeService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("count")
  
  public JsonResult getWriteCount(Post post) throws Exception {
    System.out.println(post);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", postService.getWriteCount(post));
    
    
    return new JsonResult(JsonResult.SUCCESS,dataMap);
  }
  
  @RequestMapping("add")
  public String add(Post post) throws Exception {
    System.out.println("1");
    postService.add(post);
    return "a";
    
  }  
  
  
  
}









