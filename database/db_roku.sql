-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 29, 2018 at 05:17 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_home`
--

DROP TABLE IF EXISTS `tbl_home`;
CREATE TABLE IF NOT EXISTS `tbl_home` (
  `home_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `home_promo_text` text NOT NULL,
  PRIMARY KEY (`home_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kids`
--

DROP TABLE IF EXISTS `tbl_kids`;
CREATE TABLE IF NOT EXISTS `tbl_kids` (
  `kids_id` int(11) UNSIGNED NOT NULL,
  `kids_movie_title` varchar(225) NOT NULL,
  `kids_movie_desc` text NOT NULL,
  `kids_movie_length` varchar(10) NOT NULL,
  `kids_movie_thumb` varchar(150) NOT NULL,
  `kids_movie_video` varchar(150) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_kids`
--

INSERT INTO `tbl_kids` (`kids_id`, `kids_movie_title`, `kids_movie_desc`, `kids_movie_length`, `kids_movie_thumb`, `kids_movie_video`) VALUES
(1, 'Kids Testing', 'Kids Testing Desc', '58:00', 'kids1.jpg', 'kids1.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_parent`
--

DROP TABLE IF EXISTS `tbl_parent`;
CREATE TABLE IF NOT EXISTS `tbl_parent` (
  `parent_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `parent_movie_title` varchar(225) NOT NULL,
  `parent_movie_desc` text NOT NULL,
  `parent_movie_length` varchar(10) NOT NULL,
  `parent_movie_thumb` varchar(150) NOT NULL,
  `parent_movie_video` varchar(150) NOT NULL,
  PRIMARY KEY (`parent_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_parent`
--

INSERT INTO `tbl_parent` (`parent_id`, `parent_movie_title`, `parent_movie_desc`, `parent_movie_length`, `parent_movie_thumb`, `parent_movie_video`) VALUES
(1, 'Parent Movie Title1', 'Parent Description', '1:58:00', 'test1.jpg', 'test1.mp4'),
(2, 'Parent Movie Title 2', 'Parent Description 2', '2:01:19', 'Test2.jpg', 'Test2.mp4'),
(3, 'Testing3', 'Parent Description 3', '5:00', 'test1.jpg', 'test.mp4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
