/**
 * LOCKED REFERENCE VERSION - DO NOT EDIT
 * EpisodeTable Component Reference
 * Created: February 2, 2026
 * 
 * This file serves as a reference version of the original component.
 * Any new work should be done in the main EpisodeTable.tsx file.
 */

interface Contestant {
  id: number;
  name: string;
  placement: string;
}

interface EpisodeTableProps {
  contestants: Contestant[];
}

export function EpisodeTableReference({ contestants }: EpisodeTableProps) {
  const weeks = [
    {
      week: 1,
      days: "1-7",
      hoh: "Jasmine Rivera",
      nominees: "Valentina Rossi & Priya Patel",
      vetoWinner: "Valentina Rossi",
      finalNominees: "Valentina Rossi & Priya Patel",
      evicted: "Valentina Rossi (6-1)",
      views: "320K"
    },
    {
      week: 2,
      days: "8-14",
      hoh: "Devon Blake",
      nominees: "Priya Patel & Aria Thompson",
      vetoWinner: "Aria Thompson",
      finalNominees: "Priya Patel & Sophia Martinez",
      evicted: "Priya Patel (5-2)",
      views: "485K"
    },
    {
      week: 3,
      days: "15-21",
      hoh: "Marcus Chen",
      nominees: "Cameron Rodriguez & Aria Thompson",
      vetoWinner: "Marcus Chen",
      finalNominees: "Cameron Rodriguez & Aria Thompson",
      evicted: "Cameron Rodriguez (4-2)",
      views: "612K"
    },
    {
      week: 4,
      days: "22-28",
      hoh: "Jasmine Rivera",
      nominees: "Aria Thompson & Devon Blake",
      vetoWinner: "Devon Blake",
      finalNominees: "Aria Thompson & Sophia Martinez",
      evicted: "Aria Thompson (3-2)",
      views: "758K"
    },
    {
      week: 5,
      days: "29-35",
      hoh: "Cameron Rodriguez",
      nominees: "Devon Blake & Sophia Martinez",
      vetoWinner: "Sophia Martinez",
      finalNominees: "Devon Blake & Marcus Chen",
      evicted: "Devon Blake (2-1)",
      views: "890K"
    },
    {
      week: 6,
      days: "36-42",
      hoh: "Jasmine Rivera",
      nominees: "N/A (Final 3)",
      vetoWinner: "Marcus Chen",
      finalNominees: "Sophia Martinez",
      evicted: "Sophia Martinez (Evicted by Marcus)",
      views: "1.2M"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Week by Week Summary */}
      <div className="space-y-4">
        <h3 className="text-gray-900">Week-by-Week Summary</h3>
        {weeks.map((week) => (
          <div key={week.week} className="border border-gray-300 rounded-lg bg-gray-50 overflow-hidden">
            <div className="bg-gradient-to-r from-red-100 to-orange-100 px-6 py-3 border-b border-gray-300">
              <div className="flex items-center justify-between">
                <h4 className="text-gray-900">
                  Week {week.week} (Days {week.days})
                </h4>
                <span className="text-gray-600">{week.views} views</span>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 mb-1">Head of Household:</p>
                  <p className="text-gray-900"><strong>{week.hoh}</strong></p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Initial Nominees:</p>
                  <p className="text-gray-700">{week.nominees}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Veto Winner:</p>
                  <p className="text-gray-900"><strong>{week.vetoWinner}</strong></p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Final Nominees:</p>
                  <p className="text-gray-700">{week.finalNominees}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-gray-600 mb-1">Evicted:</p>
                <p className="text-gray-900"><strong>{week.evicted}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Voting History */}
      <div className="mt-8 border border-gray-300 rounded-lg bg-white p-6">
        <h3 className="text-gray-900 mb-4">Voting History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-gray-700 border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-400">
                <th className="px-3 py-2 text-left">Week</th>
                <th className="px-3 py-2 text-left">Jasmine</th>
                <th className="px-3 py-2 text-left">Marcus</th>
                <th className="px-3 py-2 text-left">Sophia</th>
                <th className="px-3 py-2 text-left">Devon</th>
                <th className="px-3 py-2 text-left">Aria</th>
                <th className="px-3 py-2 text-left">Cameron</th>
                <th className="px-3 py-2 text-left">Priya</th>
                <th className="px-3 py-2 text-left">Valentina</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2">1</td>
                <td className="px-3 py-2 bg-red-100">HOH</td>
                <td className="px-3 py-2">Valentina</td>
                <td className="px-3 py-2">Valentina</td>
                <td className="px-3 py-2">Valentina</td>
                <td className="px-3 py-2">Valentina</td>
                <td className="px-3 py-2">Valentina</td>
                <td className="px-3 py-2">Valentina</td>
                <td className="px-3 py-2 bg-yellow-100">Nominated</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2">2</td>
                <td className="px-3 py-2">Priya</td>
                <td className="px-3 py-2">Priya</td>
                <td className="px-3 py-2">Priya</td>
                <td className="px-3 py-2 bg-red-100">HOH</td>
                <td className="px-3 py-2">Sophia</td>
                <td className="px-3 py-2">Priya</td>
                <td className="px-3 py-2 bg-yellow-100">Nominated</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2">3</td>
                <td className="px-3 py-2">Cameron</td>
                <td className="px-3 py-2 bg-red-100">HOH</td>
                <td className="px-3 py-2">Cameron</td>
                <td className="px-3 py-2">Cameron</td>
                <td className="px-3 py-2">Aria</td>
                <td className="px-3 py-2 bg-yellow-100">Nominated</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2">4</td>
                <td className="px-3 py-2 bg-red-100">HOH</td>
                <td className="px-3 py-2">Aria</td>
                <td className="px-3 py-2">Aria</td>
                <td className="px-3 py-2">Sophia</td>
                <td className="px-3 py-2 bg-yellow-100">Nominated</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2">5</td>
                <td className="px-3 py-2">Devon</td>
                <td className="px-3 py-2 bg-yellow-100">Nominated</td>
                <td className="px-3 py-2 bg-red-100">HOH</td>
                <td className="px-3 py-2 bg-yellow-100">Nominated</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2">6</td>
                <td className="px-3 py-2 bg-red-100">HOH</td>
                <td className="px-3 py-2 bg-blue-200">Veto</td>
                <td className="px-3 py-2 bg-yellow-100">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
                <td className="px-3 py-2 bg-gray-300">Evicted</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-700">
          <div className="flex items-center gap-2">
            <span className="inline-block w-12 h-6 bg-red-100 border border-gray-400"></span>
            <span>Head of Household</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-12 h-6 bg-yellow-100 border border-gray-400"></span>
            <span>Nominated</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-12 h-6 bg-blue-200 border border-gray-400"></span>
            <span>Won Veto</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-12 h-6 bg-gray-300 border border-gray-400"></span>
            <span>Evicted</span>
          </div>
        </div>
      </div>

      {/* Houseguest Progress Chart */}
      <div className="mt-8 border border-gray-300 rounded-lg bg-white p-6">
        <h3 className="text-gray-900 mb-4">Houseguest Progress Chart</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-gray-700 border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-400">
                <th className="px-3 py-2 text-left sticky left-0 bg-white">Houseguest</th>
                <th className="px-3 py-2 text-center min-w-[60px]">1</th>
                <th className="px-3 py-2 text-center min-w-[60px]">2</th>
                <th className="px-3 py-2 text-center min-w-[60px]">3</th>
                <th className="px-3 py-2 text-center min-w-[60px]">4</th>
                <th className="px-3 py-2 text-center min-w-[60px]">5</th>
                <th className="px-3 py-2 text-center min-w-[60px]">Finale</th>
              </tr>
            </thead>
            <tbody>
              {/* Jasmine Rivera - Winner */}
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2 sticky left-0 bg-white">Jasmine</td>
                <td className="px-3 py-2 text-center bg-red-300">HOH</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-red-300">HOH</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-yellow-300">WINNER</td>
              </tr>

              {/* Marcus Chen - Runner-Up */}
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2 sticky left-0 bg-white">Marcus</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-red-300">HOH</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-orange-200">NOM</td>
                <td className="px-3 py-2 text-center bg-blue-300">2ND</td>
              </tr>

              {/* Sophia Martinez - 3rd Place */}
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2 sticky left-0 bg-white">Sophia</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-orange-200">NOM</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-orange-200">NOM</td>
                <td className="px-3 py-2 text-center bg-red-300">HOH</td>
                <td className="px-3 py-2 text-center bg-purple-300">3RD</td>
              </tr>

              {/* Devon Blake - 4th Place */}
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2 sticky left-0 bg-white">Devon</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-red-300">HOH</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-red-400">EVICT</td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
              </tr>

              {/* Aria Thompson - 5th Place */}
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2 sticky left-0 bg-white">Aria</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-orange-200">NOM</td>
                <td className="px-3 py-2 text-center bg-orange-200">NOM</td>
                <td className="px-3 py-2 text-center bg-red-400">EVICT</td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
              </tr>

              {/* Cameron Rodriguez - 6th Place */}
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2 sticky left-0 bg-white">Cameron</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-green-100">SAFE</td>
                <td className="px-3 py-2 text-center bg-red-400">EVICT</td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
              </tr>

              {/* Priya Patel - 7th Place */}
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2 sticky left-0 bg-white">Priya</td>
                <td className="px-3 py-2 text-center bg-orange-200">NOM</td>
                <td className="px-3 py-2 text-center bg-red-400">EVICT</td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
              </tr>

              {/* Valentina Rossi - 8th Place */}
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2 sticky left-0 bg-white">Valentina</td>
                <td className="px-3 py-2 text-center bg-red-400">EVICT</td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
                <td className="px-3 py-2 text-center bg-gray-400"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          <div className="flex items-center gap-2">
            <span className="inline-block w-12 h-6 bg-red-300 border border-gray-400"></span>
            <span>Head of Household</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-12 h-6 bg-green-100 border border-gray-400"></span>
            <span>Safe</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-12 h-6 bg-orange-200 border border-gray-400"></span>
            <span>Nominated</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-12 h-6 bg-red-400 border border-gray-400"></span>
            <span>Evicted</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-12 h-6 bg-yellow-300 border border-gray-400"></span>
            <span>Winner</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-12 h-6 bg-blue-300 border border-gray-400"></span>
            <span>Runner-Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}
