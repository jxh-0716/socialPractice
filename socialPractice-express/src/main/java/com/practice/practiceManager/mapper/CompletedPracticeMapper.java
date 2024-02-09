package com.practice.practiceManager.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.web.bind.annotation.RequestBody;

import com.practice.practiceManager.pojo.CompletedPractice;

@Mapper
public interface CompletedPracticeMapper {
    @Insert("insert into completedPractice (ownStudent, name, score, time, teacher) values (#{ownStudent}, #{name}, #{score}, now() , #{teacher})")
    void addCompletedPractice(String ownStudent, String name, String score, String teacher);

    @Select("<script>"
            + "select * from completedPractice"
            + "<if test='ownStudent != null and ownStudent != \"\"'>"
            + " where ownStudent = #{ownStudent}"
            + "</if>"
            + "</script>")
    CompletedPractice[] getCompletedPracticeByOwnStudent(String ownStudent);

    @Update("UPDATE completedPractice SET score = #{score} WHERE id = #{id}")
    void updateScore(int id, String score);
}
