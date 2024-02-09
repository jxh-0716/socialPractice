package com.practice.practiceManager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.practiceManager.pojo.Task;
import com.practice.practiceManager.service.TaskService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("/addTask")
    public String addTask(String content, int praId, int order, String owner, String praName) {
        taskService.addTask(content, praId, order, owner, praName);
        return "success";
    }

    @GetMapping("/getTasks")
    public Task[] getTasks(Integer praId, String owner) {
        return taskService.getTasks(praId, owner);
    }
}
