package com.practice.practiceManager.pojo;

public class Practice {
    private int id;
    private String name;
    private int maxNum;
    private int taskNum;
    private String owner;
    private String joinStudent;

    // Constructor
    public Practice(int id, String name, int maxNum, int taskNum, String owner, String joinStudent) {
        this.id = id;
        this.name = name;
        this.maxNum = maxNum;
        this.taskNum = taskNum;
        this.owner = owner;
        this.joinStudent = joinStudent;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMaxNum() {
        return maxNum;
    }

    public void setMaxNum(int maxNum) {
        this.maxNum = maxNum;
    }

    public int getTaskNum() {
        return taskNum;
    }

    public void setTaskNum(int taskNum) {
        this.taskNum = taskNum;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getJoinStudent() {
        return joinStudent;
    }

    public void setJoinStudent(String joinStudent) {
        this.joinStudent = joinStudent;
    }
}