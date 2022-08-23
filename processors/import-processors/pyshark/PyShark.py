# PyShark Processor
import pyshark
from stix2 import (ObservedData, Relationship, NetworkTraffic, IPv4Address, Bundle)

capture = pyshark.LiveCapture()

# While true statement to run the packet capture

while True:
    try:
        for packet in capture.sniff_continuously():
            # Prints the protocol TCP/UDP
            protocol = packet.transport_layer
            # Prints the source IP Address
            source_address = packet.ip.src
            # Prints the source port
            source_port = packet[packet.transport_layer].srcport
            # Prints the destination IP Address
            destination_address = packet.ip.dst
            # Prints the destination port
            destination_port = packet[packet.transport_layer].dstport
            # Prints the sniff time
            packet_time = packet.sniff_time
            # Prints the packet timestamp
            packet_timestamp = packet.sniff_timestamp
            # Prints the packet information
            '''
            print('PROTOCOL: ' + protocol +
                  '\nSRC: ' + source_address +
                  '\nDST: ' + destination_address +
                  '\nSRC Port: ' + source_port +
                  '\nDST Port: ' + destination_port +
                  '\nTIME: ' + packet_timestamp
                  )
            '''
            # information about the source ip address
            src_internet_protocolV4 = IPv4Address(
                value=source_address
            )
            # information about the destination ip address
            des_internet_protocolV4 = IPv4Address(
                value=destination_address
            )
            # creating a network packet in the Stix 2.1
            network_traffic = NetworkTraffic(
                start=packet_time,
                end=packet_time,
                is_active=False,
                src_ref=src_internet_protocolV4,
                dst_ref=des_internet_protocolV4,
                src_port=source_port,
                dst_port=destination_port,
                protocols="ipv4, " + protocol
            )
            network_traffic_bundle = Bundle(objects=[src_internet_protocolV4, des_internet_protocolV4, network_traffic])
            # print(network_traffic_bundle)
    except AttributeError:
        # If the packet does not contain a specific layer skip and continue on
        pass
