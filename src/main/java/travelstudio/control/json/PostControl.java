package travelstudio.control.json;




import java.io.File;
import java.util.HashMap;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.coobird.thumbnailator.Thumbnails;
import travelstudio.domain.Detail;
import travelstudio.domain.Member;
import travelstudio.domain.Post;
import travelstudio.service.DetailService;
import travelstudio.service.PostService;




@RestController
@RequestMapping("/post/")
public class PostControl {
  
  @Autowired ServletContext servletContext;
  @Autowired DetailService detailService;
  @Autowired PostService postService;
  @Autowired ServletContext ctx;
  
  @RequestMapping("list")
  public JsonResult list() throws Exception {
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", postService.list());
//    dataMap.put("totalCount", noticeService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  

  @RequestMapping("info1")
  public JsonResult info1(String number) throws Exception {
    System.out.println(number);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("info", postService.info1(number));
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("search")
  public JsonResult search(String keyword) throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", postService.search(keyword));
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  @RequestMapping("count")
  public JsonResult getWriteCount(Post post) throws Exception {
    System.out.println(post);
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("list", postService.getWriteCount(post));
    return new JsonResult(JsonResult.SUCCESS,dataMap);
  }
  
/*  @RequestMapping("add")
  public String add(Post post) throws Exception {
    System.out.println("1");
    postService.add(post);
    return "a";
    
  }  */
  
  @RequestMapping("selectOne")
  public JsonResult selectOne(String number) throws Exception {
    /*System.out.printf("%s 셀렉트원",number);*/
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("selectedPost", postService.selectOne(number));
//    dataMap.put("totalCount", noticeService.getSize());
    
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
  
  @RequestMapping("add")
  public JsonResult add(Post post, String[] content, HttpServletRequest req, MultipartFile[] files) throws Exception {
    
    HttpServletRequest httpRequest= (HttpServletRequest) req;
    Member loginMember = (Member)httpRequest.getSession().getAttribute("loginMember");
    /*System.out.println(files[0]);*/
    
    
    
    
    System.out.println(post);
    
    if(files!=null){
      String newFilename = this.getNewFilename();
      File file = new File(ctx.getRealPath("/mypage/upload/" + newFilename));
    files[0].transferTo(file);
    post.setCont("/mypage/upload/" + newFilename);
    File thumbnail = new File(ctx.getRealPath("/mypage/upload/" + newFilename + "_1920"));
    Thumbnails.of(file).size(1920, 1400).outputFormat("png").toFile(thumbnail);
    }
    
    post.setMno(loginMember.getMno());
    postService.add(post);
    
    
    
    /*System.out.println(post.getCont());*/
    /*System.out.println(post);
     * 
    System.out.println(post.getPostno());*/
    
    Detail detail = new Detail();
    
    detail.setPostno(post.getPostno());
    /*System.out.println(post.getCont());*/
    
    detail.setWriter(loginMember.getEmail());
    
    System.out.println(content);
    for(int i=0;i<content.length;i++){
      detail.setCont(content[i]);
      System.out.println(content[i]);
      detailService.insertDetailContent(detail);
    }
    
    
    detailService.insertDetailByEmail(detail);
    detailService.deleteEmail(loginMember.getEmail());
    return new JsonResult(JsonResult.SUCCESS, post);
  }  
  
  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }
  
}









