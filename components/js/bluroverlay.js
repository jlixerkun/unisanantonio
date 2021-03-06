/* bluroverlay.js v1.0.0 - twinkle katoch & hardik dabhi */
!function(a) {
    "use strict";
    var b = {
        contentWrapperClass: "content-wrapper",
        blur: 10,
        opacity: .4,
        background: "#fff"
    }
      , c = ""
      , d = function(c, d) {
        this.ele = c,
        this.$ele = a(c),
        this.options = {},
        this.options.contentWrapperClass = d.contentWrapperClass || b.contentWrapperClass,
        this.options.blur = d.blur || b.blur,
        this.options.opacity = d.opacity || b.opacity,
        this.options.background = d.background || b.background,
        console.log(this.options),
        this._init()
    }
    ;
    d.prototype = {
        _init: function() {
            a("body").append('<svg id="svg-image-blur" style="position:absolute;top:0;height:0;"><filter id="blur-effect"><feGaussianBlur stdDeviation="' + this.options.blur + '" /></filter></svg>'),
            this.$ele.css({
                overflow: "hidden",
                "z-index": 9999,
                background: this.options.background
            }),
            this.$ele.append('<div class="content-blurred ' + this.options.contentWrapperClass + '">' + a("." + this.options.contentWrapperClass).html().replace(/\id="/g, 'id="_').replace(/\id='/g, "id='_") + "</div>"),
            a(".content-blurred").css({
                filter: "url(#blur-effect)",
                "-webkit-filter": "blur(" + this.options.blur + "px)",
                position: "absolute",
                overflow: "visible",
                top: 0,
                left: 0,
                opacity: this.options.opacity,
                "z-index": 1,
                width: "100%",
                height: this.$ele.height()
            }),
            a("[name='blurred-modal']").css({
                display: "none",
                "z-index": 1e4
            }),
            a(document).on("scroll", this._onscroll),
            this._onscroll()
        },
        _onscroll: function() {
            var b = "translate3d(0," + (-a(document).scrollTop() + "px") + ",0)";
            a(".content-blurred").css({
                "-webkit-transform": b,
                "-moz-transform": b,
                transform: b
            })
        },
        showBlurModal: function(b) {
            var d = [this.$ele, a(a("." + this.options.contentWrapperClass).get(1))];
            a({
                blurRadius: 0
            }).animate({
                blurRadius: this.options.blur
            }, {
                duration: 400,
                easing: "swing",
                step: function() {
                    d[0].css({
                        "-webkit-filter": "blur(" + this.blurRadius + "px)",
                        filter: "blur(" + this.blurRadius + "px)"
                    }),
                    d[1].css({
                        "-webkit-filter": "blur(" + this.blurRadius + "px)",
                        filter: "blur(" + this.blurRadius + "px)"
                    })
                }
            }),
            b && (c = b,
            a("#" + c).fadeIn())
        },
        hideBlurModal: function() {
            var b = [this.$ele, a(a("." + this.options.contentWrapperClass).get(1))];
            a({
                blurRadius: this.options.blur
            }).animate({
                blurRadius: "0px"
            }, {
                duration: 300,
                easing: "swing",
                step: function() {
                    b[0].css({
                        "-webkit-filter": "blur(" + this.blurRadius + "px)",
                        filter: "blur(" + this.blurRadius + "px)"
                    }),
                    b[1].css({
                        "-webkit-filter": "blur(" + this.blurRadius + "px)",
                        filter: "blur(" + this.blurRadius + "px)"
                    })
                },
                complete: function() {
                    b[0].css({
                        "-webkit-filter": "none",
                        filter: "none"
                    }),
                    b[1].css({
                        "-webkit-filter": "none",
                        filter: "none"
                    })
                }
            }),
            c && (a("#" + c).fadeOut(),
            c = "")
        }
    },
    a.fn.bluroverlay = function(a) {
        if (!this._bluroverlay)
            return this._bluroverlay = new d(this.get(0),a),
            this._bluroverlay
    }
    ,
    a.bluroverlay = {}
}(window.jQuery);
