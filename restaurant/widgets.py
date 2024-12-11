from django import forms


class ImageRadioSelect(forms.RadioSelect):
    template_name = 'widgets/image_radio.html'

    def __init__(self, *args, image_field_name: str = None, default_image_url: str = None, **kwargs):
        super().__init__(*args, **kwargs)

        if not image_field_name:
            image_field_name = 'image'
        self.image_field_name = image_field_name

        if not default_image_url:
            default_image_url = ''
        self.default_image_url = default_image_url

    def create_option(self, name, value, label, selected, index, subindex=None, attrs=None):
        option = super().create_option(name, value, label, selected, index, subindex=subindex, attrs=attrs)
        instance = getattr(value, 'instance', None)
        option['image'] = self.get_image_url(instance)
        return option

    def get_image_url(self, instance=None):
        if instance and hasattr(instance, self.image_field_name):
            image = getattr(instance, self.image_field_name)
            return image.url
        return self.default_image_url
