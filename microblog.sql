set foreign_key_checks =0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
drop table if exists `user`;
create table `user` (
  `id` varchar(36) not null,
  `name` varchar(30) not null,
  `password` varchar(60) not null,
  primary key  (`id`)
) engine=myisam default charset=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
