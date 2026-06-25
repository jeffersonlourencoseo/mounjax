import puppeteer from 'puppeteer';

const url = process.argv[2] || 'http://localhost:4321/';

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
});

const page = await browser.newPage();

// Simular viewport mobile
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });

await page.goto(url, { waitUntil: 'networkidle2' });

// Iniciar coleta de CLS depois que a página carregou
const collectCls = () => {
  return page.evaluate(() => {
    return new Promise((resolve) => {
      let cls = 0;
      let largestShift = 0;
      const observer = new PerformanceObserver((entries) => {
        for (const entry of entries.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += entry.value;
            if (entry.value > largestShift) largestShift = entry.value;
          }
        }
      });
      observer.observe({ type: 'layout-shift', buffered: true });

      setTimeout(() => {
        observer.disconnect();
        resolve({ cls, largestShift });
      }, 10000);
    });
  });
};

const clsPromise = collectCls();

// Scroll suave até o final para ativar imagens lazy e seções
await page.evaluate(async () => {
  const total = document.body.scrollHeight;
  const step = Math.floor(total / 10);
  for (let i = 0; i <= 10; i++) {
    window.scrollTo(0, i * step);
    await new Promise(r => setTimeout(r, 400));
  }
  window.scrollTo(0, 0);
});

const result = await clsPromise;
console.log(`URL: ${url}`);
console.log(`CLS: ${result.cls.toFixed(4)}`);
console.log(`Largest layout shift: ${result.largestShift.toFixed(4)}`);

await browser.close();
