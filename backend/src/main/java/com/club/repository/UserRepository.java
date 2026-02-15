package com.club.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.club.entity.User;
//
//public interface UserRepository extends JpaRepository<User, Long> {
//	User findByEmail(String email);
//	User findByResetOtp(String resetOtp);
//}


public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
    User findByResetOtp(String resetOtp);

    // 🔥 Admin features
    List<User> findByRole(String role);
    List<User> findByRoleAndActive(String role, boolean active);
}
