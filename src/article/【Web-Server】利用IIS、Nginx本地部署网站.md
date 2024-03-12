---
title: 【Web Server】利用IIS、Nginx本地部署网站
date: 2023-06-14 03:28:22
tags:
---
## 前言 
建站一年多 记下学习的历程 希望能帮到有需要的你

## IIS篇
### 介绍
IIS作为Windows自带的应用程序 跟远程桌面一样与windows系统有着很好的兼容性 操作界面可视化 上手容易 windows各版本开启此功能大差不差 那么本篇以win11作为参考 我们现在开始。
### 开始

#### 安装IIS
打开控制面板
![控制面板](../data/img/2023/7/1.png)
点开程序
![程序](../data/img/2023/7/2.png)
点开启用或关闭Windows功能
![启用或关闭Windows功能](../data/img/2023/7/3.png)
找到IIS选项并勾上 （默认就好 其他以后用到再说）
![IIS](../data/img/2023/7/4.png)
完成
![完成](../data/img/2023/7/5.png)
#### 打开IIS
打开IIS有多种方法 你可以选择你方便的
+ 返回控制面板 点开windows工具 找到IIS
![windows工具](../data/img/2023/7/6.png)
![IIS](../data/img/2023/7/7.png)
+ 打开命令提示符（win+R） 输入inetmgr 然后点击"确定"
![inetmgr](../data/img/2023/7/8.png)
![IIS](../data/img/2023/7/9.png)
+ 或者直接在开始菜单栏里搜索IIS
![IIS](../data/img/2023/7/10.png)
#### 验证IIS服务
`简单解释下为什么编译器明明就能看到网页非要弄这么一个服务器：`
因为编译器仅仅只是调试 而且只是在本地 其他设备不能访问 诸如你的手机、室友的电脑
咱且不说源文件什么的 就只说效果 有这么一个web服务器 就可以打破本地浏览网页效果的屏障 这就是web服务器的作用
`另外IIS是开机自启的 所以我们可以直接验证下IIS服务是否开启`
不需要域名 只需要一个ip地址就可以访问本机运行的web服务 所以你可以通过命令提示符来查询本机地址（win+R 输入cmd）
![命令提示符](../data/img/2023/7/11.png)
输入ipconfig 找到你对应的网络适配器（以太网就是网线 无线局域网就是wifi）
IPv4就是你的IP地址 比如我的192.168.3.138
![本机IP地址](../data/img/2023/7/12.png)
打开你的浏览器 在最顶上的一栏输入刚才你查到的IP地址192.168.3.138
![IIS默认界面](../data/img/2023/7/13.png)
看到这个界面说明你的IIS服务开启成功了
#### 部署发布自己的网站
`首先你要知道IIS的默认根目录在哪里`
A:在C盘的inetpub的wwwroot文件夹内 
![IIS默认根目录](../data/img/2023/7/14.png)
我们刚才测试访问的就是在这里的iisstart.html文件
![IIS根目录下的默认文件](../data/img/2023/7/15.png)
同理 我们可以在这里部署并发布自己的各个网站
展开服务器名称 右键单击"网站" 选择"添加网站"
![IIS根目录下的默认文件](../data/img/2023/7/16.png)
![IIS根目录下的默认文件](../data/img/2023/7/17.png)
点开该站点目录下的默认文档 添加你站点想要作为首页的文件名（默认文档只要有一个就行了 不然会冲突 建议统一命名为index 此处演示不做规范）
`ps`网站默认部署在80端口
![默认文档](../data/img/2023/7/18.png)
![默认文件](../data/img/2023/7/19.png)
![站点目录](../data/img/2023/7/20.png)
然后打开浏览器访问你的IP地址+映射的端口就可以访问到啦
![部署成功！](../data/img/2023/7/21.png)

`PS:`
该方法就是在一IP地址下通过配置不同的端口 给每个站点的目录分配对应的地址 你在访问该IP+端口的时候 本质就是访问在你C盘上的这个站点根目录
好啦 快去试试吧!

#### 更多小Tips
除了部署文件 IIS的可玩性也是相当 我们可以看到在inetpub目录下在咱们默认安装的时候有五个文件
![inetpub目录](../data/img/2023/7/22.png)
+ custerr 存储自定义错误页面的配置文件和静态页面 当IIS遇到HTTP错误时 它将根据custerr文件夹中的配置来显示自定义的错误页面
+ history 存储IIS的历史记录 包含有关过去请求和响应的信息 可用于故障排除和分析
+ logs 存储IIS的日志文件 记录了每个请求的详细信息，包括访问时间、客户端IP地址、请求的URL、服务器响应代码等
+ temp 存储IIS的临时文件 处理请求时生成的一些临时文件 例如缓存文件和上传的文件
+ wwwroot 默认的Web站点根目录 存储Web应用程序的文件和内容
其中你可以利用log日志来初步查看你的站点安全
![logs目录](../data/img/2023/7/22.png)
W3SVC1和W3SVC2分别对应我们目前创建的两个站点
![站点日志](../data/img/2023/7/23.png)
![W3SVC2](../data/img/2023/7/24.png)
由命名规则可知 日志默认是按天生成 日志独立于站点 删除站点目录和应用 日志还是存在 所以日志是手动删除 确认后再谨慎删除 毕竟数据无价嘛对吧
当然了 如果你的打开你的日志发现时间比你的早八个小时你可以在IIS的日志设置里设置本地时间 然后勾上就好了 反应有些延迟 但不过这样就好啦
![关于日志日期](../data/img/2023/7/25.png)
![日志](../data/img/2023/7/26.png)
![本地时间](../data/img/2023/7/27.png)
或许以后实际工作中会涉及Cluster（集群） 将多个服务器组合以提供高可用性和负载均衡的功能 但那不在本篇教程范围内 有兴趣可以自行了解探索

### 完
觉得本篇文章不错的 挺一个bo~
## Nginx篇
### 介绍
Nginx是一个轻量级的服务器 能够有效地处理高并发和大流量情况 并且使用的内存较少
下面这是一些常见的Web服务器 可以了解下
![常见Web服务器](../data/img/2023/7/85.png)
本篇呢 主要介绍Nginx 适用于类似树莓派之类性能吃紧的linux部署网站
### 开始
ssh连接linux
![ssh连接linux](../data/img/2023/7/86.png)
好我们现在开始
先安装依赖，更新yum软件包管理器后安装
```epel
yum install epel-release

yum update

yum install nginx

```
![安装成功](../data/img/2023/7/87.png)

启动nginx 并配置开机自启
```systemctl
systemctl start nginx

systemctl enable nginx

```
![运行成功](../data/img/2023/7/88.png)
其他命令
```other
停止服务
systemctl stop nginx   
查看服务状态
systemctl status nginx

```
打开浏览器访问虚机地址
![访问成功](../data/img/2023/7/89.png)
`ps` 在CentOS上 nginx默认显示的是CentOS的页面
站点根目录 默认在/usr/share/nginx/html/下的index.html 可根据需要更改
![添加自己的网页](../data/img/2023/7/90.png)
![访问成功](../data/img/2023/7/91.png)
`ps` vim命令 的编辑模式是先敲一个字母 左下角显示插入 即可编辑 
退出编辑模式 先按下esc键 然后输入:wq  在一些权限不够的情况下 需要加叹号:wq!
![vim](../data/img/2023/7/92.png)
![vim](../data/img/2023/7/93.png)
### 更多Tips
部署多站点
先进入/etc/nginx/新建一个文件夹 专门放站点
```sites
cd /etc/nginx/

mkdir sites

```
进入sites目录 放置站点文件
```conf
cd sites

```
配置在/etc/nginx下的nginx.conf文件 
找http下的server块 复制该块 把两个80端口改成我们要映射的81端口
![配置nginx.conf](../data/img/2023/7/94.png)
然后我们关闭防火墙在浏览器访问
```firewall
systemctl status firewalld

systemctl stop firewalld

systemctl start firewalld

```
![81端口部署成功](../data/img/2023/7/95.png)

当然啦 我们可以开启防火墙开放一个81端口
```port
firewall-cmd --zone=public --add-port=81/tcp --permanent

firewall-cmd --reload

firewall-cmd --zone=public --list-ports

```
![81端口开行成功](../data/img/2023/7/96.png)
![81端口部署成功](../data/img/2023/7/95.png)
试试吧 81端口还是可以访问哒~

## 完
IIS、Nginx简单本地部署站点就到这啦 如果你想发布到公网 还需要配合带有公网IP的服务器和一个域名 
觉得不错挺一个bo~
完结撒花~


