from django.contrib import admin
from .models import Essay, Task, TaskCategory
# Register your models here.


admin.site.register(Essay)
admin.site.register(Task)
admin.site.register(TaskCategory)
