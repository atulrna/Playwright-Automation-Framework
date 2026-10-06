export class Logger {

  static info(message: unknown): void {
    console.log(`[INFO] ${message}`);
  }

  static success(message: unknown): void {
    console.log(`[PASS] ${message}`);
  }

  static error(message: unknown): void {
    console.error(`[ERROR] ${message}`);
  }

  static warn(message: unknown): void {
    console.warn(`[WARN] ${message}`);
  }

  static debug(message: unknown): void {
    console.debug(`[DEBUG] ${message}`);
  }
}