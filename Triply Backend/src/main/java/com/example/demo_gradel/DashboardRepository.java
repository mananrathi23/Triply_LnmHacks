package com.example.demo_gradel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DashboardRepository extends JpaRepository<DashboardModel, Long> {
    DashboardModel findByLoginModel_UserName(String userName);

}
