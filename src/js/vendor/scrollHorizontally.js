"use strict";
/*!
 * fullpage.js Scroll Horizontally Extension 0.0.4 for fullPage.js v3
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distribute.
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
/* eslint-disable */window.fp_scrollHorizontallyExtension=function(){var e=this,t=window.fp_utils,a=window.fullpage_api,c=t,s=t.$,i=a.getFullpageData(),d=i.options,n=i.internals,f=".fp-section",u=".fp-slide";e.getScrollSection=function(e,t){var i,n=s(".fp-section.active")[0],o=s(u,n).length,l=d.scrollHorizontally&&1<o,r=1===s(f).length;if(l)if(i=s(".fp-slide.active",n)[0],"down"===e){if(c.index(i)+1!==o||r)return a.moveSlideRight}else if(c.index(i)||r)return a.moveSlideLeft;return t},e.c=n.c;var o=e["common".charAt(0)];return"complete"===document.readyState&&o("scrollHorizontally"),window.addEventListener("load",function(){o("scrollHorizontally")}),e};