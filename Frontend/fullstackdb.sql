-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 07:48 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fullstackdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `dashboards`
--

CREATE TABLE `dashboards` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`data`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dashboards`
--

INSERT INTO `dashboards` (`id`, `userID`, `data`) VALUES
(1, 27, '{\"widget1\":\"Some data\",\"widget2\":42,\"widget3\":true}'),
(2, 28, '{\"nurseryWidget1\":\"Nursery specific data\",\"nurseryWidget2\":20,\"nurseryWidget3\":false}'),
(3, 29, '{\"defaultWidget1\":\"Default data\",\"defaultWidget2\":10,\"defaultWidget3\":false}'),
(4, 30, '{\"preschoolWidget1\":\"Preschool specific data\",\"preschoolWidget2\":40,\"preschoolWidget3\":true}'),
(5, 31, '{\"kinderWidget1\":\"Kinder specific data\",\"kinderWidget2\":30,\"kinderWidget3\":true}');

-- --------------------------------------------------------

--
-- Table structure for table `subjs`
--

CREATE TABLE `subjs` (
  `id` int(11) NOT NULL,
  `subjectID` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `assignments` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjs`
--

INSERT INTO `subjs` (`id`, `subjectID`, `title`, `description`, `assignments`) VALUES
(8, 1920, 'SCIENCE', 'THIS SUBJECT IS FUCK YOU', ''),
(9, 9898, 'SPELLING', 'AMBOT', ''),
(10, 9898, 'SPELLING', 'AMBOT', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl`
--

CREATE TABLE `tbl` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `middlename` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `yearLevel` varchar(20) NOT NULL,
  `idNumber` int(11) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl`
--

INSERT INTO `tbl` (`id`, `username`, `password`, `firstname`, `lastname`, `middlename`, `email`, `yearLevel`, `idNumber`, `age`) VALUES
(1, 'gab', 'gab', 'geb', 'malanday', 'idk', '', 'nursery', 39544, 19),
(2, 'a', 'a', 'a', 'a', 'a', '', 'nursery', 21527, 0),
(3, 'abcd', '$2b$10$zZwU0C1TPH8r617euyhCbu31BmhkaBhjhUGzvO', 'geb', 'malanday', 'a', '', 'kindergarten', 64846, 11),
(4, 'fedkun', '$2b$10$lGafAoqiuhlTf4Zj72kpPOi2TWN.FtZvRM/46H', 'federico', 'poleros', 'dacumos', '', 'preschool', 48304, 19),
(5, '1', '$2b$10$IENVouxHgbsZsdgRdg77Yec5W4KUoR723/eYVZ', 'geb', 'fiona', 'aaa', '', 'nursery', 15727, 12),
(6, 'gago', '123', 'raf', 'filla', 'idk', '', 'kindergarten', 61379, 2),
(7, 'ghgh', '555', 'gabriel', 'malanday', 'remar', '', 'kindergarten', 70528, 5),
(8, 'a1', 'a4', '1', 'dasdas', 'asda', '', 'nursery', 88446, 111),
(16, '', '', '', '', '', '', 'nursery', 0, 0),
(17, 'qa', 'a', 'a', 'a', 'a', '', 'nursery', 0, 0),
(18, 'qa', 'a', 'a', 'a', 'a', '', 'nursery', 78479, 1),
(19, 'fede', 'fran', 'fed', 'kun', 'goygoy', '', 'kindergarten', 28111, 12),
(20, 'gebu', 'geb', 'amb', 'start', 'er', '', 'kindergarten', 18098, 18),
(21, 'gebu', 'geb', 'dsa', 'malanday', 'dsaa', '', 'kindergarten', 20087, 11),
(22, 'gab', 'popo', 'das', 'jh', 'aljk', '', 'kindergarten', 15264, 44),
(23, 'fj', '123', 'geb', 'knot', 'slip', '', 'kindergarten', 47692, 8),
(24, 'en', '12', 'a', 'c', 'b', '', 'nursery', 88829, 1),
(25, 'geby', '69', 'uy', 'dada', 'yen', '', 'preschool', 83940, 1),
(26, 'slippy', '11', 'a', 'malanday', 'idk', '', 'nursery', 10636, 11),
(27, 'psych', '11', 'fatima', 'pambuena', 'ambot', '', 'nursery', 87821, 11),
(28, 'preshcooll', '123', 'ambot', 'emo', 'sa', '', 'nursery', 10476, 3),
(29, 'kinder', '112', 'kinder', 'account', 'ni', '', 'kindergarten', 10197, 4),
(30, 'prepers', '12', 'pre', 'acc', 'na', '', 'preschool', 54708, 0),
(31, 'slippyz', '00', 'slip', 'knat', 'qw', '', 'kindergarten', 71896, 111);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dashboards`
--
ALTER TABLE `dashboards`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userID` (`userID`);

--
-- Indexes for table `subjs`
--
ALTER TABLE `subjs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subjectID` (`subjectID`);

--
-- Indexes for table `tbl`
--
ALTER TABLE `tbl`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dashboards`
--
ALTER TABLE `dashboards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `subjs`
--
ALTER TABLE `subjs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl`
--
ALTER TABLE `tbl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
