package com.club.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.club.entity.Booking;
import com.club.service.BookingService;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/booking")
@CrossOrigin
public class BookingController {

    @Autowired
    private BookingService service;

    @PostMapping("/create")
    public Booking create(@RequestBody Booking booking) {
        return service.createBooking(booking);
    }

    @GetMapping("/user/{userId}")
    public List<Booking> userBookings(@PathVariable Long userId) {
        return service.getUserBookings(userId);
    }

    @GetMapping("/facility")
    public List<Booking> facilityBookings(
            @RequestParam Long facilityId,
            @RequestParam String date) {

        return service.getBookingsForFacility(
                facilityId,
                LocalDate.parse(date));
    }
}
