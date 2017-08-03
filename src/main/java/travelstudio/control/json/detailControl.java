package travelstudio.control.json;




import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import travelstudio.domain.Detail;
import travelstudio.domain.Post;
import travelstudio.service.DetailService;
import travelstudio.service.PostService;




@RestController
@RequestMapping("/detail/")
public class detailControl {
  
  @Autowired ServletContext servletContext;
  @Autowired DetailService detailService;
  
// 9
  
  @RequestMapping("add")
  public String add(Detail detail) throws Exception {
    System.out.println("1");
    detailService.add(detail);
    return "a";
    
  }  
  
  
  
}









