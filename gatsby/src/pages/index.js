export default function IndexPage() {
  if (typeof window !== 'undefined') {
    window.location = '/aboutme';
  }
  return null;
}
