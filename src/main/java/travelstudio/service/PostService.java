package travelstudio.service;





import java.util.List;

import travelstudio.domain.Post;

public interface PostService {
  List<Post> list() throws Exception;
  void add(Post post) throws Exception;
  List<Post> getWriteCount(Post post) throws Exception;
//  int getSize() throws Exception;
}







