package com.example.demo_gradel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripsRepository extends JpaRepository<TripsModel, Long> {
}
