package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.DietPlan;

public interface DietPlanRepository extends JpaRepository<DietPlan, Long> {

    DietPlan findByMemberId(Long memberId);
}
