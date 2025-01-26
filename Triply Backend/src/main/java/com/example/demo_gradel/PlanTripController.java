package com.example.demo_gradel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plan-trip")
@CrossOrigin(origins = "*") // Allow CORS for frontend
public class PlanTripController {

    @Autowired
    private PlanTripRepository planTripRepository;

    // Create a new trip
    @PostMapping("/newT")
    public PlanTripModel createTrip(@RequestBody PlanTripModel trip) {
        return planTripRepository.save(trip);
    }

    // Get all trips
    @GetMapping
    public List<PlanTripModel> getAllTrips() {
        return planTripRepository.findAll();
    }

    // Get a specific trip by ID
    @GetMapping("/{id}")
    public PlanTripModel getTripById(@PathVariable Long id) {
        return planTripRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Trip not found with id: " + id));
    }

    // Update a trip
    @PutMapping("/{id}")
    public PlanTripModel updateTrip(@PathVariable Long id, @RequestBody PlanTripModel updatedTrip) {
        try {
            // Find the existing trip
            PlanTripModel existingTrip = planTripRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Trip not found with id: " + id));

            // Set new values from the updated trip
            existingTrip.setDestination(updatedTrip.getDestination());
            existingTrip.setStartFrom(updatedTrip.getStartFrom());
            existingTrip.setModeOfTransport(updatedTrip.getModeOfTransport());
            existingTrip.setStartDate(updatedTrip.getStartDate());
            existingTrip.setEndDate(updatedTrip.getEndDate());
            existingTrip.setNumberOfPeople(updatedTrip.getNumberOfPeople());

            // Ensure version is set correctly for optimistic locking
            existingTrip.setVersion(updatedTrip.getVersion());

            // Save the updated trip (optimistic locking will check the version automatically)
            return planTripRepository.save(existingTrip);
        } catch (OptimisticLockingFailureException e) {
            throw new RuntimeException("The trip was updated or deleted by another transaction. Please try again.");
        }
    }

    // Delete a trip
    @DeleteMapping("/{id}")
    public String deleteTrip(@PathVariable Long id) {
        planTripRepository.deleteById(id);
        return "Trip deleted successfully with id: " + id;
    }
}
