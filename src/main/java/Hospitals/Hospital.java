package main.java.Hospitals;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Hospital {

  // Formats output date when this DTO is passed through JSON
  @JsonFormat(pattern = "dd/MM/yyyy")
  // Allows dd/MM/yyyy date to be passed into GET request in JSON
  @DateTimeFormat(pattern = "dd/MM/yyyy")
  private Date date;
  private String name;
  private @Id
  @GeneratedValue
  Long id;
  private String county;
  private long vaccines;

  public Hospital() {}

  public Hospital(Date date, String name, String county, long vaccines) {
    this.date = date;
    this.name = name;
    this.county = county;
    this.vaccines = vaccines;
  }


  public void setDate(Date date) {
    this.date = date;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setCounty(String county) {
    this.county = county;
  }

  public void setVaccines(long vaccines) {
    this.vaccines = vaccines;
  }


  public Date getDate() {
    return this.date;
  }

  public String getName() {
    return this.name ;
  }

  /*public long getId() {
    return this.id;
  }*/

  public String getCounty() {
    return this.county;
  }

  public long getVaccines() {
    return this.vaccines;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Hospital hospital = (Hospital) o;
    return vaccines == hospital.vaccines &&
        date.equals(hospital.date) &&
        name.equals(hospital.name) &&
        id.equals(hospital.id) &&
        county.equals(hospital.county);
  }

  @Override
  public int hashCode() {
    return Objects.hash(date, name, id, county, vaccines);
  }

  @Override
  public String toString() {
    return "Hospital{" +
        "date=" + date +
        ", name='" + name + '\'' +
        ", id=" + id +
        ", county='" + county + '\'' +
        ", vaccines=" + vaccines +
        '}';
  }
}
