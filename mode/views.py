from django.shortcuts import render
from django.views import View

#DB関連のインポート
from history.models import history_tbl
from datetime import datetime

# Create your views here.
'''
def 名前(html内に記述する{% url ○○○ %}の部分)　(request): 
   return render(request,'(htmlのファイル名)')

'''

def mode(request): 
   return render(request,'mode/mode.html')

def practiceMode(request): 
   return render(request,'mode/practiceMode.html')

def oneAnsSet(request): 
   return render(request,'mode/oneAnsSet.html')

def oneAnsStart(request):
   
      params = {
          'question' : request.POST.get('question'),  
          'questionNumber' : request.POST['checkNumber'],
      }
      return render(request,'mode/oneAnsStart.html', params)
  


def oneAnsResult(request):
   params = {
      'resultTime' : request.POST['resultTime'],
      'resultText' : request.POST['resultText'],
      'question' : request.POST['question'],
      'questionNumber' : request.POST['questionNumber'],
   }
   
   return render(request,'mode/oneAnsResult.html', params)

def inPersonSet(request): 
   return render(request,'mode/inPersonSet.html')

def inPersonStart(request): 
   params = {
      'chara' : request.POST['chara[]'],
      'situmonsu' : request.POST['situmonsu'],
   }

   return render(request,'mode/inPersonStart.html',params)

def mensetuResult(request):

   if 'tSave' in request.POST:           # 対面モード履歴保存
      mode = 1 #対面モード
      Time=request.POST.get('resultTime') #面接練習時間
      Chara=request.POST.get('resultChara') #選択された面接官
      Question=request.POST.get('resultQuestion') #質問
      Text=request.POST.get('resultText') #文字起こし結果

      #音声が認識できなかった(文字起こし結果がnone)時の処理
      if(not Text):
         Text = "※認識できませんでした※"

      inter_date = datetime.now() #保存した日時
      memo = request.POST.get('memo') #メモ
      create_user = request.user #ログインしているユーザー

      input_history_tbl=history_tbl(mode=mode,resultTime=Time,resultCharacter=Chara,resultQuestion=Question,resultText=Text,date=inter_date,memo=memo,create_user=create_user)
      input_history_tbl.save()

      params = {
      'resultTime' : Time,
      'resultChara' : Chara,
      'resultQuestion' : Question,
      'resultMojiokoshi' : Text,
      'memo' : memo,
      }
      
   else:
      params = {
         'resultTime' : request.POST['resultTime'],
         'resultChara' : request.POST.get('resultChara'),
         'resultQuestion' : request.POST['resultQuestion'],
         'resultMojiokoshi' : request.POST.get('resultMojiokoshi'),
      }


   return render(request,'mode/mensetuResult.html',params)

def productionStart(request): 
   return render(request,'mode/productionStart.html')

def productionAct(request):
   return render(request,'mode/productionAct.html')


def productionResult(request):

   if 'hSave' in request.POST:           # 対面モード履歴保存
      mode = 2 #対面モード
      Time=request.POST.get('resultTime') #面接練習時間
      Chara=request.POST.get('resultChara') #選択された面接官
      Question=request.POST.get('resultQuestion') #質問
      Text=request.POST.get('resultText') #文字起こし結果

      #音声が認識できなかった(文字起こし結果がnone)時の処理
      if(not Text):
         Text = "※認識できませんでした※"

      inter_date = datetime.now() #保存した日時
      memo = request.POST.get('memo') #メモ
      create_user = request.user #ログインしているユーザー

      input_history_tbl=history_tbl(mode=mode,resultTime=Time,resultCharacter=Chara,resultQuestion=Question,resultText=Text,date=inter_date,memo=memo,create_user=create_user)
      input_history_tbl.save()

      params = {
      'resultTime' : Time,
      'resultChara' : Chara,
      'resultQuestion' : Question,
      'resultMojiokoshi' : Text,
      'memo' : memo,
      }

   else:
      params = {
         'resultTime' : request.POST['resultTime'],
         'resultChara' : request.POST.get('resultChara'),
         'resultQuestion' : request.POST['resultQuestion'],
         'resultMojiokoshi' : request.POST.get('resultMojiokoshi'),
      }
      
   return render(request,'mode/productionResult.html',params)



