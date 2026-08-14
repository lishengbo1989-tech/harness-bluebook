/* DSH 蓝皮书 · 交互脚本 */
(function () {
  "use strict";

  /* ---------- 移动端导航 ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var open = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "✕" : "☰";
    });
  }

  /* ---------- 数字计数器(滚动进入视口后动画) ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-target"), 10) || 0;
    var dur = 1100;
    var start = null;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      // easeOutCubic
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.textContent = val.toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var counters = document.querySelectorAll(".count-up");
  if ("IntersectionObserver" in window && counters.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            animateCount(en.target);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (c) { io.observe(c); });
  } else {
    counters.forEach(function (c) {
      c.textContent = (parseInt(c.getAttribute("data-target"), 10) || 0).toLocaleString("en-US");
    });
  }

  /* ---------- 复制问卷文本 ---------- */
  var copyBtn = document.getElementById("copy-btn");
  var copyOk = document.getElementById("copy-ok");
  if (copyBtn && copyOk) {
    copyBtn.addEventListener("click", function () {
      var text = document.getElementById("survey-text");
      var content = text ? text.textContent.trim() : "";
      function done() {
        copyOk.style.display = "inline";
        setTimeout(function () { copyOk.style.display = "none"; }, 2600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(content).then(done, done);
      } else {
        // 降级方案
        var ta = document.createElement("textarea");
        ta.value = content;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  }

  /* ---------- 当前年份 ---------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
