import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='stix', exchange_type='direct')

result = channel.queue_declare(queue='stix-queue')
queue_name = result.method.queue

channel.queue_bind(exchange='stix', queue=queue_name)


def __publish_message(message):
  channel.basic_publish(exchange='', routing_key='', body=message)


def send_stix_bundle():
  pass