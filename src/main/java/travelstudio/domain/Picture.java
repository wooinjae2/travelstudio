package travelstudio.domain;


/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Picture {
  int picno;
  String path, time, lati, longit;
  public int getPicno() {
    return picno;
  }
  public void setPicno(int picno) {
    this.picno = picno;
  }
  public String getPath() {
    return path;
  }
  public void setPath(String path) {
    this.path = path;
  }
  public String getTime() {
    return time;
  }
  public void setTime(String time) {
    this.time = time;
  }
  public String getLati() {
    return lati;
  }
  public void setLati(String lati) {
    this.lati = lati;
  }
  public String getLongit() {
    return longit;
  }
  public void setLongit(String longit) {
    this.longit = longit;
  }
  @Override
  public String toString() {
    return "Picture [picno=" + picno + ", path=" + path + ", time=" + time + ", lati=" + lati + ", longit=" + longit
        + "]";
  }
  
  
}
