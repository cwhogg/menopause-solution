'use client';

import { useState, FormEvent } from 'react';
import JsonLd from '../components/content/JsonLd';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again');
    }
  }

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Organization","name":"Hormona","url":"https://hormona.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"WebSite","name":"Hormona","url":"https://hormona.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"When should I check hormones for perimenopause?","acceptedAnswer":{"@type":"Answer","text":"Hormone testing is most valuable when done consistently over time rather than as a one-time snapshot. We recommend quarterly testing starting when you notice irregular cycles or new symptoms like brain fog, mood changes, or sleep disruption."}},{"@type":"Question","name":"What hormones are out of whack during perimenopause?","acceptedAnswer":{"@type":"Answer","text":"Estradiol and progesterone fluctuate wildly during perimenopause, while FSH rises as your ovaries work harder. Thyroid hormones can also shift, which is why our panel includes TSH, T3, and T4 alongside reproductive hormones."}},{"@type":"Question","name":"How accurate is hormone testing for perimenopause?","acceptedAnswer":{"@type":"Answer","text":"Single hormone tests can be misleading because levels change dramatically throughout perimenopause. Our quarterly testing approach captures these fluctuations over time, providing a clearer picture than one-time testing."}},{"@type":"Question","name":"What are signs of low estrogen in perimenopause?","acceptedAnswer":{"@type":"Answer","text":"Low estrogen can cause hot flashes, night sweats, vaginal dryness, brain fog, mood swings, and bone loss. However, estrogen levels fluctuate during perimenopause, so symptoms may come and go as levels rise and fall unpredictably."}},{"@type":"Question","name":"Why won't my doctor check my hormone levels?","acceptedAnswer":{"@type":"Answer","text":"Many doctors rely on irregular periods as the main perimenopause indicator and may dismiss hormone testing as unreliable. Our platform provides the longitudinal data and clinical support to help you advocate for appropriate testing and treatment."}},{"@type":"Question","name":"Is menopause hormone testing covered by insurance?","acceptedAnswer":{"@type":"Answer","text":"Insurance coverage for hormone testing varies widely and may require specific symptoms or diagnostic codes. We provide transparent cash pricing and can help you understand insurance options, including reimbursement strategies for out-of-network testing."}}]}} />

      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            Hormona
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section aria-label="Hero" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 leading-tight">
            Should I Test My Hormones During Perimenopause? Get Answers with Quarterly Testing + Symptom Tracking
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Finally understand your menopause symptoms with comprehensive hormone testing every 3 months, paired with daily tracking and telemedicine consultations designed specifically for the perimenopause journey.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Join Early Access`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>

        {/* Value Props */}
        <section aria-label="Features" className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Why Hormona?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section aria-label="Quarterly Hormone Testing That Actually Helps" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Quarterly Hormone Testing That Actually Helps</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Unlike single-point testing that misses fluctuations, our quarterly panels track estradiol, progesterone, FSH, and thyroid over time to reveal patterns your doctor needs to see.</p>
          </section>
          <section aria-label="Connect Your Symptoms to Your Hormone Data" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Connect Your Symptoms to Your Hormone Data</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Track daily symptoms and see how they correlate with your actual hormone levels. No more guessing why you feel terrible when your doctor says your levels are 'normal.'</p>
          </section>
          <section aria-label="Menopause-Specialized Telemedicine Support" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Menopause-Specialized Telemedicine Support</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Consult with providers who understand perimenopause and can interpret your longitudinal hormone data to create personalized treatment plans, including HRT guidance.</p>
          </section>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">When should I check hormones for perimenopause?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Hormone testing is most valuable when done consistently over time rather than as a one-time snapshot. We recommend quarterly testing starting when you notice irregular cycles or new symptoms like brain fog, mood changes, or sleep disruption.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What hormones are out of whack during perimenopause?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Estradiol and progesterone fluctuate wildly during perimenopause, while FSH rises as your ovaries work harder. Thyroid hormones can also shift, which is why our panel includes TSH, T3, and T4 alongside reproductive hormones.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How accurate is hormone testing for perimenopause?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Single hormone tests can be misleading because levels change dramatically throughout perimenopause. Our quarterly testing approach captures these fluctuations over time, providing a clearer picture than one-time testing.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What are signs of low estrogen in perimenopause?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Low estrogen can cause hot flashes, night sweats, vaginal dryness, brain fog, mood swings, and bone loss. However, estrogen levels fluctuate during perimenopause, so symptoms may come and go as levels rise and fall unpredictably.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Why won't my doctor check my hormone levels?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Many doctors rely on irregular periods as the main perimenopause indicator and may dismiss hormone testing as unreliable. Our platform provides the longitudinal data and clinical support to help you advocate for appropriate testing and treatment.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Is menopause hormone testing covered by insurance?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Insurance coverage for hormone testing varies widely and may require specific symptoms or diagnostic codes. We provide transparent cash pricing and can help you understand insurance options, including reimbursement strategies for out-of-network testing.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 Hormona. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
