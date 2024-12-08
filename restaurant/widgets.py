from django import forms


class ImageRadioSelect(forms.RadioSelect):
    template_name = 'widgets/image_radio.html'
