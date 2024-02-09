package com.practice.practiceManager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.practiceManager.pojo.User;
import com.practice.practiceManager.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")

public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public String addUser(String username, String password, String role) {
        if (userService.getUserByUsername(username) != null) {
            return "fail";
        }
        userService.addUser(username, password, role);
        return "success";
    }

    @GetMapping("/getUserByUsername")
    public User getUserByUsername(String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping("/getAllUser")
    public User[] getAllUser() {
        return userService.getAllUser();
    }

    @PostMapping("/deleteUser")
    public String deleteUser(String username) {
        userService.deleteUser(username);
        return "success";
    }

    @PostMapping("/updateUser")
    public String updateUser(String username, String password, String role) {
        userService.updateUser(username, password, role);
        return "success";
    }

}