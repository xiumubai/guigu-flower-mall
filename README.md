## <h3 align="center">幕尚花坊小程序</h3>

### 介绍

**幕尚花坊**是尚硅谷原生小程序教学实战项目，是一款鲜花电商项目。

## 开发方式

### 开发环境依赖版本

- 微信开发者工具版本（Stable 1.0.6）
- 调试基础库（2.30.0）

### 代码下载

代码下载地址：(https://gitee.com/guigu-fe/guigu-flower-mall.git)

### 开发步骤

步骤一：通过 npm 安装 依赖包

```bash
npm install
```

步骤二：在微信开发工具打开项目，执行`npm`构建

具体操作：`工具/构建npm`

步骤三：替换 appid

找到`project.config.json`文件的`appid`,替换为自己小程序的`appid`即可

> 备注：由于本项目使用的小程序是企业申请的，设计支付功能，所以如果想体验支付流程的可以自行申请企业小程序。

步骤四：配置白名单

在你的小程序后台，找到`开发/开发管理/开发设置/服务器名`，然后添加本项目域名地址(https://gmall-prod.atguigu.cn)，即可开始调试本项目接口了。

## 接口文档地址

http://39.98.123.211:8300/doc.html#/home

## 🗃️ 效果图

<table>
  <tr>
    <td><img src="./docs/images/home.pic.jpg"></td>
    <td><img src="./docs/images/info.pic.jpg"></td>
  </tr>
  <tr>
    <td><img src="./docs/images/goods-list.pic.jpg"></td>
    <td><img src="./docs/images/goods-detail.pic.jpg"></td>
  </tr>
  <tr>
    <td><img src="./docs/images/order-detail.pic.jpg"></td>
    <td><img src="./docs/images/order-list.pic.jpg"></td>
  </tr>
  <tr>
    <td><img src="./docs/images/category.pic.jpg"></td>
    <td><img src="./docs/images/cart-list.pic.jpg"></td>
  </tr>
  <tr>
    <td><img src="./docs/images/address-list.pic.jpg"></td>
    <td><img src="./docs/images/address-add.pic.jpg"></td>
  </tr>
</table>

## 💚 适合人群

- 正在以及想使用微信小程序做开发的初学者人群。
- 熟悉 js，css，html 技术栈，熟悉微信小程序语法。
- 对原理技术感兴趣，想进阶和提升的同学。

## 🎨 特别鸣谢

| Project                                                                              |
| ------------------------------------------------------------------------------------ |
| [微信小程序](https://developers.weixin.qq.com/doc/)                                  |
| [Vant Weapp](https://vant-contrib.gitee.io/vant-weapp/#/home)                        |
| [mobx-miniprogram-bindings](https://www.npmjs.com/package/mobx-miniprogram-bindings) |

## 开发团队

本项目是由尚硅谷前端研究院负责开发

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)协议，请自由地享受和参与开源。
