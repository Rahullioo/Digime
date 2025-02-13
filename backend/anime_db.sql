-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2025 at 08:42 AM
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
-- Database: `anime_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `animes`
--

CREATE TABLE `animes` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `deskripsi` longtext NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `genreId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `animes`
--

INSERT INTO `animes` (`id`, `uuid`, `title`, `deskripsi`, `image`, `status`, `genreId`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '229ad919-b0e8-4add-8656-9fff3cc4e8b1', 'Naruto', 'Naruto (ナルト) adalah sebuah serial manga karya Masashi Kishimoto yang diadaptasi menjadi serial anime. Manga Naruto bercerita seputar kehidupan tokoh utamanya, Naruto Uzumaki, seorang ninja yang hiperaktif, periang, dan ambisius yang ingin mewujudkan keinginannya untuk mendapatkan gelar Hokage, pemimpin dan ninja terkuat di desanya. Serial ini didasarkan pada komik one-shot oleh Kishimoto yang diterbitkan dalam edisi Akamaru Jump pada Agustus 1997.', 'https://cdn.wikimg.net/en/strategywiki/images/thumb/f/f9/Naruto_UC_characters.jpg/250px-Naruto_UC_characters.jpg', 'FINISHED', 1, 1, '2025-02-03 07:12:27', '2025-02-03 07:12:27'),
(2, 'fb7beb3b-accf-497c-b73f-22fde4ff65cc', 'One Piece', 'One Piece (Jepang: ワンピース, Hepburn: Wan Pīsu) adalah sebuah seri manga Jepang yang ditulis dan diilustrasikan oleh Eiichiro Oda. Manga ini telah dimuat di majalah Weekly Shōnen Jump milik Shueisha sejak tanggal 22 Juli 1997, dan telah dibundel menjadi 105 volume tankōbon hingga Maret 2023. Ceritanya mengisahkan petualangan Monkey D. Luffy, seorang anak laki-laki yang memiliki kemampuan tubuh elastis seperti karet setelah memakan Buah Iblis secara tidak disengaja. Luffy bersama kru bajak lautnya, yang dinamakan Bajak Laut Topi Jerami, menjelajahi Grand Line untuk mencari harta karun terbesar di dunia yang dikenal sebagai \"One Piece\" dalam rangka untuk menjadi Raja Bajak Laut yang berikutnya.', 'https://imgcdn.espos.id/@espos/images/2014/11/One-Piece-wikipedia.jpg?quality=60', 'ONGOING', 1, 1, '2025-02-03 07:12:57', '2025-02-03 07:12:57'),
(3, 'e4f1145c-cef3-4100-8d8c-96dcfe8d90de', 'Hunter x Hunter', 'Hunter × Hunter (Jepang: ハンター×ハンター, Hepburn: Hantā Hantā, disingkat: HxH) adalah sebuah seri manga shōnen Jepang yang ditulis dan diilustrasikan oleh Yoshihiro Togashi. Manga ini mulai dimuat dalam majalah Weekly Shōnen Jump sejak tanggal 16 Maret 1998, meskipun sering kali mengalami hiatus berkepanjangan sejak tahun 2006. Hingga bulan Oktober 2018, 380 bab telah dibundel menjadi 36 volume oleh Shueisha. Ceritanya berfokus pada seorang bocah lelaki bernama Gon Freecss, yang mengetahui bahwa ayahnya yang sudah meninggalkannya sejak masih kecil, sebenarnya merupakan seorang Hunter ternama di dunia, sebuah profesi berlisensi bagi mereka yang berspesialisasi dalam tetapi tidak terbatas pada pencarian hal tak lazim layaknya menemukan spesies hewan langka atau tidak dikenal, berburu harta karun.', 'https://upload.wikimedia.org/wikipedia/it/4/4b/Phantom_Rouge_HXH.png', 'FINISHED', 2, 1, '2025-02-03 07:13:33', '2025-02-06 06:51:57'),
(4, 'b32c2072-b2ae-4c66-b4e7-b29a589a687e', 'Attack on Titan', 'Shingeki no Kyojin (Jepang: 進撃の巨人, terj. har. \"Raksasa [yang] Menyerang\"), yang diterbitkan di Indonesia dengan judul Attack on Titan, adalah sebuah seri manga shōnen asal Jepang yang ditulis dan diilustrasikan oleh Hajime Isayama. Ceritanya berlatar di dunia tempat umat manusia hidup di wilayah yang dikelilingi tiga lapis tembok besar, yang melindungi mereka dari makhluk pemakan manusia berukuran raksasa yang dikenal sebagai Titan. Manga ini dimuat berseri dalam majalah Bessatsu Shōnen Magazine terbitan Kodansha sejak bulan September 2009 hingga April 2021, dan telah diterbitkan menjadi 34 volume tankōbon per bulan Desember 2020.', 'https://upload.wikimedia.org/wikipedia/en/b/b2/Attack_on_Titan_decalless_cover_art.jpg', 'FINISHED', 1, 1, '2025-02-03 08:12:33', '2025-02-03 08:12:33'),
(5, 'babb48b6-c552-4be4-8d5f-874aaccc2bc0', 'Bleach', 'Bleach (Jepang: ブリーチ, Hepburn: Burīchi) merupakan sebuah seri manga shōnen Jepang yang ditulis dan diilustrasikan oleh Tite Kubo. Alur ceritanya mengisahkan petualangan remaja keras kepala bernama Ichigo Kurosaki yang mewarisi takdir kedua orangtuanya, setelah dia mendapatkan kekuatan Shinigami.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-W81s2GFmqC34Jq4nX8lEXwpOTUTO3nSMA&s', 'ONGOING', 1, 2, '2025-02-06 07:23:00', '2025-02-06 07:24:20');

-- --------------------------------------------------------

--
-- Table structure for table `episodes`
--

CREATE TABLE `episodes` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `episode` int(11) NOT NULL,
  `video_link` varchar(255) DEFAULT NULL,
  `video_link1` varchar(255) DEFAULT NULL,
  `video_link2` varchar(255) DEFAULT NULL,
  `video_link3` varchar(255) DEFAULT NULL,
  `video_link4` varchar(255) DEFAULT NULL,
  `video_link5` varchar(255) DEFAULT NULL,
  `animeId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `episodes`
--

INSERT INTO `episodes` (`id`, `uuid`, `episode`, `video_link`, `video_link1`, `video_link2`, `video_link3`, `video_link4`, `video_link5`, `animeId`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, '22792f66-6148-4ba8-9db5-975baee96143', 1, 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', NULL, NULL, NULL, NULL, 2, 1, '2025-02-03 07:14:43', '2025-02-03 07:51:07'),
(2, 'b5018621-507d-4342-bfef-9407933915de', 1, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', 1, 1, '2025-02-03 07:36:47', '2025-02-03 07:44:48'),
(3, '4a537e4e-30d6-4fdd-8cbb-91defc071fbb', 1, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-03 07:54:50', '2025-02-03 07:54:50'),
(4, 'f6cdb741-00ee-4903-af89-ff30daa034cd', 1, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', 4, 1, '2025-02-03 08:13:47', '2025-02-03 08:16:43'),
(7, 'b9ce6a46-a229-43c2-81d8-4cc22c197382', 2, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', '', '', '', 4, 1, '2025-02-05 06:03:13', '2025-02-05 06:03:13'),
(8, '8b4af45c-cecd-4136-b227-06940fedfbb2', 3, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', '', '', '', '', '', 4, 1, '2025-02-05 07:31:32', '2025-02-05 07:31:32'),
(9, '38ba7623-bb48-4a1c-919e-5d0fd7364c25', 4, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', '', '', '', '', '', 4, 1, '2025-02-05 08:21:18', '2025-02-05 08:21:18'),
(15, 'fcae9920-f17d-4cdc-bef4-b1011f1e361f', 2, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 3, 1, '2025-02-06 05:08:53', '2025-02-06 05:08:53'),
(16, 'ae4c2645-6d0c-472e-81ec-52630affeb4d', 3, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-06 05:09:01', '2025-02-06 05:09:01'),
(17, '5694d69d-1384-4443-972a-f8485db4a9bc', 4, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-06 05:09:07', '2025-02-06 05:09:07'),
(18, 'f1cfa0a5-9c0d-4471-acc7-b6955a17d708', 2, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', 2, 1, '2025-02-06 05:09:26', '2025-02-06 05:09:26'),
(19, '84a82e0e-dabb-499a-b515-77b691fde7ce', 3, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 2, 1, '2025-02-06 05:09:33', '2025-02-06 05:09:33'),
(20, '371f7aa6-90d6-4c76-9719-2b8e5bdac658', 5, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-06 05:10:01', '2025-02-06 05:10:01'),
(21, '33b718ce-06af-4ce2-9b2d-fc1282b5acd8', 6, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-06 05:10:08', '2025-02-06 05:10:08'),
(22, '6e2ed238-bcf9-4f26-a10b-a59f97faec1a', 7, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-06 05:10:15', '2025-02-06 05:10:15'),
(23, '8eefa7b8-1a10-4bbb-9317-9fa1e6ede03b', 8, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-06 05:10:22', '2025-02-06 05:10:22'),
(24, 'f805ef99-584f-4f67-a220-82b22b168e61', 9, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-06 05:10:29', '2025-02-06 05:10:29'),
(25, '41487099-c427-432a-a8c9-2215bd6b704f', 10, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-06 05:10:35', '2025-02-06 05:10:35'),
(26, '1da93685-8365-4fec-8f7f-37484147f505', 11, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-06 05:10:42', '2025-02-06 05:10:42'),
(27, 'a01b9cac-da7b-43c8-abfc-ae454085e788', 12, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 3, 1, '2025-02-06 06:50:50', '2025-02-06 06:50:50'),
(28, '4adaab43-5255-4ef0-97ff-459e16a7b803', 1, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 5, 2, '2025-02-06 07:32:53', '2025-02-06 07:32:53'),
(29, '70e8de0d-6a2c-43e6-832c-ea89814175e7', 2, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 5, 2, '2025-02-07 06:59:13', '2025-02-07 06:59:13'),
(30, 'bb1282e9-923a-4aa9-b97c-a436831396aa', 3, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 5, 2, '2025-02-07 06:59:22', '2025-02-07 06:59:22'),
(31, '0f579235-080b-48b5-b5b0-b3b880c2137a', 4, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 5, 2, '2025-02-07 06:59:32', '2025-02-07 06:59:32'),
(32, 'f19b3072-a6c6-4c19-aa3e-2f123d4891dc', 5, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 5, 2, '2025-02-07 06:59:42', '2025-02-07 06:59:42'),
(33, '044f96f5-747e-4ba6-94c3-373da972ebb3', 6, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', 5, 2, '2025-02-07 07:00:04', '2025-02-07 07:00:04'),
(34, 'ca23dcde-d188-4825-ac9f-34afe3e68ca5', 7, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 5, 2, '2025-02-07 07:00:11', '2025-02-07 07:00:11'),
(35, 'b8bae222-9af7-459e-ae9c-3d6df790ab8f', 8, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 5, 2, '2025-02-07 07:00:21', '2025-02-07 07:00:21'),
(36, '36abb590-e02a-43e3-b0e1-ebca40423ec3', 9, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 5, 2, '2025-02-07 07:00:28', '2025-02-07 07:00:28'),
(37, '0b7943fd-4bf5-4cba-9c23-ab2e89384b4d', 10, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 5, 2, '2025-02-07 07:00:35', '2025-02-07 07:00:35'),
(38, '9d9416c9-e5cb-437e-baa2-9d280d0028f5', 11, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', '', 5, 2, '2025-02-07 07:00:51', '2025-02-07 07:00:51'),
(39, 'f7d782ff-f6d0-474f-828c-e142cb35f4b0', 12, 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', '', '', '', '', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', 5, 2, '2025-02-07 07:01:27', '2025-02-07 07:01:27');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `uuid`, `name`, `userId`, `createdAt`, `updatedAt`) VALUES
(1, 'ef472e87-618f-4a2f-8818-d00c22756279', 'Adventure', 1, '2025-02-03 07:11:50', '2025-02-03 07:11:50'),
(2, '99557ad9-f65a-490f-aaf5-90764d8ff186', 'Game', 1, '2025-02-03 07:11:55', '2025-02-03 07:11:55'),
(3, '10708812-60e5-40a2-8c36-f0beff316b13', 'Comedy', 1, '2025-02-07 07:17:26', '2025-02-07 07:17:26'),
(4, '9f73c590-6226-4acf-85af-5fe5aa334036', 'Demons', 1, '2025-02-07 07:17:31', '2025-02-07 07:17:31'),
(5, 'a6ac97d9-8d8e-48a4-b5b2-ad69fe05045d', 'Drama', 1, '2025-02-07 07:17:35', '2025-02-07 07:17:35'),
(6, '4e6779f5-b46c-48b1-9580-3ab641f599a2', 'Fantasy', 1, '2025-02-07 07:17:47', '2025-02-07 07:17:47'),
(7, '32160d1a-63b8-46b6-8a75-d3585f6cac94', 'Horror', 1, '2025-02-07 07:17:53', '2025-02-07 07:17:53'),
(8, 'c64c94f5-6892-4e42-b31f-81c2d0188b52', 'Ecchi', 1, '2025-02-07 08:00:08', '2025-02-07 08:00:08'),
(9, '56540220-38d2-43c6-a3dc-c1a9caac73f3', 'Harem', 1, '2025-02-07 08:00:17', '2025-02-07 08:00:17'),
(10, '17049559-c0fd-48ad-9e70-a08730cacd9b', 'Historical', 1, '2025-02-07 08:00:24', '2025-02-07 08:00:24'),
(11, '4f11526c-e773-4380-a89d-0538611e3d78', 'Josei', 1, '2025-02-07 08:00:32', '2025-02-07 08:00:32'),
(12, 'fe16bdce-8870-41fc-82db-000618a09ff1', 'Magic', 1, '2025-02-07 08:00:36', '2025-02-07 08:00:36'),
(13, '1553f21c-789d-49e4-8c0d-3db0977bd0ea', 'Martial Arts', 1, '2025-02-07 08:00:42', '2025-02-07 08:00:42'),
(14, '892e1012-3d1a-4a3c-9b60-4167c4fcbef5', 'Mecha', 1, '2025-02-07 08:00:51', '2025-02-07 08:00:51'),
(15, 'dcc1cad9-5269-4ebf-a0fc-07c68e60d8d7', 'Military', 1, '2025-02-07 08:00:55', '2025-02-07 08:00:55'),
(16, '8a381307-772d-44a6-857d-42956b5e7ebf', 'Music', 1, '2025-02-07 08:01:08', '2025-02-07 08:01:08'),
(17, 'c8cd9b79-9664-4b79-a070-6bf2f628951c', 'Mystery', 1, '2025-02-07 08:01:12', '2025-02-07 08:01:12'),
(18, 'fc801979-670b-481c-922d-776fe49a884d', 'Psychological', 1, '2025-02-07 08:01:25', '2025-02-07 08:01:25'),
(19, '3429e2d8-cb47-4103-9f8a-867b24efb04b', 'Parody', 1, '2025-02-07 08:01:42', '2025-02-07 08:01:42'),
(20, '54fef881-1188-43fb-a7cd-e4553527e2b4', 'Police', 1, '2025-02-07 08:01:49', '2025-02-07 08:01:49'),
(21, '92e25929-2739-4fea-b619-dde22e6864f8', 'Romance', 1, '2025-02-07 08:01:53', '2025-02-07 08:01:53'),
(22, 'a14d462e-7af1-4fb8-ae47-d68c09fd8edf', 'Action', 1, '2025-02-07 08:03:05', '2025-02-07 08:03:05'),
(23, '63054f5b-9deb-4396-9c04-1bbf13563dad', 'Samurai', 1, '2025-02-07 08:03:37', '2025-02-07 08:03:37'),
(24, '46adefbd-82c2-4596-b425-83cd0fead0d6', 'School', 1, '2025-02-07 08:03:41', '2025-02-07 08:03:41'),
(25, 'c48ddbb4-12a2-4803-89f9-ffc0b560edad', 'Sci-Fi', 1, '2025-02-07 08:03:49', '2025-02-07 08:03:49'),
(26, '06c45768-1d99-4358-a6c0-f829336067c0', 'Seinen', 1, '2025-02-07 08:03:57', '2025-02-07 08:03:57'),
(27, '8d8e53d7-5bb6-4405-a1a5-cd2814ad10da', 'Shoujo', 1, '2025-02-07 08:04:04', '2025-02-07 08:04:04'),
(28, 'ef140431-31b1-4676-b5ef-5d101dc2be63', 'Shoujo Ai', 1, '2025-02-07 08:04:14', '2025-02-07 08:04:14'),
(29, '298f7a0c-f2fc-4c6d-9de0-e9452520bed0', 'Shounen', 1, '2025-02-07 08:04:22', '2025-02-07 08:04:22'),
(30, '44ae609d-d5b3-4b99-9b55-e96ea6deab5a', 'Slice of Life', 1, '2025-02-07 08:04:29', '2025-02-07 08:04:29'),
(31, '23fc7dfc-198c-4c83-b1e1-8baf188faa6c', 'Sports', 1, '2025-02-07 08:04:39', '2025-02-07 08:04:39'),
(32, '9fe2fec2-c8a8-4adb-8aab-4231b2a673fb', 'Space', 1, '2025-02-07 08:04:44', '2025-02-07 08:04:44'),
(33, '778e2803-c04b-47b6-8975-454eabcd5a46', 'Super Power', 1, '2025-02-07 08:04:53', '2025-02-07 08:04:53'),
(34, '3fb9d28f-fc69-4728-bedc-348791f51ba6', 'Supernatural', 1, '2025-02-07 08:04:58', '2025-02-07 08:04:58'),
(35, 'd8d4eb73-c307-4f07-a38b-67770d66a436', 'Thriller', 1, '2025-02-07 08:05:06', '2025-02-07 08:05:06'),
(36, '4dc2adc4-29f1-421f-89b3-889e66a30d08', 'Vampire', 1, '2025-02-07 08:05:10', '2025-02-07 08:05:10');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('-0mMjOScoN5jPCVnwj8-vbSObcuD6bm5', '2025-02-14 07:33:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:19', '2025-02-13 07:33:19'),
('1C-wNYsWcXcOn7RnF0JBKvDyYm-WiXQy', '2025-02-14 07:32:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:32:07', '2025-02-13 07:32:07'),
('3FsG1mtRhQk2hgkkJJlrZypTVA1H8Ikb', '2025-02-14 07:36:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:53', '2025-02-13 07:36:53'),
('4OQ5FV3MAAf2XoRi4GkCA0FIfhsys-ad', '2025-02-14 07:37:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:37:03', '2025-02-13 07:37:03'),
('5lC-a_zKrXOoZ8A2LSF0ggYstWSoBLqd', '2025-02-14 07:36:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:57', '2025-02-13 07:36:57'),
('9eS-RtaquJkKjxDLKTHt7vlZgioETcQ2', '2025-02-14 07:31:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:31:52', '2025-02-13 07:31:52'),
('apkJb3jE4qOxnmerWdoV896moIXu9ptX', '2025-02-14 07:33:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:11', '2025-02-13 07:33:11'),
('b-fSVrZK19L7ziKrBrpyUjsGSdAUNGLP', '2025-02-14 07:37:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:37:07', '2025-02-13 07:37:07'),
('cdbyei2hj-3awVLeMupZBAslWGFY1-be', '2025-02-14 07:36:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:49', '2025-02-13 07:36:49'),
('DK792fxIIiYnA_Zcs6q_lUquohAe_ClI', '2025-02-14 07:33:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:11', '2025-02-13 07:33:11'),
('DrEC7RByjhlQWIPFvzaMjeSk09Ltmizv', '2025-02-14 07:37:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:37:07', '2025-02-13 07:37:07'),
('eHMB1Bxq2Rva-6toA8SjhcKFa-DAisyX', '2025-02-14 07:33:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:52', '2025-02-13 07:33:52'),
('EMGiIFzoJs-Tb_tMLg0FfdKlwlSw0fLD', '2025-02-14 07:36:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:57', '2025-02-13 07:36:57'),
('EuKyrqENHvOyFUS4Lot0_ItfIlqpA_j0', '2025-02-14 07:36:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:49', '2025-02-13 07:36:49'),
('Fvq5HnDsvO5cmLR4rO0uX-Ld219uO_Ny', '2025-02-14 07:36:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:57', '2025-02-13 07:36:57'),
('fy7aJb7qoG_hC5BicGNLzr4OP5Twm4DS', '2025-02-14 07:36:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:57', '2025-02-13 07:36:57'),
('HAPREYzY28jqg5F051n7IT44EyKGubYs', '2025-02-14 07:33:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:50', '2025-02-13 07:33:50'),
('Hrsk-W7Rigvr-XZDPmW0K0S5vfdO2PWh', '2025-02-14 07:36:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:49', '2025-02-13 07:36:49'),
('iZ6VP9NsqWv3y1Xe-G09N0BECUtcy3in', '2025-02-14 07:33:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:54', '2025-02-13 07:33:54'),
('K5zNfFKlJUS-hNZxwFD0W034q8Y9W_sb', '2025-02-14 07:36:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:53', '2025-02-13 07:36:53'),
('MH3mzeS7mI02GEs4hnTXA9oxf9De4G2T', '2025-02-14 07:33:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:46', '2025-02-13 07:33:46'),
('nz-QrvBmetZoZ-6Ze4vrkZRW-PNC2kGu', '2025-02-14 07:31:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:31:52', '2025-02-13 07:31:52'),
('O5VFBTQ6eAvdM_OxoDSO8i3CwwgObrUR', '2025-02-14 07:33:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:54', '2025-02-13 07:33:54'),
('OQgX90OSC4-gRjB_DWN76bzMXER9N7OI', '2025-02-14 07:33:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:50', '2025-02-13 07:33:50'),
('PpMlQ63LPqHnPtLhmkefKIvyNHlXqVd8', '2025-02-14 07:33:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:19', '2025-02-13 07:33:19'),
('PYkUvNKA9nVJ4XIcvzgNgeowLXY73-rT', '2025-02-14 07:36:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:51', '2025-02-13 07:36:51'),
('Q8NNDNl3r-xjDQmMiWsIBFi4IwqtWAto', '2025-02-14 07:37:00', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:37:00', '2025-02-13 07:37:00'),
('s2TOHZeZwFsUyvZo6ZkSvZ1cz4ANXGR7', '2025-02-14 07:32:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:32:10', '2025-02-13 07:32:10'),
('SF3Ebdf7V61kU_qS6BckUPfUIMo97z6-', '2025-02-14 07:32:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:32:05', '2025-02-13 07:32:05'),
('SLtS0QBhjQjboHuGZpLlG0XvcY02rPyB', '2025-02-14 07:32:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:32:03', '2025-02-13 07:32:03'),
('SMDrbvGKi7xA4LPJbQCbavqcepZAa11a', '2025-02-14 07:37:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:37:03', '2025-02-13 07:37:03'),
('t89EKzaSD4bbkjpKzT6M9GhT9Y-vU6hv', '2025-02-14 07:37:00', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:37:00', '2025-02-13 07:37:00'),
('UZo2uGxUDQHDKUQlCaZZdJjShNlASo5J', '2025-02-14 07:33:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:46', '2025-02-13 07:33:46'),
('v_idTwLAxh7ZaYI0ozO7mYBOohV9ErKI', '2025-02-14 07:33:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:33:52', '2025-02-13 07:33:52'),
('W2tI1Pt4E3nM8mODyr82yJ7JJGxQOT0E', '2025-02-14 07:37:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"4a53a415-1215-442c-b3a5-24f560324540\"}', '2025-02-13 07:03:02', '2025-02-13 07:37:16'),
('wRCj7myP6MGqnPkgUrsuraPLu0y0Pl61', '2025-02-14 07:32:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:32:10', '2025-02-13 07:32:10'),
('X8Ec4KdRzBFVpsE4hlbH4czIvf5EJWbm', '2025-02-14 07:36:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:36:51', '2025-02-13 07:36:51'),
('XEnHCj6BG_YQPHPYy0GtrTNKwyN7w47v', '2025-02-14 07:37:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:37:16', '2025-02-13 07:37:16'),
('_tL2DmpGVZCPP1AKaAiLqxloOf4B-Sb-', '2025-02-14 07:37:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-02-13 07:37:16', '2025-02-13 07:37:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`) VALUES
(1, '4a53a415-1215-442c-b3a5-24f560324540', 'Admin', 'admin@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$NYdvG2L1Kd2itbMy+09WvA$vDQvXc0HG0yJ+D4iEIv57i2cCzEqS4k9/aTLyvxNjt8', 'admin', '2025-02-03 07:08:26', '2025-02-03 07:08:26'),
(2, '08dc68a9-ba13-4e68-b825-79cee4e342a6', 'User', 'user@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$z3dsFHyT/2sbBClZ8jmpaQ$vVYD+uYnlmBByXc9f+KP9CC1szwmSllOcviihdOIYo8', 'user', '2025-02-03 07:08:34', '2025-02-03 07:08:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `animes`
--
ALTER TABLE `animes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genreId` (`genreId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `animeId` (`animeId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `animes`
--
ALTER TABLE `animes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `episodes`
--
ALTER TABLE `episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `animes`
--
ALTER TABLE `animes`
  ADD CONSTRAINT `animes_ibfk_1` FOREIGN KEY (`genreId`) REFERENCES `genres` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `animes_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `episodes`
--
ALTER TABLE `episodes`
  ADD CONSTRAINT `episodes_ibfk_1` FOREIGN KEY (`animeId`) REFERENCES `animes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `episodes_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `genres`
--
ALTER TABLE `genres`
  ADD CONSTRAINT `genres_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
