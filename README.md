# indy-material
only-education
Indy使用术语“代理”表示与其他身份（通过DID）交互的软件，使用“钱包”作为DID和相关信息（包括私钥）的数据存储。例如，一个人可能在其智能设备上有一个移动Agent应用程序，而一个组织可能有一个在Cloud Server上运行的企业Agent。所有代理都有一个用于存储身份数据的安全钱包。
为了演示Indy的工作方式，我们创建了一个简短的演示，涉及以下代理：
	爱丽丝（Alice），曾就读于Faber大学，想在Acme公司求职
	费伯（Faber）大学，授予爱丽丝学位
	Acme，需要Alice成绩单的副本
浏览器进入docker（https://labs.play-with-docker.com/）
启动终端，在终端中输入：
$  git clone https://github.com/hyperledger/education #下载代码
$  cd education/LFS171x/indy-material/nodejs #进入运行代码的文件位置
$  ./manage build #构建组件
$  ./manage up #运行组件
开始运行后，可以在页面上看到所有的容器的日志，日志显示了区块链分类帐节点通信的输出以及Indy Agent启动并与分类帐通信的输出。
终端上方的一系列四位数字代表了各容器的端口，点击可以进入浏览器访问该链接。
  爱丽丝 3000
  Bob 3001
  费伯学院 3002
  Acme公司的 3003
  储蓄银行 3004
  区块链分类帐浏览器 9000
  数字的其余部分（端口9701-9708）是区块链账本节点的端口-每个节点两个。
