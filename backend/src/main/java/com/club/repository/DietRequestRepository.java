package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.DietRequest;
import java.util.List;

public interface DietRequestRepository
        extends JpaRepository<DietRequest, Long> {

    List<DietRequest> findByStatus(String status);
    
    List<DietRequest> findByMemberId(Long memberId);
}
