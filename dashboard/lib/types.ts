import internal from "stream";

export interface StixObject {
  type: string;
  spec_version: string;
  id: string;
}

export interface Ipv4Address extends StixObject {
  value: string;
}

export interface NetworkTraffic {
  start: string;
  end: string;
  is_active: boolean;
  src_ref: string;
  dst_ref: string;
  src_port: number;
  dst_port: number;
  protocols: string[];
}
