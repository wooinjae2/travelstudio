package travelstudio.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.coobird.thumbnailator.Thumbnails;
import travelstudio.domain.Profile;
import travelstudio.service.ProfileService;

@RestController
@RequestMapping("/profile/")
public class ProfileControl {
  
  @Autowired ServletContext servletContext;
  @Autowired ProfileService profileService;
  
  @RequestMapping("info")
  public JsonResult list() throws Exception {
    
    HashMap<String,Object> dataMap = new HashMap<>();
    dataMap.put("info", profileService.info());
    return new JsonResult(JsonResult.SUCCESS, dataMap);
  }
  
@RequestMapping("detail")
  public JsonResult detail(int no) throws Exception {
  System.out.println(no);
    Profile profile= profileService.get(no);
    System.out.println(profile);
    if (profile == null) {
      return new JsonResult(JsonResult.FAIL, no + "번 강사가 없습니다.");
    }
    return new JsonResult(JsonResult.SUCCESS, profile);
  }
@RequestMapping("update")
public JsonResult update(Profile profile) throws Exception {
  profileService.update(profile);
  return new JsonResult(JsonResult.SUCCESS, "ok");
}

@RequestMapping(path="upload1")
public Object upload1(MultipartFile[] files) throws Exception {
  HashMap<String,Object> resultMap = new HashMap<>();
 /* ProfileService.photoUp*/
  ArrayList<Object> fileList = new ArrayList<>();
  
  for (int i = 0; i < files.length; i++) {
    files[i].transferTo(new File(servletContext.getRealPath("/upload/" + files[i].getOriginalFilename())));
    System.out.println(files[i].getOriginalFilename());
    HashMap<String,Object> fileMap = new HashMap<>();
    fileMap.put("filename", files[i].getOriginalFilename());
    fileMap.put("filesize", files[i].getSize());
    fileList.add(fileMap);
    
    String newFile =files[i].getOriginalFilename();
    System.out.println(newFile);
    profileService.insertPhoto(newFile);
  }
  resultMap.put("fileList", fileList);
  return resultMap;
}


@RequestMapping(path="add")
public Object add(MultipartFile files) throws Exception {
  HashMap<String,Object> resultMap = new HashMap<>();
  
  System.out.println("서버 응답 완료!"); 
  
  
  ArrayList<Object> fileList = new ArrayList<>();
  
      System.out.println(files.getOriginalFilename());
      HashMap<String,Object> fileMap = new HashMap<>();

      String newFilename = files.getOriginalFilename();
      File file = new File(servletContext.getRealPath("/upload/" + newFilename));
      files.transferTo(file);
      
      File thumbnail = new File(servletContext.getRealPath("/upload/" + newFilename + "_80"));
      Thumbnails.of(file).size(80, 80).outputFormat("png").toFile(thumbnail); 

      thumbnail = new File(servletContext.getRealPath("/upload/" + newFilename + "_140"));
      Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
      
      thumbnail = new File(servletContext.getRealPath("/upload/" + newFilename + "_200"));
      Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);
        
      fileMap.put("filename", newFilename);
      fileMap.put("filesize", files.getSize());
      fileList.add(fileMap);
      
      resultMap.put("fileList", fileList);    
      
  
  return new JsonResult(JsonResult.SUCCESS, "ok");
}
/*    
  
  @RequestMapping("delete")
  public JsonResult delete(int no) throws Exception {
    teacherService.remove(no);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }  
  
  @RequestMapping("add")
  public JsonResult add(Teacher teacher) throws Exception {
    teacherService.add(teacher);
    return new JsonResult(JsonResult.SUCCESS, "ok");
  }*/  
  
/*  private List<String> processMultipartFiles(MultipartFile[] files) throws Exception {
    ArrayList<String> photoList = new ArrayList<>();
    for (MultipartFile file : files) {
      if (file.isEmpty())
        continue;
      String filename = getNewFilename();
      file.transferTo(new File(servletContext.getRealPath("/teacher/photo/" + filename)));
      photoList.add(filename);
    }
    return photoList;
  }
  
  
  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }*/
}









