import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/questoes');
  return null;
}
