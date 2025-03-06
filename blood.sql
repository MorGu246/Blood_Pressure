--npm i express body-parser mysql2

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: פברואר 23, 2024 בזמן 11:14 AM
-- גרסת שרת: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `blood_pressure`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `blood_info`
--

CREATE TABLE `blood_info` (
                            `name` varchar(200) NOT NULL
                            `high` int(11) NOT NULL
                            `low` int(11) NOT NULL
                            `pulse` int(11) NOT NULL
                            `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `blood_info`
--

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blood_info`
--