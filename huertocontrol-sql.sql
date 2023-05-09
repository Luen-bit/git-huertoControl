-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-05-2023 a las 07:38:05
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `huertocontrol`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `insumos`
--

CREATE TABLE `insumos` (
  `id` int(11) NOT NULL,
  `nombre_insumo` varchar(50) NOT NULL,
  `marca_insumo` varchar(50) NOT NULL,
  `tipo_insumo` varchar(20) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `unidad_medida` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `insumos`
--

INSERT INTO `insumos` (`id`, `nombre_insumo`, `marca_insumo`, `tipo_insumo`, `descripcion`, `unidad_medida`, `createdAt`, `updatedAt`) VALUES
(1, 'fertimax', 'fertimax', 'fertilizante', 'fertilizante en grano', 'kilo', '0000-00-00', '0000-00-00'),
(2, 'fertiriego', 'fertimax', 'fertilizante', 'fertilizante liquido', 'litro', '0000-00-00', '0000-00-00'),
(3, '', '', '', '', '', '2023-05-04', '2023-05-04'),
(6, 'test editar', '', 'tipo_test editado', 'esto es una prueba de edicion', 'medida editada', '2023-05-04', '2023-05-09'),
(7, '', '', '', '', '', '2023-05-04', '2023-05-04'),
(8, '', '', '', '', '', '2023-05-04', '2023-05-04'),
(9, '', '', '', '', '', '2023-05-09', '2023-05-09'),
(10, 'test', '', 'tipo_test', 'esto es una prueba', 'medida', '2023-05-09', '2023-05-09');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `insumos`
--
ALTER TABLE `insumos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `insumos`
--
ALTER TABLE `insumos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
