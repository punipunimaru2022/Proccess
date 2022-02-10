from django.contrib import admin
from .models import history_tbl

# Django管理サイトにhistoryモデルを登録する
admin.site.register(history_tbl)