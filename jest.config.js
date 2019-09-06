module.exports = {
    // 转换器
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    // 在 node 环境中运行测试，默认值是 'jsdom'，在类浏览器环境中测试
    testEnvironment: 'node',
    // 覆盖率测试报告器，这里的 'html' 会生成网页版的报告
    coverageReporters: ['text', 'html']
};