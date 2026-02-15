package com.club.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.club.entity.Facility;
import com.club.repository.FacilityRepository;

import java.util.List;

@Service
public class FacilityService {

    @Autowired
    private FacilityRepository repo;

    public Facility addFacility(Facility facility) {
        return repo.save(facility);
    }

    public List<Facility> getAllFacilities() {
        return repo.findAll();
    }

    public List<Facility> getFacilitiesByType(String type) {
        return repo.findByType(type);
    }
}

