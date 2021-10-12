window.onload = function () {
    document.getElementById('jscalc').onclick = function() {
        let servicePercentPrice = 0;
        let back = 0;
        let fullPrice = 0;

        function ChangeDisplay(DomElement, DisplayValue){
            document.querySelector("" + DomElement + "").style.display = "" + DisplayValue + "";
        }

        function getAllServicePrices(FirstAddService, SecondAddService, ThirdPrice = 0){
            let servicePrice1  = Number(document.getElementById('' + FirstAddService +'').value);
            let servicePrice2  = Number(document.getElementById('' + SecondAddService +'').value);
            return servicePrice1 + servicePrice2 + ThirdPrice;
        }

        function QuerySelectorInner(SelectorName, DestinationElem){
            document.querySelector('' + DestinationElem + '').innerText = document.querySelector('' + SelectorName + '').value;
        }

        function SetValueToElem(selectorDestinaion, ValueOfElem){
            document.querySelector('' + selectorDestinaion + '').innerText = ValueOfElem;
        }

        ChangeDisplay('.modal', 'none');
        ChangeDisplay('.modal__total', 'block');

        QuerySelectorInner('.project-name', '.modal__total-title');
        QuerySelectorInner('input[name="level"]:checked', '.modal__total-level .value');
        QuerySelectorInner('input[name="cost"]', '.modal__total-sale .value');


        back  = Number(document.getElementById('back').value);
        document.querySelector('.modal__total-back .value').innerText = back;
        document.querySelector('.modal__total-services .value').innerText = getAllServicePrices('service-cost1' , 'service-cost2');
        let ProjectAdaptive = document.getElementById("adaptiv").checked;
        fullPrice = getAllServicePrices('service-cost1' , 'service-cost2', Number(document.getElementById('cost').value));

        document.querySelector('.modal__total-cost .value').innerText = fullPrice;
        servicePercentPrice = Math.ceil(fullPrice - back);
        let SalePerc = 0 * 1;
        let TotalCost = 0;
        if(fullPrice >= 30000){
            SalePerc = 10;
            document.querySelector('.modal__total-sale .value').innerText = SalePerc + "%";
            TotalCost = servicePercentPrice - (servicePercentPrice * (SalePerc / 100));
        } else if(fullPrice > 15000 && fullPrice < 30000){
            SalePerc = 5;
            document.querySelector('.modal__total-sale .value').innerText = SalePerc + "%";
            TotalCost = servicePercentPrice - (servicePercentPrice * (SalePerc / 100));
        } else {
            SalePerc = "Скидка не предусмотрена";
            document.querySelector('.modal__total-sale').innerText = SalePerc;
            TotalCost = servicePercentPrice;
        }

        SetValueToElem('.modal__total-pay .value', fullPrice);
        SetValueToElem('.total-calc .value', TotalCost);
    }
}


