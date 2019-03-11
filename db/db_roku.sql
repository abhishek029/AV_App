-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 11, 2019 at 03:07 AM
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
-- Table structure for table `tbl_movies`
--

DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `movies_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `movies_cover` varchar(75) NOT NULL DEFAULT 'cover_default.jpg',
  `movies_title` varchar(125) NOT NULL,
  `movies_year` varchar(5) NOT NULL,
  `movies_runtime` varchar(25) NOT NULL,
  `movies_storyline` text NOT NULL,
  `movies_trailer` varchar(75) NOT NULL DEFAULT 'trailer_default.jpg',
  `movies_release` varchar(125) NOT NULL,
  `movies_audience` varchar(50) NOT NULL DEFAULT 'all',
  PRIMARY KEY (`movies_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movies_id`, `movies_cover`, `movies_title`, `movies_year`, `movies_runtime`, `movies_storyline`, `movies_trailer`, `movies_release`, `movies_audience`) VALUES
(1, 'guardians2.jpg', 'Guardians of the Galaxy Vol. 2', '2017', '2h 16m', 'The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill&rsquo;s true parentage.', 'Guardians2.mp4', 'May 5, 2017', 'kids'),
(2, 'dunkirk.jpg', 'Dunkirk', '2017', '1h 46m', 'Allied soldiers from Belgium, the British Empire and France are surrounded by the German army and evacuated during a fierce battle in World War II.', 'Dunkirk.mp4', 'July 21, 2017', 'parents'),
(3, 'logan.jpg', 'Logan', '2017', '2h 17m', 'In the near future, a weary Logan cares for an ailing Professor X, somewhere on the Mexican border. However, Logan&rsquo;s attempts to hide from the world, and his legacy, are upended when a young mutant arrives, pursued by dark forces.', 'Logan.mp4', 'March 3,2017', 'parents'),
(4, 'okja.jpg', 'Okja', '2017', '2h', ' Meet Mija, a young girl who risks everything to prevent a powerful, multi-national company from kidnapping her best friend - a fascinating animal named Okja. ', 'Okja.mp4', 'June 28,2017', 'guest'),
(5, 'beauty.jpg', 'Beauty and the Beast', '2017', '2h 9min', 'An adaptation of the fairy tale about a monstrous-looking prince and a young woman who fall in love. ', 'Beauty.mp4', 'March 17, 2017', 'parents'),
(6, 'hacksaw.jpg', 'Hacksaw Ridge', '2016', '2h 19m', 'WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people, and becomes the first man in American history to receive the Medal of Honor without firing a shot.', 'Hacksaw.mp4', 'November 4, 2016', 'guest'),
(7, 'deadpool.jpg', 'Deadpool', '2016', '1h 48m', 'A fast-talking mercenary with a morbid sense of humor is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.', 'Deadpool.mp4', 'Febuary 12, 2016', 'kids'),
(8, 'arrival.jpg', 'Arrival', '2016', '1h 56m', 'When twelve mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors.', 'Arrival.mp4', 'November 11, 2016', 'guest'),
(9, 'eddie.jpg', 'Eddie the Eagle', '2016', '1h 46m', 'The story of Eddie Edwards, the notoriously tenacious British underdog ski jumper who charmed the world at the 1988 Winter Olympics.', 'Eddie.mp4', 'Febuary 26, 2016', 'guest'),
(10, 'trolls.jpg', 'Trolls', '2016', '1h 32m', 'After the Bergens invade Troll Village, Poppy, the happiest Troll ever born, and the curmudgeonly Branch set off on a journey to rescue her friends.', 'Trolls.mp4', 'November 4, 2016', 'parent'),
(11, 'revenant.jpg', 'The Revenant', '2015', '2h 36m', 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.', 'Revenant.mp4', 'January 8, 2015', 'guest'),
(12, 'brooklyn.jpg', 'Brooklyn', '2015', '1h 57m', 'An Irish immigrant lands in 1950s Brooklyn, where she quickly falls into a romance with a local. When her past catches up with her, however, she must choose between two countries and the lives that exist within.', 'Brooklyn.mp4', 'November 25, 2015', 'parents'),
(13, 'walk.jpg', 'The Walk', '2015', '2h 3m', 'In 1974, high-wire artist Philippe Petit recruits a team of people to help him realize his dream: to walk the immense void between the World Trade Center towers.', 'Walk.mp4', 'October 9, 2015', 'guest'),
(14, 'colonia.jpg', 'Colonia', '2015', '1h 46m', 'A young woman&rsquo;s desperate search for her abducted boyfriend that draws her into the infamous Colonia Dignidad, a sect nobody has ever escaped from.', 'Colonia.mp4', 'April 15, 2015', 'guest'),
(15, 'force.jpg', 'Star Wars: The Force Awakens', '2015', '2h 16m', 'Three decades after the Empire&rsquo;s defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and spare parts scavenger Rey are caught up in the Resistance&rsquo;s search for the missing Luke Skywalker.', 'Force.mp4', 'December 18, 2015', 'kids'),
(16, 'whiplash.jpg', 'Whiplash', '2014', '1h 47m', 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.', 'Whiplash.mp4', 'October 15, 2014', 'guest'),
(17, 'guardians.jpg', 'Guardians of the Galaxy', '2014', '2h 1m', 'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.', 'Guardians.mp4', 'August 1, 2014', 'kids'),
(18, 'donjon.jpg', 'Don Jon', '2013', '1h 30m', 'A New Jersey guy dedicated to his family, friends, and church, develops unrealistic expectations from watching porn and works to find happiness and intimacy with his potential true love.', 'donjon.mp4', 'September 27, 2013', 'parents'),
(19, 'gravity.jpg', 'Gravity', '2013', '1h 31m', 'Two astronauts work together to survive after an accident which leaves them alone in space.', 'Gravity.mp4', 'October 4, 2013', 'guest'),
(20, 'pi.jpg', 'Life of Pi', '2012', '2h 7m', 'A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.', 'Pi.jpg', 'November 21, 2012', 'guest'),
(21, 'silver.jpg', 'Silver Linings Playbook', '2012', '2h 2m', 'After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.', 'Silver.jpg', 'December 25, 2012', 'parents');

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

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_admin` tinyint(4) DEFAULT NULL,
  `user_access` tinyint(4) DEFAULT NULL,
  `user_avatar` varchar(75) NOT NULL DEFAULT 'temp_avatar.jpg',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_admin`, `user_access`, `user_avatar`) VALUES
(1, 'Abhi Patel', 'parent', 'parent', 'patelabhi@gmail.com', '2019-02-01 19:07:35', '::1', 1, 5, 'parent.jpg'),
(2, 'Sid', 'kid', 'kid', 'sid@gmail.com', '2019-02-01 20:11:28', '::1', 1, 4, 'parent.jpg'),
(3, 'Guest', 'guest', 'guest', 'guestuser@gmail.com', '2019-02-01 20:12:40', '::1', 0, 1, 'temp_avatar.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
