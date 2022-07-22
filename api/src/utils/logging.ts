export enum LogLevel {
  WARN = "WARN",
  ERROR = "ERROR",
  INFO = "INFO",
  DEBUG = "DEBUG",
}
export class Logger {
  static log(level: LogLevel, msg: string) {
    console.log(`[${level}] ${new Date().toUTCString()} | Message: ${msg}`);
  }
  static info(msg: string) {
    this.log(LogLevel.INFO, msg);
  }

  static warn(msg: string) {
    this.log(LogLevel.WARN, msg);
  }

  static error(msg: string) {
    this.log(LogLevel.ERROR, msg);
  }

  static debug(msg: string) {
    this.log(LogLevel.DEBUG, msg);
  }
}
