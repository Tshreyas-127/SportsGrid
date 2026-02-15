package com.club.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.club.entity.Achievement;
import com.club.repository.AchievementRepository;

import java.util.List;

@Service
public class AchievementService {

    @Autowired
    private AchievementRepository repo;

    // Admin
    public Achievement addAchievement(Achievement achievement) {
        return repo.save(achievement);
    }

    // Public
    public List<Achievement> clubAchievements() {
        return repo.findByType("CLUB");
    }

    public List<Achievement> memberAchievements(Long userId) {
        return repo.findByUserId(userId);
    }
}
