package com.club.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.club.entity.Event;
import com.club.entity.EventRegistration;
import com.club.service.EventService;

import java.util.List;

@RestController
@RequestMapping("/events")
@CrossOrigin
public class EventController {

    @Autowired
    private EventService service;

    // Admin
    @PostMapping("/add")
    public Event addEvent(@RequestBody Event event) {
        return service.addEvent(event);
    }

    // Public
    @GetMapping("/upcoming")
    public List<Event> upcoming() {
        return service.getUpcomingEvents();
    }

    @GetMapping("/past")
    public List<Event> past() {
        return service.getPastEvents();
    }

    // User
    @PostMapping("/register")
    public EventRegistration register(
            @RequestParam Long eventId,
            @RequestParam Long userId) {
        return service.registerForEvent(eventId, userId);
    }

    @GetMapping("/user/{userId}")
    public List<EventRegistration> userEvents(@PathVariable Long userId) {
        return service.getUserRegistrations(userId);
    }
}
