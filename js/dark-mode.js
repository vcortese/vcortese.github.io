var darkMode = (function () {

    var darkMode,
        darkModeMap = {},
        setDarkModeMap, toggleDarkMode, toggleLightMode, onClickDarkMode, onClickLightMode, getLocalMode, initDarkModeModule

    setDarkModeMap = function ($container) {
        darkModeMap = {
            $container: $container,
            $btnDarkMode: $container.find('#btnDarkMode'),
            $btnLightMode: $container.find('#btnLightMode'),
        }
    }

    toggleDarkMode = function () {
        darkModeMap.$container.addClass('dark-mode')
        darkModeMap.$btnDarkMode.hide()
        darkModeMap.$btnLightMode.show()
        darkMode = true
        localStorage.setItem('darkMode', 'true')
    }

    toggleLightMode = function () {
        darkModeMap.$container.removeClass('dark-mode')
        darkModeMap.$btnDarkMode.show()
        darkModeMap.$btnLightMode.hide()
        darkMode = false
        localStorage.setItem('darkMode', 'false')
    }

    onClickDarkMode = function (event) {
        if (!darkMode) {
            toggleDarkMode()
        }

        return false;
    };

    onClickLightMode = function (event) {
        if (darkMode) {
            toggleLightMode()
        }

        return false;
    };


    getLocalMode = function () {

        if (localStorage.getItem('darkMode') != null) {
            if (localStorage.getItem('darkMode') == 'true') {
                toggleDarkMode()
            } else {
                toggleLightMode()
            }
        }

    }


    initDarkModeModule = function ($container) {
        setDarkModeMap($container)

        darkModeMap.$btnDarkMode.click(onClickDarkMode)
        darkModeMap.$btnLightMode.click(onClickLightMode)

        getLocalMode()

    }

    return { initDarkModeModule: initDarkModeModule }

}())
