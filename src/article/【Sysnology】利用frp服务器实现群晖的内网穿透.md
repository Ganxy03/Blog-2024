---
title: 【Sysnology】利用frp服务器实现群晖的内网穿透
date: 2023-06-10 18:11:59
tags:
---
继上一篇配置群晖教程[【Sysnology】配置群晖DS3615xs](https://ganxy03.github.io/2023/06/10/%E3%80%90Sysnology%E3%80%91%E9%85%8D%E7%BD%AE%E7%BE%A4%E6%99%96DS3615xs/)

如果你也成功装一台NAS的话 首先祝贺你 打开了NAS这个新世界
那么接下来 跟着我一起利用frp技术 实现远程访问NAS

## 开始

### 配置服务端
wget远程下载frp压缩包
`wget https://github.com/fatedier/frp/releases/download/v0.36.0/frp_0.36.0_linux_amd64.tar.gz`
```wget
[root@VM-4-13-centos lighthouse]# wget https://github.com/fatedier/frp/releases/download/v0.36.0/frp_0.36.0_linux_amd64.tar.gz
--2023-06-10 19:38:23--  https://github.com/fatedier/frp/releases/download/v0.36.0/frp_0.36.0_linux_amd64.tar.gz
Resolving github.com (github.com)... 20.205.243.166
Connecting to github.com (github.com)|20.205.243.166|:443... connected.
HTTP request sent, awaiting response... 302 Found
Location: https://objects.githubusercontent.com/github-production-release-asset-2e65be/48378947/95f8af80-8718-11eb-96af-a349ba304dd7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230610T113823Z&X-Amz-Expires=300&X-Amz-Signature=8339d0cb52641b233b6a066ac0aed7a3a1272c8fa32b770ae0724a9b358373a0&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=48378947&response-content-disposition=attachment%3B%20filename%3Dfrp_0.36.0_linux_amd64.tar.gz&response-content-type=application%2Foctet-stream [following]
--2023-06-10 19:38:23--  https://objects.githubusercontent.com/github-production-release-asset-2e65be/48378947/95f8af80-8718-11eb-96af-a349ba304dd7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230610T113823Z&X-Amz-Expires=300&X-Amz-Signature=8339d0cb52641b233b6a066ac0aed7a3a1272c8fa32b770ae0724a9b358373a0&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=48378947&response-content-disposition=attachment%3B%20filename%3Dfrp_0.36.0_linux_amd64.tar.gz&response-content-type=application%2Foctet-stream
Resolving objects.githubusercontent.com (objects.githubusercontent.com)... 185.199.108.133, 185.199.109.133, 185.199.111.133, ...
Connecting to objects.githubusercontent.com (objects.githubusercontent.com)|185.199.108.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 8565559 (8.2M) [application/octet-stream]
Saving to: ‘frp_0.36.0_linux_amd64.tar.gz’

100%[======================================================================>] 8,565,559   32.0KB/s   in 3m 55s 

2023-06-10 19:42:20 (35.6 KB/s) - ‘frp_0.36.0_linux_amd64.tar.gz’ saved [8565559/8565559]

[root@VM-4-13-centos lighthouse]# ls
frp_0.36.0_linux_amd64.tar.gz  frp_0.48.0_linux_amd64
[root@VM-4-13-centos lighthouse]# 

```
压缩`tar -zxvf`
```tar
frp_0.36.0_linux_amd64.tar.gz  frp_0.48.0_linux_amd64
[root@VM-4-13-centos lighthouse]# tar -zxvf frp_0.36.0_linux_amd64.tar.gz 
frp_0.36.0_linux_amd64/
frp_0.36.0_linux_amd64/frps_full.ini
frp_0.36.0_linux_amd64/frps.ini
frp_0.36.0_linux_amd64/frpc
frp_0.36.0_linux_amd64/frpc_full.ini
frp_0.36.0_linux_amd64/frps
frp_0.36.0_linux_amd64/LICENSE
frp_0.36.0_linux_amd64/frpc.ini
frp_0.36.0_linux_amd64/systemd/
frp_0.36.0_linux_amd64/systemd/frpc@.service
frp_0.36.0_linux_amd64/systemd/frpc.service
frp_0.36.0_linux_amd64/systemd/frps.service
frp_0.36.0_linux_amd64/systemd/frps@.service
[root@VM-4-13-centos lighthouse]# 

```
删除多余的压缩包`rm -rf`
```rm
[root@VM-4-13-centos lighthouse]# ls
frp_0.36.0_linux_amd64  frp_0.36.0_linux_amd64.tar.gz  frp_0.48.0_linux_amd64
[root@VM-4-13-centos lighthouse]# rm -rf frp_0.36.0_linux_amd64.tar.gz
[root@VM-4-13-centos lighthouse]# ls
frp_0.36.0_linux_amd64  frp_0.48.0_linux_amd64
[root@VM-4-13-centos lighthouse]# 

```
进入frp文件夹`cd` 删除多余的文件夹
```rm
[root@VM-4-13-centos lighthouse]# ls
frp_0.36.0_linux_amd64  frp_0.48.0_linux_amd64
[root@VM-4-13-centos lighthouse]# cd frp_0.36.0_linux_amd64
[root@VM-4-13-centos frp_0.36.0_linux_amd64]# ls
frpc  frpc_full.ini  frpc.ini  frps  frps_full.ini  frps.ini  LICENSE  systemd
[root@VM-4-13-centos frp_0.36.0_linux_amd64]# rm -rf frpc
[root@VM-4-13-centos frp_0.36.0_linux_amd64]# rm -rf frpc_full.ini
[root@VM-4-13-centos frp_0.36.0_linux_amd64]# rm -rf frpc.ini
[root@VM-4-13-centos frp_0.36.0_linux_amd64]# ls
frps  frps_full.ini  frps.ini  LICENSE  systemd
[root@VM-4-13-centos frp_0.36.0_linux_amd64]# 

```

配置frps.ini
```frps
[common]
bind_port = 7000
vhost_http_port = 7001
dashboard_port = 7500
dashboard_user = admin
dashboard_pwd = admin
token = 12345678

~                                                                                                               
~                                                                                                               
~                                                                                                               
~                                                                                                               
~                                                                                                               
~                                                                                                               
~                                                                                                               
~                                                                                                               
:wq

```
![frps的配置](../data/img/2023/6/%E7%BC%96%E8%BE%91frps%E6%96%87%E4%BB%B6.png)

启动frps`./frps -c ./frps.ini`
```startup
[lighthouse@VM-4-13-centos frp_0.36.0_linux_amd64]$ ./frps -c ./frps.ini
2023/06/10 20:20:02 [I] [root.go:108] frps uses config file: ./frps.ini
2023/06/10 20:20:02 [I] [service.go:192] frps tcp listen on 0.0.0.0:7000
2023/06/10 20:20:02 [I] [service.go:235] http service listen on 0.0.0.0:7001
2023/06/10 20:20:02 [I] [service.go:294] Dashboard listen on 0.0.0.0:7500
2023/06/10 20:20:02 [I] [root.go:209] frps started successfully

```
![启动frps](../data/img/2023/6/%E5%90%AF%E5%8A%A8frps.png)




### 打开群晖的ssh

![群晖ssh](../data/img/2023/6/%E5%BC%80%E5%90%AFssh.png)
然后打开命令提示符
```cmd
Microsoft Windows [版本 10.0.22621.1702]
(c) Microsoft Corporation。保留所有权利。

C:\Users\Ganxy>ssh admin@192.168.0.102
The authenticity of host '192.168.0.102 (192.168.0.102)' can't be established.
ED25519 key fingerprint is SHA256:1ioBHsRIwlPbdW7V+XHkfDftJiJ4k07QFtAzxz/yeW8.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '192.168.0.102' (ED25519) to the list of known hosts.
admin@192.168.0.102's password:
Could not chdir to home directory /var/services/homes/admin: No such file or directory
admin@MyNAS610_office:/$

```

![ssh连接](../data/img/2023/6/ssh%E7%99%BB%E9%99%86%E7%BE%A4%E6%99%96.png)
wget远程下载frp压缩包(版本0.36.0)
`wget https://github.com/fatedier/frp/releases/download/v0.36.0/frp_0.36.0_linux_amd64.tar.gz`
```wget
wget https://github.com/fatedier/frp/releases/download/v0.36.0/frp_0.36.0_linux_amd64.tar.gz
--2023-06-10 19:09:58--  https://github.com/fatedier/frp/releases/download/v0.36.0/frp_0.36.0_linux_amd64.tar.gz
Resolving github.com... 20.205.243.166
Connecting to github.com|20.205.243.166|:443... connected.
HTTP request sent, awaiting response... 302 Found
Location: https://objects.githubusercontent.com/github-production-release-asset-2e65be/48378947/95f8af80-8718-11eb-96af-a349ba304dd7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230610T110958Z&X-Amz-Expires=300&X-Amz-Signature=d629d7a8b6707f206faa153f56c853e12ccf320a808850adaef4cb75e1a0ebd8&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=48378947&response-content-disposition=attachment%3B%20filename%3Dfrp_0.36.0_linux_amd64.tar.gz&response-content-type=application%2Foctet-stream [following]
--2023-06-10 19:09:59--  https://objects.githubusercontent.com/github-production-release-asset-2e65be/48378947/95f8af80-8718-11eb-96af-a349ba304dd7?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230610T110958Z&X-Amz-Expires=300&X-Amz-Signature=d629d7a8b6707f206faa153f56c853e12ccf320a808850adaef4cb75e1a0ebd8&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=48378947&response-content-disposition=attachment%3B%20filename%3Dfrp_0.36.0_linux_amd64.tar.gz&response-content-type=application%2Foctet-stream
Resolving objects.githubusercontent.com... 185.199.109.133, 185.199.111.133, 185.199.110.133, ...
Connecting to objects.githubusercontent.com|185.199.109.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 8565559 (8.2M) [application/octet-stream]
Saving to: 'frp_0.36.0_linux_amd64.tar.gz'

100%[==============================================================================>] 8,565,559   21.6KB/s   in 7m 41s

2023-06-10 19:17:46 (18.1 KB/s) - 'frp_0.36.0_linux_amd64.tar.gz' saved [8565559/8565559]

root@MyNAS610_office:~#

下载完成！！！

```

在用户根目录ls查看文件`ls`
```ls
root@MyNAS610_office:~# ls
frp_0.36.0_linux_amd64.tar.gz
root@MyNAS610_office:~#

```
解压压缩包`tar -zxvf`
```tar
root@MyNAS610_office:~# tar -zxvf frp_0.36.0_linux_amd64.tar.gz
frp_0.36.0_linux_amd64/
frp_0.36.0_linux_amd64/frps_full.ini
frp_0.36.0_linux_amd64/frps.ini
frp_0.36.0_linux_amd64/frpc
frp_0.36.0_linux_amd64/frpc_full.ini
frp_0.36.0_linux_amd64/frps
frp_0.36.0_linux_amd64/LICENSE
frp_0.36.0_linux_amd64/frpc.ini
frp_0.36.0_linux_amd64/systemd/
frp_0.36.0_linux_amd64/systemd/frpc@.service
frp_0.36.0_linux_amd64/systemd/frpc.service
frp_0.36.0_linux_amd64/systemd/frps.service
frp_0.36.0_linux_amd64/systemd/frps@.service
root@MyNAS610_office:~# ls
frp_0.36.0_linux_amd64  frp_0.36.0_linux_amd64.tar.gz
root@MyNAS610_office:~#

```
删除多余的文件/压缩包`rm -rf`
```rm
root@MyNAS610_office:~# rm -rf frp_0.36.0_linux_amd64.tar.gz
root@MyNAS610_office:~# ls
frp_0.36.0_linux_amd64
root@MyNAS610_office:~#

```
进入frp文件夹`cd`
```cd
root@MyNAS610_office:~# cd frp_0.36.0_linux_amd64
root@MyNAS610_office:~/frp_0.36.0_linux_amd64# ls
frpc  frpc_full.ini  frpc.ini  frps  frps_full.ini  frps.ini  LICENSE  systemd
root@MyNAS610_office:~/frp_0.36.0_linux_amd64#

```
现在在配置的是客户端 client 所以删去不要的服务端（server）
```rm
root@MyNAS610_office:~/frp_0.36.0_linux_amd64# ls
frpc  frpc_full.ini  frpc.ini  frps  frps_full.ini  frps.ini  LICENSE  systemd
root@MyNAS610_office:~/frp_0.36.0_linux_amd64# rm -rf frps
root@MyNAS610_office:~/frp_0.36.0_linux_amd64# rm -rf frps_full.ini
root@MyNAS610_office:~/frp_0.36.0_linux_amd64# rm -rf frps.ini
root@MyNAS610_office:~/frp_0.36.0_linux_amd64# ls
frpc  frpc_full.ini  frpc.ini  LICENSE  systemd
root@MyNAS610_office:~/frp_0.36.0_linux_amd64#

```

配置frpc.ini`vi frpc.ini`
frpc.ini初始配置
![初始配置](../data/img/2023/6/frpc%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE.png)

```vi
[common]
server_addr = 1.116.129.124
server_port = 7000
token = 12345678

[ssh]
type = tcp
local_ip = 192.168.0.2
local_port = 22
remote_port = 2222

~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                              
:wq

```
![配置frpc.ini的ssh](../data/img/2023/6/%E9%85%8D%E7%BD%AEfrpc%E7%9A%84ssh.png)

配置frpc的http_webdav
```vi
[common]
server_addr = 1.116.129.124
server_port = 7000
token = 12345678

[http_webdav]
type = tcp
local_ip = 192.168.1.208（内网地址）
local_port = 5004
remote_port = 5005

~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       
:wq

```
![frpc的http_webdav](../data/img/2023/6/%E9%85%8D%E7%BD%AEfrpc%E7%9A%84httpwebdav.png)
下载WebDAV Server套件 进入套件中心
![进入套件中心](../data/img/2023/6/%E4%B8%8B%E8%BD%BD%E5%A5%97%E4%BB%B6.png)
![搜索WebDAVServer](../data/img/2023/6/%E6%90%9C%E7%B4%A2WebDAVServer.png)
![开启webdav端口](../data/img/2023/6/%E5%BC%80%E5%90%AFwebdav%E7%AB%AF%E5%8F%A3.png)

ds_file
```ds
[common]
server_addr = 1.116.129.124
server_port = 7000
token = 12345678

[ds_file]
type = tcp
local_ip = 192.168.0.102
local_port = 5001
remote_port = 5001

~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       
:wq!

```
![ds_file](../data/img/2023/6/ds_file.png)

http
```http
[common]
server_addr = 1.116.129.124
server_port = 7000
vhost_http_port = 7001

[web]
type = http
local_ip = 192.168.0.102
local_port = 5000
custom_domains = 1.116.129.124

~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       ~                                                                                                                       
-- INSERT --  
运行成功！！
```
![http配置](../data/img/2023/6/http%E9%85%8D%E7%BD%AE.png)



启动frpc.ini `./frpc -c ./frpc.ini`
```startup
root@MyNAS610_office:~/frp_0.36.0_linux_amd64# ./frpc -c ./frpc.ini
2023/06/10 20:36:01 [I] [service.go:304] [28da5bc0f7970fed] login to server success, get run id [28da5bc0f7970fed], server udp port [0]
2023/06/10 20:36:01 [I] [proxy_manager.go:144] [28da5bc0f7970fed] proxy added: [ssh]
2023/06/10 20:36:01 [I] [control.go:180] [28da5bc0f7970fed] [ssh] start proxy success

```
![启动frpc](../data/img/2023/6/%E5%90%AF%E5%8A%A8frpc.png)



`ps:结束frp进程`
```kill
[lighthouse@VM-4-13-centos ~]$ sudo -i
[root@VM-4-13-centos ~]# ps -aux|grep frp| grep -v grep
root     13047  0.0  0.0 126480  1716 ?        S    May30   0:00 vi frps.ini
root     26496  0.0  1.0 720164 20864 ?        Sl   May31   0:26 ./frps -c ./frps.ini
[root@VM-4-13-centos ~]# kill -9 26496
[root@VM-4-13-centos ~]# kill -9 13047
[root@VM-4-13-centos ~]# 

```




```httpfrpc

[common]
server_addr = 1.116.129.124
server_port = 7000
vhost_http_port = 7001

[http_web]
type = http
local_ip = 192.168.0.102
local_port = 5000
custom_domains = 1.116.129.124

```
```ssh
[common]     
server_addr = 1.116.129.124
server_port = 7000

[ssh]
type = tcp
local_ip = 192.168.0.102
local_port = 22
remote_port = 2222

heartbeat_interval = 30
heartbeat_timeout = 90


运行成功！！！
```
![ssh连接公网成功](../data/img/2023/6/ssh%E5%85%AC%E7%BD%91%E8%BF%9E%E6%8E%A5%E6%88%90%E5%8A%9F.png)

但是据测试 隔一段时间就断开了 再连接 得重启frpc客户端

这是成功的frps.ini配置

```frps
[common]
bind_port = 7000
vhost_http_port = 7001
dashboard_port = 7500
dashboard_user = admin
dashboard_pwd = admin

```

隔段时间断开的解决方案：设置心跳时间
frps.ini
heartbeat_timeout = 90//心跳值，负数禁用，不建议改动


frpc.ini
heartbeat_interval = 30//间隔时间
heartbeat_timeout = 90//超时时间

`参考` `https://blog.csdn.net/qq_42690327/article/details/129467480`