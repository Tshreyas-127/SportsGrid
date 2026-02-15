package com.club.controller;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.club.entity.User;
import com.club.repository.UserRepository;
import com.club.service.EmailService;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class PasswordController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // ================= SEND OTP =================
    @PostMapping("/forgot-password")
    public ResponseEntity<?> sendOtp(@RequestBody Map<String, String> body) {

        String email = body.get("email");
        User user = userRepository.findByEmail(email);

        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        String otp = String.valueOf(100000 + new Random().nextInt(900000));

        user.setResetOtp(otp);
        user.setOtpExpiry(LocalDateTime.now().plusMinutes(1));
        user.setOtpAttempts(0);
        user.setOtpLockTime(null);

        userRepository.save(user);
        emailService.sendOtpEmail(email, otp);

        return ResponseEntity.ok("OTP sent successfully");
    }

    // ================= VERIFY OTP =================
    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody Map<String, String> body) {

        String email = body.get("email");
        String enteredOtp = body.get("otp");

        User user = userRepository.findByEmail(email);

        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        if (user.getOtpLockTime() != null &&
            user.getOtpLockTime().isAfter(LocalDateTime.now())) {
            return ResponseEntity.status(423).body("Account locked. Try later.");
        }

        if (user.getOtpExpiry() == null ||
            user.getOtpExpiry().isBefore(LocalDateTime.now())) {
            return ResponseEntity.badRequest().body("OTP expired");
        }

        if (!enteredOtp.equals(user.getResetOtp())) {

            int attempts = user.getOtpAttempts() + 1;
            user.setOtpAttempts(attempts);

            if (attempts >= 3) {
                user.setOtpLockTime(LocalDateTime.now().plusMinutes(5));
                user.setOtpAttempts(0);
            }

            userRepository.save(user);
            return ResponseEntity.badRequest().body("Invalid OTP");
        }

        user.setOtpAttempts(0);
        user.setOtpLockTime(null);
        userRepository.save(user);

        return ResponseEntity.ok("OTP verified");
    }

    // ================= RESET PASSWORD =================
    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> body) {

        String email = body.get("email");
        String newPassword = body.get("newPassword");
        String confirmPassword = body.get("confirmPassword");

        User user = userRepository.findByEmail(email);

        if (user == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        if (!newPassword.equals(confirmPassword)) {
            return ResponseEntity.badRequest().body("Passwords do not match");
        }

        if (passwordEncoder.matches(newPassword, user.getPassword())) {
            return ResponseEntity.badRequest().body("New password cannot be same as old");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setResetOtp(null);
        user.setOtpExpiry(null);
        user.setOtpAttempts(0);
        user.setOtpLockTime(null);

        userRepository.save(user);

        return ResponseEntity.ok("Password reset successful");
    }
}



//package com.club.controller;
//
//
//
//import java.time.LocalDateTime;
//import java.util.Random;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//
//import com.club.entity.User;
//import com.club.repository.UserRepository;
//import com.club.service.EmailService;
//
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
//@Controller
//public class PasswordController {
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private EmailService emailService;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    // ================= LOGIN PAGE =================
//    @GetMapping("/login")
//    public String loginPage() {
//        return "login";
//    }
//
//    // ================= HOME PAGE (AFTER LOGIN) =================
//    @GetMapping("/home")
//    public String homePage() {
//        return "home";
//    }
//
//    // ================= FORGOT PASSWORD PAGE =================
//    @GetMapping("/forgot-password")
//    public String forgotPasswordPage() {
//        return "forgot-password";
//    }
//
//    // ================= VERIFY OTP PAGE =================
//    @GetMapping("/verify-otp")
//    public String verifyOtpPage(@RequestParam(required = false) String email, Model model) {
//        model.addAttribute("email", email);
//        return "verify-otp";
//    }
//
//    // ================= RESET PASSWORD PAGE =================
//    @GetMapping("/reset-password")
//    public String resetPasswordPage(@RequestParam String email, Model model) {
//        model.addAttribute("email", email);
//        return "reset-password";
//    }
//
//    // ================= SEND OTP =================
//    @PostMapping("/forgot-password")
//    public String processForgotPassword(@RequestParam("email") String email, Model model) {
//
//        User user = userRepository.findByEmail(email);
//
//        if (user == null) {
//            model.addAttribute("message", "User not found!");
//            return "forgot-password";
//        }
//
//        String otp = String.valueOf(100000 + new Random().nextInt(900000));
//
//        user.setResetOtp(otp);
//        user.setOtpExpiry(LocalDateTime.now().plusMinutes(1)); // OTP valid 1 min
//        user.setOtpAttempts(0);
//        user.setOtpLockTime(null);
//
//        userRepository.save(user);
//        emailService.sendOtpEmail(email, otp);
//
//        model.addAttribute("email", email);
//        model.addAttribute("message", "OTP sent to your email.");
//        return "verify-otp";
//    }
//    
//    
//
//    // ================= RESEND OTP =================
//    @PostMapping("/resend-otp")
//    public String resendOtp(@RequestParam("email") String email, Model model) {
//
//        User user = userRepository.findByEmail(email);
//
//        if (user == null) {
//            model.addAttribute("message", "User not found!");
//            return "forgot-password";
//        }
//
//        String newOtp = String.valueOf(100000 + new Random().nextInt(900000));
//
//        user.setResetOtp(newOtp);
//        user.setOtpExpiry(LocalDateTime.now().plusMinutes(1));
//        user.setOtpAttempts(0);
//        user.setOtpLockTime(null);
//
//        userRepository.save(user);
//        emailService.sendOtpEmail(email, newOtp);
//
//        model.addAttribute("email", email);
//        model.addAttribute("message", "New OTP sent to your email.");
//        return "verify-otp";
//    }
//
//    // ================= VERIFY OTP =================
//    @PostMapping("/verify-otp")
//    public String verifyOtp(@RequestParam("email") String email,
//                            @RequestParam("otp") String enteredOtp,
//                            Model model) {
//
//        User user = userRepository.findByEmail(email);
//
//        if (user == null) {
//            model.addAttribute("message", "User not found!");
//            return "forgot-password";
//        }
//
//        // 🔒 LOCK CHECK
//        if (user.getOtpLockTime() != null &&
//            user.getOtpLockTime().isAfter(LocalDateTime.now())) {
//
//            model.addAttribute("message", "Too many wrong attempts. Try again after 5 minutes.");
//            model.addAttribute("email", email);
//            return "verify-otp";
//        }
//
//        // ⏳ OTP EXPIRY CHECK
//        if (user.getOtpExpiry() == null || user.getOtpExpiry().isBefore(LocalDateTime.now())) {
//            model.addAttribute("message", "OTP expired. Request a new one.");
//            model.addAttribute("email", email);
//            return "forgot-password";
//        }
//
//        // ❌ WRONG OTP
//        if (!user.getResetOtp().equals(enteredOtp)) {
//
//            int attempts = user.getOtpAttempts() + 1;
//            user.setOtpAttempts(attempts);
//
//            if (attempts >= 3) {
//                user.setOtpLockTime(LocalDateTime.now().plusMinutes(5)); // LOCK 5 MIN
//                user.setOtpAttempts(0);
//            }
//
//            userRepository.save(user);
//
//            model.addAttribute("message", "Invalid OTP.");
//            model.addAttribute("email", email);
//            return "verify-otp";
//        }
//
//        // ✅ OTP CORRECT
//        user.setOtpAttempts(0);
//        user.setOtpLockTime(null);
//        userRepository.save(user);
//
//        model.addAttribute("email", email);
//        return "reset-password";
//    }
//
//    // ================= RESET PASSWORD =================
//    @PostMapping("/reset-password")
//    public String resetPassword(@RequestParam("email") String email,
//                                @RequestParam("newPassword") String newPassword,
//                                @RequestParam("confirmPassword") String confirmPassword,
//                                Model model) {
//
//        User user = userRepository.findByEmail(email);
//
//        if (user == null) {
//            model.addAttribute("message", "User not found.");
//            return "forgot-password";
//        }
//
//        if (!newPassword.equals(confirmPassword)) {
//            model.addAttribute("message", "Passwords do not match.");
//            model.addAttribute("email", email);
//            return "reset-password";
//        }
//
//        // 🔐 STRONG PASSWORD VALIDATION
//        String passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,}$";
//
//        if (!newPassword.matches(passwordRegex)) {
//            model.addAttribute("message",
//                    "Password must be 8+ chars with uppercase, lowercase, number, and special character.");
//            model.addAttribute("email", email);
//            return "reset-password";
//        }
//
//        if (passwordEncoder.matches(newPassword, user.getPassword())) {
//            model.addAttribute("message", "New password cannot be same as old password.");
//            model.addAttribute("email", email);
//            return "reset-password";
//        }
//
//        user.setPassword(passwordEncoder.encode(newPassword));
//
//        // Clear OTP after success
//        user.setResetOtp(null);
//        user.setOtpExpiry(null);
//        user.setOtpAttempts(0);
//        user.setOtpLockTime(null);
//
//        userRepository.save(user);
//
//        model.addAttribute("message", "Password reset successful. Please login.");
//        return "login";
//    }
//}
//
