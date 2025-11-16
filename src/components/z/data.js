const data = {
    women: {
        name: "Женщинам",
        content: [
            {
            name: 'Одежда',
            slug: 'clothes',
            link: '',
            menuItems: [
                {name: 'Верхняя одежда',link: '',content: ''},
                {name: 'Джемперы и кардиганы',link: '',content: ''},
                {name: 'Футболки и топы',link: '',content: ''},
                {name: 'Юбки',link: '',content: ''},
                {name: 'Жакеты',link: '',content: ''},
                {name: 'Шорты',link: '',content: ''},
                {name: 'Нижнее белье',link: '',content: [
                        {n:'Бюстгальтеры', link: '', slug: 'bra'},
                        {n: "Трусы",link: '', slug: 'pants'},
                        {n: "Комплекты",link: '', slug: 'complects'},
                        {n: "Грации, корсеты, боди",link: '', slug: 'cors'},
                        {n: "Кооректирующее нижнее белье",link: '', slug: 'corrects'},
                        {n: "Чулки и колготки",link: '', slug: 'stoks'},
                        {n:"Носки",link: '', slug: 'socks'}
                    ]
                },
                {name: 'Толстовки и худи',link: '',content: ''},
                {name: 'Брюки',link: '',content: ''},
                {name: 'Рубашки и блузки',link: '',content: ''},
                {name: 'Жилеты',link: '',content: ''},
                {name: 'Купальники',link: '',content: ''},
                {name: 'Платья',link: '',content: ''},
                {name: 'Домашняя одежда',link: '',content: ''},
                {name: 'Джинсы',link: '',content: ''},
                {name: 'Костюмы',link: '',content: ''},
                {name: 'Комбинезоны',link: '',content: ''},
                {name: 'Пляжная одежда',link: '',content: ''},
            ]
        },
        {
            name: 'Обувь',
            slug: 'shoes',
            link: '',
            menuItems: [
                {name: 'Кроссовки',link: '',content: ''},
                {name: 'Ботинки',link: '',content: ''},
                {name: 'Домашняя обувь',link: '',content: ''},
                {name: 'Туфли и сандали',link: '',content: ''},
                {name: 'Босоножки и сандали',link: '',content: ''},
                {name: 'Сапоги',link: '',content: ''},
                {name: 'Ботильоны',link: '',content: ''},
                {name: 'Мокасины',link: '',content: ''},
                {name: 'Балетки',link: '',content: ''},
                {name: 'Шлепанцы',link: '',content: ''},
                {name: 'Резиновая обувь',link: '',content: ''},
                {name: 'Угги и унты',link: '',content: ''},
                {name: 'Лоферы',link: '',content: ''},
                {name: 'Сабо',link: '',content: ''},
                {name: 'Аксессуары и косметика',link: '',content: [
                        {n:'Косметика и чистящие средства', link: '', slug: 'cleaners'},
                    ]
                },
            ]
        },
        {
            name: 'Аксессуары',
            slug: 'accessories',
            link: '',
            menuItems: [
                {name: 'Наручные часы',link: '',content: ''},
                {name: 'Шарфы и платки',link: '',content: ''},
                {name: 'Урашения',link: '',content: ''},
                {name: 'Портфели',link: '',content: ''},
                {name: 'Чемоданы',link: '',content: ''},
                {name: 'Брелоки и ключи',link: '',content: ''},
                {name: 'Аксесуары для волос',link: '',content: [
                    {n:'Резинки, ободки, заколки', link: '', slug: 'clips'},
                    {n:'Расчески', link: '', slug: 'rasches'},
                ]},
                {name: 'Сумки',link: '',content: ''},
                {name: 'Перчатки и варежки',link: '',content: ''},
                {name: 'Зонты',link: '',content: ''},
                {name: 'Кошельки',link: '',content: ''},
                {name: 'Дорожные и спортивные сумки',link: '',content: ''},
                {name: 'Дорожные аксессуары',link: '',content: ''},
                {name: 'Головные уборы',link: '',content: ''},
                {name: 'Ювелирные изделия',link: '',content: ''},
                {name: 'Ремни',link: '',content: ''},
                {name: 'Взизитницы и кредитницы',link: '',content: ''},
                {name: 'Обложки для документов',link: '',content: ''},
                {name: 'Очки',link: '',content: ''},
            ]
        },
        {
            name: 'Красота',
            slug: 'beauty',
            link: '',
            menuItems: [
                {name: 'Уход для лица',link: '',content: [
                    {n:'Кремы и сыворотки', link: '', slug: 'cream'},
                    {n:'Очищение и снятие макияжа', link: '', slug: 'unMakeUP'},
                    {n:'Маски', link: '', slug: 'mask'},
                    {n:'Уход за кожей вокруг глаз', link: '', slug: 'skincare'},
                    {n:'Скрабы и пилинги', link: '', slug: 'scrab'},
                    {n:'Загар и защита от солнца', link: '', slug: 'sunProtect'},
                    {n:'Аксессуары', link: '', slug: 'accessories'},
                    {n:'Органическая косметика', link: '', slug: 'orgCosm'},
                ]},
                {name: 'Макияж',link: '',content: [
                    {n:'Для глаз', link: '', slug: 'eyes'},
                    {n:'Для лица', link: '', slug: 'face'},
                    {n:'Для губ', link: '', slug: 'lips'},
                    {n:'Для бровей', link: '', slug: 'brow'},
                    {n:'Наборы', link: '', slug: 'kit'},
                    {n:'Аксессуары', link: '', slug: 'accessories'},

                ]},
                {name: 'Уход за полостью рта',link: '',content: ''},
                {name: 'Уход для волос',link: '',content: [
                    {n:'Шампуни', link: '', slug: 'shampoo'},
                    {n:'Сухие шампуни', link: '', slug: 'dryshampoo'},
                    {n:'Ополаскиватели', link: '', slug: 'washers'},
                    {n:'Маски и сыворотки', link: '', slug: 'masks'},
                    {n:'Лаки и спреи', link: '', slug: 'sprays'},
                    {n:'Воск и паста', link: '', slug: 'wax'},
                    {n:'Гели и лосьоны', link: '', slug: 'gels'},
                    {n:'Расчески и щетки', link: '', slug: 'brush'},
                    {n:'Окрашивание', link: '', slug: 'paint'},
                ]},
                {name: 'Аксессуары и плезные устройства',link: '',content: [
                    {n:'Гаджеты', link: '', slug: 'gagets'},
                    {n:'Для макияжа', link: '', slug: 'makeup'},
                    {n:'Для волос', link: '', slug: 'forhair'},
                    {n:'Для ароматерапии', link: '', slug: 'aroma'},
                    {n:'Принадлежности для парикмахерских', link: '', slug: 'forhaircut'},
                ]},
                {name: 'Женская парфюмерия',link: '',content: ''},
                {name: 'Уход для тела',link: '',content: [
                    {n:'Для душа', link: '', slug: 'shower'},
                    {n:'Мыло', link: '', slug: 'soap'},
                    {n:'Пена, соль, масло', link: '', slug: 'foam'},
                    {n:'Крема и лосьоны', link: '', slug: 'locs'},
                    {n:'Скрабы и пилинги', link: '', slug: 'peelings'},
                    {n:'Средства для борьбы с целлюлитом', link: '', slug: 'celuls'},
                    {n:'Дезодоранты', link: '', slug: 'dizics'},
                    {n:'Загар и защита от солнца для тела', link: '', slug: 'sunblock'},
                    {n:'Депиляция', link: '', slug: 'depils'},
                    {n:'Восковая эпиляция', link: '', slug: 'waxdepil'},
                    {n:'Шугаринг', link: '', slug: 'shugaring'},
                    {n:'Уход за руками', link: '', slug: 'handcare'},
                    {n:'Уход за ногами', link: '', slug: 'legcare'},
                    {n:'Средства для интимной гигиены', link: '', slug: 'intim'},

                ]},
                {name: 'Уход за ногтями',link: '',content: ''},
                {name: 'Косметические наборы',link: '',content: ''},
            ]
        },
        {
            name: 'Спорт',
            slug: 'sport',
            link: '',
            menuItems: [
                {name: 'Одежда',link: '',content: ''},
                {name: 'Инвентарь',link: '',content: [
                    {n:'Эспандеры и кистевые тренажеры', link: '', slug: 'espanders'},
                    {n:'Маски для горнолыжного спорта и сноубординга', link: '', slug: 'skies'},
                    {n:'Туристическая посуда', link: '', slug: 'tourism'},
                    {n:'Ножи и мультитулы', link: '', slug: 'knifes'},
                    {n:'Спортивная защита', link: '', slug: 'sportdef'},
                    {n:'Аксессуары и запчасти для скейтбординга', link: '', slug: 'access'},
                    {n:'Мячи для баскетбола', link: '', slug: 'bball'},
                    {n:'Мячи для футбола', link: '', slug: 'fball'},
                ]}
            ]
        },
        {
            name: 'Электроника',
            slug: 'electr',
            link: '',
            menuItems: [
                {name: 'Мелкая техника для кухни',link: '',content: [
                    {n:'Тостеры', link: '', slug: 'tosters'},
                    {n:'Электрочайники и термопоты', link: '', slug: 'termopot'},
                ]},
                {name: 'Техника для красоты',link: '',content: ''},
                {name: 'Аксессуары для электроники',link: '',content: ''},

            ]
        },
        {
            name: 'Аптека',
            slug: 'apothecary',
            link: '',
            menuItems: [
                {name: 'Витамины и минералы',link: '',content: ''},
                {name: 'Интимные смазки',link: '',content: ''},
                {name: 'Оправы',link: '',content: ''},
                {name: 'Массажеры',link: '',content: ''},
                {name: 'Бальзамы, настойки, вытяжки, добавки',link: '',content: ''},
                {name: 'Очки',link: '',content: ''},
                {name: 'Дезинфицирующие средства',link: '',content: ''},
                {name: 'Презервативы',link: '',content: ''},
                {name: 'Аксессуары для оптики',link: '',content: ''},
                {name: 'Маски и шапочки',link: '',content: ''},

            ]
        },
        {
            name: 'Товары для взрослых',
            slug: 'adult',
            link: '',
            menuItems: [
                {name: 'Трусы для женщин',link: '',content: ''},
                {name: 'Аксессуары',link: '',content: ''},
                {name: 'Эротические корсеты, грации',link: '',content: ''},
                {name: 'Анальные стимуляторы',link: '',content: ''},
                {name: 'Бюстгалтеры',link: '',content: ''},
                {name: 'Интимная косметика и парфюмерия',link: '',content: ''},
                {name: 'Эротические стимуляторы',link: '',content: ''},
                {name: 'Сувениры',link: '',content: ''},
                {name: 'Боди, комбинезоны',link: '',content: ''},
                {name: 'Вибраторы',link: '',content: ''},
                {name: 'Эротические колготки и чулки',link: '',content: ''},
            ]
        },
        {
            name: 'Интерьер',
            slug: 'intrerior',
            link: '',
            menuItems: [
                {name: 'Посуда',link: '',content: [
                    {n:'Кружки, блюдца и пары', link: '', slug: 'cups'},
                    {n:'Термосы и термокружки', link: '', slug: 'termocups'},
                    {n:'Кувшины и графины', link: '', slug: 'pots'},
                    {n:'Подносы', link: '', slug: 'servers'},
                    {n:'Крышки', link: '', slug: 'caps'},
                    {n:'Бутылки для напитков', link: '', slug: 'bottles'},
                    {n:'Контейры и ланч-боксы', link: '', slug: 'containers'},
                ]},
                {name: 'Декор',link: '',content: [
                    {n:'Кратины, потсеры, гобелены, пано', link: '', slug: 'paints'},
                    {n:'Статуэтки и фигурки', link: '', slug: 'statues'},
                    {n:'Вазы', link: '', slug: 'vases'},
                ]},
                {name: 'Тескстиль',link: '',content: [
                    {n:'Полотенца', link: '', slug: 'towels'},
                    {n:'Комплекты', link: '', slug: 'kits'},
                    {n:'Одеяла', link: '', slug: 'blancket'},
                    {n:'Подушки', link: '', slug: 'pillow'},
                    {n:'Ковры и ковровые дорожки', link: '', slug: 'carpet'},
                ]},
                {name: 'Хозяйственные товары',link: '',content: [
                    {n:'Чехлы для одежды', link: '', slug: 'cases'},
                ]},
                {name: 'Декоративные свечи',link: '',content: ''},
                {name: 'Ароматы свечи',link: '',content: ''},
            ]
        },
        {
            name: 'Хобби',
            slug: 'hobby',
            link: '',
            menuItems: [
                {name: 'Товары для праздников',link: '',content: [
                    {n:'Подарочные наборы', link: '', slug: 'giftkits'},
                    {n:'Кранавальные костюмы', link: '', slug: 'carnavals'},
                    {n:'Дипломы, медали, значки', link: '', slug: 'badges'},

                ]},
                {name: 'Букинистика',link: '',content: ''},
                {name: 'Игры для компаний',link: '',content: [
                    {n:'Настольные игры', link: '', slug: 'tablegames'},
                    {n:'Цифровые и подарочные сертификаты', link: '', slug: 'sertifs'},

                ]},
                {name: 'Журналы и газеты',link: '',content: ''},
                {name: 'Книги',link: '',content: [
                    {n:'Литература на иностранных языках', link: '', slug: 'foreignlang'},
                    {n:'Нехудожественная литература', link: '', slug: 'litriture'},

                ]},
                {name: 'Флаги и гербы',link: '',content: ''},

            ]
        },
    ]
    },
    men: {
        name: "Мужчинам",
        content: [
            {
                name: 'Одежда',
                slug: 'clothes',
                link: '',
                menuItems: [
                    {name: 'Верхняя одежда',link: '',content: ''},
                    {name: 'Домашняя одежда',link: '',content: ''},
                    {name: 'Толстовки и худи',link: '',content: ''},
                    {name: 'Пиджаки',link: '',content: ''},
                    {name: 'Плавки и шорты',link: '',content: ''},
                    {name: 'Нижнее белье',link: '',content: [
                        {n: "Трусы",link: '', slug: 'pants'},
                        {n: "Кольсоны",link: '', slug: 'complects'},
                        {n:"Носки",link: '', slug: 'socks'}
                        ]
                    },
                    {name: 'Джинсы',link: '',content: ''},
                    {name: 'Джемпреры и кардиганы',link: '',content: ''},
                    {name: 'Жилеты',link: '',content: ''},
                    {name: 'Футболки и лонгсливы',link: '',content: ''},
                    {name: 'Брюки',link: '',content: ''},
                    {name: 'Рубашки',link: '',content: ''},
                    {name: 'Шорты',link: '',content: ''},
                ]
            },
            {
                name: 'Обувь',
                slug: 'shoes',
                link: '',
                menuItems: [
                    {name: 'Кроссовки',link: '',content: ''},
                    {name: 'Резиновая обувь',link: '',content: ''},
                    {name: 'Лоферы',link: '',content: ''},
                    {name: 'Аксессуары и косметика',link: '',content: [
                        {n:'Косметика и чистящие средства', link: '', slug: 'cleaners'},
                        ]
                    },
                    {name: 'Ботинки',link: '',content: ''},
                    {name: 'Домашняя обувь',link: '',content: ''},
                    {name: 'Мокасины и слипоны',link: '',content: ''},
                    {name: 'Сапоги',link: '',content: ''},
                    {name: 'Туфли',link: '',content: ''},
                    {name: 'Сандали',link: '',content: ''},
                ]
            },
            {
                name: 'Аксессуары',
                slug: 'accessories',
                link: '',
                menuItems: [
                    {name: 'Наручные часы',link: '',content: ''},
                    {name: 'Шарфы',link: '',content: ''},
                    {name: 'Урашения',link: '',content: ''},
                    {name: 'Галстуки',link: '',content: ''},
                    {name: 'Взизитницы и кредитницы',link: '',content: ''},
                    {name: 'Обложки для документов',link: '',content: ''},
                    {name: 'Очки',link: '',content: ''},
                    {name: 'Сумки и рюкзаки',link: '',content: ''},
                    {name: 'Перчатки и варежки',link: '',content: ''},
                    {name: 'Зонты',link: '',content: ''},
                    {name: 'Портфели',link: '',content: ''},
                    {name: 'Чемоданы',link: '',content: ''},
                    {name: 'Брелоки и ключницы',link: '',content: ''},
                    {name: 'Головные уборы',link: '',content: ''},
                    {name: 'Ювелирные изделия',link: '',content: ''},
                    {name: 'Ремни',link: '',content: ''},
                    {name: 'Кошельки',link: '',content: ''},
                    {name: 'Дорожные и спортивные сумки',link: '',content: ''},
                    {name: 'Дорожные аксессуары',link: '',content: ''},
                ]
            },
            {
                name: 'Спорт',
                slug: 'sport',
                link: '',
                menuItems: [
                    {name: 'Одежда',link: '',content: ''},
                    {name: 'Инвентарь',link: '',content: [
                        {n:'Эспандеры и кистевые тренажеры', link: '', slug: 'espanders'},
                        {n:'Маски для горнолыжного спорта и сноубординга', link: '', slug: 'skies'},
                        {n:'Туристическая посуда', link: '', slug: 'tourism'},
                        {n:'Ножи и мультитулы', link: '', slug: 'knifes'},
                        {n:'Спортивная защита', link: '', slug: 'sportdef'},
                        {n:'Аксессуары и запчасти для скейтбординга', link: '', slug: 'access'},
                        {n:'Мячи для баскетбола', link: '', slug: 'bball'},
                        {n:'Мячи для футбола', link: '', slug: 'fball'},
                    ]}
                ]
            },
            {
                name: 'Красота',
                slug: 'beauty',
                link: '',
                menuItems: [
                    {name: 'Уход для лица',link: '',content: [
                        {n:'Косметика и средства для бритья', link: '', slug: 'cream'},
                        {n:'Уход за кожей вокруг глаз', link: '', slug: 'skincare'},
                        {n:'Загар и защита от солнца', link: '', slug: 'sunProtect'},
                        {n:'Средства для бритья', link: '', slug: 'shave'},
                        {n:'Органическая косметика', link: '', slug: 'orgCosm'},
                    ]},
                    {name: 'Аксессуары и полезные устройства',link: '',content: [
                        {n:'Для бритья', link: '', slug: 'shave'},
                        {n:'Расческии щетки для бороды', link: '', slug: 'face'},
                        {n:'Принадлежности для парикмахерских', link: '', slug: 'forhaircut'},
    
                    ]},
                    {name: 'Уход для волос',link: '',content: [
                        {n:'Шампуни', link: '', slug: 'shampoo'},
                        {n:'Ополаскиватели', link: '', slug: 'washers'},
                        {n:'Маски', link: '', slug: 'masks'},
                        {n:'Лаки и спреи', link: '', slug: 'sprays'},
                        {n:'Воск и паста', link: '', slug: 'wax'},
                        {n:'Гели и лосьоны', link: '', slug: 'gels'},
                        {n:'Мусс и пенка', link: '', slug: 'muss'},
                        {n:'Окрашивание', link: '', slug: 'paint'},
                    ]},
                    {name: 'Уход за полостью рта',link: '',content: ''},
                    {name: 'Уход для тела',link: '',content: [
                        {n:'Для душа', link: '', slug: 'shower'},
                        {n:'Мыло', link: '', slug: 'soap'},
                        {n:'Пена, соль, масло', link: '', slug: 'foam'},
                        {n:'Крема и лосьоны', link: '', slug: 'locs'},
                        {n:'Загар и защита от солнца для тела', link: '', slug: 'sunblock'},
                        {n:'Депиляция', link: '', slug: 'depils'},
                        {n:'Уход за руками', link: '', slug: 'handcare'},
                        {n:'Уход за ногами', link: '', slug: 'legcare'},
                        {n:'Средства для интимной гигиены', link: '', slug: 'intim'},
    
                    ]},
                    {name: 'Мужская парфюмерия',link: '',content: ''},
                ]
            },
            {
                name: 'Электроника',
                slug: 'electr',
                link: '',
                menuItems: [
                    {name: 'Мелкая техника для кухни',link: '',content: [
                        {n:'Тостеры', link: '', slug: 'tosters'},
                        {n:'Электрочайники и термопоты', link: '', slug: 'termopot'},
                    ]},
                    {name: 'Техника для красоты',link: '',content: ''},
                    {name: 'Аксессуары для электроники',link: '',content: ''},
    
                ]
            },
            {
                name: 'Аптека',
                slug: 'apothecary',
                link: '',
                menuItems: [
                    {name: 'Витамины и минералы',link: '',content: ''},
                    {name: 'Интимные смазки',link: '',content: ''},
                    {name: 'Оправы',link: '',content: ''},
                    {name: 'Массажеры',link: '',content: ''},
                    {name: 'Бальзамы, настойки, вытяжки, добавки',link: '',content: ''},
                    {name: 'Очки',link: '',content: ''},
                    {name: 'Дезинфицирующие средства',link: '',content: ''},
                    {name: 'Презервативы',link: '',content: ''},
                    {name: 'Аксессуары для оптики',link: '',content: ''},
                    {name: 'Маски и шапочки',link: '',content: ''},
    
                ]
            },
            {
                name: 'Дом',
                slug: 'intrerior',
                link: '',
                menuItems: [
                    {name: 'Посуда',link: '',content: [
                        {n:'Кружки, блюдца и пары', link: '', slug: 'cups'},
                        {n:'Термосы и термокружки', link: '', slug: 'termocups'},
                        {n:'Кувшины и графины', link: '', slug: 'pots'},
                        {n:'Подносы', link: '', slug: 'servers'},
                        {n:'Крышки', link: '', slug: 'caps'},
                        {n:'Бутылки для напитков', link: '', slug: 'bottles'},
                        {n:'Контейры и ланч-боксы', link: '', slug: 'containers'},
                    ]},
                    {name: 'Декор',link: '',content: [
                        {n:'Кратины, потсеры, гобелены, пано', link: '', slug: 'paints'},
                        {n:'Статуэтки и фигурки', link: '', slug: 'statues'},
                        {n:'Вазы', link: '', slug: 'vases'},
                    ]},
                    {name: 'Тескстиль',link: '',content: [
                        {n:'Полотенца', link: '', slug: 'towels'},
                        {n:'Комплекты', link: '', slug: 'kits'},
                        {n:'Одеяла', link: '', slug: 'blancket'},
                        {n:'Подушки', link: '', slug: 'pillow'},
                        {n:'Ковры и ковровые дорожки', link: '', slug: 'carpet'},
                    ]},
                    {name: 'Хозяйственные товары',link: '',content: [
                        {n:'Чехлы для одежды', link: '', slug: 'cases'},
                    ]},
                    {name: 'Декоративные свечи',link: '',content: ''},
                    {name: 'Ароматы для дома',link: '',content: ''},
                ]
            },
            {
                name: 'Хобби',
                slug: 'hobby',
                link: '',
                menuItems: [
                    {name: 'Товары для праздников',link: '',content: [
                        {n:'Подарочные наборы', link: '', slug: 'giftkits'},
                        {n:'Кранавальные костюмы', link: '', slug: 'carnavals'},
                        {n:'Дипломы, медали, значки', link: '', slug: 'badges'},
    
                    ]},
                    {name: 'Букинистика',link: '',content: ''},
                    {name: 'Игры для компаний',link: '',content: [
                        {n:'Настольные игры', link: '', slug: 'tablegames'},
                        {n:'Цифровые и подарочные сертификаты', link: '', slug: 'sertifs'},
    
                    ]},
                    {name: 'Журналы и газеты',link: '',content: ''},
                    {name: 'Книги',link: '',content: [
                        {n:'Литература на иностранных языках', link: '', slug: 'foreignlang'},
                        {n:'Нехудожественная литература', link: '', slug: 'litriture'},
    
                    ]},
                    {name: 'Флаги и гербы',link: '',content: ''},
    
                ]
            },
            {
                name: 'Товары для взрослых',
                slug: 'adult',
                link: '',
                menuItems: [
                    {name: 'Эротические трусы для мужчин',link: '',content: ''},
                    {name: 'Сувениры',link: '',content: ''},
                ]
            },
        ]
    },
    kids: {
        name: "Детям",
        content: [
            {
                name: 'Для девочек',
                slug: 'girls',
                link: '',
                menuItems: [
                    {name: 'Врехняя одежда',link: '',content: ''},
                    {name: 'Брюки',link: '',content: ''},
                    {name: 'Спортивная одежда',link: '',content: [
                        {n:'Куртки', link: '', slug: 'coat'},
                        {n:'Толстовки', link: '', slug: 'sweat'},
                        {n:'Футболки и топы', link: '', slug: 'tops'},
                        {n:'Спортивные костюмы', link: '', slug: 'sportcost'},
                        {n:'Брюки', link: '', slug: 'trous'},
                        {n:'Шорты и юбки', link: '', slug: 'shorts'},
                        {n:'Аксессуары', link: '', slug: 'access'},

                    ]},
                    {name: 'Худи исвитшоты',link: '',content: ''},
                    {name: 'Футболки и топы',link: '',content: ''},
                    {name: 'Комплекты и форма',link: '',content: ''},
                    {name: 'Платья',link: '',content: ''},
                    {name: 'Домашяя одежда и белье',link: '',content: [
                        {n:'Домашяя одежда', link: '', slug: 'home'},
                        {n:'Колготки', link: '', slug: 'legs'},
                    ]},
                    {name: 'Для Школы',link: '',content: [
                        {name: 'Платья и сарафаны',link: '',content: 'dress'},
                        {name: 'Брюки',link: '',content: 'trous'},
                        {name: 'Жилеты',link: '',content: 'jils'},
                        {name: 'Обувь',link: '',content: 'shoes'},
                    ]},    
                ]
            },
            {
                name: 'Для мальчиков',
                slug: 'boys',
                link: '',
                menuItems: [
                    {name: 'Врехняя одежда',link: '',content: ''},
                    {name: 'Футболки и лонгсливы',link: '',content: ''},
                    {name: 'Домашяя одежда и белье',link: '',content: [
                        {n:'Домашяя одежда', link: '', slug: 'home'},
                        {n:'Колготки', link: '', slug: 'legs'},
                    ]},
                    {name: 'Шорты',link: '',content: ''},
                    {name: 'Свитеры и кардиганы',link: '',content: ''},
                    {name: 'Брюки',link: '',content: ''},
                    {name: 'Комплекты',link: '',content: ''},
                    {name: 'Худи и сввитшоты',link: '',content: ''},
                    {name: 'Спортивная одежда',link: '',content: [
                        {n:'Куртки', link: '', slug: 'coat'},
                        {n:'Толстовки', link: '', slug: 'sweat'},
                        {n:'Футболки', link: '', slug: 'tops'},
                        {n:'Спортивные костюмы', link: '', slug: 'sportcost'},
                        {n:'Брюки', link: '', slug: 'trous'},
                        {n:'Шорты', link: '', slug: 'shorts'},
                        {n:'Аксессуары', link: '', slug: 'access'},
                    ]},                    
                    {name: 'Для Школы',link: '',content: [
                        {name: 'Брюки',link: '',content: 'trous'},
                        {name: 'Жилеты',link: '',content: 'jils'},
                        {name: 'Комплекты и форма',link: '',content: 'dress'},
                        {name: 'Джемперы и кардиганы',link: '',content: 'dress'},
                        {name: 'Обувь',link: '',content: 'shoes'},
                    ]},    
                ]
            },
            {
                name: 'Для малышей',
                slug: 'babies',
                link: '',
                menuItems: [
                    {name: 'Врехняя одежда',link: '',content: ''},
                    {name: 'Свитеры и кардиганы',link: '',content: ''},
                    {name: 'Платья',link: '',content: ''},
                    {name: 'Брюки и шорты',link: '',content: ''},
                    {name: 'Комбинезоны',link: '',content: ''},
                    {name: 'Футболки и рубашки',link: '',content: ''},
                    {name: 'Боди',link: '',content: ''},
                    {name: 'Обувь',link: '',content: ''},
                    {name: 'Комплекты',link: '',content: ''},
                    {name: 'Домашяя одежда и белье',link: '',content: [
                        {n:'Колготки', link: '', slug: 'legs'},
                        {n:'Домашяя одежда', link: '', slug: 'home'},
                    ]},
                    {name: 'Распашонки',link: '',content: ''},
                    {name: 'Игрушки',link: '',content: [
                        {n:'Развивающие и обучающие игрушки', link: '', slug: 'enhanceNeduc'},
                        {n:'Развивающие игрушки', link: '', slug: 'educ'},
                        {n:'Развитие мелкой моторики', link: '', slug: 'motion'},
                        {n:'Пирамидки', link: '', slug: 'pyramids'},
                    ]},
                ]
            },
            {
                name: 'Обувь',
                slug: 'shoes',
                link: '',
                menuItems: [
                    {name: 'Кроссовки и кеды',link: '',content: ''},
                    {name: 'Босонжки, сандалии, шлепанцы',link: '',content: ''},
                    {name: 'Ботинки',link: '',content: ''},
                    {name: 'Аксессуары',link: '',content: ''},
                    {name: 'Резиновая обувь',link: '',content: ''}
                ]
            },
            {
                name: 'Аксессуары',
                slug: 'acces',
                link: '',
                menuItems: [
                    {name: 'Головные уборы',link: '',content: [
                        {n:'Для мальчиков', link: '', slug: 'boys'},
                        {n:'Для малышей', link: '', slug: 'babies'},
                    ]},
                    {name: 'Аксессуары для волос',link: '',content: ''},
                    {name: 'Шарфы, перчатки и варежки',link: '',content: ''},
                    {name: 'Солнцезащитные очки',link: '',content: ''},
                    {name: 'Сумки и рюкзаки',link: '',content: ''},
                ]
            },
        ]
    }
}

export default data