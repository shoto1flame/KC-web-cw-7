function BMI(weight =66 , height =1.8) {
  let result = weight / (height * height);

  return result;
}

console.log(BMI(70, 1.7));

function Status(bmi) {
  if (bmi < 18.5) {
    return "لديك نقص بالوزن";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "وزنك صحي";
  } else if (bmi > 25) {
    return "لديك زياده بالوزن" ;
  }
}

function calculate() {
  let weight = document.getElementById("weight").value;

  let height = document.getElementById("height").value;

  let bmi = BMI(weight, height);

  let desc = Status(bmi);

  let div = document.getElementById("result");

  div.innerText  = bmi + " == " + desc;
}

console.log(BMI)