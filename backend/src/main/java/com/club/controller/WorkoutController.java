package com.club.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.club.entity.*;
import com.club.service.WorkoutService;

import java.util.List;

@RestController
@RequestMapping("/fitness/workout")
@CrossOrigin
public class WorkoutController {

    @Autowired
    private WorkoutService service;

    // MEMBER
    @PostMapping("/request")
    public WorkoutRequest request(@RequestBody WorkoutRequest request) {
        return service.requestWorkout(request);
    }

    // TRAINER
    @GetMapping("/requests")
    public List<WorkoutRequest> requests() {
        return service.pendingRequests();
    }

    @PostMapping("/plan/create")
    public WorkoutPlan create(@RequestBody WorkoutPlan plan) {
        return service.createPlan(plan);
    }

    // MEMBER
    @GetMapping("/plan/{memberId}")
    public WorkoutPlan view(@PathVariable Long memberId) {
        return service.viewPlan(memberId);
    }
}

