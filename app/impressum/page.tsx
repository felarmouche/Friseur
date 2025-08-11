import { SITE } from '@/lib/site';
export const metadata = { title: 'Impressum' };
export default function Impressum() {
  return (
    <section className="section">
      <div className="container prose prose-neutral max-w-none">
        <h1>Impressum</h1>
        <p><strong>{SITE.name}</strong><br/>{SITE.address.line}<br/>E‑Mail: {SITE.email}<br/>Telefon: {SITE.phone.display}</p>
        <p>Inhaltlich Verantwortliche gem. § 18 Abs. 2 MStV: Wird ergänzt.</p>
        <p>USt‑IdNr.: Wird ergänzt · Aufsichtsbehörde/Handwerkskammer: Wird ergänzt.</p>
      </div>
    </section>
  );
}
