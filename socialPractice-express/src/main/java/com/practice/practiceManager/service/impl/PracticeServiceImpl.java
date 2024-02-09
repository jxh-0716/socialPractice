package com.practice.practiceManager.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice.practiceManager.mapper.PracticeMapper;
import com.practice.practiceManager.pojo.Practice;
import com.practice.practiceManager.service.PracticeService;

@Service
public class PracticeServiceImpl implements PracticeService {
    @Autowired
    private PracticeMapper practiceMapper;

    @Override
    public void addPractice(String name, int maxNum, int taskNum, String owner, String joinStudent) {
        practiceMapper.addPractice(name, maxNum, taskNum, owner, joinStudent);
    }

    @Override
    public Practice[] getAllPractice() {
        Practice[] res = practiceMapper.getAllPractice();
        return res;
    }

    @Override
    public void updatePractice(int id, String joinStudent, Integer taskNum) {
        practiceMapper.updatePractice(id, joinStudent, taskNum);
    }

    @Override
    public Practice getPracticeById(int id) {
        Practice res = practiceMapper.getPracticeById(id);
        return res;
    }

    @Override
    public void deletePractice(int id) {
        practiceMapper.deletePractice(id);
    }
}
