package travelstudio.control.json;




import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import travelstudio.domain.Picture;
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
  @RequestMapping("selectByPost")
  public Object selectByPost(String[] pictureno) throws Exception{
    List<Picture> fileList = new ArrayList();
    /*List<Picture> file = new List<>();*/
    /*System.out.println(pictureno[1]);*/
    
    /*System.out.println(Arrays.toString(pictureno));*/
    
    /*String picturno2 = Arrays.toString(pictureno);
    int idx = picturno2.indexOf("]"); 
    String pictureno3=picturno2.substring(1, idx);
    System.out.println(pictureno3);*/
    for(int i=0; i<pictureno.length;i++){
      
      
      fileList.add(pictureService.selectByPost(pictureno[i]));
      System.out.println(pictureService.selectByPost(pictureno[i]));
      /*filepath[i]=pictureService.selectByPost(pictureno[i]).getPath();*/
      System.out.println(pictureno.length);
    }
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("fileList", fileList);
    return resultMap;
  }
}









