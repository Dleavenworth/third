
function show_cal() {
  function num() {
    a=Number(document.form1.num1.value);
    b=Number(document.form1.num2.value);
    c=a+b;
    document.form1.num1.value=c;

    a=Number(document.form1.num1.value);
    b=Number(document.form1.num2.value);
    c=a-b;
    document.form1.num1.value=c;

    a=Number(document.form1.num1.value);
    b=Number(document.form1.num2.value);
    c=a*b;
    document.form1.num1.value=c;

    a=Number(document.form1.num1.value);
    b=Number(document.form1.num2.value);
    c=a/b;
    document.form1.num1.value);
  }

  function addition() {
    a=Number(document.form1.num3.value);
    b=Number(document.form1.num4.value);
    c=a+b;
    document.form1.result1.value=c;
  }

  function subtraction() {
    a=Number(document.form1.num5.value);
    b=Number(document.form1.num6.value);
    c=a-b;
    document.form1.result2.value=c;
  }

  function multiply() {
    a=Number(document.form1.num7.value);
    b=Number(document.form1.num8.value);
    c=a*b;
    document.form1.result3.value=c;
  }

  function division() {
    a=Number(document.form1.num9.value);
    b=Number(document.form1.num9.value);
    c=a/b;
    document.form1.result4.value=c;
  }
  num();
}
