import { Link } from 'react-router';
import { mainProjects } from '../data/portfolio';

export function CaseStudies() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="py-16 border-t border-zinc-200"
    >
      <div className="max-w-3xl mx-auto px-6 text-left">
        <h2
          id="work-heading"
          className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight mb-8"
        >
          Selected Work
        </h2>

        <div className="space-y-8">
          {mainProjects.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-7 rounded-lg bg-white border border-zinc-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-5 pb-4 border-b border-zinc-100">
                <h3 className="text-lg font-semibold text-zinc-900">
                  <Link
                    to={`/case-study/${project.id}`}
                    className="hover:text-teal-700 transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>
                <Link
                  to={`/case-study/${project.id}`}
                  className="text-xs font-medium text-teal-700 hover:underline shrink-0"
                >
                  Case study →
                </Link>
              </div>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
                    Problem
                  </dt>
                  <dd className="text-zinc-700 leading-relaxed">
                    {project.problem}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
                    My role
                  </dt>
                  <dd className="text-zinc-800 font-medium">
                    {project.role}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
                    What I did
                  </dt>
                  <dd>
                    <ul className="list-disc list-inside space-y-1 text-zinc-700 leading-relaxed">
                      {project.whatIDid.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
                    Result
                  </dt>
                  <dd className="text-zinc-700 leading-relaxed">
                    {project.result}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1.5">
                    Tools or artifact
                  </dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {project.toolsOrArtifact.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-8 pt-4">
          <Link
            to="/additional-projects"
            className="text-sm font-medium text-zinc-600 hover:text-teal-700 transition-colors"
          >
            Additional Projects (Academic &amp; Hackathon) →
          </Link>
        </div>
      </div>
    </section>
  );
}
