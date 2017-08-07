package travelstudio.service;





import java.util.List;

import travelstudio.domain.Detail;

public interface DetailService {
  List<Detail> list() throws Exception;
  void add(Detail detail) throws Exception;
  void sadd(Detail detail) throws Exception;
//int getSize() throws Exception;
void insertDetailByEmail(Detail detail);
void deleteEmail(String writer);
void insertDetailContent(Detail detail);
List<Detail> selectedOneDetail(String postno);
}