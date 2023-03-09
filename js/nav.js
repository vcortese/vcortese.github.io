var nav = (function () {

    let navClosed,
        navMap = {},
        setNavMap, toggleNavOpen, toggleNavClose, onClickOpenNav, onClickCloseNav, initNavModule

    setNavMap = function ($container) {
        navMap = {
            $container: $container,
            $nav: $container.find('#headerNav'),
            $btnNavOpen: $container.find('#btnNavOpen'),
            $btnNavClose: $container.find('#btnNavClose')         
        }
    }

    toggleNavOpen = function (milliseconds) {
        if (navMap.$nav.hasClass('close')) {
            navMap.$nav.removeClass('close')
            navMap.$nav.hide()
        }
        
        navMap.$nav.slideDown(milliseconds)
        navMap.$btnNavOpen.hide()
        navMap.$btnNavClose.show()

        navClosed = false
    }

    toggleNavClose = function (milliseconds) {
        navMap.$nav.slideUp(milliseconds)
        navMap.$btnNavOpen.show()
        navMap.$btnNavClose.hide()

        navClosed = true
    }

    onClickOpenNav = function (event) {
        if (navClosed) {
            toggleNavOpen(500)
        }
        
        return false;
    };

    onClickCloseNav = function (event) {
        if (!navClosed) {
            toggleNavClose(500)
        }
        
        return false;
    };


    initNavModule = function ($container) {
        setNavMap($container)
        navClosed = true
        navMap.$btnNavOpen.click(onClickOpenNav)
        navMap.$btnNavClose.click(onClickCloseNav)
        navMap.$btnNavClose.hide()
        //toggleNavClose(0)
    }

    return { initNavModule: initNavModule}

}())