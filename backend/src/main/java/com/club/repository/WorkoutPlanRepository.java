package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.WorkoutPlan;

public interface WorkoutPlanRepository
        extends JpaRepository<WorkoutPlan, Long> {

    WorkoutPlan findByMemberId(Long memberId);
}
