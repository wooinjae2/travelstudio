package travelstudio.domain;
/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Profile {
  int no;
  String email;
  String alias;
  String intro;
  String memberPhoto;
  
  @Override
  public String toString() {
    return "Profile [no=" + no + ", email=" + email + ", alias=" + alias + ", intro=" + intro + ", memberPhoto="
        + memberPhoto + "]";
  }
  public int getNo() {
    return no;
  }
  public void setNo(int no) {
    this.no = no;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getAlias() {
    return alias;
  }
  public void setAlias(String alias) {
    this.alias = alias;
  }
  public String getIntro() {
    return intro;
  }
  public void setIntro(String intro) {
    this.intro = intro;
  }
  public String getMemberPhoto() {
    return memberPhoto;
  }
  public void setMemberPhoto(String memberPhoto) {
    this.memberPhoto = memberPhoto;
  }
  


}
