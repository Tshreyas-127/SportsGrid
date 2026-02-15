package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.Membership;

public interface MembershipRepository
        extends JpaRepository<Membership, Long> {

    Membership findByUserId(Long userId);
}
