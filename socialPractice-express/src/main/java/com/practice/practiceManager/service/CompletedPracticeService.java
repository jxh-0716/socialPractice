package com.practice.practiceManager.service;

import org.springframework.web.bind.annotation.RequestBody;

import com.practice.practiceManager.pojo.CompletedPractice;
import com.practice.practiceManager.pojo.CompletedPracticeRequest;
import com.practice.practiceManager.pojo.ScoreUpdateRequest;

public interface CompletedPracticeService {

    void addCompletedPractice(CompletedPracticeRequest request);

    CompletedPractice[] getCompletedPracticeByOwnStudent(String ownStudent);

    void updateScore(@RequestBody ScoreUpdateRequest request);
}