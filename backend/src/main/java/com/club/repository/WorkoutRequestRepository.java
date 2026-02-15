package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.WorkoutRequest;
import java.util.List;

public interface WorkoutRequestRepository
        extends JpaRepository<WorkoutRequest, Long> {

    List<WorkoutRequest> findByStatus(String status);
}
