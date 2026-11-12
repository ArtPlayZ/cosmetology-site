const IMG = {
  p1:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
  p2:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
  p3:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
  p4:'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
  p5:'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80',
  p6:'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80',
  p7:'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80',
  p8:'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  s1:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  s2:'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80',
  s3:'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  s4:'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
  hero:'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1000&q=80',
  master:'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=80',
  a1:'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
  a2:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
  a3:'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80'
};

const PRODUCTS = [
  {id:'p1',brand:'Obagi',name:'Cleansing Gel 200 мл',skin:'жирная',concern:'акне',step:'очищение',active:'салициловая кислота',price:4200,rating:4.8,reviews:12,note:'Пенка для проблемной кожи',img:IMG.p1},
  {id:'p2',brand:'La Roche-Posay',name:'Effaclar Serum',skin:'жирная',concern:'акне',step:'сыворотка',active:'ниацинамид',price:3100,rating:4.7,reviews:23,note:'Сыворотка с AHA/BHA',img:IMG.p2},
  {id:'p3',brand:'SkinCeuticals',name:'C E Ferulic',skin:'нормальная',concern:'возраст',step:'сыворотка',active:'витамин C',price:9800,rating:4.9,reviews:8,note:'Антиоксидант',img:IMG.p3},
  {id:'p4',brand:'Medik8',name:'Crystal Retinal 3',skin:'нормальная',concern:'возраст',step:'ночной уход',active:'ретиналь',price:5600,rating:4.8,reviews:15,note:'Ночной ретиналь',img:IMG.p4},
  {id:'p5',brand:'CeraVe',name:'Moisturizing Cream',skin:'сухая',concern:'сухость',step:'увлажнение',active:'керамиды',price:1900,rating:4.6,reviews:41,note:'Крем с керамидами',img:IMG.p5},
  {id:'p6',brand:'Topicrem',name:'Hydra+ Serum',skin:'сухая',concern:'сухость',step:'сыворотка',active:'гиалуроновая кислота',price:2400,rating:4.5,reviews:19,note:'Увлажняющая сыворотка',img:IMG.p6},
  {id:'p7',brand:'Bioderma',name:'Sensibio H2O',skin:'чувствительная',concern:'покраснения',step:'очищение',active:'мицеллярная вода',price:1500,rating:4.9,reviews:67,note:'Мицеллярная вода',img:IMG.p7},
  {id:'p8',brand:'Avene',name:'Tolerance Extreme Cream',skin:'чувствительная',concern:'покраснения',step:'увлажнение',active:'пребиотики',price:2800,rating:4.7,reviews:28,note:'Крем для реактивной кожи',img:IMG.p8}
];

const SERVICES = [
  {id:'s1',name:'Чистка лица',price:4500,duration:'90 мин',desc:'Глубокая очистка пор, ультразвук + атравматичная чистка',img:IMG.s1},
  {id:'s2',name:'Пилинг PRX-T33',price:6500,duration:'60 мин',desc:'Биоревитализация без инъекций, выравнивание тона',img:IMG.s2},
  {id:'s3',name:'Микротоки',price:3500,duration:'45 мин',desc:'Лифтинг и улучшение микроциркуляции',img:IMG.s3},
  {id:'s4',name:'Карбокситерапия',price:5000,duration:'50 мин',desc:'Насыщение кислородом, улучшение цвета лица',img:IMG.s4}
];

const ARTICLES = [
  {id:'a1',title:'Как подобрать уход для жирной кожи',date:'2025-01-15',excerpt:'Разбираем этапы ухода и активные компоненты',img:IMG.a1},
  {id:'a2',title:'Ретиналь vs ретинол: что выбрать',date:'2025-01-08',excerpt:'Сравнение двух форм витамина A',img:IMG.a2},
  {id:'a3',title:'Уход после пилинга: 7 правил',date:'2024-12-20',excerpt:'Как не навредить коже в первые дни',img:IMG.a3}
];