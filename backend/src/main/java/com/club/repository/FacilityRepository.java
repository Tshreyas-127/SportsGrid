package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.Facility;
import java.util.List;

public interface FacilityRepository extends JpaRepository<Facility, Long> {

    List<Facility> findByType(String type);
}

