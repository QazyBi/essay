from django.http import HttpResponseRedirect  # HttpResponse,
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.contrib.auth.decorators import login_required

from .models import Task, Essay
from django.contrib.auth.models import User
from .forms import SignUpForm


def homepage(request):
    count = Task.objects.all().count()
    context = {
        "task_count": count,
    }
    return render(request, "main/index.html", context)


def tasks(request):
    query_set = Task.objects.all()
    context = {
        "task_list": query_set,
    }
    return render(request, "main/tasks.html", context)


@login_required
def ith_task(request, task_id):
    query_set = get_object_or_404(Task, pk=task_id)
    # TODO: test cases when 404 is returned
    context = {
        "task": query_set,
    }
    return render(request, "main/essay_write_form.html", context)


@login_required
def submit_essay(request, task_id):
    task = get_object_or_404(Task, pk=task_id)
    answer = request.POST["essay"]
    if len(answer) == 0:
        return render(request, "main/essay_write_form.html", {
            "task": task,
            "error_msg": "You did not provide answer.",
        })
    else:
        Essay.objects.create(task=task, user=request.user, text=answer)
        return HttpResponseRedirect(reverse('main:tasks'))


def signup_redirect(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        context = {}
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('main:login'))
        else:
            print(form.errors.as_data())
            context = {
                'form': form,
            }
    else:
        context = {
            'form': SignUpForm()
        }
    return render(request, "main/registration/signup.html", context)


@login_required
def me(request):
    user = get_object_or_404(User, pk=request.user.id)
    essay_number = len(Essay.objects.filter(user_id=user.id))
    context = {
        "user": user,
        "essay_number": essay_number,
    }
    return render(request, "main/me.html", context)


def me_edit(request):
    user = get_object_or_404(User, pk=request.user.id)

    username = request.POST["username"]
    email = request.POST["email"]
    password = request.POST["new_password"]
    confirm_password = request.POST["confirm_password"]

    # check that password == confirm_password
    if password == confirm_password:
        user.username = username
        user.email = email
        user.password = password
        user.save()
        return HttpResponseRedirect(reverse('main:me'))
    else:
        context = {
            "error_msg": "Passwords do not match",
        }
        return render(request, "main/me.html", context)


@login_required
def my_essays(request):
    query_set = Essay.objects.filter(user_id=request.user.id)
    context = {
        "essay_list": query_set,
    }
    return render(request, "main/my_essays.html", context)


# TODO: allow essay editting
@login_required
def my_ith_essay(request, essay_id):
    essay = Essay.objects.filter(user_id=request.user.id, id=essay_id)
    if essay.exists():
        context = {
            "essay": essay[0],
        }
        return render(request, "main/view_my_essay.html", context)
    else:
        context = {
            "error": "essay does not exist",
        }
        return render(request, "main/view_my_essay.html", context)
