var _a;
// 年齢区間ごとの死亡率データ
var mortalityData = [
    { age: 0, mortalityRate: 44.5 / 100000 },
    { age: 5, mortalityRate: 6.4 / 100000 },
    { age: 10, mortalityRate: 8.1 / 100000 },
    { age: 15, mortalityRate: 23.3 / 100000 },
    { age: 20, mortalityRate: 36.7 / 100000 },
    { age: 25, mortalityRate: 38.0 / 100000 },
    { age: 30, mortalityRate: 46.4 / 100000 },
    { age: 35, mortalityRate: 63.6 / 100000 },
    { age: 40, mortalityRate: 94.2 / 100000 },
    { age: 45, mortalityRate: 149.1 / 100000 },
    { age: 50, mortalityRate: 235.3 / 100000 },
    { age: 55, mortalityRate: 360.7 / 100000 },
    { age: 60, mortalityRate: 570.9 / 100000 },
    { age: 65, mortalityRate: 920.2 / 100000 },
    { age: 70, mortalityRate: 1521.8 / 100000 },
    { age: 75, mortalityRate: 2433.0 / 100000 },
    { age: 80, mortalityRate: 4327.2 / 100000 },
    { age: 85, mortalityRate: 8133.4 / 100000 },
    { age: 90, mortalityRate: 14913.3 / 100000 },
    { age: 95, mortalityRate: 27707.7 / 100000 },
    { age: 100, mortalityRate: 46186.2 / 100000 },
];
// 生存確率を計算する関数
function calculateSurvivalProbability(currentAge) {
    var _a;
    var survivalProbability = 1.0;
    var _loop_1 = function (age) {
        var mortalityRate = ((_a = mortalityData.find(function (data) { return data.age === age; })) === null || _a === void 0 ? void 0 : _a.mortalityRate) || 0;
        survivalProbability *= 1 - mortalityRate;
    };
    for (var age = currentAge; age < 60; age += 5) {
        _loop_1(age);
    }
    return survivalProbability;
}
// ボタンをクリックした時の処理
function handleCalculateButtonClick() {
    var ageInput = document.getElementById("ageInput");
    var resultDiv = document.getElementById("result");
    var currentAge = parseInt(ageInput.value);
    if (isNaN(currentAge) || currentAge < 0 || currentAge >= 60) {
        if (resultDiv) {
            resultDiv.innerText = "無効な年齢です。0から59の間で入力してください。";
        }
        return;
    }
    var probability = calculateSurvivalProbability(currentAge);
    if (resultDiv) {
        resultDiv.innerText = "60\u6B73\u307E\u3067\u751F\u304D\u308B\u78BA\u7387\u306F ".concat(probability.toFixed(4), " \u3067\u3059\u3002");
    }
}
// イベントリスナーの設定
(_a = document
    .getElementById("calculateButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", handleCalculateButtonClick);
