import { siteMeta } from '../data/portfolio';
import { withBase } from '../paths';

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 border-t border-zinc-200"
    >
      <div className="max-w-3xl mx-auto px-6 text-left">
        <h2
          id="contact-heading"
          className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight mb-3"
        >
          Contact
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
          Open to AI Evals &amp; Product QA, Chief of Staff, Founder’s Office, Business Analysis, and Business Operations roles.
        </p>

        <div className="space-y-2 text-sm text-zinc-800 mb-8">
          <p>
            <span className="text-zinc-500 inline-block w-20">Email:</span>{' '}
            <a
              href={`mailto:${siteMeta.email}`}
              className="font-medium text-zinc-900 underline decoration-zinc-300 hover:decoration-teal-700 hover:text-teal-700 transition-colors"
            >
              {siteMeta.email}
            </a>
          </p>
          <p>
            <span className="text-zinc-500 inline-block w-20">Phone:</span>{' '}
            <a
              href={`tel:${siteMeta.phone}`}
              className="font-medium text-zinc-900 hover:text-teal-700 transition-colors"
            >
              {siteMeta.phone}
            </a>
          </p>
          <p>
            <span className="text-zinc-500 inline-block w-20">LinkedIn:</span>{' '}
            <a
              href={siteMeta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline decoration-zinc-300 hover:decoration-teal-700 hover:text-teal-700 transition-colors"
            >
              linkedin.com/in/faheemfs
            </a>
          </p>
          <p>
            <span className="text-zinc-500 inline-block w-20">Resume:</span>{' '}
            <a
              href={withBase(siteMeta.resumePath)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline decoration-zinc-300 hover:decoration-teal-700 hover:text-teal-700 transition-colors"
            >
              Download PDF
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
