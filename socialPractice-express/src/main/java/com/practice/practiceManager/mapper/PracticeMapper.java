package com.practice.practiceManager.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.practice.practiceManager.pojo.Practice;

@Mapper
public interface PracticeMapper {
    @Insert("insert into practice (name, maxNum, taskNum, owner, joinStudent) values (#{name}, #{maxNum}, #{taskNum}, #{owner}, #{joinStudent})")
    void addPractice(String name, int maxNum, int taskNum, String owner, String joinStudent);

    @Select("select * from practice")
    Practice[] getAllPractice();

    @Select("select * from practice where id = #{id}")
    Practice getPracticeById(int id);

    @Update("<script>"
            + "update practice"
            + "<set>"
            + "<if test='joinStudent != null'>joinStudent = #{joinStudent},</if>"
            + "<if test='taskNum != null'>taskNum = #{taskNum},</if>"
            + "</set>"
            + "where id = #{id}"
            + "</script>")
    void updatePractice(int id, String joinStudent, Integer taskNum);

    @Delete("delete from practice where id = #{id}")
    void deletePractice(int id);

}