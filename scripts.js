window.onload = function () {
        document.getElementById('jscalc').onclick = function() {
            let servicePercentPrice = 0;
            let back = 0;
            let fullPrice = 0;
            console.log(servicePercentPrice);
            document.querySelector(".modal").style.display = "none";
            document.querySelector(".modal__total").style.display = "block";
            let ProjectName = document.getElementById('project-name').value;
            document.querySelector('.modal__total-title').innerText = ProjectName;
            let ProjectLevel = document.querySelector('input[name="level"]:checked').value;
            document.querySelector('.modal__total-level .value').innerText = ProjectLevel;
            let screenPrice = Number(document.getElementById('cost').value);
            document.querySelector('.modal__total-sale .value').innerText = screenPrice * 1;
            back  = Number(document.getElementById('back').value);
            document.querySelector('.modal__total-back .value').innerText = +back;
            let servicePrice1  = Number(document.getElementById('service-cost1').value);
            let servicePrice2  = Number(document.getElementById('service-cost2').value);
            document.querySelector('.modal__total-services .value').innerText = servicePrice1 + servicePrice2;
            let ProjectAdaptive = document.getElementById("adaptiv").checked;
            fullPrice = servicePrice1 + servicePrice2 + screenPrice;
            document.querySelector('.modal__total-cost .value').innerText = +fullPrice;
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
            document.querySelector('.modal__total-pay .value').innerText = fullPrice;
            document.querySelector('.total-calc .value').innerText = TotalCost;
        }
}


