FROM python:3.11-alpine

RUN apk update \
    && apk add --virtual .build-deps gcc python3-dev musl-dev postgresql-dev \
    && apk add --no-cache libpq

WORKDIR /app

RUN pip install --upgrade pip \
    && pip install django \
    && pip install psycopg2

COPY . .

RUN chmod +x entrypoint.sh

CMD ["sh", "entrypoint.sh"]