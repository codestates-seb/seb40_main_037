package server.beerfactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class BeerfactoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(BeerfactoryApplication.class, args);
	}

}
