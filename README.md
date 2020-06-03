## 简述
基于最基础的create-react-app dva antd-mobile webpack做修改而来
现在移动端适配问题是 `px` 和 `百分比` 等单位全部转换为 `rem`, 并且根据设备大小计算出 `html节点的font-size`, 就可以达到这样的效果

现在语言采用JavaScript, 如果你需要使用 静态类型分析 可以添加 Flow 来进行支持, [Flow官网](https://zhenyong.github.io/flowtype/)

但是使用了 Flow 方案后, 请在打包前置使用 `remove-flow-types-loader` 将Flow的支持移除, 因为Flow的语法在JS中并不支持, 如果不移除将会引起Build后无法使用, 具体配置与 `webpack loader` 配置完全相同!

**在 customize-cra 中配置**

`安装`

``` bash
npm install --save-dev babel-preset-flow remove-flow-types-loader
```

`.babelrc中使用`

``` bash
{
  "presets": [..., "babel-preset-flow", ...]
}
```

`config-overrides.js中配置移除`

``` javascript
    const {
        override,
        ...,
        addWebpackModuleRule,
        ...
    } = require('customize-cra');

    module.exports = override(
        addWebpackModuleRule({
            test: /\.jsx?$/,
            enforce: "pre",
            use: ["remove-flow-types-loader"],
            include: path.join(__dirname, "src")
        })
    )
```
你可能会遇到 `你可能需要使用其他loader进行解析的报错` 那是因为 `Pre` 被 `Eslint-loader` 占用, `/\.jsx?$/` 这个规则被 `babel-loader` 占用, 需要先将Eslint-loader禁用, 然后在规则的use处添加上对 react 的解析loader => `babel-loader`

## 调试

我们推荐使用 Sizzy [下载地址](https://sizzy.co/) 进行多端调试, 前提是你需要能 `科学上网` 因为这个工具是放在国外的! 国内没有办法下载和获取注册码

如果不能进行科学上网 也可选择Chrome控制台和Chrome远程调试方案...

## 问题

如果你在使用过程中遇到一些问题, 可以给我们提交 `Issues` 或者是直接添加微信 `soc686` 反馈你的问题

**提交Issues**

为了更高效的解决问题 我们希望您的 Issues 可以注明以下信息
- `想要达到是什么效果?`
- `遇到什么问题?`
- `做了哪些尝试?`
- `我怀疑是什么问题?`
- `如果可以请尽量附加上你的代码 和 错误信息`

**微信反馈**

可能通过时间比较忙,添加时候请注明 `来自Github`

## 示例

基于第三方在线图片托管平台
[Sizzy展示](https://img.wenhairu.com/image/YLVCI)

在仓库文件中查看:
在仓库文件中也有提供示例截图, 在 `docs/image` 文件夹下可以找到, 但是可能由于您本地HOST问题, DNS无法解析到 `github.com` .

你可以在HOST文件中尝试添加 DNS 解析地址, 或者是将仓库 `Clone` 到本地进行查看
