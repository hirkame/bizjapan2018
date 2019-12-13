var ua = navigator.userAgent;
if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0 || navigator.userAgent.indexOf('Kindle')>0) {
  console.info("Not initialized!");
} else {
  skrollr.init({
    forceHeight: false,
    smoothScrolling: true
  });
  console.info("initialized!");
}
