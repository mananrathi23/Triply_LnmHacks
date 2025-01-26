package com.example.demo_gradel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanTripRepository extends JpaRepository<PlanTripModel, Long> {
    // Additional custom queries can go here if needed

}
