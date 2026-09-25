import React from 'react';
import { Terminal } from 'lucide-react';

interface CodeInspectorProps {
  queryPipeline: Record<string, any>;
}

export const CodeInspector: React.FC<CodeInspectorProps> = ({ queryPipeline }) => {
  return (
    <div className="bg-zinc-950 text-emerald-400 p-5 rounded-2xl border border-zinc-800 font-mono text-xs shadow-2xl space-y-3">
      <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-2">
        <span className="flex items-center space-x-2 text-white font-bold">
          <Terminal className="w-4 h-4 text-[#E5A83B]" />
          <span>MongoDB Query Engine Inspector</span>
        </span>
        <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-300">Mongoose DB Service</span>
      </div>
      <div>
        <p className="text-zinc-500 mb-1">// Generated MongoDB Filter Query Object:</p>
        <pre className="overflow-x-auto p-3 bg-zinc-900 rounded-lg text-emerald-300 leading-relaxed border border-zinc-800">
          {JSON.stringify(queryPipeline, null, 2)}
        </pre>
      </div>
      <div className="flex justify-between text-[11px] text-zinc-500 pt-1">
        <span>Status: 200 OK</span>
        <span>Execution Time: ~14ms</span>
      </div>
    </div>
  );
};