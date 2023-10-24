<h2 style="text-align: center">Fish-Cloud-web 前端</h2>
<div style="text-align: center">

[![AUR](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg)](https://github.com/elunez/eladmin/blob/master/LICENSE)

</div>

## 项目简介 ##

一个基于 Spring Boot 2.6.13 、 Spring Boot Jpa、 JWT、Spring Security、Redis、Vue的前后端分离的后台管理系统

项目来源于ELADMIN,作者将其改造成SpringCloud项目，原项目地址：[https://github.com/elunez/eladmin-mp](https://github.com/elunez/eladmin-mp)

**开发文档：** [https://fish-cloud-doc.vercel.app](https://fish-cloud-doc.vercel.app)(建设中)

**体验地址：**  (建设中)



## 项目源码 ## 

|        | 后端源码                                         | 前端源码                                      |
|--------|----------------------------------------------|-------------------------------------------|
| github | https://github.com/Lyn4ever29/fish-cloud     | https://gitee.com/lyn4ever/fish-cloud     |
| 码云     | https://github.com/Lyn4ever29/fish-cloud-web | https://gitee.com/lyn4ever/fish-cloud-web |



## 主要特性 ##
 
- 本项目使用ELADMIN-WEB项目源码，修改内容如下：
  - 对不同的服务使用了不同的请求地址，具体表现为将Request.js分为多个，见```/src/request/***-request.js```
  - 在CRUD对象中添加```gateUrl```属性来表示网关地址。
- 网关对应的url关系为：
  - 系统管理服务：**/admin**
  - 日志服务：**/log**
  - 运维管理服务：**/mnt**


## 目前进度 ##

- [X] 移植ELADMIN-WEB全部功能

## 系统功能 ##

> 以下文档来自eladmin原作者
- 用户管理：提供用户的相关配置，新增用户后，默认密码为123456
- 角色管理：对权限与菜单进行分配，可根据部门设置角色的数据权限
- 菜单管理：已实现菜单动态路由，后端可配置化，支持多级菜单
- 部门管理：可配置系统组织架构，树形表格展示
- 岗位管理：配置各个部门的职位
- 字典管理：可维护常用一些固定的数据，如：状态，性别等
- 系统日志：记录用户操作日志与异常日志，方便开发人员定位排错
- SQL监控：采用druid 监控数据库访问性能，默认用户名admin，密码123456
- 定时任务：整合Quartz做定时任务，加入任务日志，任务运行情况一目了然
- 代码生成：高灵活度生成前后端代码，减少大量重复的工作任务
- 邮件工具：配合富文本，发送html格式的邮件
- 七牛云存储：可同步七牛云存储的数据到系统，无需登录七牛云直接操作云数据
- 支付宝支付：整合了支付宝支付并且提供了测试账号，可自行测试
- 服务监控：监控服务器的负载情况
- 运维管理：一键部署你的应用

## 特别鸣谢 ##

- 再次感谢原作者[elunez](https://github.com/elunez/)提供了优秀的开源框架

- 感谢 [PanJiaChen](https://github.com/PanJiaChen/vue-element-admin) 大佬提供的前端模板

- 感谢 [Moxun](https://github.com/moxun1639) 大佬提供的前端 Curd 通用组件

- 感谢 [zhy6599](https://gitee.com/zhy6599) 大佬提供的后端运维管理相关功能

- 感谢 [j.yao.SUSE](https://github.com/everhopingandwaiting) 大佬提供的匿名接口与Redis限流等功能

- 感谢 [d15801543974](https://github.com/d15801543974) 大佬提供的基于注解的通用查询方式

## 开源说明 ##

作者在开发时，对原作者的代码修改主要有如下几点：、

1. 本项目遵守[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0)协议
2. 尽极大可能的保留作者在源码中的版权信息，包括但不限于**文件**、**接口文档**中的版权说明
3. 原项目中的大多数功能保持了一致，并未作过多修改
