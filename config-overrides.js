const {
    override,
    fixBabelImports,
    useBabelRc,
    addLessLoader,
    addWebpackAlias,
    addWebpackPlugin,
    overrideDevServer,
    addDecoratorsLegacy,
    removeModuleScopePlugin,
} = require('customize-cra');

const path = require('path');
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const theme = require('./config/antd-theme.json');

const isEnvProduction = (process.env.NODE_ENV === 'production');

// 添加rem移动端自适应方案
const addMobileCustomize = () => config => {
    require('react-app-rewire-postcss')(config, {
        plugins: loader => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
                autoprefixer: { flexbox: 'no-2009', grid: true, supports: true },
                stage: 3, // 4 稳定 1 实验 3 3功能+嵌套
            }),
            require('postcss-aspect-ratio-mini')({}),
            require('postcss-pxtorem')({
                unitPrecision: 5,
                propList: ['*'],
                selectorBlackList: [],
                replace: true,
                mediaQuery: false,
                minPixelValue: 0,
            }),
            require('postcss-write-svg')({ utf8: false }),
            require('postcss-viewport-units')({}),
            require('cssnano')({
                preset: "advanced",
                autoprefixer: false,
                "postcss-zindex": false
            })
        ]
    })
    return config;
};

// gzip压缩
const addCompression = () => config => {
    if (isEnvProduction) {
        config.plugins.push(
            new CompressionWebpackPlugin({
                test: /\.(css|js)$/,
                threshold: 1024,
                minRatio: 0.9
            })
        );
    }
    return config;
};

// 查看打包后各包大小
const addAnalyzer = () => config => {
    if (process.env.ANALYZER) {
        config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 8081 }));
    }
    return config;
};

// dev打包配置
const devServerConfig = () => config => {
    return {
        ...config,
        compress: true,
    }
}

module.exports = {
    webpack: override(
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: theme,
            // https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
        }),
        fixBabelImports('import', {
            libraryName: 'antd-mobile',
            libraryDirectory: 'es',
            style: true,
        }),
        addWebpackAlias({
            '@': path.resolve(__dirname, 'src'),
            '@config': path.resolve(__dirname, 'config'),
            '@mock': path.resolve(__dirname, 'mock'),
        }),
        addCompression(),
        addAnalyzer(),
        useBabelRc(), // 允许使用.babelrc对babel进行配置
        addDecoratorsLegacy(), // 支持装饰器
        addWebpackPlugin(
            new ProgressBarPlugin(),
        ),
        addMobileCustomize(),
        removeModuleScopePlugin()
    ),
    devServer: overrideDevServer(
        devServerConfig()
    ),
}