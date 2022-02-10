from django.shortcuts import render
from django.views import View
from .forms import HistoryForm   
from .models import history_tbl


def history(request):

    #データベースの中身を引き出す
    historyTbl = history_tbl.objects.filter(create_user = request.user)
  
    params = {
            'historyTbl' : historyTbl,
    }
    return render(request,'history/rireki.html', params)

def history_detail(request):
    #データベースの中身を引きだす
    history_id = request.POST['history_id']
    select_historyTbl = history_tbl.objects.filter(create_user = request.user,id = history_id)
    
    params = {
        'select_historyTbl' : select_historyTbl
    }
    return render(request,'history/rireki_detail.html',params)
