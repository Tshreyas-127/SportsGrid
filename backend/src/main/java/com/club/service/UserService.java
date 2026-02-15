package com.club.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.club.entity.User;
import com.club.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private BCryptPasswordEncoder encoder;

    public User addUser(User user) {
        // 🔐 encrypt password
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    // ✅ SECURE LOGIN
    public User login(String email, String password) {

        User user = repo.findByEmail(email);

        if (user != null && encoder.matches(password, user.getPassword())) {
            return user;
        }

        throw new RuntimeException("Invalid email or password");
    }
}
