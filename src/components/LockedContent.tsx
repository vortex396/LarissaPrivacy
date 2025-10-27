import React from 'react';
import { Lock } from 'lucide-react';

export function LockedContent() {
  return (
    <div className="bg-white min-h-[50vh] flex items-center justify-center p-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-100 to-red-100 rounded-full mb-6">
          <Lock className="w-10 h-10 text-pink-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Conteúdo Bloqueado</h3>
        <p className="text-gray-600 mb-6 max-w-md">
          Este recurso está temporariamente indisponível. Em breve você terá acesso a ainda mais conteúdo exclusivo!
        </p>
        <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-6 border border-pink-200">
          <p className="text-sm text-gray-700 font-medium">
            🔒 Aguarde novidades incríveis chegando em breve
          </p>
        </div>
      </div>
    </div>
  );
}
