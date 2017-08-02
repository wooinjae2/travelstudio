/* Spring WebMVC: JSON 콘텐츠로 응답하기 + 파일 업로드 + thumbnail 파일 생성
 * => AJAX 파일 업로드
 * 
 */
package travelstudio.control.json;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.coobird.thumbnailator.Thumbnails;
import travelstudio.domain.Detail;
import travelstudio.domain.Member;
import travelstudio.domain.Picture;
import travelstudio.service.DetailService;
import travelstudio.service.PictureService;

@RestController
@RequestMapping("/File/") 
public class FileControl {
  
  @Autowired ServletContext ctx;
  @Autowired PictureService pictureService;
  @Autowired DetailService detailService;
  
  @RequestMapping(path="upload")
  public Object upload(MultipartFile[] files) throws Exception {
    
    ArrayList<Object> fileList = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        continue;
      
      String newFilename = this.getNewFilename();
      File file = new File(ctx.getRealPath("/upload/" + newFilename));
      System.out.println(file);
//      System.out.println();
      files[i].transferTo(file);
      
      File thumbnail = new File(ctx.getRealPath("/upload/" + newFilename + "_80"));
      Thumbnails.of(file).size(80, 80).outputFormat("png").toFile(thumbnail); 

      thumbnail = new File(ctx.getRealPath("/upload/" + newFilename + "_140"));
      Thumbnails.of(file).size(140, 140).outputFormat("png").toFile(thumbnail);
      
      thumbnail = new File(ctx.getRealPath("/upload/" + newFilename + "_200"));
      Thumbnails.of(file).size(200, 200).outputFormat("png").toFile(thumbnail);
        
      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", newFilename);
      fileMap.put("filesize", files[i].getSize());
      fileList.add(fileMap);
    }
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("fileList", fileList);
    return resultMap;
  }
  


  
  @RequestMapping(path="upload3")
  public Object upload3(MultipartFile[] files, HttpServletRequest req) throws Exception {
    HttpServletRequest httpRequest= (HttpServletRequest) req;
    Member loginMember = (Member)httpRequest.getSession().getAttribute("loginMember");
    ArrayList<Object> fileList = new ArrayList<>();
    
    for (int i = 0; i < files.length; i++) {
      if (files[i].isEmpty()) 
        continue;
      
      String newFilename = this.getNewFilename();
      File file = new File(ctx.getRealPath("/mypage/upload/" + newFilename));
      System.out.println(file);
//      System.out.println();
      files[i].transferTo(file);
      pictureService.add("/mypage/upload/" + newFilename);
      List<Picture> picNoList = pictureService.selectPicNo("/mypage/upload/" + newFilename);
      
      System.out.println(loginMember.getEmail());
      Detail detail = new Detail();
      detail.setPicno(picNoList.get(0).getPicno());
      detail.setWriter(loginMember.getEmail());
      detailService.sadd(detail);
      
      File thumbnail = new File(ctx.getRealPath("/mypage/upload/" + newFilename + "_700"));
      Thumbnails.of(file).size(761, 506).outputFormat("png").toFile(thumbnail); 

     
        
      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", newFilename);
      fileMap.put("filesize", files[i].getSize());
      fileList.add(fileMap);
    }
    
    HashMap<String,Object> resultMap = new HashMap<>();
    resultMap.put("fileList", fileList);
    return resultMap;
  }

  
  int count = 0;
  synchronized private String getNewFilename() {
    if (count > 100) {
      count = 0;
    }
    return String.format("%d_%d", System.currentTimeMillis(), ++count); 
  }
}

