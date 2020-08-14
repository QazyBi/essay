from django.urls import path  # , include
from . import views
from django.contrib.auth.views import LoginView, LogoutView, PasswordResetView, PasswordResetDoneView, PasswordResetCompleteView, PasswordResetConfirmView


app_name = 'main'
urlpatterns = [
    path('', views.homepage, name='homepage'),

    path('tasks', views.tasks, name='tasks'),
    path('tasks/<int:task_id>/', views.ith_task, name='ith_task'),
    path('tasks/<int:task_id>/submit', views.submit_essay, name='submit_essay'),

    path(r'signup/', views.signup_redirect, name='signup'),
    path(r'signup/redirect', views.signup_redirect, name='signup_redirect'),

    path(r'^login/$', LoginView.as_view(), name='login'),
    path(r'^logout/$', LogoutView.as_view(), name='logout'),
    path(r'^reset-password/$', PasswordResetView.as_view(), name='password_reset'),
    path(r'^reset-password/done/$', PasswordResetDoneView.as_view(), name='password_reset_done'),
    path(r'^reset-password/confirm/(?P<uidb64>[0-9A-Za-z]+)-(?P<token>.+)/$', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path(r'^reset-password/complete/$', PasswordResetCompleteView.as_view(), name='password_reset_complete'),

    path('me', views.me, name='me'),
    path('me/edit', views.me_edit, name='me_edit'),
    path('me/essays', views.my_essays, name='my_essays'),
    path('me/essays/<int:essay_id>', views.my_ith_essay, name='my_ith_essay'),
    path('me/essays/<int:essay_id>/update', views.update_essay, name='update_essay'),
]
