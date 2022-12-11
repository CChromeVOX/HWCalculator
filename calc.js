var op; 
  function calc() {
    var result;
    var num1 = Number(document.getElementById("fnum").value);
    var num2 = Number(document.getElementById("snum").value);
    if(num1){
        if(num2){
            switch (op) {
                case '+':
                  result = num1 + num2;
                  break;
                case '-':
                  result = num1 - num2;
                  break;
                case '*':
                  result = num1 * num2;
                  break;
                case '/':
                  result = num1 / num2;
                  break;
                  }
                  document.getElementById("result").innerHTML = result;
                  document.getElementById("ans").style.backgroundColor = 'lightgreen';
             

        }else alert("Вы забыли ввести второе число!!!!")
    }else alert("Вы забыли ввести первое число(")
    
    

  }