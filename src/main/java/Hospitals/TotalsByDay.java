package main.java.Hospitals;

import com.fasterxml.jackson.annotation.JsonFormat;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class TotalsByDay {

  // Formats output date when this DTO is passed through JSON
  @JsonFormat(pattern = "dd/MM/yyyy")
  // Allows dd/MM/yyyy date to be passed into GET request in JSON
  @DateTimeFormat(pattern = "dd/MM/yyyy")

  private long total;
  private Date date;

  public TotalsByDay(long total, Date date) {
    this.total = total;
    this.date = date;
  }

  public long getTotal() {
    return total;
  }

  public void setTotal(long total) {
    this.total = total;
  }

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

}
