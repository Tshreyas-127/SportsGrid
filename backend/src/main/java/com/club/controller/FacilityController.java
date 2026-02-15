package com.club.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.club.entity.Facility;
import com.club.service.FacilityService;

import java.util.List;

@RestController
@RequestMapping("/facilities")
@CrossOrigin
public class FacilityController {

    @Autowired
    private FacilityService service;

    // Admin
    @PostMapping("/add")
    public Facility addFacility(@RequestBody Facility facility) {
        return service.addFacility(facility);
    }

    // Public
    @GetMapping("/all")
    public List<Facility> getAll() {
        return service.getAllFacilities();
    }

    @GetMapping("/type/{type}")
    public List<Facility> getByType(@PathVariable String type) {
        return service.getFacilitiesByType(type);
    }
}

