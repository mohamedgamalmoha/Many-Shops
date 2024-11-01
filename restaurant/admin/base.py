

class DeactivateLogEntryMixin:

    def log_addition(self, request, obj, message):
        ...

    def log_change(self, request, obj, message):
        ...

    def log_deletion(self, request, obj, object_repr):
        ...
