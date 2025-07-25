import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

// Данные провинций
const provinces = [
  {
    id: 'capital-askhinia',
    name: 'Столичный округ Асхиния',
    center: 'Асхиния',
    population: 5.6,
    features: 'Столица, IT, финансы, СМИ, промышленность',
    position: 'west',
    color: '#2563EB'
  },
  {
    id: 'capital-hviney',
    name: 'Столичный округ Хвиней',
    center: 'Хвиней',
    population: 4.9,
    features: 'Главный порт, судостроение, рыболовство, ВПК, логистика',
    position: 'north',
    color: '#2563EB'
  },
  {
    id: 'central',
    name: 'Центральная провинция',
    center: 'Сармонт',
    population: 3.9,
    features: 'Тяжёлая промышленность, транспортный хаб',
    position: 'center',
    color: '#059669'
  },
  {
    id: 'eastern',
    name: 'Восточная провинция',
    center: 'Савея',
    population: 3.5,
    features: 'Технопарки, ВПК, НИОКР, IT-кластеры',
    position: 'east',
    color: '#7C2D12'
  },
  {
    id: 'western',
    name: 'Западная провинция',
    center: 'Катрианпи',
    population: 2.6,
    features: 'Промышленность (авто, робототехника), порты-спутники',
    position: 'west',
    color: '#7C2D12'
  },
  {
    id: 'southern',
    name: 'Южная провинция',
    center: 'Вега',
    population: 1.9,
    features: 'Сельское хозяйство (зерно, виноград, фрукты)',
    position: 'south',
    color: '#059669'
  },
  {
    id: 'northern',
    name: 'Северная провинция',
    center: 'Касалья',
    population: 1.4,
    features: 'Курорты, виноделие, лёгкая промышленность',
    position: 'north',
    color: '#059669'
  }
];

// Данные соседних государств
const neighbors = [
  { name: 'Кусарийская ДР', position: 'east', relation: 'конфликт', color: '#DC2626' },
  { name: 'Кальвария', position: 'south', relation: 'союзник', color: '#16A34A' },
  { name: 'Королевство Вестмарк', position: 'west', relation: 'партнёр', color: '#2563EB' },
  { name: 'Сашианийский океан', position: 'north', relation: 'водная граница', color: '#0EA5E9' }
];

// Экономические данные
const economicData = {
  gdp: '1.2 трлн сашинов',
  gdpPerCapita: '50,400 сашинов',
  population: '23.8 млн',
  budget: '360 млрд сашинов',
  growth: '+4.8%',
  unemployment: '3.1%',
  inflation: '2.8%'
};

export default function Index() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [mapMode, setMapMode] = useState<'administrative' | 'economic' | 'demographic'>('administrative');

  const selectedProvinceData = provinces.find(p => p.id === selectedProvince);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Заголовок с флагом */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-12 bg-gradient-to-r from-white via-red-600 to-blue-600 rounded-md shadow-sm flex items-center justify-center">
              <div className="text-yellow-500 text-2xl">🌾</div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Сашианийская Республика</h1>
              <p className="text-gray-600">Интерактивная карта и статистика</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая панель - Контрольная панель */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Settings" size={20} />
                  Режимы карты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    variant={mapMode === 'administrative' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setMapMode('administrative')}
                  >
                    <Icon name="MapPin" size={16} className="mr-2" />
                    Административное деление
                  </Button>
                  <Button 
                    variant={mapMode === 'economic' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setMapMode('economic')}
                  >
                    <Icon name="TrendingUp" size={16} className="mr-2" />
                    Экономические зоны
                  </Button>
                  <Button 
                    variant={mapMode === 'demographic' ? 'default' : 'outline'}
                    className="w-full justify-start"
                    onClick={() => setMapMode('demographic')}
                  >
                    <Icon name="Users" size={16} className="mr-2" />
                    Демография
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Общая статистика */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" size={20} />
                  Ключевые показатели
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">ВВП</span>
                    <span className="font-semibold">{economicData.gdp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">ВВП на душу</span>
                    <span className="font-semibold">{economicData.gdpPerCapita}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Население</span>
                    <span className="font-semibold">{economicData.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Рост ВВП</span>
                    <span className="font-semibold text-green-600">{economicData.growth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Безработица</span>
                    <span className="font-semibold">{economicData.unemployment}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Центральная часть - Карта */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Интерактивная карта</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="ZoomIn" size={16} className="mr-1" />
                      Увеличить
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Download" size={16} className="mr-1" />
                      Экспорт
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="h-full">
                <div className="relative w-full h-full bg-blue-50 rounded-lg overflow-hidden">
                  {/* SVG Карта */}
                  <svg viewBox="0 0 800 600" className="w-full h-full">
                    {/* Фон - океан */}
                    <rect width="800" height="150" fill="#0EA5E9" opacity="0.3" />
                    <text x="400" y="75" textAnchor="middle" className="fill-blue-700 text-sm font-medium">
                      Сашианийский океан
                    </text>

                    {/* Соседние государства */}
                    {/* Кусария (восток) */}
                    <rect x="650" y="150" width="150" height="300" fill="#DC2626" opacity="0.2" />
                    <text x="725" y="300" textAnchor="middle" className="fill-red-700 text-xs font-medium">
                      Кусарийская ДР
                    </text>

                    {/* Кальвария (юг) */}
                    <rect x="200" y="500" width="400" height="100" fill="#16A34A" opacity="0.2" />
                    <text x="400" y="550" textAnchor="middle" className="fill-green-700 text-xs font-medium">
                      Кальвария
                    </text>

                    {/* Вестмарк (запад) */}
                    <rect x="0" y="150" width="150" height="350" fill="#2563EB" opacity="0.2" />
                    <text x="75" y="325" textAnchor="middle" className="fill-blue-700 text-xs font-medium" transform="rotate(-90 75 325)">
                      Королевство Вестмарк
                    </text>

                    {/* Провинции Сашиании */}
                    {/* Северная провинция */}
                    <polygon 
                      points="150,150 300,150 350,200 250,200 150,180"
                      fill="#059669"
                      opacity={selectedProvince === 'northern' ? 0.8 : 0.6}
                      stroke="#047857"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedProvince('northern')}
                    />
                    <text x="225" y="175" textAnchor="middle" className="fill-white text-xs font-medium pointer-events-none">
                      Касалья
                    </text>

                    {/* Столичный округ Хвиней */}
                    <polygon 
                      points="350,150 500,150 550,200 400,200 350,170"
                      fill="#2563EB"
                      opacity={selectedProvince === 'capital-hviney' ? 0.8 : 0.6}
                      stroke="#1D4ED8"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedProvince('capital-hviney')}
                    />
                    <text x="425" y="175" textAnchor="middle" className="fill-white text-xs font-medium pointer-events-none">
                      Хвиней
                    </text>

                    {/* Западная провинция */}
                    <polygon 
                      points="150,200 250,200 300,300 200,320 150,280"
                      fill="#7C2D12"
                      opacity={selectedProvince === 'western' ? 0.8 : 0.6}
                      stroke="#92400E"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedProvince('western')}
                    />
                    <text x="200" y="250" textAnchor="middle" className="fill-white text-xs font-medium pointer-events-none">
                      Катрианпи
                    </text>

                    {/* Столичный округ Асхиния */}
                    <polygon 
                      points="300,200 400,200 450,280 350,300 300,250"
                      fill="#2563EB"
                      opacity={selectedProvince === 'capital-askhinia' ? 0.8 : 0.6}
                      stroke="#1D4ED8"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedProvince('capital-askhinia')}
                    />
                    <text x="375" y="240" textAnchor="middle" className="fill-white text-xs font-medium pointer-events-none">
                      Асхиния
                    </text>

                    {/* Центральная провинция */}
                    <polygon 
                      points="400,200 550,200 600,300 500,320 450,280"
                      fill="#059669"
                      opacity={selectedProvince === 'central' ? 0.8 : 0.6}
                      stroke="#047857"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedProvince('central')}
                    />
                    <text x="500" y="250" textAnchor="middle" className="fill-white text-xs font-medium pointer-events-none">
                      Сармонт
                    </text>

                    {/* Восточная провинция */}
                    <polygon 
                      points="550,200 650,200 650,350 600,380 550,300"
                      fill="#7C2D12"
                      opacity={selectedProvince === 'eastern' ? 0.8 : 0.6}
                      stroke="#92400E"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedProvince('eastern')}
                    />
                    <text x="600" y="275" textAnchor="middle" className="fill-white text-xs font-medium pointer-events-none">
                      Савея
                    </text>

                    {/* Южная провинция */}
                    <polygon 
                      points="200,320 350,300 500,320 550,450 300,500 200,450"
                      fill="#059669"
                      opacity={selectedProvince === 'southern' ? 0.8 : 0.6}
                      stroke="#047857"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedProvince('southern')}
                    />
                    <text x="375" y="400" textAnchor="middle" className="fill-white text-xs font-medium pointer-events-none">
                      Вега
                    </text>

                    {/* Основные города (звёздочки) */}
                    <circle cx="375" cy="240" r="4" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1" />
                    <circle cx="425" cy="175" r="3" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1" />
                    <circle cx="500" cy="250" r="3" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1" />
                  </svg>

                  {/* Легенда */}
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
                    <h4 className="font-semibold mb-2 text-sm">Легенда</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded"></div>
                        <span>Столичные округа</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-600 rounded"></div>
                        <span>Обычные провинции</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>Крупные города</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Детальная информация о выбранной провинции */}
            {selectedProvinceData && (
              <Card className="mt-4">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: selectedProvinceData.color }}
                      ></div>
                      {selectedProvinceData.name}
                    </CardTitle>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedProvince(null)}
                    >
                      <Icon name="X" size={16} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Административный центр</p>
                      <p className="font-semibold">{selectedProvinceData.center}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Население</p>
                      <p className="font-semibold">{selectedProvinceData.population} млн чел.</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Основные отрасли</p>
                      <p className="text-sm">{selectedProvinceData.features}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Нижняя панель - Вкладки с дополнительной информацией */}
        <div className="mt-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="provinces">Провинции</TabsTrigger>
              <TabsTrigger value="cities">Города</TabsTrigger>
              <TabsTrigger value="economy">Экономика</TabsTrigger>
              <TabsTrigger value="neighbors">Соседи</TabsTrigger>
              <TabsTrigger value="transport">Транспорт</TabsTrigger>
              <TabsTrigger value="demographics">Демография</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Building2" size={24} className="text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">Столица</p>
                        <p className="font-semibold">Асхиния</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Users" size={24} className="text-green-600" />
                      <div>
                        <p className="text-sm text-gray-600">Население</p>
                        <p className="font-semibold">23.8 млн</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={24} className="text-purple-600" />
                      <div>
                        <p className="text-sm text-gray-600">Площадь</p>
                        <p className="font-semibold">92,400 км²</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Calendar" size={24} className="text-orange-600" />
                      <div>
                        <p className="text-sm text-gray-600">Независимость</p>
                        <p className="font-semibold">15 авг. 1948</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="provinces" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {provinces.map((province) => (
                  <Card 
                    key={province.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedProvince(province.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-4 h-4 rounded mt-1"
                          style={{ backgroundColor: province.color }}
                        ></div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1">{province.name}</h3>
                          <p className="text-xs text-gray-600 mb-2">{province.center}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="flex items-center gap-1">
                              <Icon name="Users" size={12} />
                              {province.population} млн
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="neighbors" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {neighbors.map((neighbor, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{neighbor.name}</h3>
                          <p className="text-sm text-gray-600 capitalize">{neighbor.position}</p>
                        </div>
                        <Badge 
                          variant={neighbor.relation === 'конфликт' ? 'destructive' : 
                                   neighbor.relation === 'союзник' ? 'default' : 'secondary'}
                        >
                          {neighbor.relation}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="economy" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Icon name="TrendingUp" size={16} />
                      Основные отрасли
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• IT и электроника</li>
                      <li>• Сельское хозяйство</li>
                      <li>• Машиностроение</li>
                      <li>• Энергетика</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Icon name="ArrowUpRight" size={16} />
                      Экспорт
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Электроника</li>
                      <li>• ПО</li>
                      <li>• Продовольствие</li>
                      <li>• Машины</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Icon name="ArrowDownLeft" size={16} />
                      Импорт
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Сырьё</li>
                      <li>• Автомобили</li>
                      <li>• Энергоносители</li>
                      <li>• Химикаты</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="transport" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-gray-500">
                    <Icon name="Construction" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Детальная информация о транспортной инфраструктуре</p>
                    <p className="text-sm">Функция в разработке</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cities" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-gray-500">
                    <Icon name="Construction" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Подробная информация о крупных городах</p>
                    <p className="text-sm">Функция в разработке</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="demographics" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-gray-500">
                    <Icon name="Construction" size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Демографические показатели по регионам</p>
                    <p className="text-sm">Функция в разработке</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}