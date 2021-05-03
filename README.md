# Django + Caver-js using Django Compressor

## How to install

Execute the following lines to properly clone and run the project.

```
$ git clone https://github.com/w3kim/django-caverjs-example.git
$ cd django-caverjs-example
$ python3 -m virtualenv env
$ source env/bin/activate
$ cd klaytnexample
$ pip install -r requirements.txt
$ npm init
$ npm install
```


# Project Structure

Please keep the following structure to test Django + Caver-js using Django Compressor.

```
.
└── klaytnexample
    ├── compress
    │   └── script.js
    ├── home
    │   └── html
    │       └── template.html
    ├── klaytnexample
    │   ├── __init__.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── manage.py
    ├── package.json
    ├── requirements.txt
    └── test
        ├── admin.py
        ├── apps.py
        ├── __init__.py
        ├── migrations
        │   └── __init__.py
        ├── models.py
        ├── tests.py
        ├── urls.py
        └── views.py
```