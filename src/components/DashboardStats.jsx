
function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {/* Workout Results (center heatmap style) */}
      <div className="col-span-2 bg-white rounded-3xl p-8 shadow-md flex flex-col justify-between min-h-[260px]">
        <div className="text-gray-700 text-lg font-semibold mb-4">Your Workout Results for Today</div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-700 mb-2">2.30<br />hours</div>
              <span className="text-xs text-gray-500">Activity time</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-xl font-bold text-yellow-700 mb-2">1,875<br />kcal</div>
              <span className="text-xs text-gray-500">Calories intake</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-xl font-bold text-red-500 mb-2">850<br />kcal</div>
              <span className="text-xs text-gray-500">Calories burned</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6 md:mt-0">
            <div className="flex items-center gap-2">
              <span className="w-4 h-2 rounded bg-yellow-400 inline-block"></span>
              <span className="text-xs text-gray-500">Calories intake</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-2 rounded bg-red-400 inline-block"></span>
              <span className="text-xs text-gray-500">Calories burned</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-2 rounded bg-gray-400 inline-block"></span>
              <span className="text-xs text-gray-500">Activity time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Training Days Calendar */}
      <div className="bg-[#181c23] rounded-3xl p-8 shadow-md flex flex-col min-h-[260px]">
        <div className="text-white text-lg font-semibold mb-4">Your Training Days</div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-gray-400 text-xs mb-2">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
          <div className="grid grid-cols-7 gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-black font-bold">1</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full">2</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full">3</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full">4</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-black font-bold">5</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full">6</span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full">7</span>
          </div>
        </div>
        <div className="flex gap-2 mt-4 text-xs text-gray-400">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span> Done</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span> Scheduled</span>
        </div>
      </div>

      {/* Steps for Today */}
      <div className="bg-white rounded-3xl p-8 shadow-md flex flex-col min-h-[180px] col-span-1 md:col-span-1 lg:col-span-1">
        <div className="text-gray-700 text-lg font-semibold mb-2">Steps for Today</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-gray-800">5,201</div>
            <div className="text-xs text-gray-500">Goal <span className="font-bold text-gray-700">8,500</span></div>
          </div>
          <div className="w-20 h-20 rounded-full border-4 border-red-400 flex items-center justify-center text-xl font-bold text-red-400">61%</div>
        </div>
        <button className="mt-4 text-xs text-yellow-600 font-semibold underline">Change Goal</button>
      </div>

      {/* Weight Loss Plan */}
      <div className="bg-white rounded-3xl p-8 shadow-md flex flex-col min-h-[180px] col-span-1 md:col-span-1 lg:col-span-1">
        <div className="text-gray-700 text-lg font-semibold mb-2">Weight Loss Plan</div>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">68% Completed</div>
          <div className="w-24 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-4 bg-yellow-400 rounded-full" style={{ width: '68%' }}></div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>53.2 kg</span>
          <span>50 kg</span>
        </div>
      </div>

      {/* My Habits */}
      <div className="col-span-2 bg-white rounded-3xl p-8 shadow-md flex flex-col min-h-[180px]">
        <div className="flex items-center justify-between mb-4">
          <div className="text-gray-700 text-lg font-semibold">My Habits</div>
          <button className="flex items-center gap-1 text-xs text-gray-700 font-semibold bg-yellow-400 px-3 py-1 rounded-full hover:bg-yellow-300 transition"><span>+</span> Add New</button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <div>
              <div className="font-semibold text-gray-800">Stretching</div>
              <div className="text-xs text-gray-500">Trainer: Alice McCain</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">9/12</span>
              <div className="flex gap-1">
                {[...Array(9)].map((_, i) => <span key={i} className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>)}
                {[...Array(3)].map((_, i) => <span key={i} className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>)}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <div>
              <div className="font-semibold text-gray-800">Yoga training</div>
              <div className="text-xs text-gray-500">Trainer: Jennifer Lubin</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">6/10</span>
              <div className="flex gap-1">
                {[...Array(6)].map((_, i) => <span key={i} className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>)}
                {[...Array(4)].map((_, i) => <span key={i} className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>)}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <div>
              <div className="font-semibold text-gray-800">Massage</div>
              <div className="text-xs text-gray-500">Masseur: Johnson Cooper</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">4/8</span>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => <span key={i} className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>)}
                {[...Array(4)].map((_, i) => <span key={i} className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>)}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
            <div>
              <div className="font-semibold text-gray-800">Ab exercises</div>
              <div className="text-xs text-gray-500">Sessions completed: 8/10</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">8/10</span>
              <div className="flex gap-1">
                {[...Array(8)].map((_, i) => <span key={i} className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>)}
                {[...Array(2)].map((_, i) => <span key={i} className="w-2 h-2 bg-gray-300 rounded-full inline-block"></span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;
