package com.practice.practiceManager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.practiceManager.pojo.Practice;
import com.practice.practiceManager.service.PracticeService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PracticeController {
    @Autowired
    private PracticeService practiceService;

    @PostMapping("/addPractice")
    public String addPractice(String name, int maxNum, int taskNum, String owner,
            String joinStudent) {
        practiceService.addPractice(name, maxNum, taskNum, owner, joinStudent);
        return "success";
    }

    @GetMapping("/getAllPractice")
    public Practice[] getAllPractice() {
        return practiceService.getAllPractice();
    }

    @PostMapping("/updatePractice")
    public String joinPractice(int id, String joinStudent, Integer taskNum) {
        practiceService.updatePractice(id, joinStudent, taskNum);
        return "success";
    }

    @PostMapping("/delete")
    public String deletePractice(int id) {
        practiceService.deletePractice(id);
        return "success";
    }

}
