package com.practice.practiceManager.service;

import com.practice.practiceManager.pojo.User;

public interface UserService {
    void addUser(String username, String password, String role);

    User getUserByUsername(String username);

    User[] getAllUser();

    void deleteUser(String username);

    void updateUser(String username, String password, String role);
}
