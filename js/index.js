var index = (function () {

    let indexMap = {},
        setIndexMap, getIndexScrapeData, initIndexModule

    setIndexMap = function ($container) {
        indexMap = {
            $container: $container,
            $fedRate: $container.find('#fedRate'),
            $oneRate: $container.find('#oneRate'),
            $tenRate: $container.find('#tenRate'),
            $hysaRate: $container.find('#hysaRate'),
            $mmRate: $container.find('#mmRate')
        }
    }

    getIndexScrapeData = function () {
        $.ajax({
            url: "https://www.bloomberg.com/markets/rates-bonds/government-bonds/us",
            dataType: 'text',
            success: function (data) {
                var elements = $("<div>").html(data)[0].getElementsByID("#content")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[3].getElementsByTagName("div")[2].getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[2].getElementsByTagName("td")[2].getElementsByTagName("span")[0];
                for (var i = 0; i < elements.length; i++) {
                    var theText = elements[i].firstChild.nodeValue;
                    print(theText)
                }
            }
        });
    }

    initIndexModule = function ($container) {
        setIndexMap($container)
        getIndexScrapeData()
    }

    return { initIndexModule: initIndexModule }

}())