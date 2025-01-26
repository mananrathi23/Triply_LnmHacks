package com.example.demo_gradel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/trips")
public class TripsController {

    @Autowired
    private TripsRepository tripsRepository;

    @PostMapping("/add")
    public ResponseEntity<String> addTrip(@RequestBody TripsModel tripsModel) {
        tripsRepository.save(tripsModel);
        return ResponseEntity.ok("Trip and members saved successfully!");
    }

    @GetMapping("/{id}")
    public ResponseEntity<TripsModel> getTrip(@PathVariable Long id) {
        TripsModel trip = tripsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Trip not found"));
        return ResponseEntity.ok(trip);
    }
}
