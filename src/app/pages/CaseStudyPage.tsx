import { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { getCaseStudy, additionalProjects } from '../data/portfolio';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export function CaseStudyPage() {
  const { id } = useParams();
  const caseStudy = id ? getCaseStudy(id) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#faf9f6] text-zinc-900 font-sans">
        <SiteHeader />
        <main className="max-w-3xl mx-auto px-6 py-24 text-left">
          <h1 className="text-xl font-semibold text-zinc-900">
            Case Study Not Found
          </h1>
          <p className="text-sm text-zinc-600 mt-2 mb-6">
            The requested project could not be found.
          </p>
          <Link
            to="/"
            className="text-sm font-medium text-teal-700 hover:underline"
          >
            ← Back to Portfolio
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans">
      <SiteHeader />

      <main className="py-16 px-6 max-w-3xl mx-auto text-left">
        <div className="mb-8">
          <Link
            to={{ pathname: '/', hash: '#work' }}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            ← Back to Selected Work
          </Link>
        </div>

        <article className="p-6 sm:p-8 rounded-lg bg-white border border-zinc-200">
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tight mb-6 pb-4 border-b border-zinc-100">
            {caseStudy.title}
          </h1>

          <dl className="space-y-6 text-sm sm:text-base">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1.5">
                Problem
              </dt>
              <dd className="text-zinc-700 leading-relaxed">
                {caseStudy.problem}
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1.5">
                My role
              </dt>
              <dd className="text-zinc-900 font-medium">
                {caseStudy.role}
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1.5">
                What I did
              </dt>
              <dd>
                <ul className="list-disc list-inside space-y-2 text-zinc-700 leading-relaxed">
                  {caseStudy.whatIDid.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1.5">
                Result
              </dt>
              <dd className="text-zinc-700 leading-relaxed">
                {caseStudy.result}
              </dd>
            </div>

            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">
                Tools or artifact
              </dt>
              <dd className="flex flex-wrap gap-2">
                {caseStudy.toolsOrArtifact.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded bg-zinc-100 text-zinc-800 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}

export function AdditionalProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans">
      <SiteHeader />

      <main className="py-16 px-6 max-w-3xl mx-auto text-left">
        <div className="mb-8">
          <Link
            to={{ pathname: '/', hash: '#work' }}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            ← Back to Selected Work
          </Link>
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 tracking-tight mb-2">
          Additional Projects
        </h1>
        <p className="text-sm text-zinc-600 mb-8">
          Academic and hackathon projects in systems design and requirement modeling.
        </p>

        <div className="space-y-6">
          {additionalProjects.map((project) => (
            <article
              key={project.id}
              className="p-6 rounded-lg bg-white border border-zinc-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-3 border-b border-zinc-100">
                <h2 className="text-lg font-semibold text-zinc-900">
                  {project.title}
                </h2>
                <span className="text-xs text-zinc-500">
                  {project.context}
                </span>
              </div>

              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Problem
                  </dt>
                  <dd className="text-zinc-700 leading-relaxed mt-0.5">
                    {project.problem}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    My role
                  </dt>
                  <dd className="text-zinc-800 font-medium mt-0.5">
                    {project.role}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    What I did
                  </dt>
                  <dd className="text-zinc-700 leading-relaxed mt-0.5">
                    {project.whatIDid}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Result
                  </dt>
                  <dd className="text-zinc-700 leading-relaxed mt-0.5">
                    {project.result}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Tools or artifact
                  </dt>
                  <dd className="text-zinc-700 mt-0.5">
                    {project.toolsOrArtifact}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
