/* Spring WebMVC: JSON 콘텐츠로 응답하기 + 파일 업로드 + thumbnail 파일 생성
 * => AJAX 파일 업로드
 * 
 */
package travelstudio.control.json;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.drew.imaging.ImageMetadataReader;
import com.drew.metadata.Metadata;
import com.drew.metadata.exif.ExifSubIFDDirectory;
import com.drew.metadata.exif.GpsDirectory;

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
  public Object upload(MultipartFile[] files, int srtno, HttpServletRequest req) throws Exception {
    HttpServletRequest httpRequest= (HttpServletRequest) req;
    Member loginMember = (Member)httpRequest.getSession().getAttribute("loginMember");
    ArrayList<Object> fileList = new ArrayList<>();
    
    System.out.println(srtno);
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
      detail.setSrtno(srtno);
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
      detailService.add(detail);
      
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

  @RequestMapping(path="upload4")
  public Object upload4(MultipartFile[] files, HttpServletRequest req) throws Exception {
    HttpServletRequest httpRequest= (HttpServletRequest) req;
    Member loginMember = (Member)httpRequest.getSession().getAttribute("loginMember");
    ArrayList<Object> fileList = new ArrayList<>();
    System.out.println(files.length);
    for (int i = 0; i < files.length; i++) {
//      File fileMetadata= files[i];
      if (files[i].isEmpty()) 
        continue;
    
      String newFilename = this.getNewFilename();
      File file = new File(ctx.getRealPath("/upload/" + newFilename));
      files[i].transferTo(file);
      System.out.println(file);
      
      Picture picture = new Picture();
      Metadata metadata = ImageMetadataReader.readMetadata(file);
      
      GpsDirectory gpsDirectory = metadata.getFirstDirectoryOfType(GpsDirectory.class);
      System.out.println(gpsDirectory.getGeoLocation());
      
      
      picture.setPath("/upload/" + newFilename);
//      picture.setLati(gpsDirectory.getGeoLocation().getLatitude());
//      picture.setLongit(gpsDirectory.getGeoLocation().getLongitude());
//      
      pictureService.add1(picture);
//      
//      System.out.printf("위도: %f", picture.getLati());
//      System.out.printf("경도: %f", picture.getLongit());
      
//       날짜
      ExifSubIFDDirectory directory = metadata.getFirstDirectoryOfType(ExifSubIFDDirectory.class);
      Date date = directory.getDate(ExifSubIFDDirectory.TAG_DATETIME_ORIGINAL);
      System.out.println(date);
      SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
      String metaDateTime = sdf.format(date);
      System.out.println(metaDateTime);
      picture.setTime(metaDateTime);
      
      
 List<Picture> picNoList = pictureService.selectPicNo("/upload/" + newFilename);
      
      Detail detail = new Detail();
      detail.setPicno(picNoList.get(0).getPicno());
      detail.setWriter(loginMember.getEmail());
      detailService.sadd(detail);
      System.out.println(loginMember.getEmail());
      
      File thumbnail = new File(ctx.getRealPath("/upload/" + newFilename + "_700"));
      Thumbnails.of(file).size(761, 506).outputFormat("png").toFile(thumbnail); 

     
        
      HashMap<String,Object> fileMap = new HashMap<>();
      fileMap.put("filename", newFilename);
      fileMap.put("filesize", files[i].getSize());
      fileList.add(fileMap);
      System.out.println(fileMap);
      System.out.println(files[i].getOriginalFilename());
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

