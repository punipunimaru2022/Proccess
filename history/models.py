from django.db import models

class history_tbl(models.Model):
    date=models.DateTimeField(auto_now=True)#練習日時
    mode=models.CharField(max_length=1) #モード(1のとき対面、2の時本番)
    resultTime=models.CharField(max_length=255) #面接にかかった時間
    resultCharacter=models.CharField(max_length=255) #面接にかかった時間
    resultQuestion=models.CharField(max_length=500) #面接にかかった時間
    resultText=models.CharField(max_length=500) #文字起こし結果
    memo=models.CharField(max_length=255) #メモ
    create_user = models.CharField(max_length=150, blank=False) #登録したユーザー名

    def __str__(self):
        return self.date.strftime("%Y/%m/%d/%H:%M:%S")