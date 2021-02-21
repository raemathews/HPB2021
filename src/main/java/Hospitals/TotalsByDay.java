package main.java.Hospitals;
import java.text.SimpleDateFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class TotalsByDay {

  // Formats output date when this DTO is passed through JSON
  @JsonFormat(pattern = "yyyy/MM/dd")
  // Allows dd/MM/yyyy date to be passed into GET request in JSON
  @DateTimeFormat(pattern = "yyyy/MM/dd")

  private long y;
  private long x;

  public TotalsByDay(Date x, long y) {

    this.y = y;
    this.x = x.getTime();
  }

  public long getY() {
    return y;
  }

  public void setY(long y) {
    this.y = y;
  }

  public long getX() {
    return x;
  }

  public void setX(long x) {
    this.x = x;
  }

}
