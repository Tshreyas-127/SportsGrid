package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.Achievement;
import java.util.List;

public interface AchievementRepository
        extends JpaRepository<Achievement, Long> {

    List<Achievement> findByType(String type);
    List<Achievement> findByUserId(Long userId);
}
