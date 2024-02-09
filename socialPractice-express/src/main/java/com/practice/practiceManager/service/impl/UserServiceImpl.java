package com.practice.practiceManager.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice.practiceManager.mapper.UserMapper;
import com.practice.practiceManager.pojo.User;
import com.practice.practiceManager.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public void addUser(String username, String password, String role) {
        userMapper.addUser(username, password, role);
    }

    @Override
    public User getUserByUsername(String username) {
        User res = userMapper.getUserByUsername(username);
        return res;
    }

    @Override
    public User[] getAllUser() {
        User[] res = userMapper.getAllUser();
        return res;
    }

    @Override
    public void deleteUser(String username) {
        userMapper.deleteUser(username);
    }

    @Override
    public void updateUser(String username, String password, String role) {
        userMapper.updateUser(username, password, role);
    }
}
