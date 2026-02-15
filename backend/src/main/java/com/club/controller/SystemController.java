package com.club.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/system")
@CrossOrigin
public class SystemController {

    // 🔥 SUPER ADMIN (YOU)
    @GetMapping("/super/dashboard")
    public Map<String, Object> superAdminDashboard() {
        Map<String, Object> map = new HashMap<>();
        map.put("totalClubs", 5);
        map.put("totalAdmins", 10);
        map.put("revenue", "₹2,50,000");
        return map;
    }

    // 🏢 CLUB OWNER (ADMIN)
    @GetMapping("/admin/dashboard")
    public Map<String, Object> adminDashboard() {
        Map<String, Object> map = new HashMap<>();
        map.put("users", 20);
        map.put("bookings", 50);
        map.put("enquiries", 8);
        return map;
    }

    // 🥗 NUTRITIONIST
    @GetMapping("/nutrition/requests")
    public List<String> nutritionRequests() {
        return Arrays.asList("User1 Diet Request", "User2 Diet Request");
    }

    // 🏋 TRAINER
    @GetMapping("/trainer/requests")
    public List<String> trainerRequests() {
        return Arrays.asList("User1 Workout", "User2 Workout");
    }

    // 👤 MEMBER
    @GetMapping("/member/profile")
    public Map<String, String> memberProfile() {
        Map<String, String> map = new HashMap<>();
        map.put("name", "Member Name");
        map.put("status", "Active");
        return map;
    }
}
