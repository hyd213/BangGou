/*
Navicat MySQL Data Transfer

Source Server         : hyd
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : login

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-04-23 09:18:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for indexpicture
-- ----------------------------
DROP TABLE IF EXISTS `indexpicture`;
CREATE TABLE `indexpicture` (
  `name` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `timer` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indexpicture
-- ----------------------------
INSERT INTO `indexpicture` VALUES ('banner', '/src/images/banner.jpg', '2019-04-10 12:06:58');
INSERT INTO `indexpicture` VALUES ('banner', '/src/images/banner1.jpg', '2019-04-10 12:07:06');
INSERT INTO `indexpicture` VALUES ('banner', '/src/images/banner2.jpg', '2019-04-10 12:07:09');
INSERT INTO `indexpicture` VALUES ('banner', '/src/images/banner3.jpg', '2019-04-10 12:07:11');
INSERT INTO `indexpicture` VALUES ('banner', '/src/images/banner4.jpg', '2019-04-10 12:07:14');
INSERT INTO `indexpicture` VALUES ('hot', ' /src/images/hot0.jpg', '2019-04-10 15:26:22');
INSERT INTO `indexpicture` VALUES ('hot', ' /src/images/hot1.jpg', '2019-04-10 15:26:33');
INSERT INTO `indexpicture` VALUES ('hot', ' /src/images/hot2.jpg', '2019-04-10 15:26:42');
INSERT INTO `indexpicture` VALUES ('jingxuan', '/src/images/jingxuan0.jpg', '2019-04-10 16:06:04');
INSERT INTO `indexpicture` VALUES ('jingxuan', ' /src/images/jingxuan1.jpg', '2019-04-10 16:06:13');
INSERT INTO `indexpicture` VALUES ('jingxuan', ' /src/images/jingxuan2.jpg', '2019-04-10 16:06:20');
INSERT INTO `indexpicture` VALUES ('jingxuan', ' /src/images/jingxuan3.jpg', '2019-04-10 16:06:26');
INSERT INTO `indexpicture` VALUES ('jingxuan', ' /src/images/jingxuan4.jpg', '2019-04-10 16:06:32');
INSERT INTO `indexpicture` VALUES ('jingxuan', ' /src/images/jingxuan5.jpg', '2019-04-10 16:06:38');
INSERT INTO `indexpicture` VALUES ('jingxuan', ' /src/images/jingxuan6.jpg', '2019-04-10 16:06:44');
INSERT INTO `indexpicture` VALUES ('jingxuan', ' /src/images/jingxuan7.jpg', '2019-04-10 16:06:50');
INSERT INTO `indexpicture` VALUES ('boy', '  /src/images/boy.png', '2019-04-10 16:33:38');
INSERT INTO `indexpicture` VALUES ('girl', '  /src/images/girl.png', '2019-04-10 16:35:47');
INSERT INTO `indexpicture` VALUES ('child', '  /src/images/child.png', '2019-04-10 16:34:23');
INSERT INTO `indexpicture` VALUES ('shoe', '   /src/images/shoe.png', '2019-04-10 16:34:36');
SET FOREIGN_KEY_CHECKS=1;
