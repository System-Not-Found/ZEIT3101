#!/usr/bin/env python3
import json
from ..helper.main import Helper

import pymongo
import os

from stix2validator import validate_string
from stix2 import Bundle, parse
from dotenv import dotenv_values

config = dotenv_values()
conn_str = f"mongodb://{config['DATABASE_USER']}:{config['DATABASE_PASSWORD']}@localhost:27017/?retryWrites=true&w=majority"
print(conn_str)


class Worker:
    def __init__(self):
        self.client = pymongo.MongoClient(
            conn_str, serverSelectionTimeoutMS=5000
        )
        self.db = self.client["stix"]

    def listen(self):
        Helper.consume_stix(self.process_message)

    def process_message(self, bundle: Bundle):
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
