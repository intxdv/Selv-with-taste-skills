import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function captureScreenshots() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log('Navigating to http://localhost:3001...');
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for preloader animation to finish
  await new Promise(r => setTimeout(r, 2500));

  const publicDemoDir = path.join(process.cwd(), 'public', 'demo');
  if (!fs.existsSync(publicDemoDir)) {
    fs.mkdirSync(publicDemoDir, { recursive: true });
  }

  // 1. Capture Hero Section
  console.log('Capturing Hero...');
  await page.screenshot({ path: path.join(publicDemoDir, 'hero-preview.png') });
  await page.screenshot({ path: path.join(process.cwd(), 'hero-preview.png') });

  // 2. Scroll and capture Services
  console.log('Capturing Services...');
  await page.evaluate(() => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(publicDemoDir, 'services-preview.png') });

  // 3. Scroll and capture Selected Work
  console.log('Capturing Selected Work...');
  await page.evaluate(() => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(publicDemoDir, 'work-preview.png') });

  // 4. Scroll and capture Process & Manifesto
  console.log('Capturing Process & Manifesto...');
  await page.evaluate(() => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(publicDemoDir, 'process-preview.png') });

  // 5. Scroll and capture Contact & Footer
  console.log('Capturing Contact & Footer...');
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(publicDemoDir, 'contact-preview.png') });

  // 6. Capture Full Page
  console.log('Capturing Full Page...');
  await page.screenshot({ path: path.join(publicDemoDir, 'selv-fullpage-preview.png'), fullPage: true });
  await page.screenshot({ path: path.join(process.cwd(), 'selv-preview.png'), fullPage: false });

  console.log('All previews captured successfully!');
  await browser.close();
}

captureScreenshots().catch(console.error);
