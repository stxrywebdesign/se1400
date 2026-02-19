/**
 * Grid Overlay Component
 * Visual guide showing layout structure and alignment
 */

export function GridOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="min-h-screen bg-transparent flex justify-center">
        <div className="w-[1200px] min-h-[1600px] relative">
          {/* Canvas Boundary - 1200px */}
          <div className="absolute inset-0 border-4 border-purple-500">
            <div className="absolute -top-8 left-0 bg-purple-500 text-white px-3 py-1 text-sm font-mono">
              Canvas: 1200px × 1600px
            </div>
          </div>

          {/* Content Wrapper - 992px */}
          <div className="max-w-[992px] mx-auto h-full relative">
            <div className="absolute inset-0 border-4 border-blue-500">
              <div className="absolute -top-8 left-0 bg-blue-500 text-white px-3 py-1 text-sm font-mono">
                Wrapper: 992px
              </div>
            </div>

            {/* Header Area */}
            <div className="px-4 py-3 relative">
              <div className="absolute inset-0 bg-red-500/10 border-2 border-red-500">
                <div className="absolute top-1 left-1 bg-red-500 text-white px-2 py-0.5 text-xs font-mono">
                  Header
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="px-4 py-6 relative">
              <div className="flex gap-8 relative">
                {/* Sidebar - 256px (w-64) */}
                <div className="w-64 flex-shrink-0 relative h-96">
                  <div className="absolute inset-0 bg-green-500/10 border-2 border-green-500">
                    <div className="absolute top-1 left-1 bg-green-500 text-white px-2 py-0.5 text-xs font-mono">
                      Sidebar: 256px (w-64)
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 relative">
                  <div className="absolute inset-0 border-2 border-orange-500 bg-orange-500/10 h-[1400px]">
                    <div className="absolute top-1 left-1 bg-orange-500 text-white px-2 py-0.5 text-xs font-mono">
                      Main Content (flex-1)
                    </div>

                    {/* Infobox - 320px (w-80) */}
                    <div className="absolute top-16 right-0 w-80 h-96 bg-yellow-500/10 border-2 border-yellow-500">
                      <div className="absolute -top-6 left-0 bg-yellow-500 text-white px-2 py-0.5 text-xs font-mono">
                        Infobox: 320px (w-80)
                      </div>
                    </div>

                    {/* Title Section */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-pink-500/10 border-2 border-pink-500">
                      <div className="absolute top-1 left-1 bg-pink-500 text-white px-2 py-0.5 text-xs font-mono">
                        Title Section
                      </div>
                    </div>

                    {/* Content Sections */}
                    <div className="absolute top-24 left-0 right-80 h-32 bg-cyan-500/10 border-2 border-cyan-500">
                      <div className="absolute top-1 left-1 bg-cyan-500 text-white px-2 py-0.5 text-xs font-mono">
                        Overview Section
                      </div>
                    </div>

                    <div className="absolute top-60 left-0 right-80 h-32 bg-indigo-500/10 border-2 border-indigo-500">
                      <div className="absolute top-1 left-1 bg-indigo-500 text-white px-2 py-0.5 text-xs font-mono">
                        Production Section
                      </div>
                    </div>

                    <div className="absolute top-96 left-0 right-0 h-64 bg-emerald-500/10 border-2 border-emerald-500">
                      <div className="absolute top-1 left-1 bg-emerald-500 text-white px-2 py-0.5 text-xs font-mono">
                        Houseguests Section
                      </div>
                      
                      {/* Contestant Profile Cards */}
                      <div className="absolute top-12 left-4 right-4 h-40 bg-teal-500/10 border-2 border-teal-500">
                        <div className="absolute top-1 left-1 bg-teal-500 text-white px-2 py-0.5 text-xs font-mono">
                          Contestant Profile Card
                        </div>
                        
                        {/* Profile Image */}
                        <div className="absolute top-6 left-6 w-40 h-32 bg-rose-500/10 border-2 border-rose-500">
                          <div className="absolute top-1 left-1 bg-rose-500 text-white px-2 py-0.5 text-xs font-mono">
                            Image: 160px (w-40)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Padding Markers - Left */}
              <div className="absolute left-0 top-0 w-4 h-full bg-blue-400/30 border-r-2 border-blue-400 border-dashed">
                <div className="absolute top-1/2 -right-8 bg-blue-400 text-white px-2 py-0.5 text-xs font-mono rotate-90 origin-left">
                  px-4
                </div>
              </div>

              {/* Padding Markers - Right */}
              <div className="absolute right-0 top-0 w-4 h-full bg-blue-400/30 border-l-2 border-blue-400 border-dashed">
              </div>

              {/* Gap Marker between Sidebar and Main */}
              <div className="absolute left-[272px] top-24 w-8 h-64 bg-amber-400/30 border-2 border-amber-400 border-dashed">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-400 text-white px-2 py-0.5 text-xs font-mono whitespace-nowrap">
                  gap-8 (32px)
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-400 border-dashed">
            <div className="absolute top-4 left-2 bg-purple-400 text-white px-2 py-0.5 text-xs font-mono">
              Center
            </div>
          </div>

          {/* Horizontal Grid Lines */}
          <div className="absolute left-0 right-0 top-[100px] h-0.5 bg-gray-400/40 border-dashed"></div>
          <div className="absolute left-0 right-0 top-[200px] h-0.5 bg-gray-400/40 border-dashed"></div>
          <div className="absolute left-0 right-0 top-[400px] h-0.5 bg-gray-400/40 border-dashed"></div>
          <div className="absolute left-0 right-0 top-[600px] h-0.5 bg-gray-400/40 border-dashed"></div>
          <div className="absolute left-0 right-0 top-[800px] h-0.5 bg-gray-400/40 border-dashed"></div>
          <div className="absolute left-0 right-0 top-[1000px] h-0.5 bg-gray-400/40 border-dashed"></div>
          <div className="absolute left-0 right-0 top-[1200px] h-0.5 bg-gray-400/40 border-dashed"></div>
          <div className="absolute left-0 right-0 top-[1400px] h-0.5 bg-gray-400/40 border-dashed"></div>

          {/* Grid Measurements Legend */}
          <div className="absolute bottom-4 right-4 bg-white/95 border-2 border-gray-800 rounded-lg p-4 shadow-lg pointer-events-auto">
            <h3 className="font-bold mb-2 text-gray-900">Layout Grid Overlay</h3>
            <div className="space-y-1 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-purple-500"></div>
                <span>Canvas (1200px × 1600px)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-blue-500"></div>
                <span>Wrapper (992px)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-green-500"></div>
                <span>Sidebar (256px)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-orange-500"></div>
                <span>Main Content</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-yellow-500"></div>
                <span>Infobox (320px)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-amber-400"></div>
                <span>Gap Spacing (32px)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-blue-400"></div>
                <span>Padding (16px)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
