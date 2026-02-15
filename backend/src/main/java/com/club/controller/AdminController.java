package com.club.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.club.entity.User;
import com.club.service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Get all members
    @GetMapping("/members")
    public List<User> getAllMembers() {
        return adminService.getAllMembers();
    }

    // Approve member
    @PutMapping("/members/approve/{id}")
    public User approveMember(@PathVariable Long id) {
        return adminService.approveMember(id);
    }

    // Deactivate member
    @PutMapping("/members/deactivate/{id}")
    public User deactivateMember(@PathVariable Long id) {
        return adminService.deactivateMember(id);
    }

    // Delete member
    @DeleteMapping("/members/{id}")
    public void deleteMember(@PathVariable Long id) {
        adminService.deleteMember(id);
    }
}
