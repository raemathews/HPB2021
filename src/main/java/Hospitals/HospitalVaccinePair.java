package main.java.Hospitals;

public class HospitalVaccinePair {
  private long totalCount;
  private String hospital;

  public HospitalVaccinePair(long totalCount, String county) {
    this.totalCount = totalCount;
    this.hospital = county;
  }

  public long getTotalCount() {
    return totalCount;
  }

  public String getHospital() {
    return hospital;
  }

  public void setTotalCount(long totalCount) {
    this.totalCount = totalCount;
  }

  public void setHospital(String hospital) {
    this.hospital = hospital;
  }

}
