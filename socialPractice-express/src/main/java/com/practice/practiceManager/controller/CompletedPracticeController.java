package com.practice.practiceManager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.practiceManager.pojo.CompletedPractice;
import com.practice.practiceManager.pojo.CompletedPracticeRequest;
import com.practice.practiceManager.pojo.ScoreUpdateRequest;
import com.practice.practiceManager.service.CompletedPracticeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CompletedPracticeController {
    @Autowired
    private CompletedPracticeService completedPracticeService;

    @GetMapping("/getCompletedPractice")
    public CompletedPractice[] getCompletedPractice(String ownStudent) {
        return completedPracticeService.getCompletedPracticeByOwnStudent(ownStudent);
    }

    @PostMapping("/addCompletedPractice")
    public String addCompletedPractice(@RequestBody CompletedPracticeRequest request) {
        completedPracticeService.addCompletedPractice(request);
        return "success";
    }

    @PostMapping("/updateScore")
    public String updateScore(@RequestBody ScoreUpdateRequest request) {
        completedPracticeService.updateScore(request);
        return "success";
    }

}
