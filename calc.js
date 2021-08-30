var coin = 0;
function insertCoin(self){
  coin = coin + self;
  alert(self+"원이 추가되었습니다.");
  setColor();
  document.getElementById("result").innerHTML = coin;
}
function getItem(id, self){
  if (coin >= self) {   
    coin = coin - self;
    document.getElementById("result").innerHTML = coin;
    alert(document.getElementById(id).value+"이/가 구매되었습니다. " + coin+"원이 남았습니다.");
    setColor();
  } else{
    alert("돈이 부족합니다.");
  }
}
function setColor(){
    if (coin >= 500){
      document.getElementById("water").style.color="blue";
      if (coin >= 700){
        document.getElementById("coffee").style.color="blue";
        if (coin >= 1000){
          document.getElementById("tea").style.color="blue";
        } else {
          document.getElementById("tea").style.color="red";
        }
      } else{
        document.getElementById("tea").style.color="red";
        document.getElementById("coffee").style.color="red";
      }
    } else{
      document.getElementById("tea").style.color="red";
      document.getElementById("coffee").style.color="red";
      document.getElementById("water").style.color="red";
    }
}

