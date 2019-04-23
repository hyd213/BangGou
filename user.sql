/*
Navicat MySQL Data Transfer

Source Server         : hyd
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : login

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-04-23 09:19:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  ` id` int(30) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `timer` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `integral` int(30) unsigned NOT NULL,
  `redbag` varchar(255) DEFAULT NULL,
  `birthdat` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `commodity` varchar(255) DEFAULT NULL,
  PRIMARY KEY (` id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'lemon', '11122233344', 'yingyingying', '2019-04-23 09:18:49', '2333', null, null, null, '');
INSERT INTO `user` VALUES ('2', 'laoxie ', '11111111111', 'laoxieyyy', '2019-04-03 20:39:59', '0', null, null, null, null);
INSERT INTO `user` VALUES ('3', 'hydd', '15625526042', '023216', '2019-04-11 11:56:39', '1997', null, null, null, null);
INSERT INTO `user` VALUES ('4', 'xiaoming', '1589966313*', '58bc58', '2019-04-03 20:41:01', '800', null, null, null, null);
INSERT INTO `user` VALUES ('9', 'dsadsad', '12222222222', 'a12345', '2019-04-11 16:10:19', '0', null, null, null, null);
INSERT INTO `user` VALUES ('10', 'hhhhhhh', '15677889856', 'HAHAHA', '2019-04-13 19:07:15', '0', null, null, null, null);
SET FOREIGN_KEY_CHECKS=1;
