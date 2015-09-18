CREATE DATABASE  IF NOT EXISTS `gigolo-db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `gigolo-db`;
-- MySQL dump 10.13  Distrib 5.5.43, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: gigolo-db
-- ------------------------------------------------------
-- Server version	5.5.43-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `user_image` varchar(45) DEFAULT NULL,
  `user_status` binary(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'asdasd','https://twitter.com/asdasd/profile_image?size','1'),(2,'asdasd','https://twitter.com/asdasd/profile_image?size','1'),(3,'asdasdasd','https://twitter.com/asdasdasd/profile_image?s','1'),(4,'asdasdasd','https://twitter.com/asdasdasd/profile_image?s','1'),(5,'asdasdasd','https://twitter.com/asdasdasd/profile_image?s','1'),(6,'gasbriones','https://twitter.com/gasbriones/profile_image?','1'),(7,'gasbriones','https://twitter.com/gasbriones/profile_image?','1'),(8,'gasbriones','https://twitter.com/gasbriones/profile_image?','1'),(9,'gasbriones','https://twitter.com/gasbriones/profile_image?','1'),(10,'gasbriones','https://twitter.com/gasbriones/profile_image?','1'),(11,'franciscokala','https://twitter.com/franciscokala/profile_ima','1'),(12,'wqedf','https://twitter.com/wqedf/profile_image?size=','1'),(13,'joip','https://twitter.com/joip/profile_image?size=o','1'),(14,'joiperez','https://twitter.com/joiperez/profile_image?si','1'),(15,'joiperez','https://twitter.com/joiperez/profile_image?si','1'),(16,'gasbriones','https://twitter.com/gasbriones/profile_image?','1');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'gigolo-db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-18 18:19:35
