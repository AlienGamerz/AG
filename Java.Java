package com.agelectronics;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class AGelectronicsApplication {

    public static void main(String[] args) {
        SpringApplication.run(AGelectronicsApplication.class, args);
    }

    @RestController
    class HomeController {

        @GetMapping("/")
        public String home() {
            return "index";
        }

        @GetMapping("/about")
        public String about() {
            return "about";
        }

        @GetMapping("/products")
        public String products() {
            return "products";
        }

        @GetMapping("/contact")
        public String contact() {
            return "contact";
        }
    }
}
