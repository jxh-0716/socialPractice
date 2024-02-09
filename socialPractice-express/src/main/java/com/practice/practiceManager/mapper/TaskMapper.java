package com.practice.practiceManager.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.practice.practiceManager.pojo.Task;

@Mapper
public interface TaskMapper {
    @Insert("insert into dailyTask (content, praId, time, `order`, owner, praName) values (#{content}, #{praId}, now(), #{order}, #{owner}, #{praName})")
    void addTask(String content, int praId, int order, String owner, String praName);

    @Select("<script>"
            + "select * from dailyTask"
            + "<if test='praId != null or owner != null'>"
            + "<where>"
            + "<if test='praId != null'>AND praId = #{praId}</if>"
            + "<if test='owner != null'>AND owner = #{owner}</if>"
            + "</where>"
            + "</if>"
            + "</script>")
    Task[] getTasks(Integer praId, String owner);
}