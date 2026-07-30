import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Kakatiya Superspeciality Dental Hospital | Premium Dental Care in Warangal',
  description: 'Kakatiya Superspeciality Dental Hospital offers premium dental care in Warangal, Telangana. Expert dentists and modern technology. Book now!',
  openGraph: { title: 'Kakatiya Superspeciality Dental Hospital | Premium Dental Care', description: 'Expert dental care in Warangal', type: 'website', locale: 'en_IN' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
