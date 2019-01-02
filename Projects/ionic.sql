/*
Navicat MySQL Data Transfer

Source Server         : linux
Source Server Version : 50560
Source Host           : 192.168.62.144:3306
Source Database       : ionic

Target Server Type    : MYSQL
Target Server Version : 50560
File Encoding         : 65001

Date: 2019-01-02 11:49:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `account_table`
-- ----------------------------
DROP TABLE IF EXISTS `account_table`;
CREATE TABLE `account_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `money` double NOT NULL,
  `shijian` varchar(10) DEFAULT NULL,
  `style` varchar(32) NOT NULL,
  `other` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account_table
-- ----------------------------
INSERT INTO `account_table` VALUES ('14', 'aa', '1', '2018-12-19', '支付宝', '1');

-- ----------------------------
-- Table structure for `admin_table`
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_table
-- ----------------------------
INSERT INTO `admin_table` VALUES ('1', 'blue', 'f5dc16329b79ba969b3b2fd2ad8320f1');

-- ----------------------------
-- Table structure for `banner_table`
-- ----------------------------
DROP TABLE IF EXISTS `banner_table`;
CREATE TABLE `banner_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `title` varchar(32) NOT NULL,
  `description` varchar(300) NOT NULL,
  `href` varchar(300) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner_table
-- ----------------------------
INSERT INTO `banner_table` VALUES ('10', 'wq', '去三亚，住在大东海好，还是三亚湾好？', '三亚湾的海岸线比较长，有一部分是在市区，有一部分不是，如果你的住宿选择的是在离市区近的那段，那还是很方便的！从海景和沙滩质量和海水的优良程度还是比较推荐大东海，我整理了份大东海和三亚湾的攻略，你可以看看\r\n\r\n三亚湾\r\n附近人气景点和餐饮购物\r\n\r\n椰梦长廊、鹿回头公园、临春岭公园、凤凰岭等几个景点就位于三亚湾附近，西岛、天涯海角、南山寺这几个景点在这四个海湾里也是三亚湾。\r\n椰梦长廊：环三亚湾修建的一条海滨风景大道，在这里可以看到最美的夕阳，当地人最惬意的生活方式就是傍晚漫步椰梦长廊。', '三亚湾的海岸线比较长，有一部分是在市区，有一部分不是，如果你的住宿选择的是在离市区近的那段，那还是很方便的！');
INSERT INTO `banner_table` VALUES ('11', 'aa', '去三亚，住在大东海好，还是三亚湾好？', '三亚湾的海岸线比较长，有一部分是在市区，有一部分不是，如果你的住宿选择的是在离市区近的那段，那还是很方便的！从海景和沙滩质量和海水的优良程度还是比较推荐大东海，我整理了份大东海和三亚湾的攻略，你可以看看 三亚湾 附近人气景点和餐饮购物 椰梦长廊、鹿回头公园、临春岭公园、凤凰岭等几个景点就位于三亚湾附近，西岛、天涯海角、南山寺这几个景点在这四个海湾里也是三亚湾。 椰梦长廊：环三亚湾修建的一条海滨风景大道，在这里可以看到最美的夕阳，当地人最惬意的生活方式就是傍晚漫步椰梦长廊。', '三亚湾的海岸线比较长，有一部分是在市区，有一部分不是，如果你的住宿选择的是在离市区近的那段，那还是很方便的！');
INSERT INTO `banner_table` VALUES ('12', 'ahh', '', '', '');

-- ----------------------------
-- Table structure for `custom_evaluation_table`
-- ----------------------------
DROP TABLE IF EXISTS `custom_evaluation_table`;
CREATE TABLE `custom_evaluation_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(300) NOT NULL,
  `src` varchar(300) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of custom_evaluation_table
-- ----------------------------
INSERT INTO `custom_evaluation_table` VALUES ('7', 'wq', '爱上分公司热托塔天王a', '齐权威热', '717b9ff291dd58071baafc0e3fd333cb.jpg');

-- ----------------------------
-- Table structure for `dayplan_table`
-- ----------------------------
DROP TABLE IF EXISTS `dayplan_table`;
CREATE TABLE `dayplan_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `days` int(11) DEFAULT NULL,
  `morning` varchar(100) DEFAULT NULL,
  `afternoon` varchar(100) DEFAULT NULL,
  `evening` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dayplan_table
-- ----------------------------
INSERT INTO `dayplan_table` VALUES ('7', 'wq', '1', '去哪玩', '下雪天，我们去看雪吧', '睡觉');

-- ----------------------------
-- Table structure for `gongluo_table`
-- ----------------------------
DROP TABLE IF EXISTS `gongluo_table`;
CREATE TABLE `gongluo_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `title` varchar(300) NOT NULL,
  `text` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gongluo_table
-- ----------------------------
INSERT INTO `gongluo_table` VALUES ('1', 'wq', 'aaaa', 'aaaaaaa');

-- ----------------------------
-- Table structure for `guanzhu_table`
-- ----------------------------
DROP TABLE IF EXISTS `guanzhu_table`;
CREATE TABLE `guanzhu_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `guanusername` varchar(32) NOT NULL,
  `guansrc` varchar(300) NOT NULL,
  `status` int(2) NOT NULL,
  `buttonValue` varchar(10) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of guanzhu_table
-- ----------------------------
INSERT INTO `guanzhu_table` VALUES ('8', 'aa', 'wq', 'img.jpg', '0', '已关注');
INSERT INTO `guanzhu_table` VALUES ('9', 'aa', 'ss', 'img.jpg', '0', '已关注');
INSERT INTO `guanzhu_table` VALUES ('11', 'wq', 'ss', 'img.jpg', '0', '已关注');
INSERT INTO `guanzhu_table` VALUES ('27', 'wq', 'aa', 'header_1.jpg', '0', '已关注');
INSERT INTO `guanzhu_table` VALUES ('31', 'wq', 'ahh', 'header_1.jpg', '0', '已关注');

-- ----------------------------
-- Table structure for `my_gongluo_table`
-- ----------------------------
DROP TABLE IF EXISTS `my_gongluo_table`;
CREATE TABLE `my_gongluo_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(60) NOT NULL,
  `article` text NOT NULL,
  `picture` varchar(300) DEFAULT NULL,
  `num` varchar(20) NOT NULL,
  `src` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of my_gongluo_table
-- ----------------------------
INSERT INTO `my_gongluo_table` VALUES ('4', 'aa', '去三亚，住在大东海好，还是三亚湾好？', '三亚湾的海岸线比较长，有一部分是在市区，有一部分不是，如果你的住宿选择的是在离市区近的那段，那还是很方便的！', '三亚湾的海岸线比较长，有一部分是在市区，有一部分不是，如果你的住宿选择的是在离市区近的那段，那还是很方便的！从海景和沙滩质量和海水的优良程度还是比较推荐大东海，我整理了份大东海和三亚湾的攻略，你可以看看\r\n\r\n三亚湾\r\n附近人气景点和餐饮购物\r\n\r\n椰梦长廊、鹿回头公园、临春岭公园、凤凰岭等几个景点就位于三亚湾附近，西岛、天涯海角、南山寺这几个景点在这四个海湾里也是三亚湾。\r\n椰梦长廊：环三亚湾修建的一条海滨风景大道，在这里可以看到最美的夕阳，当地人最惬意的生活方式就是傍晚漫步椰梦长廊。', '北京攻略.jpg', '+关注', '717b9ff291dd58071baafc0e3fd333cb.jpg');
INSERT INTO `my_gongluo_table` VALUES ('5', 'wq', '去北京玩旅游，有特别的地方吗？', '特别的地方算不上，推荐一些偏个人趣味的地方吧。 在北京读书工作，现在已经是第八年了，每年总会很个人趣味的去一些地方，每次', '特别的地方算不上，推荐一些偏个人趣味的地方吧。\n在北京读书工作，现在已经是第八年了，每年总会很个人趣味的去一些地方，每次都有新的收获，北京很大，用心也好不经意也罢，你总会发现很多让你满意的地方。\n不管是第几次来这里，都把它当做是你的第一次造访吧，北京欢迎你(•‾⌣‾•)y\n不过看来这个问题也问了有些年头，可能答主已经去过北京了吧，不过看到这个话题很有意思，还是很想分享一些自己的想法。\n北京这座城市，四季分明，春天的生机，夏天的热烈，秋天的清爽，冬天的肃杀，你都感觉的到，每个季节都有自己独特的风景，芥川龙之介说，北京城就好像森林里的城市，虽然随着现代化建设的推进，钢筋水泥让城市里的一些自然风物少了一些，但是走在弯弯曲曲的小胡同里，看着某个宅院里伸展像天空的一棵老树，你总会对行走在北京有那么些深一点的领悟。\n\n我的手机 2018/12/18 10:01:35\n答主比较喜欢老房子，所以推荐的地方偏人文向，如果不感兴趣就请绕道，如果稍有兴趣，也希望你去翻几本书，带着故事和某种期待的心情去寻访那些经精彩之处。\n我觉得很多历史人文相关的地方如果你想玩好的话，还是应该在你心里准备点东西，同样的故宫有的人就会觉得\"去你妹一群破房子人死多的有个毛毛看的\"，有的人就会惊喜的发现某个桥栏杆上飞舞在花丛里的龙，某个匾额上有叛军作乱时候留下的箭头，从永乐回想到宣统，某种暗爽自难明说。\n还有，就是珍惜不经意的角落，人生充满惊喜，尤其是旅途，意外的发现往往会更让你感到惊艳。\n', null, '1', 'header_1.jpg');
INSERT INTO `my_gongluo_table` VALUES ('8', 'aa', '去北京玩旅游，有特别的地方吗？', '特别的地方算不上，推荐一些偏个人趣味的地方吧。 在北京读书工作，现在已经是第八年了，每年总会很个人趣味的去一些地方，每次', '特别的地方算不上，推荐一些偏个人趣味的地方吧。\r\n在北京读书工作，现在已经是第八年了，每年总会很个人趣味的去一些地方，每次都有新的收获，北京很大，用心也好不经意也罢，你总会发现很多让你满意的地方。\r\n不管是第几次来这里，都把它当做是你的第一次造访吧，北京欢迎你(•‾⌣‾•)y\r\n不过看来这个问题也问了有些年头，可能答主已经去过北京了吧，不过看到这个话题很有意思，还是很想分享一些自己的想法。\r\n北京这座城市，四季分明，春天的生机，夏天的热烈，秋天的清爽，冬天的肃杀，你都感觉的到，每个季节都有自己独特的风景，芥川龙之介说，北京城就好像森林里的城市，虽然随着现代化建设的推进，钢筋水泥让城市里的一些自然风物少了一些，但是走在弯弯曲曲的小胡同里，看着某个宅院里伸展像天空的一棵老树，你总会对行走在北京有那么些深一点的领悟。\r\n\r\n我的手机 2018/12/18 10:01:35\r\n答主比较喜欢老房子，所以推荐的地方偏人文向，如果不感兴趣就请绕道，如果稍有兴趣，也希望你去翻几本书，带着故事和某种期待的心情去寻访那些经精彩之处。\r\n我觉得很多历史人文相关的地方如果你想玩好的话，还是应该在你心里准备点东西，同样的故宫有的人就会觉得\"去你妹一群破房子人死多的有个毛毛看的\"，有的人就会惊喜的发现某个桥栏杆上飞舞在花丛里的龙，某个匾额上有叛军作乱时候留下的箭头，从永乐回想到宣统，某种暗爽自难明说。\r\n还有，就是珍惜不经意的角落，人生充满惊喜，尤其是旅途，意外的发现往往会更让你感到惊艳。', null, '+关注', '717b9ff291dd58071baafc0e3fd333cb.jpg');
INSERT INTO `my_gongluo_table` VALUES ('9', 'ahh', '去三亚，住在大东海好，还是三亚湾好？', '三亚湾的海岸线比较长，有一部分是在市区，有一部分不是，如果你的住宿选择的是在离市区近的那段，那还是很方便的！', '三亚湾的海岸线比较长，有一部分是在市区，有一部分不是，如果你的住宿选择的是在离市区近的那段，那还是很方便的！从海景和沙滩质量和海水的优良程度还是比较推荐大东海，我整理了份大东海和三亚湾的攻略，你可以看看\r\n\r\n三亚湾\r\n附近人气景点和餐饮购物\r\n\r\n椰梦长廊、鹿回头公园、临春岭公园、凤凰岭等几个景点就位于三亚湾附近，西岛、天涯海角、南山寺这几个景点在这四个海湾里也是三亚湾。\r\n椰梦长廊：环三亚湾修建的一条海滨风景大道，在这里可以看到最美的夕阳，当地人最惬意的生活方式就是傍晚漫步椰梦长廊。', '北京攻略.jpg', '已关注', 'img.jpg');
INSERT INTO `my_gongluo_table` VALUES ('10', 'ss', '去北京玩旅游，有特别的地方吗？', '特别的地方算不上，推荐一些偏个人趣味的地方吧。 在北京读书工作，现在已经是第八年了，每年总会很个人趣味的去一些地方，每次', '特别的地方算不上，推荐一些偏个人趣味的地方吧。\r\n在北京读书工作，现在已经是第八年了，每年总会很个人趣味的去一些地方，每次都有新的收获，北京很大，用心也好不经意也罢，你总会发现很多让你满意的地方。\r\n不管是第几次来这里，都把它当做是你的第一次造访吧，北京欢迎你(•‾⌣‾•)y\r\n不过看来这个问题也问了有些年头，可能答主已经去过北京了吧，不过看到这个话题很有意思，还是很想分享一些自己的想法。\r\n北京这座城市，四季分明，春天的生机，夏天的热烈，秋天的清爽，冬天的肃杀，你都感觉的到，每个季节都有自己独特的风景，芥川龙之介说，北京城就好像森林里的城市，虽然随着现代化建设的推进，钢筋水泥让城市里的一些自然风物少了一些，但是走在弯弯曲曲的小胡同里，看着某个宅院里伸展像天空的一棵老树，你总会对行走在北京有那么些深一点的领悟。\r\n\r\n我的手机 2018/12/18 10:01:35\r\n答主比较喜欢老房子，所以推荐的地方偏人文向，如果不感兴趣就请绕道，如果稍有兴趣，也希望你去翻几本书，带着故事和某种期待的心情去寻访那些经精彩之处。\r\n我觉得很多历史人文相关的地方如果你想玩好的话，还是应该在你心里准备点东西，同样的故宫有的人就会觉得\"去你妹一群破房子人死多的有个毛毛看的\"，有的人就会惊喜的发现某个桥栏杆上飞舞在花丛里的龙，某个匾额上有叛军作乱时候留下的箭头，从永乐回想到宣统，某种暗爽自难明说。\r\n还有，就是珍惜不经意的角落，人生充满惊喜，尤其是旅途，意外的发现往往会更让你感到惊艳。', null, '', 'header.png');

-- ----------------------------
-- Table structure for `suggestion_table`
-- ----------------------------
DROP TABLE IF EXISTS `suggestion_table`;
CREATE TABLE `suggestion_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(32) NOT NULL,
  `say` varchar(100) NOT NULL,
  `phone` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of suggestion_table
-- ----------------------------
INSERT INTO `suggestion_table` VALUES ('1', 'wq', '啦啦啦', '123456');

-- ----------------------------
-- Table structure for `text_table`
-- ----------------------------
DROP TABLE IF EXISTS `text_table`;
CREATE TABLE `text_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `position` varchar(32) NOT NULL,
  `src` varchar(300) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of text_table
-- ----------------------------
INSERT INTO `text_table` VALUES ('1', 'haha', '123456', '哈哈', '561299ef31c766bcfaea29c019697deb.png');
INSERT INTO `text_table` VALUES ('2', '仙女', '123456', '哈哈', 'b45c3de6b32d87b187ffd12c9f4f514d.jpg');

-- ----------------------------
-- Table structure for `user_table`
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `src` varchar(300) DEFAULT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `signature` varchar(32) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_table
-- ----------------------------
INSERT INTO `user_table` VALUES ('1', 'header_1.jpg', 'wq', '123', '你如果认识从前的我，也许你会原谅现在的我。');
INSERT INTO `user_table` VALUES ('2', '717b9ff291dd58071baafc0e3fd333cb.jpg', 'aa', '12', '你如果认识从前的我，也许你会原谅现在的我。\r\n');
INSERT INTO `user_table` VALUES ('3', 'img.jpg', 'ahh', '123', 'sasdjashdkja');
INSERT INTO `user_table` VALUES ('4', 'header.png', 'ss', '11', '你如果认识从前的我，也许你会原谅现在的我。');

-- ----------------------------
-- Table structure for `version_table`
-- ----------------------------
DROP TABLE IF EXISTS `version_table`;
CREATE TABLE `version_table` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(300) NOT NULL,
  `description` varchar(300) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of version_table
-- ----------------------------
