# pull official base image
FROM python:3.8.3-alpine

# create directory
RUN mkdir /usr/src/essay

# set work directory
WORKDIR /usr/src/essay

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY . .


# install dependencies
RUN \
    pip install --upgrade pip && \
    apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev && \
    python3 -m pip install -r requirements.txt --no-cache-dir && \
    apk --purge del .build-deps

EXPOSE 8000


CMD ["python", "manage.py", "runserver"]
