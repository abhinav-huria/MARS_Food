 var price = [79, 99, 59, 99, 79, 129, 139, 159, 29, 35, 149, 49, 199, 149, 189, 129, 219, 199, 99, 129, 99, 129, 149, 139, 59, 79, 79, 49];
        var quantity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var tot = 0;

        function Add(q, i) {
            quantity[i] = q * (price[i]);
        }

        function Total() {
            var sum = 0;
            for (var i = 0; i < 28; i++) {
                sum += quantity[i];
            }
            tot = sum;
            document.getElementById("total").innerHTML = sum;
        }

        function check() {
            if (tot == 0)
                alert("Please select something");
            else
                window.location.href = 'checkout.html';
        }