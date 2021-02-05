export class DateUtil {
  static toString(date: Date): string {
    return date.toISOString().split('T')[0]
  }
}
