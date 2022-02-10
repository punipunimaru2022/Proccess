function getRadioValue(name){
    //ラジオボタンオブジェクトを取得する
    var result;
    var radios = document.getElementsByName(name);
  
     //ラジオボタンのチェック状態から質問番号を取得しセットする
     var flag = false;
     for(var i=0; i<document.form1.elements.length-1;i++){
         if(document.form1.elements[i].checked){
             flag = true;
             document.getElementById('checkNumber').value = i;
         }else{
             flag = false;
         }
     }
   
    //取得したラジオボタンオブジェクトから選択されたものを探し出す
    for(var i=0; i<radios.length; i++){
      if (radios[i].checked) {
        //選択されたラジオボタンのvalue値を取得する
        result = radios[i].value;
        break;
      }
    }
              if( confirm("質問内容:" + result + "\n"
              + "\n"
              + "上記内容で練習を開始します。よろしいですか？")){
                  document.forms.form1.submit();
              } else {
  
              }
  }
  