package com.example.demo_gradel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {
    @Autowired
    private DashboardRepository dashboardRepository;

    @GetMapping("/{userName}")
    public String getDashboardByUserName(@PathVariable String userName) {
        return userName;
    }
}
