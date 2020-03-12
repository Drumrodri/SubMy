-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2020 a las 17:03:55
-- Versión del servidor: 10.1.35-MariaDB
-- Versión de PHP: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `submydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `user` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `amistad`
--

CREATE TABLE `amistad` (
  `idUsuario` int(11) NOT NULL,
  `idAmigo` int(11) NOT NULL,
  `fecha alta` date DEFAULT NULL,
  `fecha baja` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familiares`
--

CREATE TABLE `familiares` (
  `id` int(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `suscripcion_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `categoria` enum('Video','Musica','Streaming','Videojuegos','Mecenazgo','Otros') DEFAULT NULL,
  `tarifa` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicio`
--

INSERT INTO `servicio` (`id`, `nombre`, `categoria`, `tarifa`) VALUES
(1, 'Netflix basico', 'Video', '7.99'),
(2, 'Spotify Individual', 'Musica', '9.99'),
(3, 'twitch', 'Streaming', '4.50'),
(5, 'Patreon 1$', 'Mecenazgo', '1.15'),
(6, 'HBO', 'Video', '8.99'),
(7, 'Xbox game pass pc', 'Videojuegos', '9.99');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscripcion`
--

CREATE TABLE `suscripcion` (
  `id` int(11) NOT NULL,
  `fechaAlta` date DEFAULT NULL,
  `precio` decimal(5,2) DEFAULT NULL,
  `expira` date DEFAULT NULL,
  `prueba` tinyint(4) DEFAULT NULL,
  `idServicio` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `periodo` enum('anual','trimestral','mensual') DEFAULT NULL,
  `estado` enum('vigente','expirada') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `suscripcion`
--

INSERT INTO `suscripcion` (`id`, `fechaAlta`, `precio`, `expira`, `prueba`, `idServicio`, `usuario_id`, `periodo`, `estado`) VALUES
(5, '2020-03-09', '7.99', '2020-04-08', 0, 1, 5, 'mensual', 'vigente'),
(6, '0000-00-00', '7.99', '0000-00-00', 0, 1, 17, 'mensual', 'vigente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nick` varchar(50) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `usersesiontoken` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nick`, `nombre`, `apellidos`, `imagen`, `email`, `password`, `usersesiontoken`) VALUES
(5, 'DrumRodri', 'Rodrigo', 'Baños Muñoz', 'C:\\fakepath\\dab.png', 'rodrigo.airen.0910@gmail.com', '$2a$10$cjT9iM0/6FMDlVG0Q66RmueFySF.H2C9pHTXd/Uabh6xU9.dFEpzu', NULL),
(17, 'UsuarioDemo', 'Prueba', 'Mc Try', 'assets/1302097141209.2405dab.png', 'prueba@gmail.com', '$2a$10$LrY02KOu4QIk8JS9SDad4eArovE3T42qLX524uc0EjAH2iyQVc4Tu', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `amistad`
--
ALTER TABLE `amistad`
  ADD PRIMARY KEY (`idUsuario`,`idAmigo`),
  ADD KEY `fk_usuario_has_usuario_usuario2_idx` (`idAmigo`),
  ADD KEY `fk_usuario_has_usuario_usuario1_idx` (`idUsuario`);

--
-- Indices de la tabla `familiares`
--
ALTER TABLE `familiares`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Familares_suscripcion1_idx` (`suscripcion_id`),
  ADD KEY `fk_Familares_usuario1_idx` (`usuario_id`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `suscripcion`
--
ALTER TABLE `suscripcion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_suscripcion_Servicio1_idx` (`idServicio`),
  ADD KEY `fk_suscripcion_usuario1_idx` (`usuario_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `familiares`
--
ALTER TABLE `familiares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicio`
--
ALTER TABLE `servicio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `suscripcion`
--
ALTER TABLE `suscripcion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `amistad`
--
ALTER TABLE `amistad`
  ADD CONSTRAINT `fk_usuario_has_usuario_usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_usuario_has_usuario_usuario2` FOREIGN KEY (`idAmigo`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `familiares`
--
ALTER TABLE `familiares`
  ADD CONSTRAINT `fk_Familares_suscripcion1` FOREIGN KEY (`suscripcion_id`) REFERENCES `suscripcion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Familares_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `suscripcion`
--
ALTER TABLE `suscripcion`
  ADD CONSTRAINT `fk_suscripcion_Servicio1` FOREIGN KEY (`idServicio`) REFERENCES `servicio` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_suscripcion_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
