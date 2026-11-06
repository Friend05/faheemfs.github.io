import { targetRoles } from '../data/portfolio';

export function Skills() {
  return (
    <section
      id="roles"
      aria-labelledby="roles-heading"
      className="py-16 border-t border-zinc-200"
    >
      <div className="max-w-3xl mx-auto px-6 text-left">
        <div className="mb-8">
          <h2
            id="roles-heading"
            className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight"
          >
            Target Roles
          </h2>
          <p className="text-sm text-zinc-600 mt-1">
            Open to generalist operator, evaluation, and business analysis roles.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {targetRoles.map((role) => (
            <div
              key={role.title}
              className="p-5 rounded-lg bg-white border border-zinc-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-zinc-900">
                    {role.title}
                  </h3>
                  <span className="text-xs font-medium text-teal-700 shrink-0">
                    {role.status}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
