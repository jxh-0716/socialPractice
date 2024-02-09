package com.practice.practiceManager.service;

import com.practice.practiceManager.pojo.Practice;

public interface PracticeService {
    void addPractice(String name, int maxNum, int taskNum, String owner, String joinStudent);

    Practice[] getAllPractice();

    void updatePractice(int id, String joinStudent, Integer taskNum);

    Practice getPracticeById(int id);

    void deletePractice(int id);
}