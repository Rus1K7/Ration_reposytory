-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 18 2024 г., 15:34
-- Версия сервера: 10.4.28-MariaDB
-- Версия PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `chemical_composition`
--

-- --------------------------------------------------------

--
-- Структура таблицы `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add general', 7, 'add_general'),
(26, 'Can change general', 7, 'change_general'),
(27, 'Can delete general', 7, 'delete_general'),
(28, 'Can view general', 7, 'view_general'),
(29, 'Can add ration', 8, 'add_ration'),
(30, 'Can change ration', 8, 'change_ration'),
(31, 'Can delete ration', 8, 'delete_ration'),
(32, 'Can view ration', 8, 'view_ration');

-- --------------------------------------------------------

--
-- Структура таблицы `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(7, 'rationapp', 'general'),
(8, 'rationapp', 'ration'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Структура таблицы `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2024-05-04 14:17:47.204841'),
(2, 'auth', '0001_initial', '2024-05-04 14:17:57.822388'),
(3, 'admin', '0001_initial', '2024-05-04 14:17:59.957981'),
(4, 'admin', '0002_logentry_remove_auto_add', '2024-05-04 14:18:00.027789'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2024-05-04 14:18:00.094692'),
(6, 'contenttypes', '0002_remove_content_type_name', '2024-05-04 14:18:01.364201'),
(7, 'auth', '0002_alter_permission_name_max_length', '2024-05-04 14:18:02.435704'),
(8, 'auth', '0003_alter_user_email_max_length', '2024-05-04 14:18:02.588257'),
(9, 'auth', '0004_alter_user_username_opts', '2024-05-04 14:18:02.628150'),
(10, 'auth', '0005_alter_user_last_login_null', '2024-05-04 14:18:03.786230'),
(11, 'auth', '0006_require_contenttypes_0002', '2024-05-04 14:18:03.819417'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2024-05-04 14:18:03.863635'),
(13, 'auth', '0008_alter_user_username_max_length', '2024-05-04 14:18:03.952312'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2024-05-04 14:18:04.140004'),
(15, 'auth', '0010_alter_group_name_max_length', '2024-05-04 14:18:04.228767'),
(16, 'auth', '0011_update_proxy_permissions', '2024-05-04 14:18:04.287609'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2024-05-04 14:18:04.383353'),
(18, 'rationapp', '0001_initial', '2024-05-04 14:18:05.356316'),
(19, 'sessions', '0001_initial', '2024-05-04 14:18:05.887054');

-- --------------------------------------------------------

--
-- Структура таблицы `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('i1hpvswf18q6vd4ga4t2e34ag798k063', 'eyJyYXRpb24tbmFtZSI6Ildxd2VxZXdhc2Rhc2RmZGEifQ:1s8JzT:RnWHpzYkM2_VDftelEtxoCFz9uYcHfNXSJTJM2qDOI4', '2024-06-01 13:20:47.333712');

-- --------------------------------------------------------

--
-- Структура таблицы `rationapp_general`
--

CREATE TABLE `rationapp_general` (
  `id` int(11) NOT NULL,
  `code` varchar(12) NOT NULL,
  `name` varchar(60) NOT NULL,
  `parent` varchar(12) DEFAULT NULL,
  `flag_pc` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `rationapp_general`
--

INSERT INTO `rationapp_general` (`id`, `code`, `name`, `parent`, `flag_pc`) VALUES
(1, '1', 'Таблица 1. МОЛОКО И МОЛОЧНЫЕ ПРОДУКТЫ', '', 0),
(2, '1.1', 'ЖИРНОСТЬ <1,0%', '1', 0),
(3, '1.1.1', 'МОЛОКО', '1.1', 0),
(4, '1.1.1.1', 'Молоко пастеризованное нежирное', '1.1.1', 0),
(5, '1.1.1.2', 'Молоко топленое нежирное', '1.1.1', 0),
(6, '1.1.1.3', 'Молоко топленое', '1.1.1', 0),
(7, '1.1.1.4', 'Молоко белковое', '1.1.1', 0),
(8, '1.1.1.5', 'Пахта «Идеал» пастеризованная', '1.1.1', 1),
(9, '1.1.2', 'КИСЛОМОЛОЧННЫЕ ПРОДУКТЫ', '1.1', 0),
(10, '1.1.2.1', 'Ацидофилин нежирный', '1.1.2', 0),
(11, '1.1.2.2', 'Ацидофилин 1,0% жирности', '1.1.2', 0),
(12, '1.1.2.3', 'Кефир нежирный', '1.1.2', 0),
(13, '1.1.2.4', 'Кефир 1,0% жирности', '1.1.2', 0),
(14, '1.1.2.5', 'Кумыс из коровьего молока, нежирный', '1.1.2', 0),
(15, '1.1.2.6', 'Напиток «Снежок», плодово-ягодный 1,0% жирности', '1.1.2', 1),
(16, '1.1.2.7', 'Напиток «Юбилейный», 1,0% жирности', '1.1.2', 1),
(17, '1.1.2.8', 'Напиток плодово-ягодный,1,0% жирности', '1.1.2', 0),
(18, '1.1.2.9', 'Пахта «Идеал», сквашенная', '1.1.2', 1),
(19, '1.1.2.10', 'Простокваша нежирная', '1.1.2', 0),
(20, '1.1.2.11', 'Простокваша 1,0% жирности', '1.1.2', 0),
(21, '1.1.2.12', 'Простокваша цитрусовая, 1,0% жирности', '1.1.2', 0),
(22, '1.1.2.13', 'Ряженка 1,0% жирности', '1.1.2', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `rationapp_ingredients`
--

CREATE TABLE `rationapp_ingredients` (
  `code` varchar(12) NOT NULL,
  `weight` float NOT NULL,
  `water` float DEFAULT NULL,
  `protein` float DEFAULT NULL,
  `fat` float DEFAULT NULL,
  `nlc` float DEFAULT NULL,
  `chol` float DEFAULT NULL,
  `mds` float DEFAULT NULL,
  `kr` float DEFAULT NULL,
  `carb` float DEFAULT NULL,
  `pv` float DEFAULT NULL,
  `ok` float DEFAULT NULL,
  `ash` float DEFAULT NULL,
  `na` float DEFAULT NULL,
  `k` float DEFAULT NULL,
  `ca` float DEFAULT NULL,
  `mg` float DEFAULT NULL,
  `p` float DEFAULT NULL,
  `fe` float DEFAULT NULL,
  `a` float DEFAULT NULL,
  `kar` float DEFAULT NULL,
  `re` float DEFAULT NULL,
  `te` float DEFAULT NULL,
  `b1` float DEFAULT NULL,
  `b2` float DEFAULT NULL,
  `pp` float DEFAULT NULL,
  `ne` float DEFAULT NULL,
  `c` float DEFAULT NULL,
  `ec` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `rationapp_ingredients`
--

INSERT INTO `rationapp_ingredients` (`general_id`, `weight`, `water`, `protein`, `fat`, `nlc`, `chol`, `mds`, `kr`, `carb`, `pv`, `ok`, `ash`, `na`, `k`, `ca`, `mg`, `p`, `fe`, `a`, `kar`, `re`, `te`, `b1`, `b2`, `pp`, `ne`, `c`, `ec`) VALUES
(4, 100, 91.2, 3, 0.05, 0, 0, 4.9, 0, 4.9, 0, 0.15, 0.7, 52, 152, 126, 15, 95, 0.1, 0, 0, 0, 0, 0.04, 0.15, 0.1, 0.9, 1.3, 32),
(5, 100, 91.2, 3, 0.05, 0, 0, 5, 0, 5, 0, 0.15, 0.7, 50, 146, 124, 14, 92, 0.1, 0, 0, 0, 0, 0.02, 0.13, 0.1, 0.9, 0.3, 32),
(6, 100, 90.4, 3, 1, 0.7, 3, 4.8, 0, 4.8, 0, 0.1, 0.7, 50, 146, 124, 14, 92, 0.1, 0, 0, 0, 0, 0.02, 0.13, 0.1, 0.9, 0.3, 40),
(7, 100, 87.4, 4.3, 1, 0.7, 3, 6.4, 0, 6.4, 0, 0.1, 0.8, 52, 157, 136, 16, 96, 0.1, 0, 0, 0, 0, 0.04, 0.16, 0.1, 1.3, 1.3, 52),
(8, 100, 90.2, 3.3, 1, 0.7, 3, 4.7, 0, 4.7, 0, 0.1, 0.7, 30, 50, 120, 18, 88, 0.1, 0, 0, 0, 0, 0.03, 0.15, 0.1, 1, 0.3, 41),
(10, 100, 91.4, 3, 0.05, 0, 0, 3.9, 0, 3.9, 0, 0.95, 0.7, 53, 145, 120, 15, 98, 0.1, 0, 0, 0, 0, 0.04, 0.16, 0.1, 0.9, 0.8, 31),
(19, 100, 91.6, 3, 0.05, 0, 0, 3.8, 0, 3.8, 0, 0.85, 0.7, 52, 152, 126, 15, 95, 0.1, 0, 0, 0, 0, 0.04, 0.13, 0.1, 0.9, 0.8, 30),
(20, 100, 90.4, 3, 1, 0.7, 3, 4.1, 0, 4.1, 0, 0.8, 0.7, 51, 144, 118, 16, 96, 0.1, 0, 0, 0, 0, 0.03, 0.13, 0.1, 0.9, 0.8, 40),
(11, 100, 90.4, 3, 1, 0.7, 3, 4, 0, 4, 0, 0.1, 0.7, 53, 145, 120, 15, 98, 0.1, 0, 0, 0, 0, 0.04, 0.16, 0.1, 0.9, 0.8, 40),
(12, 100, 91.4, 3, 0.05, 0, 0, 4, 0, 4, 0, 0.85, 0.7, 52, 152, 126, 15, 95, 0.1, 0, 0, 0, 0, 0.04, 0.17, 0.1, 0.9, 0.7, 31),
(13, 100, 90.4, 3, 1, 0.7, 3, 4, 0, 4, 0, 0.9, 0.7, 50, 146, 120, 14, 90, 0.1, 0, 0, 0, 0, 0.04, 0.17, 0.1, 0.9, 0.7, 40),
(14, 100, 88.9, 3, 0.05, 0, 0, 6.3, 0, 6.3, 0, 1.05, 0.7, 50, 146, 120, 14, 95, 0.1, 0, 0, 0, 0, 0.02, 0.12, 0.1, 0.9, 0.9, 41),
(15, 100, 82.6, 2.7, 1, 0.7, 3, 12.2, 0, 12.2, 0, 0.8, 0.7, 45, 123, 109, 13, 85, 0.1, 0, 0, 0, 0, 0.03, 0.13, 0.1, 0.9, 1.6, 69),
(16, 100, 90.4, 3, 1, 0.7, 3, 4.1, 0, 4.1, 0, 0.8, 0.7, 52, 150, 125, 15, 73, 0.1, 0, 0, 0, 0, 0.03, 0.13, 0.1, 0.9, 0.8, 40),
(17, 100, 82.6, 2.7, 1, 0.7, 3, 12.2, 0, 12.2, 0, 0.8, 0.7, 45, 123, 109, 13, 85, 0.1, 0, 0, 0, 0, 0.03, 0.13, 0.1, 0.9, 1.6, 71),
(18, 100, 90.2, 3.3, 1, 0.7, 3, 3.8, 0, 3.8, 0, 1, 0.7, 30, 50, 120, 18, 88, 0.1, 0, 0, 0, 0, 0.03, 0.15, 0.1, 1, 0.3, 40);
(19, 100, 90.2, 3.3, 1, 0.7, 3, 3.8, 0, 3.8, 0, 1, 0.7, 30, 50, 120, 18, 88, 0.1, 0, 0, 0, 0, 0.03, 0.15, 0.1, 1, 0.3, 40);
(20, 100, 90.2, 3.3, 1, 0.7, 3, 3.8, 0, 3.8, 0, 1, 0.7, 30, 50, 120, 18, 88, 0.1, 0, 0, 0, 0, 0.03, 0.15, 0.1, 1, 0.3, 40);
(21, 100, 90.2, 3.3, 1, 0.7, 3, 3.8, 0, 3.8, 0, 1, 0.7, 30, 50, 120, 18, 88, 0.1, 0, 0, 0, 0, 0.03, 0.15, 0.1, 1, 0.3, 40);
(22, 100, 90.2, 3.3, 1, 0.7, 3, 3.8, 0, 3.8, 0, 1, 0.7, 30, 50, 120, 18, 88, 0.1, 0, 0, 0, 0, 0.03, 0.15, 0.1, 1, 0.3, 40);

-- --------------------------------------------------------

--
-- Структура таблицы `rationapp_ing_pc`
--

CREATE TABLE `rationapp_ing_pc` (
  `code_ing` varchar(12) NOT NULL,
  `code_pc` varchar(12) NOT NULL,
  `weight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `rationapp_ing_pc`
--

INSERT INTO `rationapp_ing_pc` (`code_ing`, `code_pc`, `weight`) VALUES
('1.1.1.1', '1.1.1.5', 95),
('1.1.2.1', '1.1.2.6', 115),
('1.1.2.2', '1.1.2.7', 260);

-- --------------------------------------------------------

--
-- Структура таблицы `rationapp_ing_pp`
--

CREATE TABLE `rationapp_ing_pp` (
  `id_1` int(11) NOT NULL,
  `id_pp` int(11) NOT NULL,
  `code` varchar(12) NOT NULL,
  `weight` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `rationapp_ing_pp`
--

INSERT INTO `rationapp_ing_pp` (`id_1`, `id_pp`, `code`, `weight`) VALUES
(5, 1, '1.1.1.2', 150),
(7, 3, '1.1.1.4', 85),
(8, 2, '1.1.1.5', 140),
(10, 2, '1.1.2.1', 123);

-- --------------------------------------------------------

--
-- Структура таблицы `rationapp_limit`
--

CREATE TABLE `rationapp_limit` (
  `code` varchar(12) NOT NULL,
  `id_ration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `rationapp_limit`
--

INSERT INTO `rationapp_limit` (`code`, `id_ration`) VALUES
('1.1.1.1', 1),
('1.1.1.1', 2),
('1.1.2.6', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `rationapp_pc`
--

CREATE TABLE `rationapp_pc` (
  `code` varchar(12) NOT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `rationapp_pc`
--

INSERT INTO `rationapp_pc` (`code`, `description`) VALUES
('1.1.1.5', 'идеальное блюдо для утреннего праздника'),
('1.1.2.13', 'разрядит вас перед сном'),
('1.1.2.6', 'Хорошо успокаивает нервную систему перед сном'),
('1.1.2.7', 'Поможет вам улыбнуться в ваш юбилей, баба-ягодка опять'),
('1.1.2.9', 'Идеал найжёте после одного выпитого стакана этого напитка');

-- --------------------------------------------------------

--
-- Структура таблицы `rationapp_people`
--

CREATE TABLE `rationapp_people` (
  `id_people` int(11) NOT NULL,
  `fio` varchar(100) NOT NULL,
  `role` varchar(20) NOT NULL,
  `position` varchar(100) NOT NULL,
  `email` varchar(90) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `rationapp_people`
--

INSERT INTO `rationapp_people` (`id_people`, `fio`, `role`, `position`, `email`, `phone`) VALUES
(1, 'Петров Петр Петрович', 't', 'Технолог высшей квалификации', '1@mail.ru', '89535779106'),
(2, 'Васин Анатолий Владимирович', 't', 'Технолог высшей квалификации', '2@mail.ru', '89535779107'),
(3, 'Серов Роман Андреевич', 't', 'Технолог высшей квалификации', '3@mail.ru', '89535779108'),
(4, 'Катин Владимир Сергеевич', 't', 'Технолог высшей квалификации', '4@mail.ru', '89535779109'),
(5, 'Хоменюк Андрей Константинович', 't', 'Технолог высшей квалификации', '5@mail.ru', '89535779110'),
(6, 'Романова Ольга Владимировна', 'm', 'Менеджер', '6@mail.ru', '89535779111');

-- --------------------------------------------------------

--
-- Структура таблицы `rationapp_pp`
--

CREATE TABLE `rationapp_pp` (
  `id_pp` int(11) NOT NULL,
  `id_ration` int(11) NOT NULL,
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `rationapp_pp`
--

INSERT INTO `rationapp_pp` (`id_pp`, `id_ration`, `name`) VALUES
(1, 1, 'раз'),
(2, 2, 'два'),
(3, 2, 'три');

-- --------------------------------------------------------

--
-- Структура таблицы `rationapp_ration`
--

CREATE TABLE `rationapp_ration` (
  `id_ration` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `organization` varchar(100) NOT NULL,
  `description` varchar(1500) NOT NULL,
  `date` date NOT NULL,
  `count_pp` int(11) NOT NULL,
  `count_day` int(11) NOT NULL,
  `technologist` varchar(100) NOT NULL,
  `done` tinyint(1) NOT NULL,
  `archive` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `rationapp_ration`
--

INSERT INTO `rationapp_ration` (`id_ration`, `name`, `organization`, `description`, `date`, `count_pp`, `count_day`, `technologist`, `done`, `archive`) VALUES
(1, 'Зимний сезон', 'РЭУ', 'способ приготовления 1', '2023-12-01', 3, 90, 'Серов Роман Андреевич', 0, 0),
(2, 'Весенний сезон', 'РЭУ', 'способ приготовления 2', '2024-03-01', 3, 90, 'Катин Владимир Сергеевич', 0, 0),
(3, 'Летний сезон', 'РЭУ', 'способ приготовления 3', '2024-06-01', 3, 90, 'Хоменюк Андрей Константинович', 1, 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Индексы таблицы `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Индексы таблицы `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Индексы таблицы `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Индексы таблицы `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Индексы таблицы `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Индексы таблицы `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Индексы таблицы `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Индексы таблицы `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Индексы таблицы `rationapp_general`
--
ALTER TABLE `rationapp_general`
  ADD PRIMARY KEY (`id`,`code`),
  ADD KEY `idx_general_Code` (`code`);

--
-- Индексы таблицы `rationapp_ingredients`
--
ALTER TABLE `rationapp_ingredients`
  ADD PRIMARY KEY (`code`),
  ADD KEY `fk_ingredients_general_idx1` (`code`);

--
-- Индексы таблицы `rationapp_ing_pc`
--
ALTER TABLE `rationapp_ing_pc`
  ADD PRIMARY KEY (`code_ing`,`code_pc`),
  ADD KEY `fk_ingredients_has_pc1_pc1_idx` (`code_pc`),
  ADD KEY `fk_ingredients_has_pc1_ingredients1_idx` (`code_ing`);

--
-- Индексы таблицы `rationapp_ing_pp`
--
ALTER TABLE `rationapp_ing_pp`
  ADD PRIMARY KEY (`id_1`,`id_pp`,`code`),
  ADD KEY `fk_general_has_pp_pp1_idx` (`id_pp`),
  ADD KEY `fk_general_has_pp_general1_idx` (`id_1`,`code`);

--
-- Индексы таблицы `rationapp_limit`
--
ALTER TABLE `rationapp_limit`
  ADD PRIMARY KEY (`code`,`id_ration`),
  ADD KEY `fk_ingredients_has_ration_ration1_idx` (`id_ration`),
  ADD KEY `fk_ingredients_has_ration_ingredients1_idx` (`code`);

--
-- Индексы таблицы `rationapp_pc`
--
ALTER TABLE `rationapp_pc`
  ADD PRIMARY KEY (`code`);

--
-- Индексы таблицы `rationapp_people`
--
ALTER TABLE `rationapp_people`
  ADD PRIMARY KEY (`id_people`);

--
-- Индексы таблицы `rationapp_pp`
--
ALTER TABLE `rationapp_pp`
  ADD PRIMARY KEY (`id_pp`,`id_ration`),
  ADD KEY `fk_pp_ration1_idx` (`id_ration`);

--
-- Индексы таблицы `rationapp_ration`
--
ALTER TABLE `rationapp_ration`
  ADD PRIMARY KEY (`id_ration`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT для таблицы `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Ограничения внешнего ключа таблицы `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Ограничения внешнего ключа таблицы `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Ограничения внешнего ключа таблицы `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Ограничения внешнего ключа таблицы `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Ограничения внешнего ключа таблицы `rationapp_ingredients`
--
ALTER TABLE `rationapp_ingredients`
  ADD CONSTRAINT `fk_ingredients_general` FOREIGN KEY (`code`) REFERENCES `rationapp_general` (`code`);

--
-- Ограничения внешнего ключа таблицы `rationapp_ing_pc`
--
ALTER TABLE `rationapp_ing_pc`
  ADD CONSTRAINT `fk_ingredients_has_pc1_ingredients1` FOREIGN KEY (`code_ing`) REFERENCES `rationapp_ingredients` (`code`),
  ADD CONSTRAINT `fk_ingredients_has_pc1_pc1` FOREIGN KEY (`code_pc`) REFERENCES `rationapp_pc` (`code`);

--
-- Ограничения внешнего ключа таблицы `rationapp_ing_pp`
--
ALTER TABLE `rationapp_ing_pp`
  ADD CONSTRAINT `fk_general_has_pp_general1` FOREIGN KEY (`id_1`,`code`) REFERENCES `rationapp_general` (`id`, `code`),
  ADD CONSTRAINT `fk_general_has_pp_pp1` FOREIGN KEY (`id_pp`) REFERENCES `rationapp_pp` (`id_pp`);

--
-- Ограничения внешнего ключа таблицы `rationapp_limit`
--
ALTER TABLE `rationapp_limit`
  ADD CONSTRAINT `fk_ingredients_has_ration_ingredients1` FOREIGN KEY (`code`) REFERENCES `rationapp_ingredients` (`code`),
  ADD CONSTRAINT `fk_ingredients_has_ration_ration1` FOREIGN KEY (`id_ration`) REFERENCES `rationapp_ration` (`id_ration`);

--
-- Ограничения внешнего ключа таблицы `rationapp_pc`
--
ALTER TABLE `rationapp_pc`
  ADD CONSTRAINT `fk_pc_general1` FOREIGN KEY (`code`) REFERENCES `rationapp_general` (`code`);

--
-- Ограничения внешнего ключа таблицы `rationapp_pp`
--
ALTER TABLE `rationapp_pp`
  ADD CONSTRAINT `fk_pp_ration1` FOREIGN KEY (`id_ration`) REFERENCES `rationapp_ration` (`id_ration`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
