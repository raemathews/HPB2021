package main.java.Hospitals;

public class CountyVaccinePair {

  private long totalCount;
  private String county;

  public CountyVaccinePair(String county,long totalCount) {
    this.totalCount = totalCount;
    this.county = county;
  }

  public long getTotalCount() {
    return totalCount;
  }

  public String getCounty() {
    return county;
  }

  public void setTotalCount(long totalCount) {
    this.totalCount = totalCount;
  }

  public void setCounty(String county) {
    this.county = county;
  }



}
