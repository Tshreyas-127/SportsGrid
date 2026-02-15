package com.club.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.club.entity.Membership;
import com.club.entity.MembershipPlan;
import com.club.service.MembershipService;

import java.util.List;

@RestController
@RequestMapping("/membership")
@CrossOrigin
public class MembershipController {

    @Autowired
    private MembershipService service;

    // Admin
    @PostMapping("/plan/add")
    public MembershipPlan addPlan(@RequestBody MembershipPlan plan) {
        return service.addPlan(plan);
    }

    // User
    @GetMapping("/plans")
    public List<MembershipPlan> getPlans() {
        return service.getAllPlans();
    }

    @PostMapping("/new")
    public Membership newMembership(
            @RequestParam Long userId,
            @RequestParam Long planId) {
        return service.createMembership(userId, planId);
    }

    @PostMapping("/renew")
    public Membership renewMembership(
            @RequestParam Long userId,
            @RequestParam Long planId) {
        return service.renewMembership(userId, planId);
    }
}
