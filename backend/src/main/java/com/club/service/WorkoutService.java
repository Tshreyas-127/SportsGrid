package com.club.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.club.entity.*;
import com.club.repository.*;

import java.util.List;

@Service
public class WorkoutService {

    @Autowired
    private WorkoutRequestRepository requestRepo;

    @Autowired
    private WorkoutPlanRepository planRepo;

    // Member
    public WorkoutRequest requestWorkout(WorkoutRequest request) {
        return requestRepo.save(request);
    }

    // Trainer
    public List<WorkoutRequest> pendingRequests() {
        return requestRepo.findByStatus("PENDING");
    }

    public WorkoutPlan createPlan(WorkoutPlan plan) {
        return planRepo.save(plan);
    }

    // Member
    public WorkoutPlan viewPlan(Long memberId) {
        return planRepo.findByMemberId(memberId);
    }
}
