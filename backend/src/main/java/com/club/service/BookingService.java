package com.club.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.club.entity.Booking;
import com.club.repository.BookingRepository;

import java.time.LocalDate;
import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repo;

    public Booking createBooking(Booking booking) {
        booking.setStatus("BOOKED");
        return repo.save(booking);
    }

    public List<Booking> getUserBookings(Long userId) {
        return repo.findByUserId(userId);
    }

    public List<Booking> getBookingsForFacility(Long facilityId, LocalDate date) {
        return repo.findByFacilityIdAndBookingDate(facilityId, date);
    }
}

