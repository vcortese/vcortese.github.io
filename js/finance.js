var finance = (function () {

    let step2Closed, step3Closed,
        financeMap = {},
        setFinanceMap, toggleStep2Open, toggleStep2Close, onClickToggleStep2, toggleStep3Open, toggleStep3Close, onClickToggleStep3, initFinanceModule

    setFinanceMap = function ($container) {
        financeMap = {
            $container: $container,
            $chkboxStep1: $container.find('#chkboxStep1'),
            $step2: $container.find('#step2'),
            $chkboxStep2: $container.find('#chkboxStep2'),
            $step3: $container.find('#step3')
        }
    }

    //Step 2
    toggleStep2Open = function (milliseconds) {
        if (financeMap.$step2.hasClass('close')) {
            financeMap.$step2.removeClass('close')
            financeMap.$step2.hide()
        } 
        financeMap.$step2.slideDown(milliseconds)
        step2Closed = false
    }

    toggleStep2Close = function (milliseconds) {
        financeMap.$step2.slideUp(milliseconds)
        step2Closed = true
    }

    onClickToggleStep2 = function (event) {
        if (step3Closed) {
            if (step2Closed) {
                toggleStep2Open(500)
            }
            else {
                toggleStep2Close(500)
            }
        }
        
        return false;
    };

    //Step 3
    toggleStep3Open = function (milliseconds) {
        if (financeMap.$step3.hasClass('close')) {
            financeMap.$step3.removeClass('close')
            financeMap.$step3.hide()
        }
        
        financeMap.$step3.slideDown(milliseconds)
        financeMap.$chkboxStep1.parent().slideUp(milliseconds)
        step3Closed = false
    }

    toggleStep3Close = function (milliseconds) {
        financeMap.$step3.slideUp(milliseconds)
        financeMap.$chkboxStep1.parent().slideDown(milliseconds)
        step3Closed = true
    }

    onClickToggleStep3 = function (event) {
        if (step3Closed) {
            toggleStep3Open(500)
        }
        else {
            toggleStep3Close(500)
        }
        return false;
    };

    initFinanceModule = function ($container) {
        setFinanceMap($container)
        step2Closed = true
        step3Closed = true
        financeMap.$chkboxStep1.change(onClickToggleStep2)
        financeMap.$chkboxStep2.change(onClickToggleStep3)
    }

    return { initFinanceModule: initFinanceModule }

}())