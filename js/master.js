var master = (function () {

    let masterMap = {},
        setMasterMap, insertHeader, insertFooter, initMasterModule

    setMasterMap = function ($container) {
        masterMap = {
            $container: $container,
            $header: $container.find('#headercontainer'),
            $footer: $container.find('#footercontainer')
        }
    }

    insertHeader = function () {
        masterMap.$header.load("master/header.html")
    }

    insertFooter = function () {
        masterMap.$footer.load("master/footer.html")
    }

    initMasterModule = function ($container) {
        setMasterMap($container)
        insertHeader()
        insertFooter()
    }

    return { initMasterModule: initMasterModule }

}())