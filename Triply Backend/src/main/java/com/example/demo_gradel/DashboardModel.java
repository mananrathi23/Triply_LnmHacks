package com.example.demo_gradel;

import jakarta.persistence.*;

@Entity
@Table(name = "Dashboard")
public class DashboardModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DashboardId")
    private Long dashboardId;

    @OneToOne
    @JoinColumn(name = "UserName", referencedColumnName = "UserName", nullable = false, unique = true)
    private LoginModel loginModel;

    public DashboardModel() {}

    public DashboardModel(LoginModel loginModel) {
        this.loginModel = loginModel;
    }

    public Long getDashboardId() {
        return dashboardId;
    }

    public void setDashboardId(Long dashboardId) {
        this.dashboardId = dashboardId;
    }

    public LoginModel getLoginModel() {
        return loginModel;
    }

    public void setLoginModel(LoginModel loginModel) {
        this.loginModel = loginModel;
    }
}
