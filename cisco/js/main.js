/*! cisco-brand-storybook - v1.0.0 - 2016-05-02 */

/*
 MAIN cisco object functionality.
 This object initializes
 main layout functionality for the sticky menus,
 navs, etc.
 deep linking/history functionality

 general initialization all other objects attached to the Cisco object.
 */

var Cisco = Cisco || {};

(function (w, d, $) {
    var _this = this;

    //This will create an object within the Cisco namespace, change main to the object name you want to use
    //As an example, it can be accessed like so: Cisco.main.init();
    _this.animationMobile = (function () {

        var pub = {
            initialized: false
        }; //Public object that will contain all elements to be exposed

        //private vars
        var _settings = {}; //All initialized settings will go in this variable, this will be completely replaced
        var _defaults = {}; //These defaults will be merged with any object vars that are passed to the init function
        var _winWidth;
        var _winHeight;

        ////////////////////////
        // PUBLIC FUNCTIONS   //
        ////////////////////////
        /**
         * Initialize the object
         * @param  {object} s This an object that contains any settings that need to override defaults
         * @return {void}
         */
        pub.init = function (s) {
            _settings = $.extend(_defaults, (s || {}));
            _updateDuration();

            _initScrollMagic();

            $(window).resize(_updateDuration);

            $(document).find('video').prop('controls', true).attr('preload', 'auto');

            pub.initialized = true;
        };

        //PRIVATE FUNCTIONS

        var _updateDuration = function() {
            _winHeight = $(window).height();
            _winWidth = $(window).width();
        };

        var _initScrollMagic = function() {

            $('body').addClass('scrollmagic-mobile');

            pub.controller = new ScrollMagic.Controller({
                //globalSceneOptions: {
                //    triggerHook: 'onLeave'
                //}
            });


        };

        //Identity Introduction


        return pub;
    })();

}.call(Cisco, window, document, jQuery));
;/*
 MAIN cisco object functionality.
 This object initializes
 main layout functionality for the sticky menus,
 navs, etc.
 deep linking/history functionality

 general initialization all other objects attached to the Cisco object.
 */

var Cisco = Cisco || {};

(function (w, d, $) {
    var _this = this;

    //This will create an object within the Cisco namespace, change main to the object name you want to use
    //As an example, it can be accessed like so: Cisco.main.init();
    _this.animation = (function () {

        var pub = {
            initialized: false
        }; //Public object that will contain all elements to be exposed

        //private vars
        var _settings = {}; //All initialized settings will go in this variable, this will be completely replaced
        var _defaults = {}; //These defaults will be merged with any object vars that are passed to the init function
        var _winWidth;
        var _winHeight;

        ////////////////////////
        // PUBLIC FUNCTIONS   //
        ////////////////////////
        /**
         * Initialize the object
         * @param  {object} s This an object that contains any settings that need to override defaults
         * @return {void}
         */
        pub.init = function (s) {

            _settings = $.extend(_defaults, (s || {}));

            _updateDuration();

            _initScrollMagic();
            _initMenuCollapse();
            //_initAutoScroll();

            $(window).resize(_updateDuration);

            pub.initialized = true;
        };

        //PRIVATE FUNCTIONS

        var _updateDuration = function() {
            _winHeight = $(window).height();
            _winWidth = $(window).width();

            if(typeof pub.controller !== 'undefined') {
                pub.controller.update();
            }
        };

        var _initScrollMagic = function() {

            $('body').addClass('scrollmagic');

            pub.controller = new ScrollMagic.Controller({
                //globalSceneOptions: {
                //    triggerHook: 'onLeave'
                //}
            });

            _initSlide10();
            _initSlide20();
            _initSlide30();
            _initSlide40();
            _initSlide50();
            _initSlide60();
            _initSlide70();
            _initSlide80();
            _initSlide90();
            _initSlide100();
            _initSlide110();
            _initSlide120();
            _initSlide130();
            _initSlide140();
            _initSlide150();
            _initSlide160();
            _initSlide170();
            _initSlide180();
        };

        var _initAutoScroll = function () {
            var _$document = $(document),
                _$window = $(window),
                _$htmlBody = $("html, body"),
                _winHeight = $(window).height(),
                scrollDef = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                scrollOffset = 0,
                currentDef = 0,
                keyCodes = {
                    UP: 38,
                    DOWN: 40
                },
                isAnimating = false;
            
            scrollDef.forEach(function (e, i) {
                var height = (_winHeight * e) + scrollOffset;
                scrollDef[i] = height;
                scrollOffset = height;
            });

            var scrollNext = function () {
                var targetDef = currentDef + 1;
                if (targetDef <= (scrollDef.length - 1)) {
                    scrollTo(targetDef);
                }
            };

            var scrollPrev = function () {
                var targetDef = currentDef - 1;
                if (targetDef >= 0) {
                    scrollTo(targetDef);
                }
            };

            var scrollTo = function (i) {
                if (!isAnimating) {
                    isAnimating = true;
                    var time = Math.abs(scrollDef[i] - _$window.scrollTop());
                    _$htmlBody.animate({
                        scrollTop: scrollDef[i]
                    }, time, function () {
                        currentDef = i;
                        isAnimating = false;
                    });
                }
            };
            
            _$document.on("keydown", function (e) {
                var PRESSED_KEY = e.keyCode;
                if (PRESSED_KEY == keyCodes.UP) {
                    scrollPrev();
                } else if (PRESSED_KEY == keyCodes.DOWN) {
                    scrollNext();
                }
                e.preventDefault();
            });
        };

        /**
         * Standard animation for staggering animation with a vertical split content slide
         * @param controller
         * @param triggerSelector
         * @param contentLeftSelector
         * @param contentRightSelector
         * @returns {*[]}
         * @private
         */
        var _animateSplitFadeIn = function(controller, triggerSelector, contentLeftSelector, contentRightSelector) {
            //var leftAnimation = new ScrollMagic.Scene({
            //    triggerElement: triggerSelector,
            //    triggerHook: "onCenter",
            //    duration:_winHeight/2,
            //    offset:_winHeight/4
            //})
            //    .setTween(TweenMax.fromTo(contentLeftSelector, 0.5, {y:100,opacity:0},{y:0,opacity:1}))
            //    .addTo(controller);
            //
            //var rightAnimation = new ScrollMagic.Scene({
            //    triggerElement: triggerSelector,
            //    triggerHook: "onCenter",
            //    duration:_winHeight/2,
            //    offset:_winHeight/2
            //})
            //    .setTween(TweenMax.fromTo(contentRightSelector, 0.5, {y:100,opacity:0},{y:0,opacity:1}))
            //    .addTo(controller);


            var tween = new TimelineLite();
            tween.fromTo(contentLeftSelector, 1, {y:100,opacity:0},{y:0,opacity:1});
            tween.fromTo(contentRightSelector, 1, {y:100,opacity:0},{y:0,opacity:1, delay:.5},0);

            var rightAnimation = new ScrollMagic.Scene({
                triggerElement: triggerSelector,
                triggerHook:.25,
                duration:'75%'
            })
                .setTween(tween)
                .addTo(controller);


            //return [leftAnimation, rightAnimation];

            return rightAnimation;
        };

        var _pinItemAtTop = function(controller, triggerSelector, pinSelector, pushFollowers, duration) {
            if(typeof pushFollowers === 'undefined') {
                pushFollowers = true;
            } else {
                pushFollowers = !!pushFollowers;
            }

            var sceneOptions = {
                triggerElement: triggerSelector,
                triggerHook: "onLeave"
            };

            if(typeof duration !== 'undefined') {
                sceneOptions.duration = duration;
            }

            var pin = new ScrollMagic.Scene(sceneOptions)
                .setPin(pinSelector, {pushFollowers: pushFollowers})
                .addTo(controller);

            return pin;
        };


        var _initMenuCollapse = function() {
            //TODO Set the 2nd slide to mark a collapse, commented in main code
            /*new ScrollMagic.Scene({
                triggerElement: ".slide-20",
                triggerHook:.75
            })
                .setClassToggle("#fw-masthead", "collapsed")
                .addTo(pub.controller);*/
        };

        var _openMenu = function (node) {
            $(node).animate({
                right: 0
            }, 300);
        };

        var _closeMenu = function (node) {
            $(node).animate({
                right: "-50%"
            }, 300);
        };

        var _animateText = function (container, target, follow) {
            var time = follow == null ? 1 : .5;

            var tween = new TimelineMax();
            tween.add(TweenMax.fromTo(target, time, {y: 150, opacity: 0}, {y: 0, opacity: 1}));

            if (follow != null)
                tween.add(TweenMax.fromTo(follow, time, {y: 150, opacity: 0}, {y: 0, opacity: 1}));


            new ScrollMagic.Scene({
                triggerElement: container,
                triggerHook: "onCenter",
                duration: "100%"
            })
                .setTween(tween)
                .addTo(pub.controller);
        };

        var _initSlide10 = function () {
            _pinItemAtTop(pub.controller, '.slide-10', '.slide-10');

            var tween1 = new TimelineLite();
            //tween1.to("#slide10Image", 1, {y: -150, delay: 1});

            var tween2 = new TimelineMax();
            tween2.fromTo("#slide10Text", 1, {marginTop: "-300px", opacity: 0}, {marginTop: 0, opacity: 1});

            var animateImage = new ScrollMagic.Scene({
                triggerElement: ".slide-10",
                triggerHook: "onCenter",
                duration: "100%"
            })
                .setTween(tween1)
                .addTo(pub.controller);

            var animateText = new ScrollMagic.Scene({
                triggerElement: ".slide-10",
                triggerHook: "onEnter",
                duration: "100%"
            })
                .setTween(tween2)
                .addTo(pub.controller);
        };

        var _initSlide20 = function () {
            _pinItemAtTop(pub.controller, '.slide-20', '.slide-20');
            _animateText('.slide-20', '#slide20Text');

            var tween1 = new TimelineMax();
            tween1.add(TweenMax.fromTo(".slide-20 > .content", 1, {y: 150, opacity: 0}, {y: 0, opacity: 1}));
            tween1.add(TweenMax.to(".slide-20 > .bg", 1, {y: -150}));

            new ScrollMagic.Scene({
                triggerElement: ".slide-20",
                triggerHook: "onCenter",
                duration: "100%"
            })
                .setTween(tween1)
                .addTo(pub.controller);
        };
var _initSlide10 = function () {
            _pinItemAtTop(pub.controller, '.slide-10', '.slide-10');
            _animateText('.slide-10', '#slide10Text');

            var tween1 = new TimelineMax();
            tween1.add(TweenMax.fromTo(".slide-10 > .content", 1, {y: 150, opacity: 1}, {y: 0, opacity: 1}));
            tween1.add(TweenMax.to(".slide-10 > .bg", 1, {y: -150}));

            new ScrollMagic.Scene({
                triggerElement: ".slide-10",
                triggerHook: "onCenter",
                duration: "100%"
            })
                .setTween(tween1)
                .addTo(pub.controller);
        };
        var _initSlide30 = function () {
            _pinItemAtTop(pub.controller, "#slide30Section1", "#slide30Section1");
            _pinItemAtTop(pub.controller, "#slide30Section4", "#slide30Section4");
            _pinItemAtTop(pub.controller, "#slide30Section2", "#slide30Section2");
            _pinItemAtTop(pub.controller, "#slide30Section3", "#slide30Section3");

            _animateText('#slide30Section1', '#slide30Section1Text');
            _animateText('#slide30Section4', '#slide30Section4Text1', '#slide30Section4Text2');
            _animateText('#slide30Section2', '#slide30Section2Text');

            new ScrollMagic.Scene({
                triggerElement: "#slide30Section1",
                triggerHook: "onLeave",
                duration: "100%"
            })
                .addTo(pub.controller)
                .on('enter', function () {
                    _openMenu('#slide30EMenu');
                })
                .on('leave', function () {
                    _closeMenu('#slide30EMenu');
                });

            /*var secondTween = new TimelineLite()
                .to("#slide30Section2 > .content", 1, {y: -150});

            new ScrollMagic.Scene({
                triggerElement: "#slide30Section2",
                triggerHook: "onLeave",
                duration: "100%"
            })
                .setTween(secondTween)
                .addTo(pub.controller);*/

            var firstThirdTween = new TimelineMax();
            firstThirdTween.add(TweenMax.fromTo("#slide30SectionBG2", 0.5, {opacity: 0}, {opacity: 1}));
            firstThirdTween.add(TweenMax.to("#slide30SectionBG1", 0.5, {opacity: 0}), 0);
            firstThirdTween.add(TweenMax.fromTo("#slide30SectionContent2", 0.5, {opacity: 0.5}, {opacity: 1}), 0);
            firstThirdTween.add(TweenMax.to("#slide30SectionContent1", 0.5, {opacity: 0.5}), 0);

            new ScrollMagic.Scene({
                triggerElement: "#slide30Section3",
                triggerHook: "onLeave",
                duration: '50%'
            })
                .setTween(firstThirdTween)
                .addTo(pub.controller);

            var secondThirdTween = new TimelineMax();
            secondThirdTween.add(TweenMax.fromTo("#slide30SectionBG3", 0.5, {opacity: 0}, {opacity: 1}));
            secondThirdTween.add(TweenMax.to("#slide30SectionBG2", 0.5, {opacity: 0}), 0);
            secondThirdTween.add(TweenMax.fromTo("#slide30SectionContent3", 0.5, {opacity: 0.5}, {opacity: 1}), 0);
            secondThirdTween.add(TweenMax.to("#slide30SectionContent2", 0.5, {opacity: 0.5}), 0);

            new ScrollMagic.Scene({
                triggerElement: "#slide35Section1",
                triggerHook: "onLeave",
                duration: '50%'
            })
                .setTween(secondThirdTween)
                .addTo(pub.controller);
        };

        var _initSlide40 = function () {
            _pinItemAtTop(pub.controller, ".slide-40", ".slide-40");

            var firstFirstTween = new TimelineMax();
            firstFirstTween.add(TweenMax.fromTo("#slide40Text1", 1, {x: "-3%"}, {x: "100%"}));

            new ScrollMagic.Scene({
                triggerElement: ".slide-40",
                triggerHook: "onLeave",
                duration: '50%'
            })
                .setTween(firstFirstTween)
                .addTo(pub.controller);

            var secondFirstTween = new TimelineMax();
            secondFirstTween.add(TweenMax.to("#slide40BG1", 0.5, {y: "-100%", opacity: 0}));
            secondFirstTween.add(TweenMax.fromTo("#slide40BG2", 0.5, {y: "100%", opacity: 0}, {y: "0%", opacity: 1}), 0);
            secondFirstTween.add(TweenMax.to("#slide40Text1", 0.5, {opacity: 0}), 0);
            secondFirstTween.add(TweenMax.fromTo("#slide40Text2", 0.5, {opacity: 0}, {opacity: 1}), 0);

            new ScrollMagic.Scene({
                triggerElement: ".slide-40",
                triggerHook: "onLeave",
                duration: '50%'
            })
                .setTween(secondFirstTween)
                .addTo(pub.controller);





            var firstSecondTween = new TimelineMax();
            firstSecondTween.add(TweenMax.fromTo("#slide40Text2", 1, {x: "-3%"}, {x: "100%"}));

            new ScrollMagic.Scene({
                triggerElement: "#slide45Section1",
                triggerHook: "onLeave",
                duration: '50%'
            })
                .setTween(firstSecondTween)
                .addTo(pub.controller);

            var secondSecondTween = new TimelineMax();
            secondSecondTween.add(TweenMax.to("#slide40BG2", 0.5, {y: "-100%", opacity: 0}));
            secondSecondTween.add(TweenMax.fromTo("#slide40BG3", 0.5, {y: "100%", opacity: 0}, {y: "0%", opacity: 1}), 0);
            secondSecondTween.add(TweenMax.to("#slide40Text2", 0.5, {opacity: 0}), 0);
            secondSecondTween.add(TweenMax.fromTo("#slide40Text3", 0.5, {opacity: 0}, {opacity: 1}), 0);

            new ScrollMagic.Scene({
                triggerElement: "#slide45Section1",
                triggerHook: "onLeave",
                duration: '50%'
            })
                .setTween(secondSecondTween)
                .addTo(pub.controller);






            var firstThirdTween = new TimelineMax();
            firstThirdTween.add(TweenMax.fromTo("#slide40Text3", 1, {x: "-3%"}, {x: "100%"}));

            new ScrollMagic.Scene({
                triggerElement: "#slide45Section2",
                triggerHook: "onLeave",
                duration: '50%'
            })
                .setTween(firstThirdTween)
                .addTo(pub.controller);

            var secondThirdTween = new TimelineMax();
            secondThirdTween.add(TweenMax.to("#slide40BG3", 0.5, {y: "-100%", opacity: 0}));
            secondThirdTween.add(TweenMax.fromTo("#slide40BG4", 0.5, {y: "100%", opacity: 0}, {y: "0%", opacity: 1}), 0);
            secondThirdTween.add(TweenMax.to("#slide40Text3", 0.5, {opacity: 0}), 0);
            secondThirdTween.add(TweenMax.fromTo("#slide40Text4", 0.5, {opacity: 0}, {opacity: 1}), 0);

            new ScrollMagic.Scene({
                triggerElement: "#slide45Section2",
                triggerHook: "onLeave",
                duration: '50%'
            })
                .setTween(secondThirdTween)
                .addTo(pub.controller);






            var firstFourthTween = new TimelineMax();
            firstFourthTween.add(TweenMax.fromTo("#slide40Text4", 1, {x: "-3%"}, {x: "100%"}));

            new ScrollMagic.Scene({
                triggerElement: "#slide45Section3",
                triggerHook: "onLeave",
                duration: '50%'
            })
                .setTween(firstFourthTween)
                .addTo(pub.controller);
				
				var secondThirdTween = new TimelineMax();
            secondThirdTween.add(TweenMax.to("#slide40BG4", 0.5, {y: "-100%", opacity: 0}));
            secondThirdTween.add(TweenMax.fromTo("#slide40BG5", 0.5, {y: "100%", opacity: 0}, {y: "0%", opacity: 1}), 0);
            secondThirdTween.add(TweenMax.to("#slide40Text4", 0.5, {opacity: 0}), 0);
            secondThirdTween.add(TweenMax.fromTo("#slide40Text5", 0.5, {opacity: 0}, {opacity: 1}), 0);

            new ScrollMagic.Scene({
                triggerElement: "#slide45Section3",
                triggerHook: "onLeave",
                duration: '50%'
            })
                .setTween(secondThirdTween)
                .addTo(pub.controller);
				
				
				
				
				
				
        };

        var _initSlide50 = function() {

            _pinItemAtTop(pub.controller, '.slide-50', '.slide-50');
            _animateText('.slide-50', '#slide50Headline');

            var tween = new TimelineLite();
            tween.fromTo("#slide50Headline", 1, {y:150,opacity:0},{y:0,opacity:1})
                .to("#slide50Headline", 1, {y:-50, opacity:0, delay:1});

            var animateHeadline = new ScrollMagic.Scene({
                triggerElement: ".slide-50",
                triggerHook: "onCenter",
                duration: '100%'
            })
                .setTween(tween)
                .addTo(pub.controller);
        };

        var _initSlide60 = function () {
            _pinItemAtTop(pub.controller, '.slide-65', '.slide-65');
        };

        var _initSlide70 = function () {
            var tween1 = new TimelineMax();
            tween1.add(TweenMax.to('#firstSayDoMake', 0.5, {opacity: 0, delay: 1}));
            tween1.add(TweenMax.fromTo('#sayVideo', 0.5, {opacity: 0}, {opacity: 1}), 0);

            new ScrollMagic.Scene({
                triggerElement: '.slide-65',
                triggerHook: 'onLeave',
                duration: '50%'
            })
                .setTween(tween1)
                .addTo(pub.controller)
                .on('end', function () {
                    $('#sayVideoCtrl').get(0).play();
                });

            var tween2 = new TimelineMax();
            tween2.add(TweenMax.to('#sayVideo', 0.5, {opacity: 0, delay: 1}));
            tween2.add(TweenMax.fromTo('#secondSayDoMake', 0.5, {opacity: 0}, {opacity: 1}), 0);

            new ScrollMagic.Scene({
                triggerElement: '#slide75Section1',
                triggerHook: 'onLeave',
                duration: '50%'
            })
                .setTween(tween2)
                .addTo(pub.controller)
                .on('enter', function () {
                    $('#sayVideoCtrl').get(0).pause();
                });

            var tween3 = new TimelineMax();
            tween3.add(TweenMax.to('#secondSayDoMake', 0.5, {opacity: 0, delay: 1}));
            tween3.add(TweenMax.fromTo('#doVideo', 0.5, {opacity: 0}, {opacity: 1}), 0);

            new ScrollMagic.Scene({
                triggerElement: '#slide75Section2',
                triggerHook: 'onLeave',
                duration: '50%'
            })
                .setTween(tween3)
                .addTo(pub.controller)
                .on('end', function () {
                    $('#doVideoCtrl').get(0).play();
                });

            var tween4 = new TimelineMax();
            tween4.add(TweenMax.to('#doVideo', 0.5, {opacity: 0, delay: 1}));
            tween4.add(TweenMax.fromTo('#thirdSayDoMake', 0.5, {opacity: 0}, {opacity: 1}), 0);

            new ScrollMagic.Scene({
                triggerElement: '#slide75Section3',
                triggerHook: 'onLeave',
                duration: '50%'
            })
                .setTween(tween4)
                .addTo(pub.controller)
                .on('enter', function () {
                    $('#doVideoCtrl').get(0).pause();
                });

            var tween5 = new TimelineMax();
            tween5.add(TweenMax.to('#thirdSayDoMake', 0.5, {opacity: 0, delay: 1}));
            tween5.add(TweenMax.fromTo('#makeVideo', 0.5, {opacity: 0}, {opacity: 1}), 0);

            new ScrollMagic.Scene({
                triggerElement: '#slide75Section4',
                triggerHook: 'onLeave',
                duration: '50%'
            })
                .setTween(tween5)
                .addTo(pub.controller)
                .on('end', function () {
                    $('#makeVideoCtrl').get(0).play();
                });

            new ScrollMagic.Scene({
                triggerElement: '#slide75Section5',
                triggerHook: 'onLeave',
                duration: '50%'
            })
                .addTo(pub.controller)
                .on('enter', function () {
                    $('#makeVideoCtrl').get(0).pause();
                });
        };

        var _initSlide80 = function () {
            _pinItemAtTop(pub.controller, '.slide-80', '.slide-80');
            _animateText('.slide-80', '#slide80Text1', '#slide80Text2');
        };

        var _initSlide90 = function () {
            _pinItemAtTop(pub.controller, '.slide-90', '.slide-90');
            _animateText('.slide-90', '#slide90Text');
        };

        var _initSlide100 = function () {
            _pinItemAtTop(pub.controller, '.slide-100', '.slide-100');
            _animateText('.slide-100', '#slide100Text');
        };

        var _initSlide110 = function () {
            _pinItemAtTop(pub.controller, '.slide-110', '.slide-110');
            _animateText('.slide-110', '#slide110Text');
        };

        var _initSlide120 = function () {
            _pinItemAtTop(pub.controller, '.slide-120', '.slide-120');
            _animateText('.slide-120', '#slide120Text');
        };

        var _initSlide130 = function () {
            _pinItemAtTop(pub.controller, '.slide-130', '.slide-130');
            _animateText('.slide-130', '#slide130Text');
        };

        var _initSlide140 = function () {
            _pinItemAtTop(pub.controller, '.slide-140', '.slide-140');
            _animateText('.slide-140', '#slide140Text');
        };

        var _initSlide150 = function () {
            _pinItemAtTop(pub.controller, '.slide-150', '.slide-150');
            _animateText('.slide-150', '#slide150Text');
        };

        var _initSlide160 = function () {
            _pinItemAtTop(pub.controller, '.slide-160', '.slide-160');
            _animateText('.slide-160', '#slide160Text');
        };

        var _initSlide170 = function () {
            _pinItemAtTop(pub.controller, '.slide-170', '.slide-170');
            _animateText('.slide-170', '#slide170Text');
        };

        var _initSlide180 = function () {
            _pinItemAtTop(pub.controller, '#firstVideoContainer', '#firstVideoContainer');
            _pinItemAtTop(pub.controller, '#secondVideoContainer', '#secondVideoContainer');
            _pinItemAtTop(pub.controller, '#thirdVideoContainer', '#thirdVideoContainer');

            new ScrollMagic.Scene({
                triggerElement: '#firstVideoContainer',
                triggerHook: 'onCenter',
                duration: '50%'
            })
                .addTo(pub.controller)
                .on('end', function () {
                    $('#firstVideo').get(0).play();
                });

            new ScrollMagic.Scene({
                triggerElement: '#firstVideoContainer',
                triggerHook: 'onLeave',
                duration: '50%'
            })
                .addTo(pub.controller)
                .on('end', function () {
                    $('#firstVideo').get(0).pause();
                });

            new ScrollMagic.Scene({
                triggerElement: '#secondVideoContainer',
                triggerHook: 'onCenter',
                duration: '50%'
            })
                .addTo(pub.controller)
                .on('end', function () {
                    $('#secondVideo').get(0).play();
                });

            new ScrollMagic.Scene({
                triggerElement: '#secondVideoContainer',
                triggerHook: 'onLeave',
                duration: '50%'
            })
                .addTo(pub.controller)
                .on('end', function () {
                    $('#secondVideo').get(0).pause();
                });

            new ScrollMagic.Scene({
                triggerElement: '#thirdVideoContainer',
                triggerHook: 'onCenter',
                duration: '50%'
            })
                .addTo(pub.controller)
                .on('end', function () {
                    $('#thirdVideo').get(0).play();
                });

            new ScrollMagic.Scene({
                triggerElement: '#thirdVideoContainer',
                triggerHook: 'onLeave',
                duration: '50%'
            })
                .addTo(pub.controller)
                .on('end', function () {
                    $('#thirdVideo').get(0).pause();
                });
        };

        return pub;
    })();

}.call(Cisco, window, document, jQuery));
;/*
 MAIN cisco object functionality.
 This object initializes
 main layout functionality for the sticky menus,
 navs, etc.
 deep linking/history functionality

 general initialization all other objects attached to the Cisco object.
 */

var Cisco = Cisco || {};

(function (w, d, $) {
    var _this = this;

    //This will create an object within the Cisco namespace, change main to the object name you want to use
    //As an example, it can be accessed like so: Cisco.main.init();
    _this.main = (function () {

        var pub = {
            initialized: false
        }; //Public object that will contain all elements to be exposed

        //private vars
        var _settings = {}; //All initialized settings will go in this variable, this will be completely replaced
        var _defaults = {}; //These defaults will be merged with any object vars that are passed to the init function
        var _$body;
        var _$window;
        var _$document;

        ////////////////////////
        // PUBLIC FUNCTIONS   //
        ////////////////////////
        /**
         * Initialize the object
         * @param  {object} s This an object that contains any settings that need to override defaults
         * @return {void}
         */
        pub.init = function (s) {
            _settings = $.extend(_defaults, (s || {}));

            _initMainElements();

            //_wcmmode_links();

            _initContrastMenu();


            _initFontInput();

            //Initialize animation engine
            if(jQuery.isMobile) {
                Cisco.animationMobile.init();
            } else {
                Cisco.animation.init();
            }

            pub.initialized = true;
        };

        //PRIVATE FUNCTIONS

        /**
         * Adds ?wcmmode=disabled to all links on the page for links on Cisco staging servers
         * @private
         */
        var _wcmmode_links = function() {
            var host = window.location.host;
            if (host == 'fdk-author-stage.cisco.com' || host == 'www-author.cisco.com') {
                var links = $('a');
                var param = "wcmmode=disabled";

//Loop through all links
                $.each(links, function (index, link) {
                    var $link = $(link);
                    var link_path = $link.attr('href');
                    var new_link_path = link_path;

                    if (typeof link_path !== "undefined" && link_path.length > 0) {
//if link starts with /c/r/weare
//if(link_path.indexOf("/c/r/en/us/internet-of-everything-ioe/") == 0) {

//Add ?wcmmode=disabled to URL
                        if (link_path.indexOf("?") > -1) {
                            new_link_path = link_path + "&" + param;
                        } else {
                            new_link_path = link_path + "?" + param;
                        }

//If link is javascript don't change it
                        if (link_path.indexOf("javascript") > -1) {
                            new_link_path = link_path;
                        }

//If link already has a # don't change it
                        if (link_path.indexOf("#") > -1) {
                            new_link_path = link_path;
                        }

//console.log(link_path);
//console.log(new_link_path);
//Overwrite old HREF with new one
                        $link.attr('href', new_link_path);
                    }
//}
                });
            }
        }

        /**
         * Initialize common elements body, window and document
         * @private
         */
        var _initMainElements = function() {
            _$body = $('body');
            _$window = $(window);
            _$document = $(document);
        };

        var _initContrastMenu = function() {
            var $contrastBtn = $('#contrastBtn');
            var $contrastDropdown = $('#contrastDropdown');
            var $contrastToggle = $('#contrastToggle');

            var onWindowMouseUp = function(e) {
                var container = $contrastDropdown;

                if (!container.is(e.target) // if the target of the click isn't the container...
                    && container.has(e.target).length === 0) {
                    $contrastBtn.removeClass('selected');
                    $contrastDropdown.hide();
                    $(document).unbind('mouseup', onWindowMouseUp);
                }
            };

            $contrastBtn.click(function(){
                if(!$contrastDropdown.is(':visible')) {
                    $contrastBtn.addClass('selected');
                    $contrastDropdown.show();

                    //Hide active module on click outside
                    $(document).mouseup(onWindowMouseUp);
                } else {
                    $contrastBtn.removeClass('selected');
                    $contrastDropdown.hide();
                    $(document).unbind('mouseup', onWindowMouseUp);
                }

            });

            $contrastToggle.click( function(e) {
                _$body.toggleClass('high-contrast');

                if(_$body.hasClass('high-contrast')) {
                    $contrastToggle.text( $contrastToggle.data('view-normal') );
                } else {
                    $contrastToggle.text( $contrastToggle.data('view-high') );
                }

            });
        };


        var _initFontInput = function() {
            $slide190Input = $('#slide190Input');
            $radioButton = $('input[name=font-option]');
            $slide190Input.attr('placeholder', $slide190Input.data('placeholder'));

            $slide190Input.bind('focus', function() {
                $slide190Input.addClass('active');
                $slide190Input.attr('placeholder', "");
            });

            $slide190Input.bind('blur', function() {
                if($slide190Input.val().length <= 0) {
                    $slide190Input.attr('placeholder', $slide190Input.data('placeholder'));
                }
            });

            $radioButton.click(function() {
                var $checked = $('input[name=font-option]:checked');
                switch($checked.val()) {
                    case 'regular':
                        $slide190Input.addClass('font-regular');
                        $slide190Input.removeClass('font-extralight');
                        $slide190Input.removeClass('font-thin');
                        $slide190Input.removeClass('font-oblique');
                        break;
                    case 'extralight':
                        $slide190Input.removeClass('font-regular');
                        $slide190Input.addClass('font-extralight');
                        $slide190Input.removeClass('font-thin');
                        $slide190Input.removeClass('font-oblique');
                        break;
                    case 'thin':
                        $slide190Input.removeClass('font-regular');
                        $slide190Input.removeClass('font-extralight');
                        $slide190Input.addClass('font-thin');
                        $slide190Input.removeClass('font-oblique');
                        break;
                    case 'oblique':
                        $slide190Input.removeClass('font-regular');
                        $slide190Input.removeClass('font-extralight');
                        $slide190Input.removeClass('font-thin');
                        $slide190Input.addClass('font-oblique');
                        break;

                }
            })




        };

        return pub;
    })();

}.call(Cisco, window, document, jQuery));
;var Cisco = Cisco || {};

(function(w,d,$){
    var _this = this;

    //This will create an object within the Cisco namespace, change main to the object name you want to use
    //As an example, it can be accessed like so: Cisco.main.init();
    _this.videoplayer = (function(){
        var pub = {
            initialized: false,
            players: [], //ID of all the players that are active
            $vp: [],
            player: null,
            player_module: null,
            videoIsPlaying: false
        }; //Public object that will contain all elements to be exposed
        var _settings = {}; //All initialized settings will go in this variable, this will be completely replaced
        var _defaults = { //These defaults will be merged with any object vars that are passed to the init function

        };

        ////////////////////////
        // PUBLIC FUNCTIONS   //
        ////////////////////////

        /**
         * Initialize the object
         * @param  {object} s This an object that contains any settings that need to override defaults
         * @return {void}
         */
        pub.init = function(s) {			
            _settings = $.extend(_defaults, (s || {}));

            pub.$vp = $('.video-player');
            pub.initialized = true;


            //initialize events for video player objects
            pub.$vp.on('click',_onVideoButtonClick);

            // brightcove function to create video instance on load
            w.myTemplateLoaded = _onTemplateLoaded;

            // add play and stop event listeners to brightcove video
            w.onTemplateReady = _onTemplateReady;

        };

        pub.loadVideo = function() {
            console.log();
        }

        /////////////////////////
        // PRIVATE FUNCTIONS   //
        /////////////////////////

        function _initBrightcove(el) {

            var playerID,
                playerKey,
                playerTemplate,
                playerHTML,
                playerCount,
                playerMatch,
                playerData,
                htmlData,
                $el = $(el);

            playerData = {
                id: "myExperience" + Math.round(Math.random()*100000),
                playerid: "2162812896001",
                playerkey: "AQ~,AAABQkhWkLE,1qyPNOHrxlhTOC2NZYTByHZb__U2vshw",
                videoid: "1",
                autostart: false,
                baseurl: false,
                width: '100%',
                height: '100%',
            };

            htmlData = $el.data();
            $.extend(playerData, htmlData);

            playerTemplate =
                "<object id=\"{{id}}\" class=\"BrightcoveExperience\">" +
                "	<param name=\"bgcolor\" value=\"#000000\" />" +
                "	<param name=\"width\" value=\"{{width}}\" />" +
                "	<param name=\"height\" value=\"{{height}}\" />" +
                "	<param name=\"playerID\" value=\"{{playerid}}\" />" +
                "	<param name=\"playerKey\" value=\"{{playerkey}}\" />" +
                "	<param name=\"isVid\" value=\"true\" />" +
                "	<param name=\"isUI\" value=\"true\" />" +
                "	<param name=\"dynamicStreaming\" value=\"true\" />" +
                "	<param name=\"wmode\" value=\"transparent\" />" +
                "	<param name=\"includeAPI\" value=\"true\" />" +
                "	<param name=\"templateLoadHandler\" value=\"CiscoBrightcove\" />" +
                "	<param name=\"templateErrorHandler\" value=\"CiscoBrightcoveError\" />" +
                "	<param name=\"linkBaseURL\" value=\"{{baseurl}}\" />" +
                "	<param name=\"@videoPlayer\" value=\"{{videoid}}\" />" +
                "	<param name=\"htmlFallback\" value=\"true\" />" +
                "	<param name=\"autoStart\" value=\"{{autostart}}\" />";

                playerHTML = playerTemplate;
                playerCount = 0;
                playerMatch = playerTemplate.match(/{{\w+}}/g) || [];

                while (m = playerMatch[playerCount++]) {
                        playerHTML = playerHTML.replace(m, playerData[m.substr(2, m.length-4)]);
                }



                playerTemplate = playerTemplate + '</object>';

                //Load HTML
                //console.log(playerHTML);
                $el.find('.video-container').html( playerHTML );

                //Load Player
                brightcove.createExperiences();

        }


        //////////////////////
        // EVENT HANDLERS   //
        //////////////////////


        /**
         * Event fired when the video button is clicked
         * @param {object} e Event Object
         */
        function _onVideoButtonClick(e) {            
			_initBrightcove(this);
        }

        function _onTemplateReady() {
            modVP.addEventListener(brightcove.api.events.MediaEvent.PLAY, _onMediaEventFired);
            // modVP.addEventListener(brightcove.api.events.MediaEvent.PROGRESS, onMediaProgressFired);
            modVP.addEventListener(brightcove.api.events.MediaEvent.STOP, _onMediaEventFired);
            // if (playWhenReady) {
            //     modVP.play();
            // }
        }

        function _onTemplateLoaded(experienceID) {
            pub.player = brightcove.api.getExperience(experienceID);
            pub.player_module = pub.player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
        }

        function _onMediaEventFired(e) {
            switch (evt.type) {
              case 'mediaPlay':
                pub.videoIsPlaying = true;
                var $tgt = $('#'+player.id);
                if ($tgt.length > 0) {
                    var $parent = $tgt.parents('.video-container');
                    if ($parent.length > 0) {
                        $parent.addClass('playing');
                        $parent.css('z-index', 10);
                    }
                }
                break;
              case 'mediaStop':
                pub.videoIsPlaying = false;
                break;
              default:
                break;
            }
        }


        return pub;
    })();

}.call(Cisco, window, document, jQuery));
