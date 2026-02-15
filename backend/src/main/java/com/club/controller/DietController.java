//package com.club.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import com.club.entity.*;
//import com.club.service.DietService;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/fitness/nutrition")
//@CrossOrigin
//public class DietController {
//
//    @Autowired
//    private DietService service;
//
//    // MEMBER
//    @PostMapping("/request")
//    public DietRequest requestDiet(@RequestBody DietRequest request) {
//        return service.requestDiet(request);
//    }
//
//    // ADMIN / NUTRITIONIST
//    @GetMapping("/requests")
//    public List<DietRequest> pendingRequests() {
//        return service.getPendingRequests();
//    }
//
//    @PostMapping("/plan/create")
//    public DietPlan createPlan(@RequestBody DietPlan plan) {
//        return service.createDietPlan(plan);
//    }
//
//    // MEMBER
//    @GetMapping("/plan/{memberId}")
//    public DietPlan viewPlan(@PathVariable Long memberId) {
//        return service.viewDietPlan(memberId);
//    }
//}
















package com.club.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.club.entity.*;
import com.club.service.DietService;
import com.club.dto.DietPlanRequest;

import java.util.List;

@RestController
@RequestMapping("/fitness/nutrition")
@CrossOrigin
public class DietController {

    @Autowired
    private DietService service;

    // MEMBER
    @PostMapping("/request")
    public DietRequest requestDiet(@RequestBody DietRequest request) {
        return service.requestDiet(request);
    }

    // ADMIN / NUTRITIONIST
    @GetMapping("/requests")
    public List<DietRequest> pendingRequests() {
        return service.getPendingRequests();
    }

    // NUTRITIONIST (FIXED — DTO USED)
    @PostMapping("/plan/create")
    public DietPlan createPlan(@RequestBody DietPlanRequest request) {
        return service.createDietPlanFromRequest(request);
    }

    // MEMBER
    @GetMapping("/plan/{memberId}")
    public DietPlan viewPlan(@PathVariable Long memberId) {
        return service.viewDietPlan(memberId);
    }
    
 // MEMBER → get requests by memberId
    @GetMapping("/request/{memberId}")
    public List<DietRequest> getRequestsByMember(
            @PathVariable Long memberId) {
        return service.getRequestsByMember(memberId);
    }

    // MEMBER → get own requests with status
    @GetMapping("/my-requests")
    public List<DietRequest> getMyRequests(
            @RequestParam Long memberId) {
        return service.getMyRequestsWithStatus(memberId);
    }

}