!function n(i,e,r){function o(p,u){if(!e[p]){if(!i[p]){var s="function"==typeof require&&require;if(!u&&s)return s(p,!0);if(t)return t(p,!0);var g=new Error("Cannot find module '"+p+"'");throw g.code="MODULE_NOT_FOUND",g}var c=e[p]={exports:{}};i[p][0].call(c.exports,function(n){var e=i[p][1][n];return o(e?e:n)},c,c.exports,n,i,e,r)}return e[p].exports}for(var t="function"==typeof require&&require,p=0;p<r.length;p++)o(r[p]);return o}({1:[function(n,i,e){function r(n){this.skin=n}r.prototype.pingPong=function(n){for(var i=[],e=parseInt(n),r=1;r<=e;r++)r%15===0?i.push("ping-pong"):r%3===0?i.push("ping"):r%5===0?i.push("pong"):i.push(r);return i},e.calculatorModule=r},{}],2:[function(n,i,e){var r=n("./../js/pingpong.js").calculatorModule;$(document).ready(function(){$("form").submit(function(n){n.preventDefault();var i=new r("taupe"),e=$("#userInput").val(),o=i.pingPong(e);$("#output").each(function(){$(this).empty();for(var n=o.length-1;n>=0;n--){var i="";"ping"===o[n]?i="ping":"pong"===o[n]?i="pong":"ping-pong"===o[n]&&(i="ping-pong"),$(this).prepend('<div class="'+i+'">'+o[n]+"</div>"),$(".slideDiv, .numbersDiv").show()}})}),$(".slideButton").click(function(){switch($(this).val()){case"ping":$(".ping").hide("slide",{direction:"right"},1e3);break;case"pong":$(".pong").hide("slide",{direction:"left"},1e3);break;case"ping-pong":$(".ping:visible").hide("slide",{direction:"right"},1e3),$(".pong:visible, .ping-pong:visible").hide("slide",{direction:"left"},1e3);break;case"restart":$(".ping-pong, .ping, .pong").show()}})})},{"./../js/pingpong.js":1}]},{},[2]);