-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: social_practice
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `completedPractice`
--

DROP TABLE IF EXISTS `completedPractice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `completedPractice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ownStudent` text,
  `name` text,
  `score` json DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `teacher` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `completedPractice`
--

LOCK TABLES `completedPractice` WRITE;
/*!40000 ALTER TABLE `completedPractice` DISABLE KEYS */;
INSERT INTO `completedPractice` VALUES (6,'ws','打扫公园','[{\"score\": \"88\", \"teacher\": \"teacherb\"}, {\"score\": \"92\", \"teacher\": \"a老师\"}]','2023-12-26 15:42:35','a老师');
/*!40000 ALTER TABLE `completedPractice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dailyTask`
--

DROP TABLE IF EXISTS `dailyTask`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dailyTask` (
  `id` int NOT NULL AUTO_INCREMENT,
  `praId` int DEFAULT NULL,
  `owner` text,
  `content` text,
  `time` datetime DEFAULT NULL,
  `order` int DEFAULT NULL,
  `praName` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dailyTask`
--

LOCK TABLES `dailyTask` WRITE;
/*!40000 ALTER TABLE `dailyTask` DISABLE KEYS */;
INSERT INTO `dailyTask` VALUES (20,8,'ws','打扫了a公园','2023-12-26 15:34:02',1,'打扫公园'),(21,8,'ws','打扫了b公园','2023-12-26 15:34:12',2,'打扫公园'),(22,8,'ws','打扫了c公园','2023-12-26 15:42:35',3,'打扫公园');
/*!40000 ALTER TABLE `dailyTask` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `practice`
--

DROP TABLE IF EXISTS `practice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `practice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `maxNum` int DEFAULT NULL,
  `taskNum` int DEFAULT '1',
  `owner` text,
  `joinStudent` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `practice`
--

LOCK TABLES `practice` WRITE;
/*!40000 ALTER TABLE `practice` DISABLE KEYS */;
INSERT INTO `practice` VALUES (8,'打扫公园',3,3,'a老师','ws'),(9,'帮助社区老人',3,3,'a老师','ws'),(10,'爱心公益',1,4,'管理员a','');
/*!40000 ALTER TABLE `practice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` text,
  `password` text,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'a老师','123456','teacher'),(5,'ws','1234567','student'),(6,'teacherb','123456','teacher'),(7,'管理员a','123456','admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-26 16:45:44
