from .models import history_tbl
from django.forms import ModelForm


class HistoryForm(ModelForm):
    class Meta:
        model = history_tbl
        fields=('resultTime', 'resultText')

        def history_save(self):
            # 総評画面に表示されたデータをフィールド名を指定して取得
            his = super(HistoryForm, self).save
            his.resultTime = self.cleaned_data['resultTime']
            his.resultText = self.cleaned_data['resultText']

            his.save()
            return his