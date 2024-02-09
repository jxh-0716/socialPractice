package com.practice.practiceManager.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.practice.practiceManager.mapper.CompletedPracticeMapper;
import com.practice.practiceManager.pojo.CompletedPractice;
import com.practice.practiceManager.pojo.CompletedPracticeRequest;
import com.practice.practiceManager.pojo.ScoreUpdateRequest;
import com.practice.practiceManager.service.CompletedPracticeService;

@Service
public class CompletedPracticeServiceImpl implements CompletedPracticeService {

    @Autowired
    private CompletedPracticeMapper completedPracticeMapper;

    @Override
    public void addCompletedPractice(CompletedPracticeRequest request) {
        completedPracticeMapper.addCompletedPractice(request.getOwnStudent(), request.getName(), request.getScore(),
                request.getTeacher());
    }

    @Override
    public CompletedPractice[] getCompletedPracticeByOwnStudent(String ownStudent) {
        return completedPracticeMapper.getCompletedPracticeByOwnStudent(ownStudent);
    }

    @Override
    public void updateScore(ScoreUpdateRequest request) {
        completedPracticeMapper.updateScore(request.getId(), request.getScore());
    }
}
