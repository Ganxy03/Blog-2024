---
title: 【Sysnology】配置群晖DS3615xs
date: 2023-06-10 10:28:42
tags:
---
## 准备

### 配件清单
+ 一个U盘
+ 一台主机
+ 一个硬盘
+ 一根网线
+ 一个路由器
+ 一个显示屏（可选）
+ 一根高清线（可选）
+ 两根电源线（或一根）
![清单（路由器没拍到后补）](../data/img/2023/6/IMG_20230610_103328.jpg)

### 检查
硬盘、U盘格式化，网线检查信号是否连通，机箱检查主板是否正常
`硬盘格式化 高级教程在`[这里](https://ganxy03.github.io/2023/05/14/FORMAT-FS-FAT32-QUICK-0%E7%99%BE%E5%88%86%E6%AF%94%E5%B7%B2%E5%AE%8C%E6%88%90-%E8%99%9A%E6%8B%9F%E7%A3%81%E7%9B%98%E6%9C%8D%E5%8A%A1%E9%94%99%E8%AF%AF%EF%BC%9A%E5%8D%B7%E5%A4%A7%E5%B0%8F%E5%A4%AA%E5%A4%A7/) `不会再搜`
![硬盘格式化](../data/img/2023/6/IMG_20230610_105506.jpg)
![U盘格式化](../data/img/2023/6/%E8%81%94%E6%83%B3%E6%88%AA%E5%9B%BE_20230610105927.png)
![网线检查信号](../data/img/2023/6/%E7%BD%91%E7%BA%BF%E6%A3%80%E6%9F%A5%E4%BF%A1%E5%8F%B7.gif)
`因为网线是自己做的 你如果买的没有检测仪可以忽略这一步`
`机箱你如果是买的全新 那么就直接上手 如果是旧电脑 可以试下简单的系统能不能跑 机子主板o不ok 这里就不做演示`

## 装系统

### 第一步：做U盘引导
首先得查一下U盘的VID和PID
直接在设备管理器里面 找通用串行总线控制器里的USB大容量存储设备
我的U盘VID是346D、PID是5678
![U盘VID、PID](../data/img/2023/6/U%E7%9B%98%E7%9A%84VID%E5%92%8CPID.png)
接着用win32工具把驱动写入U盘 `win32工具点`[这里](http://download.ganxy03.cn)[驱动](http://download.ganxy03.cn)
![写入U盘](../data/img/2023/6/%E9%A9%B1%E5%8A%A8%E5%86%99%E8%BF%9BU%E7%9B%98.png)![写入成功](../data/img/2023/6/%E5%86%99%E5%85%A5%E6%88%90%E5%8A%9F.png)

然后再用DiskGEnius改U盘的VID和PID（绿色软件 无需安装）
![复制到桌面](../data/img/2023/6/%E5%8F%91%E9%80%81%E5%88%B0%E6%A1%8C%E9%9D%A2.png)
![复制成功](../data/img/2023/6/%E5%8F%91%E9%80%81%E6%A1%8C%E9%9D%A2%E6%88%90%E5%8A%9F.png)
![用编辑器打开](../data/img/2023/6/%E7%94%A8%E7%BC%96%E8%BE%91%E5%99%A8%E6%89%93%E5%BC%80%E6%96%87%E4%BB%B6.png)
找到、更改这两行 把VID改成刚才查的U盘346D、PID:5678
完了之后拖回去 覆盖原文件 就改好了
![覆盖完成](../data/img/2023/6/%E8%A6%86%E7%9B%96%E5%AE%8C%E6%88%90.png)

到这里 U盘驱动就制作好了 

### 第二步：装机子开机
先装上硬盘 插上线 
差不多像这样
![初装](../data/img/2023/6/%E7%AC%AC%E4%B8%80%E6%AD%A5%E8%A3%85%E4%B8%8A.jpg)
开机 摁f1设置u盘为第一引导
大概是这样
![设置U盘第一驱动](../data/img/2023/6/U%E7%9B%98%E7%AC%AC%E4%B8%80%E9%A9%B1%E5%8A%A8.jpg)
![设置U盘第一驱动](../data/img/2023/6/U%E7%9B%98%E7%AC%AC%E4%B8%80%E9%A9%B1%E5%8A%A82.jpg)
![设置U盘第一驱动](../data/img/2023/6/U%E7%9B%98%E7%AC%AC%E4%B8%80%E9%A9%B1%E5%8A%A83.jpg)
![设置U盘第一驱动](../data/img/2023/6/U%E7%9B%98%E7%AC%AC%E4%B8%80%E9%A9%B1%E5%8A%A84.jpg)
完了之后开机若是能见到这个 就是引导成功了
不能 摁f12先手动引导一下吧
![引导成功](../data/img/2023/6/%E5%BC%95%E5%AF%BC%E6%88%90%E5%8A%9F.jpg)
![手动引导](../data/img/2023/6/%E6%89%8B%E5%8A%A8%E5%BC%95%E5%AF%BC.jpg)
至此 引导成功后开始装系统

### 第三步：局域网下配置
首先连上网线
![连上网线](../data/img/2023/6/%E8%BF%9E%E4%B8%8A%E7%BD%91%E7%BA%BF.jpg)
来到路由管理面板
![路由面板](../data/img/2023/6/%E8%B7%AF%E7%94%B1%E7%AE%A1%E7%90%86%E9%9D%A2%E6%9D%BF.png)
登进去后 在网络设置里 可以查找局域网内机子的IP地址
![查找ip地址](../data/img/2023/6/NASip%E5%9C%B0%E5%9D%80.png)
虽然也可以用[群晖在线助手](https://finds.synology.com/)`https://finds.synology.com/` 查找机子 但是尽管在一个局域网内 也不容易找到
![群晖在线助手](../data/img/2023/6/%E7%BE%A4%E6%99%96%E5%8A%A9%E6%89%8Bpc%E7%AB%AF.png)
![找不到](../data/img/2023/6/%E5%9C%A8%E7%BA%BF%E6%89%BE%E4%B8%8D%E5%88%B0.png)
但是你直接输ip地址加端口5000就可以直接访问机子
![ip+5000端口](../data/img/2023/6/ip%E5%8A%A0%E7%AB%AF%E5%8F%A35000.png)
都在一个局域网下 所以我推荐使用后者

然后点设置选好和引导版本对应的pat镜像 安装系统
![选择对应的pat镜像](../data/img/2023/6/pat%E6%96%87%E4%BB%B6%E8%A3%85%E7%B3%BB%E7%BB%9F.png)
点立即安装 再点确定
![安装](../data/img/2023/6/%E7%AB%8B%E5%8D%B3%E5%AE%89%E8%A3%85%E7%A1%AE%E5%AE%9A.png)
等待安装
![等待安装](../data/img/2023/6/%E7%AD%89%E5%BE%85%E5%AE%89%E8%A3%85.png)
自行重启
![自行重启](../data/img/2023/6/%E9%87%8D%E5%90%AF.png)
创建管理员账户
![创建管理员账户](../data/img/2023/6/%E5%88%9B%E5%BB%BA%E7%AE%A1%E7%90%86%E5%91%98%E8%B4%A6%E6%88%B7.png)
更新与维护:咱用的是黑群晖 不要设置自动更新
![更新与维护](../data/img/2023/6/%E6%9B%B4%E6%96%B0%E4%B8%8E%E7%BB%B4%E6%8A%A4.png)
quickconnct:同上 咱没洗白 用不了这个服务 跳过跳过
![quickconnct](../data/img/2023/6/quickconnct.png)
![quickconnct](../data/img/2023/6/%E8%B7%B3%E8%BF%87quickconnct.png)
分享IP地址:没所谓 勾上吧
![分享IP地址](../data/img/2023/6/%E5%88%86%E4%BA%ABip%E5%9C%B0%E5%9D%80.png)
登陆成功:恭喜你哈
![登陆成功](../data/img/2023/6/%E7%99%BB%E9%99%86%E6%88%90%E5%8A%9F.png)

### 第四步：创建存储空间
新建存储空间:选择RAIDGroup类型 选择Basic
![新建存储空间](../data/img/2023/6/%E6%96%B0%E5%BB%BA%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4.png)
![选择RAIDGroup类型](../data/img/2023/6/%E9%80%89%E6%8B%A9RAIDGroup%E7%B1%BB%E5%9E%8B.png)
![选择Basic](../data/img/2023/6/%E9%80%89%E6%8B%A9Basic.png)
![选择硬盘](../data/img/2023/6/%E9%80%89%E6%8B%A9%E7%A1%AC%E7%9B%98.png)
这是一个硬盘 现在我有两个硬盘 一个个试过去嘛
硬盘检查:这个要等相当长一段时间 等着吧
![等待](../data/img/2023/6/%E7%AD%89%E5%BE%85%E7%A1%AC%E7%9B%98%E6%A3%80%E6%9F%A5%E5%AE%8C.png)
![检查完成](../data/img/2023/6/%E6%A3%80%E6%9F%A5%E5%AE%8C%E6%88%90.png)
PS:等了一个多小时
接着新增存储空间
![新增存储空间](../data/img/2023/6/%E6%96%B0%E5%A2%9E%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4.png)
![新增存储空间](../data/img/2023/6/%E6%96%B0%E5%A2%9E%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B42.png)
![新增存储空间](../data/img/2023/6/%E6%96%B0%E5%A2%9E%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B43.png)
设置共享文件夹
![设置共享文件夹](../data/img/2023/6/%E8%AE%BE%E7%BD%AE%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E5%A4%B9.png)
![设置共享文件夹](../data/img/2023/6/%E8%AE%BE%E7%BD%AE%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E5%A4%B92.png)
![设置共享文件夹](../data/img/2023/6/%E8%AE%BE%E7%BD%AE%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E5%A4%B93.png)
![设置共享文件夹](../data/img/2023/6/%E8%AE%BE%E7%BD%AE%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E5%A4%B94.png)
![设置共享文件夹](../data/img/2023/6/%E8%AE%BE%E7%BD%AE%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E5%A4%B95.png)
![设置共享文件夹](../data/img/2023/6/%E8%AE%BE%E7%BD%AE%E5%85%B1%E4%BA%AB%E6%96%87%E4%BB%B6%E5%A4%B96.png)

添加NAS到本地
![添加NAS到本地](../data/img/2023/6/NAS%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%9C%AC%E5%9C%B00.png)
![添加NAS到本地](../data/img/2023/6/NAS%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%9C%AC%E5%9C%B0.png)
![添加NAS到本地](../data/img/2023/6/NAS%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%9C%AC%E5%9C%B02.png)
![添加NAS到本地](../data/img/2023/6/NAS%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%9C%AC%E5%9C%B03.png)
![添加NAS到本地](../data/img/2023/6/NAS%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%9C%AC%E5%9C%B04.png)
看到这里 恭喜你添加成功 更多功能尽情发现吧！

如果你想实现外网远程连接NAS 那敬请翻阅这篇[文章](https://ganxy03.github.io/)
