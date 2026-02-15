package com.club.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.club.entity.User;
import com.club.repository.UserRepository;

@Service
public class AdminService {

    @Autowired
    private UserRepository repo;

    // All members
    public List<User> getAllMembers() {
        return repo.findByRole("MEMBER");
    }

    // Approve member
    public User approveMember(Long id) {
        User user = repo.findById(id).orElseThrow();
        user.setActive(true);
        return repo.save(user);
    }

    // Deactivate
    public User deactivateMember(Long id) {
        User user = repo.findById(id).orElseThrow();
        user.setActive(false);
        return repo.save(user);
    }

    // Delete
    public void deleteMember(Long id) {
        repo.deleteById(id);
    }
}
