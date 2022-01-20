const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "reports/cucumber-json",
    reportPath: "reports/otalio-cucumber-report",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    reportName: "Otalio-Cucumber-Report",
    pageTitle: "Otalio-Report",
    displayDuration: true,
    displayReportTime: true,
    pageFooter: `<p style="text-align: center; padding: 3px;">All Reserved to Otalio 2021 !<br><a href="mailto:otalio@otalio.com">otalio@otalio.com</a></p>`,
    customData: {
        title: "My Custome Data!"
    },
    metadata: {
        AppVersion: "1.4.0",
        browser: {
            name: "chrome",
            version: "97",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
            version: "10",
        },
    },
});