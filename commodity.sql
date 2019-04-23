/*
Navicat MySQL Data Transfer

Source Server         : hyd
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : login

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-04-23 09:18:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity` (
  `id` int(30) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `price` int(255) unsigned NOT NULL,
  `timer` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `discount` varchar(30) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `smallimg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of commodity
-- ----------------------------
INSERT INTO `commodity` VALUES ('1', '【新品】男装常年基本V领针织短袖恤', ' /src/images/boy0.jpg', '79', '2019-04-15 19:28:30', '7', 'boy', 'red&green&blue&bai&hei&yellow&hui', 'M：170/92A&L：175/96A&S：165/88A', '/src/images/_boy6.jpg&/src/images/_boy7.jpg&/src/images/_boy8.jpg&/src/images/_boy9.jpg&/src/images/_boy10.jpg');
INSERT INTO `commodity` VALUES ('2', '情侣款-男简约时尚短袖T恤', '/src/images/boy1.jpg', '110', '2019-04-15 20:07:59', '2', 'boy', 'green&blue&bai&hui', 'M：170/92A&L：175/96A&S：165/88A', '/src/images/boy11.jpg&/src/images/boy12.jpg&/src/images/boy13.jpg&/src/images/boy14.jpg&/src/images/boy15.jpg');
INSERT INTO `commodity` VALUES ('3', '男趣味卡通印花短袖T恤', '/src/images/boy2.jpg', '99', '2019-04-15 20:08:15', '6.1', 'boy', 'green&blue&bai&hui', 'M：170/92A&XL：180/100A&S：165/88A', '/src/images/boy21.jpg&/src/images/boy22.jpg&/src/images/boy23.jpg&/src/images/boy24.jpg&/src/images/boy25.jpg');
INSERT INTO `commodity` VALUES ('4', '男装情侣趣味印花短袖恤', ' /src/images/boy3.jpg', '119', '2019-04-15 20:08:28', '', 'boy', 'red&green&blue&bai&hei&yellow&hui', 'M：170/92A&L：175/96A', '/src/images/boy31.jpg&/src/images/boy32.jpg&/src/images/boy33.jpg&/src/images/boy34.jpg&/src/images/boy35.jpg');
INSERT INTO `commodity` VALUES ('5', '男棉麻可翻折袖衬衫', ' /src/images/boy4.jpg', '130', '2019-04-15 20:08:39', '', 'boy', 'red&green&blue&bai&hei&yellow&hui', 'L：175/96A&XL：180/100A', '/src/images/boy41.jpg&/src/images/boy42.jpg&/src/images/boy43.jpg&/src/images/boy44.jpg&/src/images/boy45.jpg');
INSERT INTO `commodity` VALUES ('6', '男创意卡通印花短袖T恤', ' /src/images/boy5.jpg', '99', '2019-04-15 20:08:52', '3.55', 'boy', 'green&blue&bai&hui', 'M：170/92A&L：175/96A&S-165/88A', '/src/images/boy51.jpg&/src/images/boy52.jpg&/src/images/boy53.jpg&/src/images/boy54.jpg&/src/images/boy55.jpg');
INSERT INTO `commodity` VALUES ('7', '男款韩版短外套牛仔夹克宋威龙', ' /src/images/boy6.jpg', '350', '2019-04-15 20:09:01', '2.9', 'boy', 'red&green&blue&bai&hei&yellow&hui', 'L：175/96A&S：165/88A', '/src/images/boy61.jpg&/src/images/boy62.jpg&/src/images/boy63.jpg&/src/images/boy64.jpg&/src/images/boy65.jpg');
INSERT INTO `commodity` VALUES ('8', '男简约舒适百搭九分牛仔长裤', ' /src/images/boy7.jpg', '280', '2019-04-15 20:09:11', '', 'boy', 'red&green&blue&bai&hei&yellow&hui', 'M：170/92A&L：175/96A', '/src/images/boy71.jpg&/src/images/boy72.jpg&/src/images/boy73.jpg&/src/images/boy74.jpg&/src/images/boy75.jpg');
INSERT INTO `commodity` VALUES ('9', '【夏季新品】女休闲可爱图案针织短袖恤', '/src/images/girl0.jpg', '79', '2019-04-12 19:04:32', '3.5', 'girl', 'red&green&blue&bai&hei&yellow&hui', 'L：175/96A&XL：180/100A', '/src/images/_girl1.jpg&/src/images/_girl2.jpg&/src/images/_girl3.jpg&/src/images/_girl4.jpg&/src/images/_girl5.jpg');
INSERT INTO `commodity` VALUES ('10', '【夏季新品】女休闲七天印花短袖', '/src/images/girl1.jpg', '110', '2019-04-16 15:22:49', '2', 'girl', 'red&green&blue&bai&hei&yellow&hui', 'L：175/96A&XL：180/100A&S：165/88A', '/src/images/_girl11.jpg&/src/images/_girl12.jpg&/src/images/_girl13.jpg&/src/images/_girl14.jpg&/src/images/_girl15.jpg');
INSERT INTO `commodity` VALUES ('11', '女都彩条纹A型连衣裙', ' /src/images/girl2.jpg', '99', '2019-04-16 15:27:34', '', 'girl', 'red&green&blue&bai&hei&yellow&hui', 'M：170/92A&L：175/96A', '/src/images/_girl21.jpg&/src/images/_girl22.jpg&/src/images/_girl23.jpg&/src/images/_girl24.jpg&/src/images/_girl25.jpg');
INSERT INTO `commodity` VALUES ('12', '女时尚蝙蝠袖褶皱衬衫', ' /src/images/girl3.jpg', '119', '2019-04-16 15:27:47', '2.2', 'girl', 'red&green&blue&bai&hei&yellow&hui', 'XL：180/100A&XL：180/100A&S：165/88A', '/src/images/_girl31.jpg&/src/images/_girl32.jpg&/src/images/_girl33.jpg&/src/images/_girl34.jpg&/src/images/_girl35.jpg');
INSERT INTO `commodity` VALUES ('13', '女木耳边褶皱衬衫', ' /src/images/girl4.jpg', '130', '2019-04-16 15:27:59', '4.7', 'girl', 'bai&hei&blue', 'M：170/92A&XL：180/100A', '/src/images/_girl41.jpg&/src/images/_girl42.jpg&/src/images/_girl43.jpg&/src/images/_girl44.jpg&/src/images/_girl45.jpg');
INSERT INTO `commodity` VALUES ('14', '女落肩系带装饰短夹克', ' /src/images/girl5.jpg', '99', '2019-04-16 15:28:09', '3.55', 'girl', 'green&blue&bai&hui', 'L：175/96A&XL：180/100A', '/src/images/_girl51.jpg&/src/images/_girl52.jpg&/src/images/_girl53.jpg&/src/images/_girl54.jpg&/src/images/_girl55.jpg');
INSERT INTO `commodity` VALUES ('15', '女可爱贴袋背带牛仔裤', ' /src/images/girl6.jpg', '350', '2019-04-16 15:28:26', '', 'girl', 'green&blue&bai&hui', 'L：175/96A&XL：180/100A', '/src/images/_girl61.jpg&/src/images/_girl62.jpg&/src/images/_girl63.jpg&/src/images/_girl64.jpg&/src/images/_girl65.jpg');
INSERT INTO `commodity` VALUES ('16', '女MTRT系列梭织裤裙', ' /src/images/girl7.jpg', '280', '2019-04-16 15:28:37', '', 'girl', 'red&hei&yellow', 'M：170/92A&L：175/96A', '/src/images/_girl71.jpg&/src/images/_girl72.jpg&/src/images/_girl73.jpg&/src/images/_girl74.jpg&/src/images/_girl75.jpg');
INSERT INTO `commodity` VALUES ('17', '女婴童多彩卡通短袖T恤', '/src/images/child0.jpg', '79', '2019-04-22 10:15:28', '', 'child', 'bai&hei&blue', 'XL：180/100A&S：165/88A', '/src/images/_child01.jpg&/src/images/_child02.jpg&/src/images/_child03.jpg&/src/images/_child04.jpg&/src/images/_child05.jpg');
INSERT INTO `commodity` VALUES ('18', '男童前胸印花针织短袖恤', ' /src/images/child1.jpg', '110', '2019-04-22 10:17:07', '2', 'child', 'red&hei&yellow', 'M：170/92A&XL：180/100A', '/src/images/_child11.jpg&/src/images/_child12.jpg&/src/images/_child13.jpg&/src/images/_child14.jpg&/src/images/_child15.jpg');
INSERT INTO `commodity` VALUES ('19', '男婴童多彩卡通针织五分裤套装', ' /src/images/child2.jpg', '99', '2019-04-22 10:18:28', '6.1', 'child', 'green&blue&bai&hui', 'M：170/92A&L：175/96A', '/src/images/_child21.jpg&/src/images/_child22.jpg&/src/images/_child23.jpg&/src/images/_child24.jpg&/src/images/_child25.jpg');
INSERT INTO `commodity` VALUES ('20', '男童简约茄克', ' /src/images/child3.jpg', '119', '2019-04-22 10:21:03', '', 'child', 'bai&hei&blue', 'L：175/96A&XL：180/100A', '/src/images/_child31.jpg&/src/images/_child32.jpg&/src/images/_child33.jpg&/src/images/_child34.jpg&/src/images/_child35.jpg');
INSERT INTO `commodity` VALUES ('21', '男中童时尚色丁印花外套', ' /src/images/child4.jpg', '130', '2019-04-22 10:22:48', '4.7', 'child', 'bai&hei&blue', 'M：170/92A&L：175/96A', '/src/images/_child41.jpg&/src/images/_child42.jpg&/src/images/_child43.jpg&/src/images/_child44.jpg&/src/images/_child45.jpg');
INSERT INTO `commodity` VALUES ('22', '女童梦幻纱梭织连衣裙', ' /src/images/child5.jpg', '99', '2019-04-22 10:23:54', '3.55', 'child', 'green&blue&bai&hui', 'M：170/92A&L：175/96A&S：165/88A', '/src/images/_child51.jpg&/src/images/_child52.jpg&/src/images/_child53.jpg&/src/images/_child54.jpg&/src/images/_child55.jpg');
INSERT INTO `commodity` VALUES ('23', '女童条纹织带印花夹克', ' /src/images/child6.jpg', '350', '2019-04-22 10:25:47', '2.9', 'child', 'bai&hei&blue', 'L：175/96A&XL：180/100A', '/src/images/_child61.jpg&/src/images/_child62.jpg&/src/images/_child63.jpg&/src/images/_child64.jpg&/src/images/_child65.jpg');
INSERT INTO `commodity` VALUES ('24', '女童荷叶边压褶公主梭织连衣裙', '/src/images/child7.jpg', '280', '2019-04-22 10:26:48', '', 'child', 'red&hei&yellow', '170/92A&180/100A', '/src/images/_child71.jpg&/src/images/_child72.jpg&/src/images/_child73.jpg&/src/images/_child74.jpg&/src/images/_child75.jpg');
INSERT INTO `commodity` VALUES ('25', '男士春季新品4D打印飞织鞋网', '/src/images/shoe0.jpg', '79', '2019-04-12 19:05:13', '3.5', 'shoe', 'green&blue&bai&hui', 'M：170/92A&L：175/96A&S-165/88A', '/src/images/_shoe1.jpg&/src/images/_shoe2.jpg&/src/images/_shoe3.jpg&/src/images/_shoe4.jpg&/src/images/_shoe5.jpg');
INSERT INTO `commodity` VALUES ('26', '女款春季新品小熊运动潮鞋', ' /src/images/shoe1.jpg', '110', '2019-04-22 11:26:19', '', 'shoe', 'red&hei&yellow', 'L：175/96A&XL：180/100A', '/src/images/_shoe11.jpg&/src/images/_shoe12.jpg&/src/images/_shoe13.jpg&/src/images/_shoe14.jpg&/src/images/_shoe15.jpg');
INSERT INTO `commodity` VALUES ('27', '2018秋冬新款透气女鞋网面女', ' /src/images/shoe2.jpg', '99', '2019-04-22 11:27:11', '6.1', 'shoe', 'bai&hei&blue', 'M：170/92A&L：175/96A&S：165/88A', '/src/images/_shoe21.jpg&/src/images/_shoe22.jpg&/src/images/_shoe23.jpg&/src/images/_shoe24.jpg&/src/images/_shoe25.jpg');
INSERT INTO `commodity` VALUES ('28', '白色硫化鞋韩版经典男鞋2019新', ' /src/images/shoe3.jpg', '119', '2019-04-22 11:25:53', '2.2', 'shoe', 'bai&hei&blue', 'XL：180/100A&XL：180/100A', '/src/images/_shoe71.jpg&/src/images/_shoe72.jpg&/src/images/_shoe73.jpg&/src/images/_shoe74.jpg&/src/images/_shoe75.jpg');
INSERT INTO `commodity` VALUES ('29', '新款休闲男鞋学生潮鞋春季小白', ' /src/images/shoe4.jpg', '130', '2019-04-22 11:29:45', '', 'shoe', 'red&hei&yellow', 'M：170/92A&XL：180/100A', '/src/images/_shoe31.jpg&/src/images/_shoe32.jpg&/src/images/_shoe33.jpg&/src/images/_shoe34.jpg&/src/images/_shoe35.jpg');
INSERT INTO `commodity` VALUES ('30', '春夏新品透气飞织鞋时尚运动休', ' /src/images/shoe5.jpg', '99', '2019-04-22 11:29:42', '3.55', 'shoe', 'bai&hei&blue', 'M：170/92A&L：175/96A&S：165/88A', '/src/images/_shoe41.jpg&/src/images/_shoe42.jpg&/src/images/_shoe43.jpg&/src/images/_shoe44.jpg&/src/images/_shoe45.jpg');
INSERT INTO `commodity` VALUES ('31', '男款春款小熊鞋熊猫鞋网红款板鞋小白鞋运动鞋潮鞋', ' /src/images/shoe6.jpg', '350', '2019-04-22 11:29:59', '2.9', 'shoe', 'bai&hei&blue', 'L：175/96A&XL：180/100A', '/src/images/_shoe51.jpg&/src/images/_shoe52.jpg&/src/images/_shoe53.jpg&/src/images/_shoe54.jpg&/src/images/_shoe55.jpg');
INSERT INTO `commodity` VALUES ('32', '春季开学季男鞋韩版板鞋单鞋男', ' /src/images/shoe7.jpg', '280', '2019-04-22 11:30:08', '', 'shoe', 'bai&hei&blue', 'M：170/92A&L：175/96A&S：165/88A', '/src/images/_shoe61.jpg&/src/images/_shoe62.jpg&/src/images/_shoe63.jpg&/src/images/_shoe64.jpg&/src/images/_shoe65.jpg');
INSERT INTO `commodity` VALUES ('33', '【夏季新品】男纯棉炫彩字母印', '/src/images/hot0.png', '99', '2019-04-17 11:53:41', '6.1', 'hot', 'green&blue&bai&hui', 'L：175/96A&XL：180/100A', '/src/images/_hot1.jpg&/src/images/_hot2.jpg&/src/images/_hot3.jpg&/src/images/_hot4.jpg&/src/images/_hot5.jpg');
INSERT INTO `commodity` VALUES ('34', '【夏季新品】男潮流前片左侧印', '/src/images/hot1.png', '99', '2019-04-16 15:59:59', null, 'hot', 'red&hei&yellow', 'M：170/92A&XL：180/100A&S：165/88A', '/src/images/_hot11.jpg&/src/images/_hot12.jpg&/src/images/_hot13.jpg&/src/images/_hot14.jpg&/src/images/_hot15.jpg');
INSERT INTO `commodity` VALUES ('35', '夏装男花纱字母印短袖T恤', '/src/images/hot2.png', '199', '2019-04-22 09:59:03', null, 'hot', 'green&blue&bai&hui', 'M：170/92A&XL：180/100A&S：165/88A', '/src/images/_hot41.jpg&/src/images/_hot42.jpg&/src/images/_hot43.jpg&/src/images/_hot44.jpg&/src/images/_hot45.jpg');
INSERT INTO `commodity` VALUES ('36', '男质朴短款带帽外套', '/src/images/hot3.png', '299', '2019-04-22 10:04:09', null, 'hot', 'red&hei&yellow', 'M：170/92A&XL：180/100A', '/src/images/_hot51.jpg&/src/images/_hot52.jpg&/src/images/_hot53.jpg&/src/images/_hot54.jpg&/src/images/_hot55.jpg');
INSERT INTO `commodity` VALUES ('37', '男MTEE迪士尼漫威漫画table印花圆领恤', '/src/images/hot4.png ', '369', '2019-04-22 10:08:47', null, 'hot', 'red&hei&yellow', 'L：175/96A&XL：180/100A', '/src/images/_hot71.jpg&/src/images/_hot72.jpg&/src/images/_hot73.jpg&/src/images/_hot74.jpg&/src/images/_hot75.jpg');
INSERT INTO `commodity` VALUES ('38', '男潮流街头连帽反光拉链防晒服', ' /src/images/hot5.png', '360', '2019-04-22 10:03:22', '5', 'hot', 'green&blue&bai&hui', 'M：170/92A&XL：180/100A&S：165/88A', '/src/images/_hot31.jpg&/src/images/_hot32.jpg&/src/images/_hot33.jpg&/src/images/_hot34.jpg&/src/images/_hot35.jpg');
INSERT INTO `commodity` VALUES ('39', '女一字领连衣裙', ' /src/images/hot6.png', '299', '2019-04-22 10:10:30', '5.9', 'hot', 'green&blue&bai&hui', 'L：175/96A&XL：180/100A', '/src/images/_hot81.jpg&/src/images/_hot82.jpg&/src/images/_hot83.jpg&/src/images/_hot84.jpg&/src/images/_hot85.jpg');
INSERT INTO `commodity` VALUES ('40', '男百搭简约袖口刺绣连帽套头衫', ' /src/images/hot7.png', '239', '2019-04-16 16:54:06', '2.9', 'hot', 'green&blue&bai&hui', 'M：170/92A&XL：180/100A', '/src/images/_hot21.jpg&/src/images/_hot22.jpg&/src/images/_hot23.jpg&/src/images/_hot24.jpg&/src/images/_hot25.jpg');
INSERT INTO `commodity` VALUES ('41', '运动短裤男跑步健身速干潮休闲', ' /src/images/hot8.png', '199', '2019-04-22 10:12:52', '1', 'hot', 'red&hei&yellow', 'M：170/92A&XL：180/100A&S：165/88A', '/src/images/_hot91.jpg&/src/images/_hot92.jpg&/src/images/_hot93.jpg&/src/images/_hot94.jpg&/src/images/_hot95.jpg');
INSERT INTO `commodity` VALUES ('42', '夏季新款白色小花刺绣棉布连衣', ' /src/images/hot9.png', '599', '2019-04-22 10:06:23', '0.9', 'hot', 'green&blue&bai&hui', 'L：175/96A&XL：180/100A', '/src/images/_hot61.jpg&/src/images/_hot62.jpg&/src/images/_hot63.jpg&/src/images/_hot64.jpg&/src/images/_hot65.jpg');
SET FOREIGN_KEY_CHECKS=1;
