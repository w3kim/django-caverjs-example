from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import render_to_string

def index(request):
    rendered = render_to_string('template.html')
    return HttpResponse(rendered)