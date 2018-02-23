$(function () {
    let Animation = function () {
        $('.step1 > div').addClass('fadeIn')
        $('.step').each((index, el) => {
            $(el).css({ "z-index": $('.step').length - index })
        })


    }
    Animation.prototype = {
        step: 4,
        animating: false,
        next: function () {
            if (this.step >= $('.step').length) {
                return
            }
            if (!this.animating) {
                if (this.step >= $('.step').length - 1) {
                    $('.next').hide()
                }
                $('.step' + this.step).removeClass('getBackHere').addClass('fallsDown')
                this.animating = true
                this.step++
                setTimeout(() => {
                    this.animating = false
                    $('.prev').show()
                }, 1000)
            }
        },
        prev: function () {
            if (this.step <= 1) {
                return
            }
            if (!this.animating) {
                if (this.step <= 2) {
                    $('.prev').hide()
                }
                this.step--
                $('.step' + this.step).removeClass('fallsDown').addClass('getBackHere')
                this.animating = true
                setTimeout(() => {
                    this.animating = false
                    $('.next').show()
                }, 400)
            }
        },
    }
    let animation = new Animation()
    $('.next').click((e) => {
        animation.next()
    })
    $('.prev').click((e) => {
        animation.prev()
    })
    $(window).on('mousewheel',function (e) {
        e =e||window.event

        if(e.originalEvent.wheelDelta){
            if(e.originalEvent.wheelDelta===120){
                animation.prev()
            }else if(e.originalEvent.wheelDelta=== -120){
                animation.next()
            }
        }else if(e.originalEvent.detail){
            if(e.originalEvent.detail===-3){
                animation.prev()
            }else if(e.originalEvent.detail=== 3){
                animation.next()
            }
        }
  });

})