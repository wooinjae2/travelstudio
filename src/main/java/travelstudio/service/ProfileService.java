package travelstudio.service;

import java.util.List;

import travelstudio.domain.Profile;

public interface ProfileService {
  List<Profile> info() throws Exception;
  Profile get(int no) throws Exception;
  void update(Profile profile) throws Exception;
  void insertPhoto(String newFile);
}







