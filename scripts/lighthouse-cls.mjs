import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const url = process.argv[2] || 'http://localhost:4321/';

const chrome = await chromeLauncher.launch({
  chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
});

const options = {
  logLevel: 'error',
  output: 'json',
  onlyCategories: ['performance'],
  port: chrome.port,
  emulatedUserAgent: 'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36',
  formFactor: 'mobile',
  throttling: {
    rttMs: 150,
    throughputKbps: 1.6 * 1024,
    cpuSlowdownMultiplier: 4,
    requestLatencyMs: 150,
    downloadThroughputKbps: 1.6 * 1024,
    uploadThroughputKbps: 750,
  },
  screenEmulation: {
    mobile: true,
    width: 412,
    height: 823,
    deviceScaleFactor: 1.75,
    disabled: false,
  },
};

const runnerResult = await lighthouse(url, options);
const audits = runnerResult.lhr.audits;

console.log(`URL: ${url}`);
console.log(`Performance Score: ${runnerResult.lhr.categories.performance.score}`);
console.log(`FCP: ${audits['first-contentful-paint'].displayValue}`);
console.log(`LCP: ${audits['largest-contentful-paint'].displayValue}`);
console.log(`CLS: ${audits['cumulative-layout-shift'].displayValue}`);
console.log(`TBT: ${audits['total-blocking-time'].displayValue}`);
console.log(`SI: ${audits['speed-index'].displayValue}`);

if (audits['cumulative-layout-shift'].details?.items?.length > 0) {
  console.log('\nCLS elements:');
  audits['cumulative-layout-shift'].details.items.forEach((item, i) => {
    console.log(`  ${i + 1}. score=${item.score?.toFixed?.(4) || item.score}, node=${item.node?.selector || 'n/a'}`);
  });
}

await chrome.kill();
