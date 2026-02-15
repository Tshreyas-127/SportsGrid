package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.MembershipPlan;

public interface MembershipPlanRepository
        extends JpaRepository<MembershipPlan, Long> {
}
