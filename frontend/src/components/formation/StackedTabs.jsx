export const StackedTabs = ({ tabs, accentColor }) => {
  const count = tabs.length;
  return (
    <div className="relative w-full max-w-[500px] h-full max-h-[600px] min-h-[400px] flex items-end justify-center p-8">
      {tabs.map((r, i) => {
        const a = count > 4 ? 20 : 28;
        const o = (count - 1 - i) * a;
        const s = i + 1;
        const c = i === count - 1;
        return (
          <div
            key={r.label}
            className="absolute left-4 right-4 rounded-t-3xl rounded-b-2xl shadow-lg transition-all"
            style={{
              bottom: o,
              zIndex: s,
              height: c ? "75%" : "70%",
              backgroundColor: r.bgColor,
              border: `2px solid ${r.color}20`,
            }}
          >
            <div
              className={`absolute -top-11 rounded-t-2xl py-2.5 font-bold tracking-wide shadow-sm ${count > 4 ? "px-3 text-xs" : "px-6 text-sm"}`}
              style={{
                left: count > 4 ? `${4 + i * 10}%` : `${12 + i * 14}%`,
                backgroundColor: r.bgColor,
                color: r.color,
                border: `2px solid ${r.color}30`,
                borderBottom: "none",
                zIndex: s + 10,
              }}
            >
              {r.label}
            </div>
            {c && (
              <div className="p-8 pt-6 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: "#ef4444",
                    }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: "#f59e0b",
                    }}
                  />
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: "#22c55e",
                    }}
                  />
                </div>
                <div className="space-y-4 flex-1">
                  <div
                    className="h-5 rounded-full w-3/4"
                    style={{
                      backgroundColor: `${r.color}20`,
                    }}
                  />
                  <div
                    className="h-4 rounded-full w-full"
                    style={{
                      backgroundColor: `${r.color}10`,
                    }}
                  />
                  <div
                    className="h-4 rounded-full w-5/6"
                    style={{
                      backgroundColor: `${r.color}10`,
                    }}
                  />
                  <div className="h-10" />
                  <div className="grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((u) => (
                      <div
                        key={u}
                        className="h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${r.color}15`,
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-xl"
                          style={{
                            backgroundColor: `${r.color}25`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    className="h-4 rounded-full w-2/3 mt-4"
                    style={{
                      backgroundColor: `${r.color}10`,
                    }}
                  />
                </div>
                <div className="mt-auto pt-6 flex gap-3">
                  <div
                    className="h-10 flex-1 rounded-full"
                    style={{
                      backgroundColor: r.color,
                      opacity: 0.9,
                    }}
                  />
                  <div
                    className="h-10 w-10 rounded-full border-2"
                    style={{
                      borderColor: r.color,
                      opacity: 0.5,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div
        className="absolute -top-4 -right-4 w-32 h-32 rounded-full border-2 border-dashed pointer-events-none opacity-30"
        style={{
          borderColor: accentColor,
        }}
      />
      <div
        className="absolute -bottom-2 -left-2 w-20 h-20 rounded-full border-2 border-dashed pointer-events-none opacity-20"
        style={{
          borderColor: "#f59e0b",
        }}
      />
    </div>
  );
};
