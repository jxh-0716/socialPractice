package com.practice.practiceManager.pojo;

public class CompletedPracticeRequest {
    private String ownStudent;
    private String name;
    private String score;
    private String teacher;

    public CompletedPracticeRequest() {
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

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }
}