package com.practice.practiceManager.pojo;

import java.sql.Timestamp;

public class CompletedPractice {
    private int id;
    private String ownStudent;
    private String name;
    private String score;
    private Timestamp time;
    private String teacher;

    // Constructor
    public CompletedPractice(int id, String ownStudent, String name, String score, Timestamp time, String teacher) {
        this.id = id;
        this.ownStudent = ownStudent;
        this.name = name;
        this.score = score;
        this.time = time;
        this.teacher = teacher;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOwnStudent() {
        return ownStudent;
    }

    public void setOwnStudent(String ownStudent) {
        this.ownStudent = ownStudent;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }
}