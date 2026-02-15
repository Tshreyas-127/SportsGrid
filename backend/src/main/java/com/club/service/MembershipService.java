package com.club.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.club.entity.Membership;
import com.club.entity.MembershipPlan;
import com.club.repository.MembershipPlanRepository;
import com.club.repository.MembershipRepository;

import java.time.LocalDate;
import java.util.List;

@Service
public class MembershipService {

    @Autowired
    private MembershipRepository membershipRepo;

    @Autowired
    private MembershipPlanRepository planRepo;

    // Admin: add plan
    public MembershipPlan addPlan(MembershipPlan plan) {
        return planRepo.save(plan);
    }

    // Public: view plans
    public List<MembershipPlan> getAllPlans() {
        return planRepo.findAll();
    }

    // New Membership
    public Membership createMembership(Long userId, Long planId) {

        MembershipPlan plan = planRepo.findById(planId).orElseThrow();

        Membership membership = new Membership();
        membership.setUserId(userId);
        membership.setPlanId(planId);

        LocalDate start = LocalDate.now();
        LocalDate end = start.plusMonths(plan.getDurationMonths());

        membership.setStartDate(start);
        membership.setEndDate(end);
        membership.setStatus("ACTIVE");

        return membershipRepo.save(membership);
    }

    // Renew Membership
    public Membership renewMembership(Long userId, Long planId) {

        Membership membership = membershipRepo.findByUserId(userId);
        MembershipPlan plan = planRepo.findById(planId).orElseThrow();

        LocalDate newEndDate = membership.getEndDate()
                .plusMonths(plan.getDurationMonths());

        membership.setEndDate(newEndDate);
        membership.setStatus("ACTIVE");

        return membershipRepo.save(membership);
    }
}
