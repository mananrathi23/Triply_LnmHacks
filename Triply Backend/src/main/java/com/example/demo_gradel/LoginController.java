package com.example.demo_gradel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "*")
public class LoginController {
    @Autowired
    private LoginRepository loginRepository;

    @PostMapping("/put")
    public ResponseEntity<?> CreateUser(@RequestBody LoginModel loginModel) {
        try {
            if (loginRepository.existsById(loginModel.getEmail())) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                        .body("User with this email already exists");
            }
            LoginModel savedUser = loginRepository.save(loginModel);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(savedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error saving user");
        }
    }


    @PostMapping("/login")
    public String login(@RequestBody LoginModel loginModel) {
        LoginModel user = loginRepository.findByEmailAndPassword(loginModel.getEmail(), loginModel.getPassword());
        if (user != null) {
            return "Login Successful";
        } else {
            return "Invalid email or password";
        }
    }
}
