package com.club.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.club.entity.Event;
import com.club.entity.EventRegistration;
import com.club.repository.EventRepository;
import com.club.repository.EventRegistrationRepository;

import java.time.LocalDate;
import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepo;

    @Autowired
    private EventRegistrationRepository regRepo;

    // Admin: add event
    public Event addEvent(Event event) {

        if (event.getEventDate().isBefore(LocalDate.now())) {
            event.setStatus("COMPLETED");
        } else {
            event.setStatus("UPCOMING");
        }

        return eventRepo.save(event);
    }

    // Public
    public List<Event> getUpcomingEvents() {
        return eventRepo.findByStatus("UPCOMING");
    }

    public List<Event> getPastEvents() {
        return eventRepo.findByStatus("COMPLETED");
    }

    // User registers for event
    public EventRegistration registerForEvent(Long eventId, Long userId) {

        EventRegistration reg = new EventRegistration();
        reg.setEventId(eventId);
        reg.setUserId(userId);

        return regRepo.save(reg);
    }

    public List<EventRegistration> getUserRegistrations(Long userId) {
        return regRepo.findByUserId(userId);
    }
}
