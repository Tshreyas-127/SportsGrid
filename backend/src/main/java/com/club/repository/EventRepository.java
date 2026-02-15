package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.Event;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {

    List<Event> findByStatus(String status);
}
