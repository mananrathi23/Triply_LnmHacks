package com.example.demo_gradel;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class TripsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String groupName;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "trip_id")
    private List<MemberModel> members = new ArrayList<>();

    // Constructors
    public TripsModel() {}

    public TripsModel(String groupName) {
        this.groupName = groupName;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public List<MemberModel> getMembers() {
        return members;
    }

    public void setMembers(List<MemberModel> members) {
        this.members = members;
    }
}
