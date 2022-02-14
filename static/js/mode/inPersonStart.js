
//postで受け取った面接官キャラのデータ
var charasPost = document.getElementById("select_chara").value;
// ,ごとに区切って配列にいれる
var charasArray = charasPost.split(',');
//次の画面に渡す面接官のキャラをセットする
document.getElementById("resultChara").value=charasArray;

//配列の長さ---選択されたキャラ数---
var su = charasArray.length;

//postで受け取った質問数のデータ
var situmonsu = document.getElementById("select_situmonsu").value;

const Css=document.getElementById('css');

var questionArray =[];

var woman1 = [
    //自己紹介について
    "/static/movie/woman1/question1.mp4",
    "/static/movie/woman1/question2.mp4",
    "/static/movie/woman1/question3.mp4",
    "/static/movie/woman1/question4.mp4",
    "/static/movie/woman1/question5.mp4",
    "/static/movie/woman1/question6.mp4",
    "/static/movie/woman1/question7.mp4",
    "/static/movie/woman1/question8.mp4",
    "/static/movie/woman1/question9.mp4",
    "/static/movie/woman1/question10.mp4",
    
];

var man1 =[
    //志望動機について
    "/static/movie/man1/question11.mp4",
    "/static/movie/man1/question12.mp4",
    "/static/movie/man1/question13.mp4",
    "/static/movie/man1/question14.mp4",
    "/static/movie/man1/question15.mp4",

    //自己評価について
    "/static/movie/man1/question28.mp4",
    "/static/movie/man1/question29.mp4",
    "/static/movie/man1/question30.mp4",
    "/static/movie/man1/question31.mp4",
    "/static/movie/man1/question32.mp4",
    "/static/movie/man1/question33.mp4",
    
];

var woman2 = [
    //経験談について
    "/static/movie/woman2/question16.mp4",
    "/static/movie/woman2/question17.mp4",
    "/static/movie/woman2/question18.mp4",
    "/static/movie/woman2/question19.mp4",
    "/static/movie/woman2/question20.mp4",
    "/static/movie/woman2/question21.mp4",
    "/static/movie/woman2/question22.mp4",
    "/static/movie/woman2/question23.mp4",
    "/static/movie/woman2/question24.mp4",
    "/static/movie/woman2/question25.mp4",
    "/static/movie/woman2/question26.mp4",
    "/static/movie/woman2/question27.mp4",
];

var man2 = [

    //目標"キャリアプランについて"
    "/static/movie/man2/question34.mp4",
    "/static/movie/man2/question35.mp4",
    "/static/movie/man2/question36.mp4",
    "/static/movie/man2/question37.mp4",
    "/static/movie/man2/question38.mp4",
    "/static/movie/man2/question39.mp4",
    "/static/movie/man2/question40.mp4",
    "/static/movie/man2/question41.mp4",
    "/static/movie/man2/question42.mp4",
    "/static/movie/man2/question43.mp4",
];

var woman3 = [

    //勤務条件について
    "/static/movie/woman3/question44.mp4",
    "/static/movie/woman3/question45.mp4",
    "/static/movie/woman3/question46.mp4",
    "/static/movie/woman3/question47.mp4",

    //答えにくい"困りやすい質問"
    "/static/movie/woman3/question48.mp4",
    "/static/movie/woman3/question49.mp4",
    "/static/movie/woman3/question50.mp4",
    "/static/movie/woman3/question51.mp4",
    "/static/movie/woman3/question52.mp4",
    "/static/movie/woman3/question53.mp4",
    "/static/movie/woman3/question54.mp4",
    "/static/movie/woman3/question55.mp4",
    "/static/movie/woman3/question56.mp4",
];

var man3 = [
    //その他
    //mp4の部分音声データが出来次第変更する
    "/static/movie/man3/question57.mp4",
    "/static/movie/man3/question58.mp4",
    "/static/movie/man3/question59.mp4",
    "/static/movie/man3/question60.mp4",
    "/static/movie/man3/question61.mp4",
    "/static/movie/man3/question62.mp4",
    "/static/movie/man3/question63.mp4",
    "/static/movie/man3/question64.mp4",
    "/static/movie/man3/question65.mp4",
    "/static/movie/man3/question66.mp4",
    "/static/movie/man3/question67.mp4",
    "/static/movie/man3/question68.mp4",

];


//面接開始の音声
var startVoiceArray = [];
//面接終了の音声
var endVoiceArray = [];

//はじめとおわりの挨拶をするキャラを決めるランダムな数字
var rndNum = Math.floor(Math.random() * charasArray.length);


//ランダムに選ばれた質問を入れる変数
var selectText;

//選ばれた質問が入る配列(配列数は前の画面で選択された質問数)
selectQuestions = [];

    //面接官の数によってcssを変更する
    switch(su){
      case 1:
        Css.innerHTML="<link rel=\"stylesheet\"  href=/static/css/mode/inPersonStart1.css>";
        document.getElementById('aicon1').src =charasArray[0].substr(charasArray[0].indexOf("/static"));
      break;

      case 2:
        Css.innerHTML="<link rel=\"stylesheet\"  href=/static/css/mode/inPersonStart2.css>";
        document.getElementById('aicon1').src =charasArray[0].substr(charasArray[0].indexOf("/static"));
        document.getElementById('aicon2').src =charasArray[1].substr(charasArray[1].indexOf("/static"));
      break;
      
      case 3:
        Css.innerHTML="<link rel=\"stylesheet\"  href=/static/css/mode/inPersonStart3.css>";
        document.getElementById('aicon1').src =charasArray[0].substr(charasArray[0].indexOf("/static"));
        document.getElementById('aicon2').src =charasArray[1].substr(charasArray[1].indexOf("/static"));
        document.getElementById('aicon3').src =charasArray[2].substr(charasArray[2].indexOf("/static"));
      break;
    } 

    for (var i=0;i < charasArray.length;i++){
      var chara = charasArray[i].substr(charasArray[i].lastIndexOf("/")+1);
      var video_poster = "/static/images/character/";
      var aicon_id = "aicon" + (i+1);
      switch(chara){
        case "man1.png" :
          questionArray = questionArray.concat(man1);
          startVoiceArray[i] = "/static/movie/man1/start.mp4";
          endVoiceArray[i] = "/static/movie/man1/end.mp4";
          video_poster = video_poster + "man1_poster.png"
          document.getElementById(aicon_id).poster = video_poster;
          break;
    
        case "man2.png" :
          questionArray = questionArray.concat(man2);
          startVoiceArray[i] = "/static/movie/man2/start.mp4";
          endVoiceArray[i] = "/static/movie/man2/end.mp4";
          video_poster = video_poster + "man2_poster.png"
          document.getElementById(aicon_id).poster = video_poster;
          break;
    
        case "man3.png" :
          questionArray = questionArray.concat(man3);
          startVoiceArray[i] = "/static/movie/man3/start.mp4";
          endVoiceArray[i] = "/static/movie/man3/end.mp4";
          video_poster = video_poster + "man3_poster.png"
          document.getElementById(aicon_id).poster = video_poster;

          break;
        case "woman1.png" :
          questionArray = questionArray.concat(woman1);
          startVoiceArray[i] = "/static/movie/woman1/start.mp4";
          endVoiceArray[i] = "/static/movie/woman1/end.mp4";
          video_poster = video_poster + "woman1_poster.png"
          document.getElementById(aicon_id).poster = video_poster;
          break;
        case "woman2.png" :
          questionArray = questionArray.concat(woman2);
          startVoiceArray[i] = "/static/movie/woman2/start.mp4";
          endVoiceArray[i] = "/static/movie/woman2/end.mp4";
          video_poster = video_poster + "woman2_poster.png"
          document.getElementById(aicon_id).poster = video_poster;
          break;
        case "woman3.png" :
          questionArray = questionArray.concat(woman3);
          startVoiceArray[i] = "/static/movie/woman3/start.mp4";
          endVoiceArray[i] = "/static/movie/woman3/end.mp4";
          video_poster = video_poster + "woman3_poster.png"
          document.getElementById(aicon_id).poster = video_poster;
          break;
      }
    }
    
    
    //画面読み込み時に処理実行
    window.onload = startTimer;

    //タイマーの処理
    var timer = document.getElementById('timer');
    var swButton = document.getElementById('stop-btn');

    //クリック時の時間を保持するための変数定義
    var startTime;

    //経過時刻を更新するための変数。 初めは0で初期化
    var elapsedTime = 0;

    //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
    var timerId;

    //タイマーをストップ -> 再開させたら0になってしまうのを避けるための変数。
    var timeToadd = 0;

    //スタートの開始を記録する変数
    var startFrg = false;


    //計算方法として3735200ミリ秒経過したとしてそれを分とか秒に直すと -> 01:02:15
    function updateTimetText(){

        //h(時間) = 3735200 / 3,600,000ミリ秒で割った数の商　-> 1時間
        var h = Math.floor(elapsedTime / 3600000);

        //m(分) = 3735200  % 3,600,000 で / 60000(ミリ秒なので60000で割ってやる) -> ２分
        var m = Math.floor(elapsedTime % 3600000 / 60000);


        //s(秒) = 3735200 % 3,600,000 % 60000ミリ秒で / 1000 (ミリ秒なので1000で割ってやる) -> 15秒
        var s = Math.floor(elapsedTime  % 3600000 % 60000 / 1000);

  


        //HTML 上で表示の際の桁数を固定する　例）3 => 03　、 12 -> 012
        //javascriptでは文字列数列を連結すると文字列になる
        //文字列の末尾2桁を表示したいのでsliceで負の値(-2)引数で渡してやる。
        h = ('0' + h).slice(-2); 
        m = ('0' + m).slice(-2);
        s = ('0' + s).slice(-2);

        //HTMLのid　timer部分に表示させる　
        timer.textContent = h + ':' + m + ':' + s;
    }

        //再帰的に使える用の関数
        function countUp(){

            //timerId変数はsetTimeoutの返り値になるので代入する
            timerId = setTimeout(function(){
    
                //経過時刻は現在時刻をミリ秒で示すDate.now()からstartを押した時の時刻(startTime)を引く
                elapsedTime = Date.now() - startTime + timeToadd;
                updateTimetText()
    
                //countUp関数自身を呼ぶことで10ミリ秒毎に以下の計算を始める
                countUp();
    
            //1秒以下の時間を表示するために10ミリ秒後に始めるよう宣言
            },10);
        }
  

    function startTimer(){
        //在時刻を示すDate.nowを代入
        startTime = Date.now();
    
        //再帰的に使えるように関数を作る.タイマー開始
        countUp();

        for (var i = 0; i<situmonsu;i++){
            while(true){
                selectText= questionArray[Math.floor(Math.random() * questionArray.length)];
                //配列の中にすでに同じ質問がないかの判定
                if(!selectQuestions.includes(selectText)){
                    //選ばれた質問を配列にいれる
                    selectQuestions.push(selectText);
                    break;
                }
            }
            //次の画面に渡す選ばれた質問をセットする
            document.getElementById("resultQuestion").value=selectQuestions;

        }

        selectQuestions.push(endVoiceArray[rndNum]);
        //文字起こしの開始
        mojiokoshi();
    }

    function mojiokoshi(){
      //文字起こし
      var mojiokoshi;
      //文字起こし結果のテキストが入る
      var mojiokoshiResult = [];

      var returnCheck = false;

      //読み上げ用のカウント変数
      var count = 0;

      SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
      let recognition = new SpeechRecognition();
      recognition.lang = 'ja-JP';

      //認識中の音声も表示できるようにする
      recognition.interimResults = true;

      //録音を継続するためのもの(1分位できれる)
      recognition.continuous = true;

      //音声認識が完了した文字が入る
      let finalTranscript = '';
  
      var counterTime;         //counterMaxTimeからはじまって0になったら終了
      var counterMaxTime = 7;  //カウントダウン初期値(10秒からスタート)
      var countdownTimer;      //カウントダウンを１秒ごとに行うための変数


      //カウントダウン関数
      function countDown(){
        //０になったら録音をとめる
        if(counterTime == 0){
          recognition.stop()
        }else {
          counterTime--;
          console.log(counterTime +"秒前!!");
        }
      }

      //カウントダウンをリセットする
      function counterReset(){
        //カウントダウンの処理を止める
        clearInterval(countdownTimer);
        //初期値に戻す
        counterTime = counterMaxTime;
      }

      //面接終了時に画面を切り替える処理
      var endView = function(){
        var view = document.getElementById("all");
        var afterView  = document.getElementById("owari");
        document.getElementById("Tyudan").style.display="none";
        view.style.display = "none";
        afterView.style.display = "block";

      }

      //音声を認識したときに発火する
      recognition.onresult = (event) =>{ 

        //文字起こし系の処理
        let interimTranscript = ''; 
        for (let i = event.resultIndex; i < event.results.length; i++) {
          let transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript = transcript;
          }
        }
  
        //文字起こし結果を変数に入れる
        mojiokoshi = finalTranscript + interimTranscript ;
        //document.getElementById('test').innerText = mojiokoshi ;

        console.log(mojiokoshi);

        //話した言葉が「以上です」だった場合、録音を停止する。
        if(interimTranscript.includes("以上です")){
            recognition.stop();
        }

        //話した言葉が「もう一度お願いします」だった場合、録音を停止する。
        if(interimTranscript.includes("もう一度お願いします")){
          returnCheck = true;
          recognition.stop();
        }
        
        //音声を認識したらカウントダウンをリセットする
        counterReset();
        //カウントダウン(１秒ごとに繰り返す)
        countdownTimer = setInterval(countDown, 1000);

      }


      //..各イベントにあわせてコンソールログに出力する(あとで消す)..//

      recognition.onend = function(end){
        console.log("おわったよ!");
        
        document.getElementsByClassName("myvideo_speaking").item(0).className = "myvideo";
        counterReset();
        if(count < situmonsu){
          counterTime = counterMaxTime;
          mojiokoshiResult[count-1]  = mojiokoshi;
          console.log(mojiokoshiResult);
          if(returnCheck == true){
            count--;
            returnCheck = false;
          }
          yomiage(count);
          finalTranscript="";
          count++;
        }else{
          mojiokoshiResult[count-1]  = mojiokoshi;
          console.log(mojiokoshiResult);
          if(returnCheck == true){
            count--;
            returnCheck = false;
          }
          yomiage(count);
          finalTranscript="";
          count++;
        }
      }

      recognition.onerror = function(error){
        console.log(error);
      }

      recognition.onstart = function(end){
       console.log("はじまったよ!");
        
      }

      //........................ここまで..........................//

      //１番はじめの質問を読み上げる
      //初期値をセットする
      counterTime = counterMaxTime;
      //面接を開始しますの挨拶読み上げ
      firstYomiage();

    //面接を開始しますの挨拶読み上げ関数
    function firstYomiage(){
      var movie_src = startVoiceArray[rndNum];
      var getInitial = getChara(count);
      var start;
      if(document.getElementById('aicon1').poster.indexOf(getInitial) > -1){
      start = document.getElementById('aicon1');
      }else if(document.getElementById('aicon2').poster.indexOf(getInitial) > -1){
      start = document.getElementById('aicon2');
      }else if(document.getElementById('aicon3').poster.indexOf(getInitial) > -1){
      start = document.getElementById('aicon3');
      }

      start.src = movie_src;
      start.play();
      changeBorder(-1);
      start.onended = function(){

      document.getElementById('aicon1').className = ""
      document.getElementById('aicon2').className = "";
      document.getElementById('aicon3').className = "";
      window.setTimeout(function(){
      yomiage(count)
      count++;
      },1500);
      }
      }

      function yomiage(count){
        var movie_src = selectQuestions[count];
        var getInitial = getChara(count);
        var yomiage;
        if(document.getElementById('aicon1').poster.indexOf(getInitial) > -1){
        yomiage = document.getElementById('aicon1');
        }else if(document.getElementById('aicon2').poster.indexOf(getInitial) > -1){
        yomiage = document.getElementById('aicon2');
        }else if(document.getElementById('aicon3').poster.indexOf(getInitial) > -1){
        yomiage = document.getElementById('aicon3');
        }

        yomiage.src = movie_src;
        yomiage.play();
        changeBorder(count);
        yomiage.onended = function(){
        console.log("読み上げ終わり");
        document.getElementById('aicon1').className = "";
        document.getElementById('aicon2').className = "";
        document.getElementById('aicon3').className = "";
        if(count == situmonsu){
        //ストップウォッチを止める
        clearTimeout(timerId);
        //次の画面に経過時間を渡す
        document.getElementById('resultTime').value = timer.textContent
        //次の画面に文字起こし結果を渡す
        document.getElementById('resultMojiokoshi').value = mojiokoshiResult;
        endView();
        }else{
        //カウントダウン(１秒ごとに繰り返す)
        countdownTimer = setInterval(countDown, 1000);
        recognition.start();
        document.getElementsByClassName("myvideo").item(0).className = "myvideo_speaking";
        }
        }
        }
        }

  function getChara(count){
      var initial;
      var num;
      if(count == -1){
      initial = startVoiceArray[rndNum].substr(startVoiceArray[rndNum].indexOf("movie/")+6,1);
      num = startVoiceArray[rndNum].substr(startVoiceArray[rndNum].indexOf("/start")-1,1);
      }else if(count == situmonsu){
      initial = endVoiceArray[rndNum].substr(endVoiceArray[rndNum].indexOf("movie/")+6,1);
      num = endVoiceArray[rndNum].substr(endVoiceArray[rndNum].indexOf("/end")-1,1);
      }else{
      initial = selectQuestions[count].substr(selectQuestions[count].indexOf("movie/")+6,1);
      num = selectQuestions[count].substr(selectQuestions[count].indexOf("/question")-1,1);
      }
      if(initial =="m"){
      initial = "man" + num;
      }else{
      initial = "woman" + num;
      }
      return initial;
      }
                      

  function changeBorder(count){
      //面接官が話しているときの枠の色を変更する
      var initial = getChara(count);
      console.log(initial);
      if(document.getElementById('aicon1').src.indexOf(initial) > -1){
        document.getElementById('aicon1').className = "chara_speaking1";
      }else if(document.getElementById('aicon2').src.indexOf(initial) > -1){
        document.getElementById('aicon2').className = "chara_speaking2";
      }else if(document.getElementById('aicon3').src.indexOf(initial) > -1){
        document.getElementById('aicon3').className = "chara_speaking3";
      }
 }
  //結果を見るボタンが押された時の処理
  function resultView(){
    stopVideo();
    document.forms.resultform.submit();
  }

    //カメラ関係の処理
    const localVideo = document.getElementById('myVideo');
        let localStream = null;
        let recorder = null;
        let blobUrl = null;
        let chunks = [];

    const tyudan = document.getElementById('Tyudan');
        
        
    // --- prefix -----
    navigator.getUserMedia  = navigator.getUserMedia    || navigator.webkitGetUserMedia ||
                              navigator.mozGetUserMedia || navigator.msGetUserMedia;
      
    /*　カメラの許可ON/OFF　*/
      getDeviceStream({video: true, audio: true})
        .then(function (stream) { // success
          localStream = stream;
          playVideo(localVideo, stream);
      }).catch(function (error) { // error
        　　return;
      });

 
    /*　カメラを停止する　*/
    function stopVideo() {
        //面接がまだ終わっていない場合、中断確認用のダイアログを表示する
        if(tyudan.innerText == "中断"){
          dialog = document.getElementById('dialog');
    　　　dialog.setAttribute('open', '');
        
        //面接が終了している場合、面接結果画面へ遷移する
        }else{
          if(recorder) {
            recorder.stop();
            console.log("stop recording");
          }
    
              pauseVideo(localVideo);
    
              // Blob
              const videoBlob = new Blob(chunks, { type: "video/webm" });
    
              // URLを作成
              blobUrl = window.URL.createObjectURL(videoBlob);
    
              tyudan.download = 'recorded.webm';    // ダウンロードしたファイル名
              tyudan.href = blobUrl;    // createObjectURL()で生成したURL
              
              $('#myVideo').val(blobUrl);  // videoタグのvalueにURLを挿入
    
              stopLocalStream(localStream); 
             console.log("結果を見る");
        }
         
    }

    //ダイアログのOKボタンが押された場合、ホームに戻る
    function OKDialog() {

      speechSynthesis.cancel();

      //window.locatin.href→画面遷移
      window.location.href = "/";
             
    }

    //ダイアログのキャンセルが押された場合、ダイアログを閉じる
    function closeDialog() {
      dialog.removeAttribute('open');
    }



        function stopLocalStream(stream) {
          let tracks = stream.getTracks();
          if (! tracks) {
            console.warn('NO tracks');
            return;
          }
          
          for (let track of tracks) {
            track.stop();
          }
        }
        
        function getDeviceStream(option) {
          if ('getUserMedia' in navigator.mediaDevices) {
            console.log('navigator.mediaDevices.getUserMadia');
            return navigator.mediaDevices.getUserMedia(option);
          }else{
            console.log('wrap navigator.getUserMadia with Promise');
            return new Promise(function(resolve, reject){    
              navigator.getUserMedia(option,
                resolve,
                reject
              );
            });      
          }
        }
      
        function playVideo(element, stream) {
          if ('srcObject' in element) {
            element.srcObject = stream;
          }else{
            element.src = window.URL.createObjectURL(stream);
          }
          element.play();
          element.volume = 0;
        

          /* --------録画開始------- */
          if(! localStream){
            console.warn('stream not ready');
            return;
          }
          if(recorder){
            console.warn('already recoding');
            return;
          }

          const options = {
          audioBitsPerSecond : 64000,
          videoBitsPerSecond : 512000,
          mimeType : 'video/webm; codecs=vp9'
          };
          recorder = new MediaRecorder(localStream, options); 

          chunks = [];    // 格納場所をクリア

          /* 録画進行中にインターバアルに合わせて発生するイベント */
          recorder.ondataavailable = function(evt){
          console.log("data available: evt.data.type=" + evt.data.type + " size=" + evt.data.size);
          chunks.push(evt.data);
          };
        

        /* 録画停止時のイベント */
        recorder.onstop = function(evt) {
          console.log('recorder.onstop(), so playback');
          recorder = null;
          playRecorded();

          
          
        };

        /* 録画スタート */
        recorder.start(1000);   // インターバルは1000ms
        console.log('start recording');
      }

      
        
      
        function pauseVideo(element) {
          element.pause();
          if ('srcObject' in element) {
            element.srcObject = null;
          }else{
            if (element.src && (element.src !== '') ) {
              window.URL.revokeObjectURL(element.src);
            }
            element.src = '';
          }
        }
        

        /* 録画を保存 */
        function playRecorded(){
          if(! blobUrl){
            window.URL.revokeObjectURL(blobUrl);
            blobUrl = null;
          }
                        
        }


     


   