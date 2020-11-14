-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 14, 2020 at 10:39 PM
-- Server version: 5.7.31
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evans_favourites`
--

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

DROP TABLE IF EXISTS `favourites`;
CREATE TABLE IF NOT EXISTS `favourites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favourites`
--

INSERT INTO `favourites` (`id`, `name`, `description`, `image`) VALUES
(1, 'Bobby The Goodboi', 'Bobby is the best doggo out there, who is full of love and support for me. This goodboi has been my best friend for 10 years. He got a bit old now, but he is still super cute and handsome, though. ', 'bobby.jpg'),
(2, 'Homemade Fried Chicken', 'I can\'t describe how much I love fried chicken. Yes, they are unhealthy, but Fried Chicken, though! What are you saying? Imagine having it on a stressful day. BOOM! Stress gone! Period.', 'chicken.jpg'),
(3, 'Chinese Peking Duck', 'If you haven\'t had this dish before, my friend, you\'re missing a big bunch. Look, people say girls always have the 2nd stomach for dessert, no matter how full they are. No, forget about that! The 2nd stomach is for Peking Duck all the way.', 'duck.jpg'),
(4, 'Latte In The Morning', 'Imagine waking up in the morning with the coffee smell. You know those tricks that people pull to their pets by placing food near their noses to wake them up? Coffee. That is the trick for me.', 'latte.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
