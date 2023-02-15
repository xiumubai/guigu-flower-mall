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

找到`project.config.json`文件的`appid`,替换为自己小程序

> 备注：由于本项目使用的小程序是企业申请的，设计支付功能，所以如果想体验支付流程的可以自行申请企业小程序。

步骤四：配置白名单

在你的小程序后台，找到`开发/开发管理/开发设置/服务器名`，然后添加本项目域名地址(https://gmall-prod.atguigu.cn)，即可开始调试本项目接口了。

## 🗃️ 效果图

<table>
<tr>
<td>
<img src="https://cdn.nlark.com/yuque/0/2023/png/338969/1676433265695-84018d83-71a7-4755-894e-6bc8d02d8b98.png#averageHue=%23e5ebe9&clientId=uf4c2fb01-0be0-4&from=paste&height=1266&id=u2b272d85&name=image.png&originHeight=2532&originWidth=1170&originalType=binary&ratio=2&rotation=0&showTitle=false&size=235732&status=done&style=none&taskId=u3e1db878-9211-405d-b056-11f1ab4aa92&title=&width=585">
</td>
<td>
<img src="https://cdn.nlark.com/yuque/0/2023/png/338969/1676433294216-282e11d5-2242-415f-88b4-3055be9d9ad6.png#averageHue=%23eedfde&clientId=uf4c2fb01-0be0-4&from=paste&height=1266&id=uc002f7e9&name=image.png&originHeight=2532&originWidth=1170&originalType=binary&ratio=2&rotation=0&showTitle=false&size=120569&status=done&style=none&taskId=ue4df6a0d-282d-46e5-8e7f-ad737079e7c&title=&width=585">
</td>
</tr>
<tr>
<td>
<img src="https://cdn.nlark.com/yuque/0/2023/png/338969/1676433302120-5822f245-727f-45a0-bca0-91a78e127db5.png#averageHue=%23d1cfc9&clientId=uf4c2fb01-0be0-4&from=paste&height=1266&id=ud2205ed4&name=image.png&originHeight=2532&originWidth=1170&originalType=binary&ratio=2&rotation=0&showTitle=false&size=186619&status=done&style=none&taskId=ub915cab1-ceab-4de1-a9c1-492507915aa&title=&width=585">
</td>
<td>
<img src="https://cdn.nlark.com/yuque/0/2023/png/338969/1676433318317-c714ed94-e931-4e94-b694-62914d3c95d2.png#averageHue=%23d6cfc7&clientId=uf4c2fb01-0be0-4&from=paste&height=1266&id=ufd3114b9&name=image.png&originHeight=2532&originWidth=1170&originalType=binary&ratio=2&rotation=0&showTitle=false&size=191958&status=done&style=none&taskId=u28609e81-eda5-47c6-8bcb-22341b1348b&title=&width=585">
</td>
</tr>
<tr>
<td>
<img src="https://cdn.nlark.com/yuque/0/2023/png/338969/1676433323882-94143835-fedc-42b0-a4be-db0acf8b700c.png#averageHue=%23eed9c4&clientId=uf4c2fb01-0be0-4&from=paste&height=1266&id=udf50ec33&name=image.png&originHeight=2532&originWidth=1170&originalType=binary&ratio=2&rotation=0&showTitle=false&size=178492&status=done&style=none&taskId=u926b9519-f89f-44ff-ae99-71b209de824&title=&width=585">
</td>
<td>
<img src="https://cdn.nlark.com/yuque/0/2023/png/338969/1676433329986-e8aa0d1f-4e1d-4055-ad17-b3052d6689f9.png#averageHue=%23d2c0a9&clientId=uf4c2fb01-0be0-4&from=paste&height=1266&id=u699930ec&name=image.png&originHeight=2532&originWidth=1170&originalType=binary&ratio=2&rotation=0&showTitle=false&size=161109&status=done&style=none&taskId=u7b5adff6-2de6-4955-8d31-c9a61b1d10a&title=&width=585">
</td>
</tr>
<tr>
<td>
<img src="https://cdn.nlark.com/yuque/0/2023/png/338969/1676433336006-0e8e1147-e0dd-4b24-b0b9-0ad973d3541c.png#averageHue=%236ac47b&clientId=uf4c2fb01-0be0-4&from=paste&height=1266&id=uc3b1ffc3&name=image.png&originHeight=2532&originWidth=1170&originalType=binary&ratio=2&rotation=0&showTitle=false&size=108839&status=done&style=none&taskId=ude803048-d5c8-4529-8490-31146a18c7b&title=&width=585">
</td>
<td>
<img src="https://cdn.nlark.com/yuque/0/2023/png/338969/1676433341325-09e11c56-c1a7-4b98-a45d-ea824a949f80.png#averageHue=%23c1beb0&clientId=uf4c2fb01-0be0-4&from=paste&height=1266&id=u7c975d8e&name=image.png&originHeight=2532&originWidth=1170&originalType=binary&ratio=2&rotation=0&showTitle=false&size=194955&status=done&style=none&taskId=u2cf900f1-842b-4d9d-b481-c8851c7c399&title=&width=585">
</td>
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
