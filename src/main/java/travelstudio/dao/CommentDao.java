package travelstudio.dao;

import java.util.List;

import travelstudio.domain.Comment;

public interface CommentDao {
  List<Comment> selectList();
 
  int insert(Comment commnet);

}
