interface MortalityData {
  age: number;
  mortalityRate: number;
}

const mortalityRates: MortalityData[] = [
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

function getMortalityRate(age: number): number {
  for (let i = 0; i < mortalityRates.length; i++) {
    if (age < mortalityRates[i].age) {
      return mortalityRates[i - 1].mortalityRate;
    }
  }
  return mortalityRates[mortalityRates.length - 1].mortalityRate;
}

function calculateProbability(): void {
  const ageInput = document.getElementById("age") as HTMLInputElement | null;
  if (!ageInput) {
    alert("年齢入力欄が見つかりません");
    return;
  }

  const age = parseInt(ageInput.value, 10);
  if (isNaN(age) || age < 0 || age > 60) {
    alert("0歳から60歳までの年齢を入力してください");
    return;
  }

  // 明日死ぬ確率を計算
  const dailyMortalityRate = getMortalityRate(age) / 365;
  const dailyProbability = dailyMortalityRate * 100;

  // 60歳までに死ぬ確率を計算
  let survivalProbability = 1.0;
  for (let i = age; i < 60; i++) {
    const annualMortalityRate = getMortalityRate(i);
    survivalProbability *= 1 - annualMortalityRate;
  }
  const until60Probability = (1 - survivalProbability) * 100;

  const dailyProbabilityElement = document.getElementById("dailyProbability");
  const until60ProbabilityElement =
    document.getElementById("until60Probability");

  if (dailyProbabilityElement) {
    dailyProbabilityElement.innerText = `約 ${dailyProbability.toFixed(
      6
    )}%`;
  }

  if (until60ProbabilityElement) {
    until60ProbabilityElement.innerText = `約 ${until60Probability.toFixed(
      2
    )}%`;
  }
}

const calculateButton = document.getElementById("calculateButton");
if (calculateButton) {
  calculateButton.addEventListener("click", calculateProbability);
}
