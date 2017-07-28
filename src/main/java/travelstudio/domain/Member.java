package travelstudio.domain;


/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Member {
  int no;
  String email;
  String password;
  String alias;
  String intro;
  String pwd;
  String mPhoto;
  
  @Override
  public String toString() {
    return "Member [no=" + no + ", email=" + email + ", password=" + password + ", alias=" + alias + ", intro=" + intro
        + ", pwd=" + pwd + ", mPhoto=" + mPhoto + "]";
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
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
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
  public String getPwd() {
    return pwd;
  }
  public void setPwd(String pwd) {
    this.pwd = pwd;
  }
  public String getmPhoto() {
    return mPhoto;
  }
  public void setmPhoto(String mPhoto) {
    this.mPhoto = mPhoto;
  }
  
  
  
  
  
}
