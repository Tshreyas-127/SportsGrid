//package com.club.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import com.club.entity.DietRequest;
//import com.club.entity.DietPlan;
//import com.club.repository.DietRequestRepository;
//import com.club.repository.DietPlanRepository;
//
//
//import java.util.List;
//
//@Service
//public class DietService {
//
//    @Autowired
//    private DietRequestRepository requestRepo;
//
//    @Autowired
//    private DietPlanRepository planRepo;
//
//    // Member
//    public DietRequest requestDiet(DietRequest request) {
//        return requestRepo.save(request);
//    }
//
//    // Admin / Nutritionist
//    public List<DietRequest> getPendingRequests() {
//        return requestRepo.findByStatus("PENDING");
//    }
//
//    public DietPlan createDietPlan(DietPlan plan) {
//        return planRepo.save(plan);
//    }
//
//    // Member
//    public DietPlan viewDietPlan(Long memberId) {
//        return planRepo.findByMemberId(memberId);
//    }
//}







package com.club.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.club.entity.DietRequest;
import com.club.entity.DietPlan;
import com.club.repository.DietRequestRepository;
import com.club.repository.DietPlanRepository;
import com.club.dto.DietPlanRequest;

import java.util.List;

@Service
public class DietService {

    @Autowired
    private DietRequestRepository requestRepo;

    @Autowired
    private DietPlanRepository planRepo;

    // ===================== MEMBER =====================
    public DietRequest requestDiet(DietRequest request) {
        return requestRepo.save(request);
    }

    // ===================== ADMIN / NUTRITIONIST =====================
    public List<DietRequest> getPendingRequests() {
        return requestRepo.findByStatus("PENDING");
    }

    // ❗ KEEP THIS METHOD (used elsewhere, do NOT remove)
    public DietPlan createDietPlan(DietPlan plan) {
        return planRepo.save(plan);
    }

    // ✅ DTO FLOW (FIXED PROPERLY)
    public DietPlan createDietPlanFromRequest(DietPlanRequest request) {

        // 1️⃣ Create & save plan
        DietPlan plan = new DietPlan();
        plan.setMemberId(request.getMemberId());
        plan.setMealPlan(request.getDietDetails());
        plan.setNotes("Duration: " + request.getDuration());
        plan.setCalories(2000);
        plan.setNutritionistId(1L);

        DietPlan savedPlan = planRepo.save(plan);

        // 2️⃣ Mark request as COMPLETED
        requestRepo.findByStatus("PENDING").stream()
            .filter(r -> r.getMemberId().equals(request.getMemberId()))
            .findFirst()
            .ifPresent(r -> {
                r.setStatus("COMPLETED");
                requestRepo.save(r);
            });

        // 3️⃣ Return saved plan
        return savedPlan;
    }

    // ===================== MEMBER =====================
    public DietPlan viewDietPlan(Long memberId) {
        return planRepo.findByMemberId(memberId);
    }

    // =================================================
    // ✅ NEW METHODS (ADDED ONLY – NO EXISTING CODE TOUCHED)
    // =================================================

    // MEMBER → get all nutrition requests by memberId
    public List<DietRequest> getRequestsByMember(Long memberId) {
        return requestRepo.findByMemberId(memberId);
    }

    // MEMBER → get own requests with COMPLETED / PENDING status
    public List<DietRequest> getMyRequestsWithStatus(Long memberId) {

        List<DietRequest> requests = requestRepo.findByMemberId(memberId);

        DietPlan plan = planRepo.findByMemberId(memberId);

        if (plan != null) {
            requests.forEach(r -> r.setStatus("COMPLETED"));
        }

        return requests;
    }
}



