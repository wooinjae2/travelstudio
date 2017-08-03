package travelstudio.domain;


/* 역할: memb 테이블의 값을 보관할 때 사용할 클래스
 * => 복합 데이터를 다룰 때, 이렇게 클래스를 정의하여 사용한다.
 * => 이런 복합 데이터를 보관하는 용도로 사용하는 클래스를
 *    "도메인(domain)" 클래스 또는 "DTO(Data Transfer Object)"라 부른다.
 */


public class Detail {
  int picno;
  String  postno, cont, date, capt, writer, address;
  float longit, lati;
  public int getPicno() {
    return picno;
  }
  public void setPicno(int picno) {
    this.picno = picno;
  }
  public String getPostno() {
    return postno;
  }
  public void setPostno(String postno) {
    this.postno = postno;
  }
  public String getCont() {
    return cont;
  }
  public void setCont(String cont) {
    this.cont = cont;
  }
  public String getDate() {
    return date;
  }
  public void setDate(String date) {
    this.date = date;
  }
  public String getCapt() {
    return capt;
  }
  public void setCapt(String capt) {
    this.capt = capt;
  }
  public String getWriter() {
    return writer;
  }
  public void setWriter(String writer) {
    this.writer = writer;
  }
  public String getAddress() {
    return address;
  }
  public void setAddress(String address) {
    this.address = address;
  }
  public float getLongit() {
    return longit;
  }
  public void setLongit(float longit) {
    this.longit = longit;
  }
  public float getLati() {
    return lati;
  }
  public void setLati(float lati) {
    this.lati = lati;
  }
  @Override
  public String toString() {
    return "Detail [picno=" + picno + ", postno=" + postno + ", cont=" + cont + ", date=" + date + ", capt=" + capt
        + ", writer=" + writer + ", address=" + address + ", longit=" + longit + ", lati=" + lati + "]";
  }
  
  
  
}



