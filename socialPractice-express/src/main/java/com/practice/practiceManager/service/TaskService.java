package com.practice.practiceManager.service;

import com.practice.practiceManager.pojo.Task;

public interface TaskService {
    void addTask(String content, int praId, int order, String owner, String praName);

    Task[] getTasks(Integer praId, String owner);
}
