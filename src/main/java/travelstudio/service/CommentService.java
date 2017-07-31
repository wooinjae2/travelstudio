package travelstudio.service;

import java.util.List;
import travelstudio.domain.Comment;


public interface CommentService {
  List<Comment> list() throws Exception;
  void add(Comment comment) throws Exception;

//  int getSize() throws Exception;
}







