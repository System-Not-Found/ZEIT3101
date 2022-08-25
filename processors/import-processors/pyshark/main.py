# PyShark Processor
import pyshark
from zeit3101helpers import Helper
from stix2 import NetworkTraffic, IPv4Address, Bundle

capture = pyshark.LiveCapture(interface="en0")


class PyShark:
    def __init__(self):
        self.helper = Helper(hostname="localhost")

    def start(self):
        print("Pushing data...")
        self.start_packet_loop()

    def start_packet_loop(self):
        print("Starting packet loop")
        while True:
            try:
                for packet in capture.sniff_continuously():
                    # information about the source ip address
                    src_internet_protocolV4 = IPv4Address(value=packet.ip.src)
                    # information about the destination ip address
                    des_internet_protocolV4 = IPv4Address(value=packet.ip.dst)
                    # creating a network packet in the Stix 2.1
                    network_traffic = NetworkTraffic(
                        start=packet.sniff_time,
                        end=packet.sniff_time,
                        is_active=False,
                        src_ref=src_internet_protocolV4,
                        dst_ref=des_internet_protocolV4,
                        src_port=packet[packet.transport_layer].srcport,
                        dst_port=packet[packet.transport_layer].dstport,
                        protocols="ipv4, " + packet.transport_layer,
                    )
                    network_traffic_bundle = Bundle(
                        objects=[
                            src_internet_protocolV4,
                            des_internet_protocolV4,
                            network_traffic,
                        ]
                    )
                    print(network_traffic_bundle)
                    self.helper.send_stix_bundle(network_traffic_bundle)

            except AttributeError as e:
                print(e)


if __name__ == "__main__":
    ps = PyShark()
    ps.start()
