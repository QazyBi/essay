from django.db import models
from django.contrib.auth.models import User


class TaskCategory(models.Model):
    name = models.CharField(max_length=100)
    image_url = models.TextField()

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Task(models.Model):
    title = models.TextField()
    created_date = models.DateField(auto_now=False, auto_now_add=True)
    last_modified = models.DateField(auto_now=True)
    category = models.ForeignKey(TaskCategory, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.title[:100]


class Essay(models.Model):
    created_date = models.DateField(auto_now=False, auto_now_add=True)
    last_modified = models.DateField(auto_now=True)
    task = models.ForeignKey(Task, on_delete=models.SET_DEFAULT, blank=False, default='The task for this essays is not set or was deleted')
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False)
    text = models.TextField()

    def __str__(self):
        return f"{self.text[:100]}"
