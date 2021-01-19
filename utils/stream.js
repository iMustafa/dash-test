  
const { spawn } = require('child_process');
const puppeteer = require('puppeteer');

module.exports.stream = async function (options) {
  const browser = options.browser || (await puppeteer.launch());
  const page = options.page || (await browser.newPage());

  await options.prepare(browser, page);

  var ffmpegPath = options.ffmpeg || 'ffmpeg';
  var fps = options.fps || 30;
  var resolution = options.resolution || '1280x720';
  var preset = options.preset || 'medium';
  var rate = options.rate || '2500k';
  var threads = options.threads || '2';

  var outUrl = options.output || 'rtmp://a.rtmp.youtube.com/live2/';

  const args = ffmpegArgs({
    ffmpegPath,
    fps,
    resolution,
    preset,
    rate,
    threads
  });

  // var fullUrl = outUrl + options.key
  args.push(outUrl);


  let screenshot = null;

  if (options.pipeOutput) {
    ffmpeg.stdout.pipe(process.stdout);
    ffmpeg.stderr.pipe(process.stderr);
  }

  while (true) {
    await options.render(browser, page);

    screenshot = await page.screenshot({ type: 'jpeg' });

  }
};

const ffmpegArgs = ({fps, resolution, preset, rate, threads}) => 