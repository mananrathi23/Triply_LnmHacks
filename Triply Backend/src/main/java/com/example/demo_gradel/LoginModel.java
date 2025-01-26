package com.example.demo_gradel;

import jakarta.persistence.*;

@Entity
@Table(name = "Login")
public class LoginModel {
    @Id
    @Column(name = "Email", nullable = false, unique = true)
    private String email;

    @Column(name = "UserName")
    private String userName;

    @Column(name = "Password")
    private String password;

    @Column(name = "PhoneNo")
    private long phoneNo;

    public LoginModel(String userName, String password, long phoneNo, String email) {
        this.userName = userName;
        this.password = password;
        this.phoneNo = phoneNo;
        this.email = email;
    }


    public LoginModel() {}

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(long phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
