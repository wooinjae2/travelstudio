package travelstudio.control.json;




import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import travelstudio.service.PictureService;




@RestController
@RequestMapping("/picture/")
public class PictureControl {
  
  @Autowired ServletContext servletContext;
  @Autowired PictureService pictureService;
  

  @RequestMapping("add")
  public String add(String filename) throws Exception {
    pictureService.add(filename);
    
    return "a";
    
  }  
}









