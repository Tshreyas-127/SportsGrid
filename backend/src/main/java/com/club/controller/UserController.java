package com.club.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.club.entity.User;
import com.club.security.JwtUtil;
import com.club.service.UserService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService service;

    @Autowired
    private JwtUtil jwtUtil;

    // ADD USER
    @PostMapping("/add")
    public User addUser(@RequestBody User user){
        return service.addUser(user);
    }

    // GET ALL USERS
    @GetMapping("/all")
    public List<User> getAll(){
        return service.getAllUsers();
    }

    // 🔐 LOGIN + JWT TOKEN
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user) {

        User dbUser = service.login(user.getEmail(), user.getPassword());

        // Generate JWT token
        String token = jwtUtil.generateToken(
                dbUser.getEmail(),
                dbUser.getRole()
        );

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("userId", dbUser.getUserId());
        response.put("email", dbUser.getEmail());
        response.put("role", dbUser.getRole());
        response.put("fullName", dbUser.getName());  

        

        return response;
    }
}
