package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.EventRegistration;
import java.util.List;

public interface EventRegistrationRepository
        extends JpaRepository<EventRegistration, Long> {

    List<EventRegistration> findByUserId(Long userId);
}

