package com.practice.practiceManager.pojo;

import java.sql.Timestamp;

public class Task {
    private int id;
    private int praId;
    private String owner;
    private String content;
    private Timestamp time;
    private int order;
    private String praName;

    // Constructor
    public Task(int id, int praId, String owner, String content, Timestamp time, int order, String praName) {
        this.id = id;
        this.praId = praId;
        this.owner = owner;
        this.content = content;
        this.time = time;
        this.order = order;
        this.praName = praName;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPraId() {
        return praId;
    }

    public void setPraId(int praId) {
        this.praId = praId;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    public int getOrder() {
        return order;
    }

    public void setOrder(int order) {
        this.order = order;
    }

    public String getPraName() {
        return praName;
    }

    public void setPraName(String praName) {
        this.praName = praName;
    }
}