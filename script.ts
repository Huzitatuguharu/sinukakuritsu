// script.ts
type MortalityData = {
  age: number;
  mortalityRate: number;
};

// 年齢区間ごとの死亡率データ
const mortalityData: MortalityData[] = [
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
function calculateSurvivalProbability(currentAge: number): number {
  let survivalProbability = 1.0;

  for (let age = currentAge; age < 60; age += 5) {
    const mortalityRate =
      mortalityData.find((data) => data.age === age)?.mortalityRate || 0;
    survivalProbability *= 1 - mortalityRate;
  }

  return survivalProbability;
}

// ボタンをクリックした時の処理
function handleCalculateButtonClick() {
  const ageInput = document.getElementById("ageInput") as HTMLInputElement;
  const resultDiv = document.getElementById("result");
  const currentAge = parseInt(ageInput.value);

  if (isNaN(currentAge) || currentAge < 0 || currentAge >= 60) {
    if (resultDiv) {
      resultDiv.innerText = "無効な年齢です。0から59の間で入力してください。";
    }
    return;
  }

  const probability = calculateSurvivalProbability(currentAge);
  if (resultDiv) {
    resultDiv.innerText = `60歳まで生きる確率は ${probability.toFixed(
      4
    )} です。`;
  }
}

// イベントリスナーの設定
document
  .getElementById("calculateButton")
  ?.addEventListener("click", handleCalculateButtonClick);
