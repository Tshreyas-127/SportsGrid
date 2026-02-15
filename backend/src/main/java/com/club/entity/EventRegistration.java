package com.club.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "event_registration")
public class EventRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long eventId;
    private Long userId;

    private LocalDate registrationDate;

    public EventRegistration() {
        this.registrationDate = LocalDate.now();
    }

    // getters & setters

    public Long getId() {
        return id;
    }

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDate getRegistrationDate() {
        return registrationDate;
    }
}

