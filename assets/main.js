/* DSH 蓝皮书 · 交互脚本 */
(function () {
  "use strict";

  /* ---------- 访问统计(演示) + 真实统计接入点 ----------
   * 默认使用 localStorage 记录本机演示数据(UV/PV),驱动首页 LIVE 计数器。
   * 接入真实统计(推荐 Cloudflare Web Analytics / Umami / GA4 / Plausible):
   *   1) 把对应平台的统计脚本放到各页面 </head> 前;
   *   2) 如需让 LIVE 计数器显示真实数字,覆盖 window.DSH_ANALYTICS_HOOK,
   *      返回 { visitsToday, pvToday, visitsTotal, pvTotal } 即可。
   */
  var stats = (function () {
    try {
      var today = new Date().toISOString().slice(0, 10);
      var day = JSON.parse(localStorage.getItem("dsh-stats-day") || "{}");
      if (day.d !== today) day = { d: today, visits: 0, pv: 0 };
      day.pv += 1;
      var isNewVisit = !sessionStorage.getItem("dsh-visited");
      if (isNewVisit) { day.visits += 1; sessionStorage.setItem("dsh-visited", "1"); }
      localStorage.setItem("dsh-stats-day", JSON.stringify(day));
      var total = JSON.parse(localStorage.getItem("dsh-stats-total") || '{"visits":0,"pv":0}');
      if (isNewVisit) total.visits += 1;
      total.pv += 1;
      localStorage.setItem("dsh-stats-total", JSON.stringify(total));
      return { visitsToday: day.visits, pvToday: day.pv, visitsTotal: total.visits, pvTotal: total.pv };
    } catch (e) { return null; }
  })();

  /* 允许外部覆盖统计来源 */
  var externalStats = (typeof window.DSH_ANALYTICS_HOOK === "function") ? window.DSH_ANALYTICS_HOOK() : null;
  var finalStats = externalStats || stats;
  var STAT_MAP = {
    "visits-today": finalStats && finalStats.visitsToday,
    "pv-today": finalStats && finalStats.pvToday,
    "visits-total": finalStats && finalStats.visitsTotal,
    "pv-total": finalStats && finalStats.pvTotal
  };

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
    // 若该计数器绑定统计字段,用统计值覆盖默认目标
    var statKey = el.getAttribute("data-stat");
    if (statKey && STAT_MAP[statKey] != null) {
      el.setAttribute("data-target", String(STAT_MAP[statKey]));
    }
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
