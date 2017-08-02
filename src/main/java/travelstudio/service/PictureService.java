package travelstudio.service;

import java.util.List;

import travelstudio.domain.Picture;

public interface PictureService {
  void add(String filename) throws Exception;
  List<Picture> selectPicNo(String path);
//  List<Post> list() throws Exception;
//  List<Post> getWriteCount(Post post) throws Exception;
//  int getSize() throws Exception;
}







