package com.club.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendOtpEmail(String toEmail, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("SportGrid:Sports Club Management System Password Reset OTP");
        message.setText("Your OTP for password reset is: " + otp + "\nThis OTP is valid for 1 minute.");

        mailSender.send(message);
    }
}

