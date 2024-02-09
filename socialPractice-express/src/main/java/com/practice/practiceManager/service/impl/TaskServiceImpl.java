package com.practice.practiceManager.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice.practiceManager.mapper.TaskMapper;
import com.practice.practiceManager.pojo.Task;
import com.practice.practiceManager.service.TaskService;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskMapper taskMapper;

    @Override
    public void addTask(String content, int praId, int order, String owner, String praName) {
        taskMapper.addTask(content, praId, order, owner, praName);
    }

    @Override
    public Task[] getTasks(Integer praId, String owner) {
        Task[] res = taskMapper.getTasks(praId, owner);
        return res;
    }

}
