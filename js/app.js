const home = document.querySelector('#Home');
home.setAttribute("style", `min-height: ${sizeWindow()}px`,);
function sizeWindow() {
  var sizeWindow = [0, 0];
  if (typeof window.innerWidth != "undefined") {
    sizeWindow = [window.innerWidth, window.innerHeight];
  } else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth != 0
  ) {
    sizeWindow = [
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ];
  } else {
    sizeWindow = [
      document.getElementsByTagName("body")[0].clientWidth,
      document.getElementsByTagName("body")[0].clientHeight,
    ];
  }
  return sizeWindow[1];
}
