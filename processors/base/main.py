import pika
from stix2 import Bundle


class Processor:

  
    def __init__(self):
        self.channel = Processor.__declare_channel()

    @staticmethod
    def __declare_channel() -> pika.Channel:
        connection = pika.BlockingConnection(pika.ConnectionParameters("localhost"))
        channel = connection.channel()

        channel.exchange_declare(exchange="stix", exchange_type="direct")

        result = channel.queue_declare(queue="stix-queue")
        queue_name = result.method.queue

        channel.queue_bind(exchange="stix", queue=queue_name)

        return channel

    def __publish_message_to_channel(self, message: str) -> None:
        self.channel.basic_publish(exchange="stix", routing_key="", body=message)

    def send_stix_bundle(self, bundle: Bundle) -> None:
        self.__publish_message_to_channel(bundle.serialize)
