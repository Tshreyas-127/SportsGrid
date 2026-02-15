package com.club.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.club.entity.Achievement;
import com.club.service.AchievementService;

import java.util.List;

@RestController
@RequestMapping("/achievements")
@CrossOrigin
public class AchievementController {

    @Autowired
    private AchievementService service;

    // Admin
    @PostMapping("/add")
    public Achievement add(@RequestBody Achievement achievement) {
        return service.addAchievement(achievement);
    }

    // Public
    @GetMapping("/club")
    public List<Achievement> club() {
        return service.clubAchievements();
    }

    @GetMapping("/member/{userId}")
    public List<Achievement> member(@PathVariable Long userId) {
        return service.memberAchievements(userId);
    }
}
