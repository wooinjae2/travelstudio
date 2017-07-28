package travelstudio.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import travelstudio.dao.MemberDao;
import travelstudio.domain.Member;
import travelstudio.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
  
  
  @Autowired
  MemberDao memberDao;
  
  public List<Member> info() throws Exception {
   
    
    return memberDao.selectList();
  }

  
  public Member get(int no) throws Exception {
    return memberDao.selectOne(no);
  }
  //XML 태그로 트랜잭션을 설정하게 되면 @Transactional 애노테이션은 필요없다.
  //@Transactional(propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
  public void update(Member member) throws Exception {
    System.out.println(member);
    int count = memberDao.update(member);
    if (count < 1) {
      throw new Exception(member.getNo() + "번 강사를 찾을 수 없습니다.");
    }
  }
  
  public void insertPhoto(String newFile){
    memberDao.insertPhoto(newFile);
  }
  
  /*우인재*/
  public Member getByEmailPassword(String email, String password) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("email", email);
    valueMap.put("password", password);
    System.out.println(valueMap);
    System.out.println(email);
    return memberDao.selectOneByEmailPassword(valueMap);
  }
  
  
  public void add(Member member) throws Exception {
    memberDao.insert(member);
    
  }
  
  /*
  public Teacher getByEmailPassword(String email, String password) throws Exception {
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("email", email);
    valueMap.put("password", password);
    
    return teacherDao.selectOneByEmailPassword(valueMap);
  }
  @Override
  public int getSize() throws Exception {
    return teacherDao.countAll();
  }
  
  // XML 태그로 트랜잭션을 설정하게 되면 @Transactional 애노테이션은 필요없다.
  //@Transactional(propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
  public void add(Teacher teacher) throws Exception {
    memberDao.insert(teacher);
    teacherDao.insert(teacher);
    this.insertPhoto(teacher.getNo(), teacher.getPhotoList()); // 강사 사진 추가
  }
  
    
    count = teacherDao.update(teacher);
    if (count < 1) {
      throw new Exception(teacher.getNo() + "번 강사를 찾을 수 없습니다.");
    }
    
    // 강사 사진 갱신
    teacherDao.deletePhoto(teacher.getNo()); // 강사의 모든 사진을 지운다.
    this.insertPhoto(teacher.getNo(), teacher.getPhotoList()); // 강사 사진 추가
  }
  
  private void insertPhoto(int teacherNo, List<String> photoPathList) {
    if (photoPathList == null)
      return;
    
    HashMap<String,Object> valueMap = new HashMap<>();
    valueMap.put("teacherNo", teacherNo);
    
    for (String photoPath : photoPathList) {
      valueMap.put("photoPath", photoPath);
      teacherDao.insertPhoto(valueMap);
    }
  }
  
  //XML 태그로 트랜잭션을 설정하게 되면 @Transactional 애노테이션은 필요없다.
  //@Transactional(propagation=Propagation.REQUIRED, rollbackFor=Exception.class)
  public void remove(int no) throws Exception {
    teacherDao.deletePhoto(no);
    int count = teacherDao.delete(no);
    if (count < 1) {
      throw new Exception(no + "번 강사를 찾을 수 없습니다.");
    }
    
    try {
      count = memberDao.delete(no);
    } catch (Exception e) {}
  }*/
}







