import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, Clock, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

export function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(20);
  const [manualHours, setManualHours] = useState(15);

  const hoursSavedPerMonth = Math.round(manualHours * 0.75 * 4);
  const annualCostSavings = Math.round(hoursSavedPerMonth * 12 * 45);
  const velocityBoost = Math.round((teamSize * 0.15 + manualHours * 0.8) * 1.2);

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50 text-left font-sans">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold font-mono uppercase tracking-wider mb-2 shadow-sm">
          <Calculator size={13} className="text-indigo-600" />
          Interactive Efficiency &amp; ROI Model
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
          Estimate Your Team's Velocity Gain
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 font-normal">
          Simulate measurable gains when structured BA workflows, Jira sprint discipline, and automated Excel reporting are deployed.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Input Sliders */}
        <div className="space-y-6">
          <div className="p-5 pe-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Product / Engineering Team Size
              </label>
              <span className="text-sm font-bold text-indigo-700 px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-100 font-mono">
                {teamSize} members
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
          </div>

          <div className="p-5 pe-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Manual Reporting / Process Hours / Week
              </label>
              <span className="text-sm font-bold text-sky-700 px-3 py-1 rounded-lg bg-sky-50 border border-sky-100 font-mono">
                {manualHours} hrs/wk
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              value={manualHours}
              onChange={(e) => setManualHours(Number(e.target.value))}
              className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
          </div>
        </div>

        {/* Dynamic ROI Metrics Output */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
            <Clock className="w-5 h-5 text-indigo-600 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              {hoursSavedPerMonth}h
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              Hours Saved / Month
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
            <DollarSign className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-display">
              ${annualCostSavings.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              Annual Cost Equivalent
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
            <TrendingUp className="w-5 h-5 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 font-display">
              +{velocityBoost}%
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">
              Sprint Velocity Boost
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}