FROM python:3.8-alpine

WORKDIR /app
RUN pip3 install --upgrade pip
RUN apk add nmap

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY main.py main.py

CMD [ "python3", "main.py" ]