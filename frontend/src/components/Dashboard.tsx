import React, { useState } from 'react';
import { Search, Package, FileText, BarChart3, User, Plus } from 'lucide-react';

interface StockItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  status: 'critical' | 'ok' | 'good';
  price?: string;
}

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('estoque');

  // Mock data baseado no mockup
  const stockItems: StockItem[] = [
    { id: '1', name: 'Tomato', quantity: 8, unit: 'kg', status: 'critical', price: '30.ck' },
    { id: '2', name: 'Olive Oil', quantity: 14, unit: 'L', status: 'good' },
    { id: '3', name: 'Pasta', quantity: 22, unit: 'kg', status: 'good' },
    { id: '4', name: 'Olives', quantity: 5, unit: 'kg', status: 'good' },
    { id: '5', name: 'Parmesan', quantity: 3, unit: 'kg', status: 'critical', price: '81.5k' },
    { id: '6', name: 'Flour', quantity: 18, unit: 'kg', status: 'good' },
  ];

  const filteredItems = stockItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-[#fc4b5c]';
      case 'ok': return 'bg-[#fec95f]';
      case 'good': return 'bg-[#00492c]';
      default: return 'bg-gray-400';
    }
  };

  const tabs = [
    { id: 'estoque', label: 'Exleops', icon: Package },
    { id: 'receitas', label: 'Pacitics', icon: FileText },
    { id: 'relatorios', label: 'Relagings', icon: BarChart3 },
    { id: 'perfil', label: 'Penil', icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#f4e9de]">
      {/* Header */}
      <div className="bg-[#f4e9de] pt-12 pb-6 px-4">
        <div className="max-w-md mx-auto">
          {/* Brand */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#201812] mb-1">
              GASTRONOMIA
            </h1>
            <div className="inline-block bg-[#fc4b5c] text-white px-4 py-1 text-sm font-semibold tracking-wider">
              PERIFÉRICA
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#48362b]/60" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-[#f8dad0] rounded-xl text-[#201812] placeholder-[#48362b]/60 focus:outline-none focus:border-[#fc4b5c] focus:bg-white transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* Stock Items */}
      <div className="px-4 pb-24">
        <div className="max-w-md mx-auto space-y-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-[#f8dad0]/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#201812] mb-1">
                    {item.name}
                  </h3>
                  {/* Status bar */}
                  <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getStatusColor(item.status)} rounded-full`}
                      style={{ width: item.status === 'critical' ? '30%' : '80%' }}
                    />
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-xl font-bold text-[#201812] mb-1">
                    {item.quantity} {item.unit}
                  </div>
                  {item.price && (
                    <div className="bg-[#fc4b5c] text-white text-xs px-2 py-1 rounded-full font-medium">
                      {item.price}
                    </div>
                  )}
                  {!item.price && (
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)} ml-auto`} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 bg-[#fc4b5c] hover:bg-[#e63946] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200">
        <Plus className="h-6 w-6" />
      </button>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#f8dad0]">
        <div className="max-w-md mx-auto px-4 py-2">
          <div className="flex items-center justify-around">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center py-2 px-3 transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#48362b]' 
                      : 'text-[#48362b]/60 hover:text-[#48362b]'
                  }`}
                >
                  <Icon className={`h-6 w-6 mb-1 ${isActive ? 'text-[#48362b]' : ''}`} />
                  <span className="text-xs font-medium">{tab.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-[#48362b] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

