"use strict";$(function(){var t=function(){$(".step1 > div").addClass("fadeIn"),$(".step").each(function(t,e){$(e).css({"z-index":$(".step").length-t})})};t.prototype={step:3,animating:!1,next:function(){var t=this;this.step>=$(".step").length||this.animating||(this.step>=$(".step").length-1&&$(".next").hide(),$(".step"+this.step).removeClass("getBackHere").addClass("fallsDown"),this.animating=!0,this.step++,setTimeout(function(){t.animating=!1,$(".prev").show()},1e3))},prev:function(){var t=this;this.step<=1||this.animating||(this.step<=2&&$(".prev").hide(),this.step--,$(".step"+this.step).removeClass("fallsDown").addClass("getBackHere"),this.animating=!0,setTimeout(function(){t.animating=!1,$(".next").show()},400))}};var e=new t;$(".next").click(function(t){e.next()}),$(".prev").click(function(t){e.prev()})});
//# sourceMappingURL=maps/main.js.map
