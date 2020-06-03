## Introduction 
**react-h5-Infrastructure** Based on the most basic [create-react-app](https://create-react-app.dev/docs/getting-started/) scaffolding and data flow management The scheme [dva](https://dvajs.com/guide/) is modified, which uses `react-app-rewired` combined with`customize-cra` to modify and extend the `webpack` configuration, specific configuration You can view the `config-overrides.js` file in the root directory ...

Including the processing of mobile terminal adaptation, including fonts and other adaptive / more suitable for the development of H5 applications in various scenarios, another point dva towering provides a lot of convenience for our data management, this is also the most used dva An important reason.

## Precautions -> Notes 😱
- **less-loader:** Please keep the less-loader version 5.0.0, otherwise there will be an error in packaging plus
- **cypress:** When installing dependencies, please remove cypress from package.json, we recommend that after your App development is completed. If you need to use automated testing before installing cypress dependencies! Because cypress will pull down and install the test tool from the foreign service area, even if you use `Science Online`, it will take a lot of time ...
- **Application packaging commands:** Before use, please carefully check the packaging command configuration of `scripts` in` package.json`, you may need to make certain modifications to this to meet your current development

## Pre-knowledge
If you want to use this architecture better, I suggest you can spend some time to understand the following knowledge
- [cypress](https://www.cypress.io/) A simple and easy-to-use front-end automated testing framework
- [dva](https://dvajs.com/guide/) dva is first a data flow solution based on redux and redux-saga, and then to simplify the development experience
- [webpack](https://www.webpackjs.com/) webpack is a module packer. The main goal of webpack is to package JavaScript files together, and the packaged files are used in the browser
- [sizzy](https://sizzy.co/) Sizzy is a browser made specifically for responsive development. It allows you to preview a website on multiple devices at once
- [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) Override create-react-app webpack configs without ejecting, 2.x version needs to be used with `customize-cra`
- [customize-cra](https://github.com/arackaf/customize-cra)

## Questions

If you have any questions about use or expansion, Please contact WXWork `李世文` or WeChat `soc686`, and explain the specific situation. The issue list of this repo is exclusively for bug reports and feature requests.

## TODOS
- [x] dva data stream
- [x] create-react-app changed to react-app-rewired
- [x] Handle mobile adaptive problems, including fonts
- [x] globalization
- [x] antd mobile Load on demand
- [x] Automated testing cypress
- [ ] demo
