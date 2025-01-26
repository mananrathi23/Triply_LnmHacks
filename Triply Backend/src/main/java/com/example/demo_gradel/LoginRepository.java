package com.example.demo_gradel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<LoginModel, String> {
    LoginModel findByEmailAndPassword(String Email, String Password);
}

