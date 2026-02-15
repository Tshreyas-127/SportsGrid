package com.club.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.Booking;
import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findByFacilityIdAndBookingDate(Long facilityId, LocalDate bookingDate);

    List<Booking> findByUserId(Long userId);
}

