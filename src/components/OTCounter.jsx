import React, { useState } from 'react';

const OTCounter = () => {
  const [singleOT, setSingleOT] = useState('');
  const [dualOT, setDualOT] = useState('');
  const [tripleOT, setTripleOT] = useState('');
  const [singleOTRate, setSingleOTRate] = useState('');
  const [dualOTRate, setDualOTRate] = useState('');
  const [tripleOTRate, setTripleOTRate] = useState('');

  const singleOTValue = (parseFloat(singleOT) || 0) * 1.5;
  const dualOTValue = (parseFloat(dualOT) || 0) * 2;
  const tripleOTValue = (parseFloat(tripleOT) || 0) * 3;
  const totalOT = singleOTValue + dualOTValue + tripleOTValue;
  
  const totalEarnings = 
    (singleOTValue * (parseFloat(singleOTRate) || 0)) +
    (dualOTValue * (parseFloat(dualOTRate) || 0)) +
    (tripleOTValue * (parseFloat(tripleOTRate) || 0));

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-slate-100 selection:bg-indigo-500/30">
      <div className="relative w-full max-w-lg">
        {/* Decorative Background Elements */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] blur opacity-30 animate-pulse"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Main Card */}
        <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] p-6 sm:p-10 shadow-2xl overflow-hidden">
          
          <div className="mb-8 text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
              Overtime Calculator
            </h1>
            <p className="text-slate-400 text-sm sm:text-base font-medium">
              Calculate your total OT hours instantly
            </p>
          </div>

          <div className="space-y-6">
            {/* Single OT Input */}
            <div className="group relative">
              <label className="block text-xs font-semibold uppercase tracking-wider text-indigo-300 mb-2 ml-1">
                Single OT (1.5x)
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-indigo-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={singleOT}
                  onChange={(e) => setSingleOT(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700/50 text-slate-100 text-lg rounded-2xl pl-12 pr-16 py-4 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 placeholder:text-slate-600 outline-none"
                  placeholder="Enter hours"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="text-sm font-bold text-indigo-400/50">hrs</span>
                </div>
              </div>
              <div className="absolute -right-2 top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-indigo-500/10 text-indigo-300 text-xs px-2 py-1 rounded-lg font-mono border border-indigo-500/20 shadow-sm backdrop-blur-md">
                  = {singleOTValue.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Dual OT Input */}
            <div className="group relative">
              <label className="block text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2 ml-1">
                Dual OT (2x)
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-purple-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={dualOT}
                  onChange={(e) => setDualOT(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700/50 text-slate-100 text-lg rounded-2xl pl-12 pr-16 py-4 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 placeholder:text-slate-600 outline-none"
                  placeholder="Enter hours"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="text-sm font-bold text-purple-400/50">hrs</span>
                </div>
              </div>
              <div className="absolute -right-2 top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-purple-500/10 text-purple-300 text-xs px-2 py-1 rounded-lg font-mono border border-purple-500/20 shadow-sm backdrop-blur-md">
                  = {dualOTValue.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Triple OT Input */}
            <div className="group relative">
              <label className="block text-xs font-semibold uppercase tracking-wider text-pink-300 mb-2 ml-1">
                Triple OT (3x)
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-pink-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={tripleOT}
                  onChange={(e) => setTripleOT(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700/50 text-slate-100 text-lg rounded-2xl pl-12 pr-16 py-4 focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 placeholder:text-slate-600 outline-none"
                  placeholder="Enter hours"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="text-sm font-bold text-pink-400/50">hrs</span>
                </div>
              </div>
              <div className="absolute -right-2 top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-pink-500/10 text-pink-300 text-xs px-2 py-1 rounded-lg font-mono border border-pink-500/20 shadow-sm backdrop-blur-md">
                  = {tripleOTValue.toFixed(1)}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50 shadow-inner group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex flex-col items-center justify-center">
                <span className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">
                  Final OT Count
                </span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tabular-nums tracking-tighter transition-all duration-300 ease-out">
                    {totalOT.toFixed(1)}
                  </span>
                  <span className="text-lg font-bold text-slate-500">
                    hrs
                  </span>
                </div>
              </div>
              
              {/* Hourly Rate Input & Total Earnings */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <label className="block text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-3 text-center">
                  Hourly Rates (Price per 1 hour)
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {/* Single OT Rate */}
                  <div className="relative flex flex-col">
                    <span className="text-[10px] uppercase text-indigo-300/80 mb-1 ml-1 font-bold">Single Rate</span>
                    <div className="relative flex items-center">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-emerald-400/70 font-bold text-sm">LKR</span>
                      </div>
                      <input
                        type="number" min="0" step="0.01" value={singleOTRate} onChange={(e) => setSingleOTRate(e.target.value)}
                        className="w-full bg-slate-950/50 border border-slate-700/50 text-slate-100 text-sm rounded-xl pl-11 pr-2 py-2 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 placeholder:text-slate-600 outline-none"
                        placeholder="Rate"
                      />
                    </div>
                  </div>
                  {/* Dual OT Rate */}
                  <div className="relative flex flex-col">
                    <span className="text-[10px] uppercase text-purple-300/80 mb-1 ml-1 font-bold">Dual Rate</span>
                    <div className="relative flex items-center">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-emerald-400/70 font-bold text-sm">LKR</span>
                      </div>
                      <input
                        type="number" min="0" step="0.01" value={dualOTRate} onChange={(e) => setDualOTRate(e.target.value)}
                        className="w-full bg-slate-950/50 border border-slate-700/50 text-slate-100 text-sm rounded-xl pl-11 pr-2 py-2 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 placeholder:text-slate-600 outline-none"
                        placeholder="Rate"
                      />
                    </div>
                  </div>
                  {/* Triple OT Rate */}
                  <div className="relative flex flex-col">
                    <span className="text-[10px] uppercase text-pink-300/80 mb-1 ml-1 font-bold">Triple Rate</span>
                    <div className="relative flex items-center">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-emerald-400/70 font-bold text-sm">LKR</span>
                      </div>
                      <input
                        type="number" min="0" step="0.01" value={tripleOTRate} onChange={(e) => setTripleOTRate(e.target.value)}
                        className="w-full bg-slate-950/50 border border-slate-700/50 text-slate-100 text-sm rounded-xl pl-11 pr-2 py-2 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 placeholder:text-slate-600 outline-none"
                        placeholder="Rate"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center bg-emerald-950/30 rounded-xl p-4 border border-emerald-500/20">
                  <span className="text-emerald-400/80 text-xs font-bold uppercase tracking-widest mb-1">
                    Full Price (Earnings)
                  </span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl sm:text-2xl font-bold text-emerald-500">LKR</span>
                    <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500 tabular-nums tracking-tighter">
                      {totalEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
             <button 
                onClick={() => {
                  setSingleOT('');
                  setDualOT('');
                  setTripleOT('');
                  setSingleOTRate('');
                  setDualOTRate('');
                  setTripleOTRate('');
                }}
                className="px-6 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-700 transition-colors border border-slate-700/50"
             >
               Reset Values
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTCounter;
