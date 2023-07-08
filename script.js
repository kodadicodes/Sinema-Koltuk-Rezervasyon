const container = document.querySelector(".container");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");
const select = document.querySelector("#movie");


container.addEventListener("click", function (e) {

    // JavaScript'te contains() yöntemi, bir dizenin içinde belirli bir alt dizenin var olup olmadığını kontrol eder ve sonucunu true veya false olarak döndürür.
    // Bu JavaScript kodu, bir olayın hedef öğesinin (event target) sınıf listesinde "seat" sınıfını içeriyorsa ve "reserved" sınıfını içermiyorsa, koşulu sağlar.
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {

        // toggle() yöntemi, bir öğenin belirli bir sınıfın varlığını açar veya kapatır. 
        // Bu JavaScript kodu, bir olayın hedef öğesinin (event target) sınıf listesinde "selected" sınıfını açar veya kapatır.
        e.target.classList.toggle("selected");

        calculateTotal();
    }
});

select.addEventListener("change", function (e) {
    calculateTotal();
})

function calculateTotal() {

    // "length" özelliği, bir dizenin veya bir dizinin eleman sayısını temsil eden bir değer döndürür.
    // Bu JavaScript kodu, "container" adlı bir öğe içerisinde ".seat.selected" sınıfını taşıyan öğelerin sayısını "selectedSeatCount" değişkenine atar.
    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;

    let price = select.value;

    // "innerText" özelliği, bir HTML öğesinin iç metnini temsil eder.
    count.innerText = selectedSeatCount;

    amount.innerText = selectedSeatCount * price;
}