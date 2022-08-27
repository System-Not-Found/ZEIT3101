#!/usr/bin/env python3
import json
import os


import pymongo
from stix2validator import validate_string
from stix2 import Bundle
from zeit3101helpers import Helper

conn_str = f"mongodb://{os.getenv('DATABASE_USER')}:{os.getenv('DATABASE_PASSWORD')}@db:27017/?retryWrites=true&w=majority"


class Worker:
    def __init__(self):
        self.helper = Helper(hostname="queue")
        self.client = pymongo.MongoClient(
            conn_str, serverSelectionTimeoutMS=5000
        )
        self.db = self.client["stix"]

    def listen(self):
        print("Pushing data...")
        self.helper.consume_stix(self.process_message)

    def process_message(self, bundle: Bundle):
        print(bundle)
        if self.validate(bundle):
            for obj in bundle.objects:
                document = json.loads(obj.serialize())
                col = self.db[document["type"]]
                col.insert_one(document)

    def validate(self, bundle: Bundle) -> bool:
        result = validate_string(bundle.serialize())
        return result.is_valid


if __name__ == "__main__":
    worker = Worker()
    worker.listen()
