import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Washing",
      title: "Стиральные машины",
      description: "Ремонт любых неисправностей стиральных машин",
      price: "от 1500 ₽",
    },
    {
      icon: "Dishwasher",
      title: "Посудомоечные машины",
      description: "Диагностика и ремонт посудомоечных машин",
      price: "от 2000 ₽",
    },
    {
      icon: "Dryer",
      title: "Сушильные машины",
      description: "Профессиональный ремонт сушильной техники",
      price: "от 1800 ₽",
    },
    {
      icon: "Microwave",
      title: "Микроволновые печи",
      description: "Быстрый ремонт микроволновых печей",
      price: "от 1200 ₽",
    },
    {
      icon: "Cooktop",
      title: "Варочные панели",
      description: "Ремонт электрических и газовых панелей",
      price: "от 2500 ₽",
    },
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличный мастер! Приехал в тот же день, быстро нашел проблему и починил стиральную машину. Рекомендую!",
      service: "Ремонт стиральной машины",
    },
    {
      name: "Михаил Иванов",
      rating: 5,
      text: "Профессионал своего дела. Посудомойка работает как новая. Гарантия на работу - большой плюс.",
      service: "Ремонт посудомоечной машины",
    },
    {
      name: "Елена Сидорова",
      rating: 5,
      text: "Вызывала мастера для ремонта микроволновки. Все сделано качественно и в срок. Спасибо!",
      service: "Ремонт микроволновой печи",
    },
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "Выезд в течение 2 часов",
      description: "Оперативная подача заявки и быстрый выезд мастера",
    },
    {
      icon: "Search",
      title: "Бесплатная диагностика",
      description: "При выполнении ремонта диагностика не оплачивается",
    },
    {
      icon: "Zap",
      title: "Срочный ремонт",
      description: "Возможность выполнения ремонта в день обращения",
    },
    {
      icon: "Shield",
      title: "Гарантия на запчасти",
      description: "Все запчасти и работы имеют официальную гарантию",
    },
    {
      icon: "User",
      title: "Индивидуальный подход",
      description: "Персональное решение для каждого клиента",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">ТехноМастер</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#prices"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Цены
              </a>
              <a
                href="#guarantees"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Гарантии
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Вызвать мастера
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ремонт бытовой техники</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Профессиональный ремонт стиральных, посудомоечных машин,
            микроволновок и варочных панелей
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge
              variant="secondary"
              className="bg-white/20 text-white hover:bg-white/30"
            >
              <Icon name="Clock" size={16} className="mr-2" />
              Выезд в течение 2 часов
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/20 text-white hover:bg-white/30"
            >
              <Icon name="Search" size={16} className="mr-2" />
              Бесплатная диагностика
            </Badge>
            <Badge
              variant="secondary"
              className="bg-white/20 text-white hover:bg-white/30"
            >
              <Icon name="Shield" size={16} className="mr-2" />
              Гарантия на работы
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Записаться на ремонт
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Наши преимущества
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={advantage.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Виды ремонта
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </span>
                    <Button variant="outline" size="sm">
                      <Icon name="Phone" size={16} className="mr-2" />
                      Вызвать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Отзывы клиентов
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className="text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">"{review.text}"</p>
                  <Badge variant="outline" className="text-xs">
                    {review.service}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices & Guarantees */}
      <section id="prices" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Prices */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Цены на услуги
              </h3>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Диагностика</span>
                      <span className="font-semibold text-green-600">
                        Бесплатно*
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Ремонт стиральной машины
                      </span>
                      <span className="font-semibold">от 1500 ₽</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Ремонт посудомоечной машины
                      </span>
                      <span className="font-semibold">от 2000 ₽</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Ремонт микроволновой печи
                      </span>
                      <span className="font-semibold">от 1200 ₽</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Ремонт варочной панели
                      </span>
                      <span className="font-semibold">от 2500 ₽</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    * При условии выполнения ремонта
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Guarantees */}
            <div id="guarantees">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Гарантии
              </h3>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon
                          name="Shield"
                          size={16}
                          className="text-green-600"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Гарантия на работы
                        </h4>
                        <p className="text-gray-600">
                          До 12 месяцев на все виды выполненных работ
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon
                          name="Package"
                          size={16}
                          className="text-green-600"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Гарантия на запчасти
                        </h4>
                        <p className="text-gray-600">
                          Официальная гарантия производителя на все запчасти
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon
                          name="FileText"
                          size={16}
                          className="text-green-600"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Документы
                        </h4>
                        <p className="text-gray-600">
                          Предоставляем все необходимые документы и чеки
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Готовы записаться на ремонт?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Оставьте заявку и мы свяжемся с вами в течение 5 минут
          </p>
          <div className="bg-white rounded-lg p-8 text-gray-900 max-w-md mx-auto">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+7 (999) 999-99-99"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Тип техники
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Стиральная машина</option>
                  <option>Посудомоечная машина</option>
                  <option>Микроволновая печь</option>
                  <option>Варочная панель</option>
                  <option>Сушильная машина</option>
                </select>
              </div>
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Записаться на ремонт
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={24} className="text-blue-400" />
                <h4 className="text-xl font-bold">ТехноМастер</h4>
              </div>
              <p className="text-gray-400">
                Профессиональный ремонт бытовой техники с гарантией качества
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-blue-400" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-blue-400" />
                  <span>Круглосуточно</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-blue-400" />
                  <span>Выезд по всему городу</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ремонт стиральных машин</li>
                <li>Ремонт посудомоечных машин</li>
                <li>Ремонт микроволновых печей</li>
                <li>Ремонт варочных панелей</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 ТехноМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
