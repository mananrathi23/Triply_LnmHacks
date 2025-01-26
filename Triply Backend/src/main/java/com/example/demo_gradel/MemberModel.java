package com.example.demo_gradel;

import jakarta.persistence.*;

@Entity
public class MemberModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String mobile;

    // Constructors
    public MemberModel() {}

    public MemberModel(String name, String mobile) {
        this.name = name;
        this.mobile = mobile;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
}
