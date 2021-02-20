package Hospitals;

import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AccessingMyData {
  public static SessionFactory sF;

  public static void main(String[] args) {
    SpringApplication.run(AccessingMyData.class, args);
    StandardServiceRegistry registry = new StandardServiceRegistryBuilder().configure().build();
    try {
      sF = new MetadataSources(registry).buildMetadata().buildSessionFactory();
    } catch (Exception e) {
      // handle the exception
    }

  }

}