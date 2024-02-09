package com.practice.practiceManager.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.practice.practiceManager.pojo.User;

@Mapper
public interface UserMapper {
    @Insert("insert into user (username, password, role) values (#{username}, #{password}, #{role})")
    void addUser(String username, String password, String role);

    @Select("select * from user where username = #{username}")
    User getUserByUsername(String username);

    @Select("select * from user")
    User[] getAllUser();

    @Delete("delete from user where username = #{username}")
    void deleteUser(String username);

    @Update("<script>"
            + "update user"
            + "<set>"
            + "<if test='password != null'>password = #{password},</if>"
            + "<if test='role != null'>role = #{role},</if>"
            + "</set>"
            + "where username = #{username}"
            + "</script>")
    void updateUser(String username, String password, String role);
}
