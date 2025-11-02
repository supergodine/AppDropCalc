export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(cls => typeof cls === 'string' && cls).join(' ');
}