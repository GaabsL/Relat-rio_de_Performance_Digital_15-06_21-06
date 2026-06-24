export const initialReportData = {
  header: {
    title: "Performance Digital Semanal",
    subtitle: "Dominar a atenção e personalizar valor no ecossistema Assaí.",
    period: "15 a 21 de Junho de 2026"
  },
  general: {
    engagement: { value: "2,68%", prev: "1,78%", growth: "+50,56%", isPositive: true },
    publications: { value: 50, prev: 72, growth: "-30,56%", isPositive: false },
    followers: { value: "6.398.456", prev: "6.392.110", growth: "+0,10%", isPositive: true },
    impressions: { value: "2.841.811", prev: "4.429.618", growth: "-35,85%", isPositive: false },
    interactions: { value: "72.032", prev: "61.060", growth: "+17,97%", isPositive: true },
  },
  channels: [
    {
      id: "facebook",
      name: "Facebook",
      icon: "Facebook",
      color: "bg-blue-600",
      textColor: "text-blue-600",
      metrics: {
        engagement: { value: "1,51%", prev: "0,79%", growth: "+91,14%", isPositive: true },
        followers: { value: "1.838.576", growth: "+0,02%", isPositive: true },
        pubs: { value: 8, prev: 12, growth: "-33,33%", isPositive: false },
        impressions: { value: "79.586", prev: "170.802", growth: "-53,40%", isPositive: false },
        interactions: { value: "783", prev: "1.115", growth: "-29,78%", isPositive: false }
      }
    },
    {
      id: "instagram-feed",
      name: "Instagram (Feed)",
      icon: "Instagram",
      color: "bg-pink-600",
      textColor: "text-pink-600",
      metrics: {
        engagement: { value: "1,17%", prev: "1,36%", growth: "-13,97%", isPositive: false },
        followers: { value: "4.452.025", growth: "+0,19%", isPositive: true },
        pubs: { value: 15, prev: 18, growth: "-16,67%", isPositive: false },
        impressions: { value: "997.364", prev: "1.442.158", growth: "-30,84%", isPositive: false },
        interactions: { value: "9.368", prev: "16.426", growth: "-42,97%", isPositive: false }
      }
    },
    {
      id: "instagram-stories",
      name: "Instagram (Stories)",
      icon: "Instagram",
      color: "bg-orange-500",
      textColor: "text-orange-500",
      metrics: {
        engagement: { value: "4,50%", prev: "2,30%", growth: "+95,65%", isPositive: true },
        followers: { value: "4.452.025", growth: "+0,19%", isPositive: true },
        pubs: { value: 17, prev: 32, growth: "-46,88%", isPositive: false },
        impressions: { value: "1.486.745", prev: "1.990.524", growth: "-25,31%", isPositive: false },
        interactions: { value: "58.886", prev: "36.899", growth: "+59,59%", isPositive: true }
      }
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: "Video",
      color: "bg-black",
      textColor: "text-black",
      metrics: {
        engagement: { value: "3,54%", prev: "2,74%", growth: "+29,20%", isPositive: true },
        followers: { value: "111.600", growth: "+1,44%", isPositive: true },
        pubs: { value: 10, prev: 10, growth: "0,00%", isPositive: true },
        impressions: { value: "278.116", prev: "826.134", growth: "-66,34%", isPositive: false },
        interactions: { value: "2.995", prev: "6.620", growth: "-54,76%", isPositive: false }
      }
    }
  ],
  behavior: {
    categories: [
      { name: "OFERTAS", percentage: 29.79, interactionPercentage: 73.89, color: "bg-orange-500" },
      { name: "RELACIONAL", percentage: 31.91, interactionPercentage: 9.85, color: "bg-rose-400" },
      { name: "FACILIDADES", percentage: 23.40, interactionPercentage: 11.40, color: "bg-emerald-600" },
      { name: "INFLUENCIADOR", percentage: 8.51, interactionPercentage: 2.81, color: "bg-violet-500" },
      { name: "INSTITUCIONAL", percentage: 6.38, interactionPercentage: 2.06, color: "bg-blue-600" }
    ],
    formats: [
      {
        channel: "Insight Comercial",
        desc: "Conectar ofertas de grande volume ao senso de urgência de eventos culturais e esportivos (Copa e São João) maximiza a intenção de compra imediata do cliente. O uso de gatilhos promocionais atrelados a vantagens reais no aplicativo converte a audiência das redes em clientes ativos e recorrentes no ecossistema próprio."
      },
      {
        channel: "Facebook",
        desc: "A plataforma quase dobrou o seu engajamento médio da semana anterior ao atingir 1,51% (+91,14%), impulsionada pela alta relevância da grade de conteúdo. O formato Carrossel aplicado a dicas temáticas de receitas juninas foi o grande campeão de conversão e envolvimento orgânico no feed (3,63%)."
      },
      {
        channel: "Instagram Feed",
        desc: "O formato Reels foi o grande motor de visibilidade orgânica da marca, com destaque para as parcerias com grandes influenciadores do mercado nacional. Conteúdos baseados em entretenimento reativo (como palpites de jogos de futebol) geraram forte conexão comunitária e uma alta taxa de comentários (3,39%)."
      },
      {
        channel: "Instagram Stories",
        desc: "Consolidou-se como a ferramenta mais agressiva de conversão da semana, sustentando picos históricos de engajamento de 16,27% em ofertas e 11,07% no pós-jogo. Apresentou excelente eficiência no direcionamento de tráfego digital direto através de respostas rápidas, cliques em links e atração de visitas ao perfil."
      },
      {
        channel: "TikTok",
        desc: "A rede concentrou quase a totalidade das suas visualizações no post de patrocínio (268 mil views), embora tenha registrado um engajamento relativo baixo de 0,98%. A verdadeira profundidade de engajamento foi ancorada em conteúdos humanizados e nativos com funcionários, que alcançaram estabilidade próxima a 5%."
      }
    ]
  },
  followerTimeline: [
    { date: "25/05", facebook: 1838500, instagram: 4432000, tiktok: 108600, total: 6379100 },
    { date: "26/05", facebook: 1838520, instagram: 4432500, tiktok: 108700, total: 6379720 },
    { date: "27/05", facebook: 1838540, instagram: 4433000, tiktok: 108850, total: 6380390 },
    { date: "28/05", facebook: 1838580, instagram: 4433500, tiktok: 109000, total: 6381080 },
    { date: "29/05", facebook: 1838600, instagram: 4434000, tiktok: 109150, total: 6381750 },
    { date: "30/05", facebook: 1838620, instagram: 4434500, tiktok: 109300, total: 6382420 },
    { date: "31/05", facebook: 1838642, instagram: 4434974, tiktok: 109412, total: 6383028 },
  ],
  highlights: [
    {
      network: "Instagram Stories",
      date: "02/06",
      title: "Alerta ta mais Barato!",
      eng: "19,5%",
      interactions: "17.980",
      type: "Ofertas",
      color: "border-orange-500",
      image: "https://i.imgur.com/PH45B36.png"
    },
    {
      network: "Facebook",
      date: "06/06",
      title: "Funcionário de loja | Copos da Torcida!",
      eng: "1,36%",
      interactions: "180",
      link: "https://www.facebook.com/reel/1515008893456599",
      type: "Ofertas",
      color: "border-blue-600",
      image: "https://i.imgur.com/BGgSojm.png"
    },
    {
      network: "Instagram Feed",
      date: "05/06",
      title: "Churrascômetro Assaí!",
      eng: "2,01%",
      interactions: "1.549",
      link: "https://www.instagram.com/p/DZM8b2JkR_X/",
      type: "Facilidade",
      color: "border-pink-600",
      image: "https://i.imgur.com/XZWo2IO.png"
    },
    {
      network: "TikTok",
      date: "05/06",
      title: "Funcionário de loja | Copa da Torcida!",
      eng: "4,31%",
      interactions: "116",
      link: "https://www.tiktok.com/@assaiatacadistaoficial/video/7647880123470990612",
      type: "Relacional",
      color: "border-black",
      image: "https://i.imgur.com/xQI5Mdn.png"
    }
  ],
  insights: [
    {
      title: "Acontecimento da Semana",
      desc: "O grande marco do período foi o forte impacto gerado pelas ativações de Real-Time Marketing integradas às festividades juninas e à febre do futebol (\"Copa Junina\" e \"Copa da Torcida\"), que impulsionaram massivamente o alcance multiplataforma da marca. Esse fenômeno é evidenciado pelo pico de visibilidade do patrocínio \"Casa do Patrão\" no TikTok, que conquistou mais de 268 mil visualizações, bem como pela força da collab com o apresentador Rodrigo Faro associada ao iFood no Instagram, que ultrapassou a marca de 97 mil usuários alcançados de forma orgânica. Adicionalmente, as publicações táticas veiculadas nos momentos exatos dos jogos da seleção, como os conteúdos de celebração (\"Parabéns à seleção\" e o \"Pós-jogo\"), registraram taxas de engajamento excepcionais de até 16,27%, provando que a marca conseguiu se posicionar com precisão no centro da atenção digital do consumidor.",
      icon: "Users",
      type: "neutral"
    },
    {
      title: "Estratégias de Sucesso",
      desc: "As estratégias que demonstraram maior eficácia envolveram o uso inteligente de formatos interativos associados a apelos promocionais de alto valor prático e à humanização corporativa. A postagem \"Abasteça o seu comércio\" despontou como o grande sucesso da semana ao atingir uma taxa histórica de 16,27% de engajamento no ecossistema Meta, validando a eficácia de conteúdos direcionados à conversão e ao suporte real ao microempreendedor. Paralelamente, o formato Carrossel aplicado a dicas temáticas juninas e a continuidade dos vídeos estrelados por colaboradores internos (como a Josy) no TikTok garantiram um envolvimento próximo aos 5%, consolidando a premissa de que a união entre a utilidade comercial e a proximidade humana forma a base do sucesso orgânico nas redes atuais.",
      icon: "TrendingUp",
      type: "positive"
    },
    {
      title: "Alerta",
      desc: "O principal ponto de atenção para a marca reside na disparidade crítica observada entre o alcance bruto gerado por grandes investimentos/patrocínios e a taxa real de envolvimento qualificado obtida junto à audiência. O maior exemplo desse gap ocorreu no TikTok, plataforma onde a linha editorial de Patrocínio (\"Casa do Patrão\") capturou a expressiva marca de 268.740 visualizações, porém amargou o menor índice de engajamento proporcional da semana, fixado em apenas 0,98%. Este cenário serve como um alerta claro de que produzir conteúdos de grande distribuição sem mecanismos internos de interação pode gerar métricas de vaidade vazias, reforçando a necessidade urgente de embutir chamadas para ação (CTAs) mais agressivas, perguntas interativas ou dinâmicas que forcem o usuário a deixar de ser um espectador passivo.",
      icon: "AlertOctagon",
      type: "negative"
    },
    {
      title: "Correlação com o Mercado",
      desc: "A performance desta semana reflete com precisão as tendências contemporâneas do mercado de varejo e Social Commerce, no qual o sucesso das marcas está diretamente atrelado à agilidade em se conectar à cultura popular e ao entretenimento focado na comunidade. O excelente desempenho obtido através de enquetes de palpites de jogos e posts reativos imediatos demonstra que o consumidor moderno exige do grande atacado uma postura dinâmica de entretenimento digital, rejeitando a tradicional panfletagem estática de ofertas. Ao fundir a tradição do São João com a paixão nacional pelo futebol, a empresa conseguiu ocupar um espaço valioso na mente do consumidor (share of mind), neutralizando a concorrência em um momento em que a atenção digital na internet se encontra altamente inflacionada e disputada.",
      icon: "Target",
      type: "neutral"
    },
    {
      title: "Foco para Próximas Produções",
      desc: "Para os próximos ciclos, as produções devem focar prioritariamente no desenvolvimento de conteúdos híbridos que unam o poder de conversão de ofertas diretas com dinâmicas de gamificação e benefícios tangíveis ao usuário. É recomendável expandir de imediato a linha editorial de produtos colecionáveis e vantagens exclusivas (\"Copos exclusivos\"), que provou atrair forte engajamento, integrando essa temática em formatos de Reels e vídeos curtos conduzidos pelos próprios colaboradores locais para manter a humanização ativa. Por fim, faz-se indispensável quebrar a rigidez do calendário de publicações, programando conteúdos de ofertas e facilidades para os horários que sucedem imediatamente os grandes eventos culturais e esportivos, transformando os picos sazonais de tráfego em downloads estáveis no aplicativo da marca.",
      icon: "Lightbulb",
      type: "focus"
    }
  ],
  blog: {
    sessions: "11.062",
    avgTime: "31s",
    engagement: "55,41%",
    topArticles: [
      { path: "/blog/comidas-tipicas-sao-joao", sessions: "1.054", engagement: "47,82%" },
      { path: "/blog/copos-da-torcida", sessions: "855", engagement: "49,59%" },
      { path: "/blog/casal-torcedor", sessions: "618", engagement: "39,32%" },
      { path: "/blog/comidas-de-festa-junina", sessions: "489", engagement: "47,24%" },
      { path: "/blog/cortesia-de-aniversario", sessions: "386", engagement: "47,67%" }
    ]
  },
  marketTrends: [
    { title: 'Aceleração Digital e Retail Media no Atacarejo', desc: 'As grandes redes de atacarejo consolidaram seus investimentos em plataformas digitais e aplicativos proprietários para transformar o comportamento de compra do microempreendedor B2B. A grande movimentação do setor gira em torno do amadurecimento do Retail Media, onde as marcas parceiras de indústrias utilizam os dados de navegação dos aplicativos dos atacados para veicular anúncios hiper-segmentados e ofertas personalizadas no momento exato da reposição de estoque dos comerciantes. valor.globo.com.', icon: 'Zap', colorClass: 'text-[#0054A6]' },
    { title: 'Parcerias Estratégicas e Logística para o Food Service', desc: 'O setor de alimentação fora do lar está redesenhando sua cadeia de suprimentos por meio de ecossistemas logísticos integrados entre redes de distribuição e aplicativos de delivery (como as recentes aproximações entre atacados e plataformas como iFood e Rappi). Essa sinergia visa reduzir o custo do frete de insumos de última hora para bares e restaurantes, permitindo um abastecimento fracionado e sob demanda que alivia o fluxo de caixa dos pequenos transformadores. abrasel.com.br.', icon: 'ShoppingBag', colorClass: 'text-[#F37021]' },
    { title: 'Boom de Marcas Próprias como Defesa da Margem Comercial', desc: 'O avanço das marcas próprias nas gôndolas dos atacados atingiu patamares históricos de penetração tanto no consumidor final quanto no transformador de alimentos. Diante da necessidade de proteger as margens de lucro contra oscilações de custos, os operadores de food service passaram a adotar massivamente as linhas exclusivas das redes de atacarejo, que evoluíram para o patamar premium e entregam a mesma qualidade das marcas líderes industriais com um custo consideravelmente menor. abras.com.br.', icon: 'Users', colorClass: 'text-emerald-600' }
  ],
  campaigns: [
    { name: 'Campanha Copa Junina', reach: '1.391.268', eng: '3,35%', imp: '1.815.919', views: '0', clicks: '60.857', traffic: '0' },
    { name: 'Campanha Casa do Patrão', reach: '579.107', eng: '0,79%', imp: '636.976', views: '0', clicks: '5.315', traffic: '0' }
  ],
  networkView: {
    learnings: [
      { title: 'Aprendizado 1', desc: 'Conteúdo com narrativa supera conteúdo informativo.' },
      { title: 'Aprendizado 2', desc: 'Preço continua sendo o maior gatilho de interação.' },
      { title: 'Aprendizado 3', desc: 'Branding performa quando se comporta como entretenimento.' }
    ],
    panel: {
      reach: '+38%',
      engagement: '1.2M',
      impressions: '4.5M',
      views: '850K',
      clicks: '12K',
      videoViews: '+15%',
      insight: 'A audiência cresceu, mas o aumento de volume reduziu a profundidade das interações.'
    },
    behavior: {
      good: ['Oferta Clara & Direta', 'Senso de Urgência', 'Apelo de Economia', 'Identificação com a Rotina'],
      bad: ['Institucional puro sem contexto', 'Conteúdo Passivo / Apenas informativo', 'Excesso de frequência sem variação']
    },
    dailyVariation: {
      desc: 'Análise visual da influência do tipo de conteúdo na taxa de engajamento diário da audiência.',
      nodes: [
        { percentage: '0,41%', meta: '257.501 / 1.060', label: 'Foto Evento / Pessoa Comendo (Institucional Passivo)', isPeak: false },
        { percentage: '1,78%', meta: '36.387 / 649', label: 'Prêmio Academia Assaí 2025 - Ele está de volta', isPeak: true },
        { percentage: '0,64%', meta: '31.174 / 200', label: '3 Dicas para aproveitar o #Sextou (Contexto Genérico)', isPeak: false },
        { percentage: '1,84%', meta: '130.448 / 2.404', label: 'Acelera com Preço Baixo (Vídeo de Balcão/Freezer)', isPeak: true },
        { percentage: '0,65%', meta: '49.521 / 322', label: 'Acelera com Preço Baixo - Baixou ainda mais (Excesso)', isPeak: false },
        { percentage: '2,55%', meta: '86.656 / 2.209', label: 'Post do Mascote Sol (Narrativa/Gamificação)', isPeak: true, highlight: 'Maior Pico' }
      ]
    },
    saturation: {
       weeks: [
         { period: 'Semana 1', volume: '10 posts', efficiency: 'Alta', color: 'bg-[#0054A6]', width: '85%' },
         { period: 'Semana 2', volume: '18 posts', efficiency: 'Baixa (Diluição)', color: 'bg-[#F37021]', width: '45%' },
       ],
       insight: 'O crescimento de distribuição não foi acompanhado pela mesma intensidade de interação, indicando estafa na audiência.'
    },
    champion: {
      title: 'Desconstruindo o caso "Dia do Sol"',
      desc: 'A performance excepcional não decorreu apenas de mídia isolada, mas da combinação de 4 fatores editoriais principais:',
      factors: [
        { num: '1', title: 'Narrativa', desc: 'História com início, meio e fim, conectando o usuário ao produto emocionalmente.' },
        { num: '2', title: 'Gamificação', desc: 'Mecânica leve e interativa que induz a retenção voluntária na peça.' },
        { num: '3', title: 'Curiosidade', desc: 'Quebra de expectativa no formato gerando tempo de tela prolongado.' },
        { num: '4', title: 'Participação', desc: 'Call-to-action inclusivo focando na opinião e vivência do cliente final.' }
      ]
    },
    categories: {
      nodes: [
        { title: 'Relacional', desc: '30.3% Volume', borderClass: 'border-rose-200 border-t-rose-400' },
        { title: 'Ofertas', desc: '29.8% Volume', borderClass: 'border-orange-200 border-t-orange-500' },
        { title: 'Facilidades', desc: '19.7% Volume', borderClass: 'border-emerald-200 border-t-emerald-600' },
        { title: 'Influenciador', desc: '14.3% Volume', borderClass: 'border-violet-200 border-t-violet-500' },
        { title: 'Institucional', desc: '5.4% Volume', borderClass: 'border-blue-200 border-t-blue-600' },
        { title: 'Dicas', desc: '0.5% Volume', borderClass: 'border-amber-200 border-t-amber-400' }
      ]
    },
    opportunities: [
      { title: 'Creators Regionais', desc: 'Micro influenciadores com alta penetração em praças-chave.' },
      { title: 'Social Commerce', desc: 'Integração nativa de compras diretamente nas plataformas (Loja In-App).' },
      { title: 'Vídeos de Bastidor', desc: 'Rotina crua das lojas gerando conexão e transparência com consumidores.' },
      { title: 'Prova Social & UGC', desc: 'Conteúdo gerado pelo próprio usuário endossando economia nas lojas.' },
      { title: 'Conteúdo Farma', desc: 'Setor com alta recorrência subaproveitado no grid principal.' }
    ],
    actionPlan: [
      { num: '01', colorClass: 'border-[#F37021]', title: 'Aumentar qualidade (Foco em Produndidade)', desc: 'Menos postagens superficiais e mais foco em conteúdos que prendem a atenção e iniciam conversas reais.' },
      { num: '02', colorClass: 'border-emerald-500', title: 'Reduzir saturação (Ajuste do Volume)', desc: 'Recalibrar o número de inserções semanais para evitar desgaste e fadiga do algoritmo e do público.' },
      { num: '03', colorClass: 'border-[#0054A6]', title: 'Escalar formatos vencedores', desc: 'Investimento dobrado em criadores de conteúdo validados e produções de vídeo mais curtas e ágeis.' }
    ]
  },
  tiktokView: {
    learnings: [
      { title: 'Aprendizado 1', desc: 'Conteúdos focados no aplicativo próprio e em parcerias de facilidades entregam os maiores picos de engajamento relativo da conta.' },
      { title: 'Aprendizado 2', desc: 'Vídeos que envolvem diretamente os funcionários da loja mantêm um patamar de conexão comunitária muito mais sólido do que vídeos institucionais vazios.' },
      { title: 'Aprendizado 3', desc: 'Postagens associadas a grandes patrocínios concentram quase a totalidade das visualizações brutas, mas falham drasticamente em engajamento proporcional se não forem humanizadas.' }
    ],
    panel: {
      views: '278.116',
      viewsComp: '-66,34% vs. 826.134 do período anterior',
      engagement: '3,54%',
      engagementComp: '+29,20% vs. 2,74% do período anterior',
      posts: '10',
      postsComp: '0,00% vs. 10 do período anterior',
      interactions: '2.995',
      interactionsComp: '-54,76% vs. 6.620 do período anterior',
      videoViews: '8s',
      videoViewsComp: '',
      insight: 'O conteúdo focado em Patrocínio (Casa do Patrão) atuou de forma anômala: gerou 96,6% de todas as visualizações da semana (268.740 views) e 88,3% das interações, mas obteve o menor engajamento proporcional (0,98%). Em contrapartida, conteúdos menores com a participação de funcionários (APP e Passaí) performaram com as maiores taxas de engajamento (beirando 5%), indicando que o algoritmo pune o envolvimento percentual quando há uma entrega em massa sem estímulo direto à conversa.'
    },
    behavior: {
      good: [
        'Vídeos curtos sobre as funcionalidades e vantagens do aplicativo próprio (APP) estrelados por colaboradores locais.',
        'Apresentação de facilidades comerciais e serviços (como Passaí) conduzidos pela colaboradora Josy.',
        'Conteúdos focados na temática futebolística regional ("Copa da Torcida") com funcionários interagindo na loja.',
        'Quadros dinâmicos e leves com funcionários aos sábados pela manhã geram excelente envolvimento relativo (4,68%).'
      ],
      bad: [
        'Conteúdos massivos sobre grandes marcas parceiras ou patrocínios institucionais sem dinâmicas interativas focadas na comunidade.',
        'Linhas editoriais focadas em serviços terceiros (como Rappi e iFood) entregues de forma fria no final de semana.',
        'Vídeos com ausência de rostos humanos ou sem um interlocutor claro representando a marca ("Grupo vazio").',
        'Publicações institucionais repetitivas postadas de forma rígida exatamente no mesmo horário todos os dias.'
      ]
    },
    dailyVariation: {
      desc: 'Análise visual da influência do tipo de conteúdo na taxa de engajamento diário da audiência.',
      nodes: [
        { percentage: '2,80%', meta: '2.037 / 57', label: 'Terça-feira 16/06: Categoria RELACIONAL (Copa da Torcida!)', isPeak: false, image: 'https://i.imgur.com/L1IG81h.png' },
        { percentage: '0,98%', meta: '268.740 / 2.645', label: 'Quarta-feira 17/06: Categoria RELACIONAL (Patrocínio | Casa do Patrão)', isPeak: false, highlight: 'Vale Profundo', image: 'https://i.imgur.com/leTEspz.png' },
        { percentage: '4,91%', meta: '1.877 / 82', label: 'Quarta-feira 17/06: Categoria FACILIDADES (Funcionário de loja | Josy | Passaí)', isPeak: true, image: 'https://i.imgur.com/K0civT7.png' },
        { percentage: '4,98%', meta: '663 / 33', label: 'Quinta-feira 18/06: Categoria FACILIDADES (Funcionário de loja |APP)', isPeak: true, highlight: 'Maior Pico', image: 'https://i.imgur.com/Lcccw8t.png' },
        { percentage: '4,68%', meta: '513 / 24', label: 'Sábado 20/06: Categoria RELACIONAL (Funcionário de loja | Josy | Copa da Torcida)', isPeak: true, image: 'https://i.imgur.com/d0hVYMU.png' },
        { percentage: '2,88%', meta: '660 / 19', label: 'Domingo 21/06: Categoria FACILIDADES (Fun | Ifood)', isPeak: false, image: 'https://i.imgur.com/Km6YTe9.png' }
      ]
    },
    champions: [
      {
        title: 'Campeão em Visualizações(Top Post Absoluto)',
        desc: 'Categoria RELACIONAL – Patrocínio (Subgrupo: Casa do Patrão). 268.740 Visualizações | 2.645 Interações | 0,98% Engajamento',
        link: 'https://www.tiktok.com/@assaiatacadistaoficial/video/7650602481776479508',
        image: 'https://i.imgur.com/leTEspz.png',
        factors: [
            { num: '1', title: 'Por que funcionou', desc: 'O tema associado a um grande patrocínio ativou de forma agressiva as engrenagens de distribuição em massa do TikTok, gerando um alcance massivo de visualizações no meio da semana.' }
        ]
      },
      {
        title: 'Campeão em Eficiência e Conexão (Top Engajamento)',
        desc: 'Categoria FACILIDADES – Funcionário de loja (Subgrupo: APP). 663 Visualizações | 33 Interações | 4,98% Engajamento',
        link: 'https://www.tiktok.com/@assaiatacadistaoficial/video/7650245778744626448',
        image: 'https://i.imgur.com/Lcccw8t.png',
        factors: [
            { num: '1', title: 'Por que funcionou', desc: 'A indicação de um serviço prático (o APP da empresa) feita de forma humanizada e direta pelo próprio colaborador gerou alta taxa de salvamentos, comentários e curtidas proporcionais à entrega.' }
        ]
      }
    ],
    categories: {
      nodes: [
        { title: 'RELACIONAL', desc: 'Representa 60,00% de toda a grade | 274.652 Visualizações | 2.845 Interações', borderClass: 'border-orange-200 border-t-orange-500' },
        { title: 'FACILIDADES', desc: 'Corresponde a 40,00% do volume | 3.464 Visualizações | 150 Interações', borderClass: 'border-emerald-200 border-t-emerald-600' }
      ]
    },
    opportunities: [
      { title: 'Oportunidade', desc: 'Centralização extrema de todas as postagens às 10:00 da manhã, ignorando horários de almoço e finais de tarde.' },
      { title: 'Oportunidade', desc: 'Total ausência da categoria de OFERTAS na grade do TikTok, gerando um descolamento das promoções comerciais vigentes.' },
      { title: 'Oportunidade', desc: 'Falta de estímulo de engajamento ativo (como perguntas ou dinâmicas) nos posts com maior potencial de viralização de Patrocínio.' },
      { title: 'Oportunidade', desc: 'Baixo aproveitamento do potencial de cross-selling entre os parceiros de delivery (iFood/Rappi) e os funcionários da própria loja.' }
    ],
    actionPlan: [
      { num: '01', colorClass: 'border-[#F37021]', title: 'Ação Estratégica', desc: 'Flexibilizar a grade horária da semana, testando publicações estratégicas nos períodos das 12:00 e das 18:00.' },
      { num: '02', colorClass: 'border-emerald-500', title: 'Ação Estratégica', desc: 'Reintroduzir pílulas dinâmicas de OFERTAS adaptadas à linguagem nativa e ágil do TikTok.' },
      { num: '03', colorClass: 'border-[#0054A6]', title: 'Ação Estratégica', desc: 'Implementar perguntas provocativas ou CTAs focados nos comentários para os posts de grandes Patrocínios para aumentar o engajamento relativo.' },
      { num: '04', colorClass: 'border-rose-500', title: 'Ação Estratégica', desc: 'Integrar influenciadores ou rostos conhecidos como a Josy nas postagens de parcerias com aplicativos para alavancar a tração dos vídeos de entrega.' }
    ]
  },
  facebookView: {
    learnings: [
      { title: 'Aprendizado 1', desc: 'O formato de Carrossel focado na editoria de "Dicas" atinge um nível de envolvimento e engajamento drasticamente superior às postagens comerciais comuns.' },
      { title: 'Aprendizado 2', desc: 'Publicações informativas de utilidade geral (como horários de funcionamento) são excelentes geradores de alcance e impressões brutas, funcionando como âncoras de visibilidade da página.' },
      { title: 'Aprendizado 3', desc: 'Campanhas promocionais focadas em colecionáveis e exclusividades ("Copos exclusivos") ativam o interesse imediato da comunidade, garantindo altos índices de interação orgânica.' }
    ],
    panel: {
      reach: '52.495',
      reachComp: '-59,76% comparado ao período anterior de 130.449',
      engagement: '1,51%',
      engagementComp: '+91,14% comparado ao período anterior de 0,79%',
      impressions: '79.586',
      impressionsComp: '-53,40% comparado ao período anterior de 170.802',
      posts: '8',
      postsComp: '-33,33% comparado ao período anterior de 12',
      interactions: '783',
      interactionsComp: '-29,78% comparado ao período anterior de 1.115',
      insight: 'Embora a redução no volume de publicações desta semana (-33,33%) tenha encolhido a entrega bruta (alcance e impressões), a assertividade e a relevância do conteúdo cresceram expressivamente, dobrando a eficiência média da página (+91,14% de engajamento), provando que uma grade compacta mas centrada em carrosséis interativos e utilidade gera um público muito mais ativo.'
    },
    behavior: {
      good: [
        'O modelo de carrossel focado em dicas de ofertas gera o maior volume absoluto de interações e a maior taxa de engajamento da semana.',
        'A divulgação de brindes e vantagens colecionáveis (como copos exclusivos) desperta forte apelo interativo nas manhãs de sábado.',
        'Avisos estáticos de utilidade imediata (horários especiais) mobilizam a comunidade a reagir e compartilhar as informações.',
        'Postagens estáticas sobre aplicativos logo no início da semana na faixa das 14h convertem uma audiência qualificada e engajada.'
      ],
      bad: [
        'Conteúdos institucionais/relacionais puramente corporativos (como guias práticos focados em público PJ) registram os índices mais baixos de engajamento.',
        'Publicações estáticas de ofertas gerais no sábado à tarde enfrentam apatia do público e não geram o mesmo entusiasmo dos carrosséis.',
        'A temática de facilidades sobre serviços específicos na quarta-feira pela manhã atrai um interesse mais modesto e tímido.',
        'O formato de vídeo na categoria de facilidades performa abaixo dos formatos estáticos de mesma temática no feed.'
      ]
    },
    dailyVariation: {
      desc: 'Análise visual da influência do tipo de conteúdo na taxa de engajamento diário da audiência.',
      nodes: [
        { percentage: '0,92%', meta: '4.259 / 39', label: 'Quarta-feira 17/06: Categoria RELACIONAL (Grupo: Guia pratico - PJ)', isPeak: false, highlight: 'Vale Profundo', image: 'https://i.imgur.com/eqg7gvh.png' },
        { percentage: '0,92%', meta: '4.577 / 42', label: 'Sábado 20/06: Categoria OFERTAS (Grupo: Industria)', isPeak: false, image: 'https://i.imgur.com/C7eu3LH.png' },
        { percentage: '1,00%', meta: '6.421 / 64', label: 'Quarta-feira 10/06: Categoria FACILIDADE (Grupo: PAssaí)', isPeak: false, image: 'https://i.imgur.com/bxHj04r.png' },
        { percentage: '1,82%', meta: '4.391 / 80', label: 'Sábado 20/06: Categoria OFERTAS (Grupo: Copos exclusivos)', isPeak: true, image: 'https://i.imgur.com/b3wUZDh.png' },
        { percentage: '3,63%', meta: '6.802 / 247', label: 'Terça-feira 16/06: Categoria OFERTAS (Grupo: Dicas)', isPeak: true, highlight: 'Maior Pico', image: 'https://i.imgur.com/UD5LNWh.png' }
      ]
    },
    champions: [
      {
        title: 'Carrossel de Ofertas (Top Performance)',
        desc: 'Carrossel de Ofertas – Grupo: Dicas (Subgrupo: Copa Junina). 3,63% de Engajamento | 247 Interações | 11.140 Impressões (Visualizações) | 6.802 de Alcance',
        link: 'https://www.facebook.com/reel/1369789608543959/?s=single_unit',
        image: 'https://i.imgur.com/UD5LNWh.png',
        factors: [
             { num: '1', title: 'Por que funcionou', desc: 'O formato dinâmico de Carrossel associado a uma abordagem consultiva ("Dicas") capturou a curiosidade do usuário de maneira orgânica, gerando um volume de cliques e salvamentos que superou qualquer outra postagem da grade.' }
        ]
      }
    ],
    categories: {
      nodes: [
        { title: 'FACILIDADES', desc: 'Corresponde a 37,50% dos posts da semana | 26.700 Visualizações | 205 Interações', borderClass: 'border-emerald-200 border-t-emerald-600' },
        { title: 'OFERTAS', desc: 'Representa 25,00% dos posts | 17.681 Visualizações | 289 Interações', borderClass: 'border-orange-200 border-t-orange-500' },
        { title: 'INSTITUCIONAL', desc: 'Equivale a 12,50% dos posts | 22.444 Visualizações | 170 Interações', borderClass: 'border-blue-200 border-t-blue-600' },
        { title: 'PROMOÇÃO', desc: 'Responde por 12,50% dos posts | 6.438 Visualizações | 80 Interações', borderClass: 'border-purple-200 border-t-purple-600' },
        { title: 'RELACIONAL', desc: 'Perfaz 12,50% dos posts | 6.323 Visualizações | 39 Interações', borderClass: 'border-rose-200 border-t-rose-500' }
      ]
    },
    opportunities: [
      { title: 'Oportunidade', desc: 'Subaproveitamento do formato Carrossel de Ofertas em outros dias, limitando o potencial de conversão à terça-feira.' },
      { title: 'Oportunidade', desc: 'Baixa cadência da editoria de PROMOÇÃO, que provou alta aderência do público com itens exclusivos.' },
      { title: 'Oportunidade', desc: 'Desempenho reduzido do formato de vídeo (Reels) na editoria de Facilidades em comparação aos estáticos tradicionais.' },
      { title: 'Oportunidade', desc: 'Concentração inflexível de horários promocionais (09:00 e 14:00), ignorando os períodos noturnos de alta rolagem de feed.' }
    ],
    actionPlan: [
      { num: '01', colorClass: 'border-[#F37021]', title: 'Ação Estratégica', desc: 'Replicar a mecânica de Carrossel de "Dicas" para impulsionar os resultados de categorias mais institucionais.' },
      { num: '02', colorClass: 'border-emerald-500', title: 'Ação Estratégica', desc: 'Expandir as comunicações promocionais com foco em produtos exclusivos e brindes promocionais ao longo do mês.' },
      { num: '03', colorClass: 'border-[#0054A6]', title: 'Ação Estratégica', desc: 'Reformular a dinâmica de vídeos explicativos do app para torná-los mais interativos e dinâmicos.' },
      { num: '04', colorClass: 'border-rose-500', title: 'Ação Estratégica', desc: 'Deslocar publicações de menor relevância do final de semana para horários nobre de dias úteis.' }
    ]
  },
  instagramFeedView: {
    learnings: [
      { title: 'Aprendizado 1', desc: 'Conteúdos baseados em gamificação e interatividade direta (como palpites de jogos) são os maiores geradores de comentários e engajamento orgânico do feed.' },
      { title: 'Aprendizado 2', desc: 'As parcerias estratégicas no formato Collab com grandes nomes (como a ação Faro + iFood) são indispensáveis para sustentar o volume de interações e o alcance qualificado da página.' },
      { title: 'Aprendizado 3', desc: 'Formatos promocionais ou institucionais exaustivos da "Casa do Patrão" mostram sinais nítidos de fadiga e desinteresse por parte da audiência.' }
    ],
    panel: {
      reach: '709.665',
      reachComp: '-43,41% em relação ao período anterior (1.253.993)',
      engagement: '1,17%',
      engagementComp: '-13,97% comparado ao anterior (1,36%)',
      impressions: '997.364',
      impressionsComp: '-30,84% frente ao volume anterior (1.442.158)',
      posts: '15',
      postsComp: '-16,67% no inventário da grade (anterior foi de 18)',
      interactions: '9.368',
      interactionsComp: '-42,97% (anterior foi de 16.426)',
      reposts: '661',
      repostsComp: '-13,14% comparado ao ciclo anterior (761)',
      videoViews: '7,5s',
      videoViewsComp: 'Evolução positiva para 7,5 segundos de retenção média nos formatos em vídeo.',
      insight: 'A força da co-criação e da comunidade sobre a distribuição linear: Embora o volume geral de alcance e impressões tenha sofrido uma retração nesta semana devido ao menor investimento e frequência de posts, as dinâmicas de Collab e conteúdos interativos (como a aba de palpites e parcerias com criadores focados na Copa Junina) sustentaram o engajamento da página, provando que a audiência responde com muito mais vigor quando é convidada a participar ativamente do diálogo da marca ou quando encontra rostos de grande autoridade no feed.'
    },
    behavior: {
      good: [
        'Publicações de entretenimento focadas em interatividade direta disparam o volume de respostas na aba de comentários.',
        'Parcerias em formato Collab unindo grandes marcas e influenciadores (como Faro + iFood) concentram os maiores volumes absolutos de curtidas e envios.',
        'Vídeos curtos (Reels) com influenciadores focados em tendências de torcida alcançam excelentes taxas de engajamento proporcional.',
        'Informativos de utilidade pública cruciais (como horários de funcionamento em feriados) geram alto volume de salvamentos e compartilhamentos em formato estático.'
      ],
      bad: [
        'A repetição massiva de posts da linha editorial "Casa do Patrão" sem um gancho claro de benefício arrasta o engajamento para os piores patamares da semana.',
        'Gráficos institucionais focados apenas em comentários e compartilhamentos genéricos de receitas sem apelo de vídeo dinâmico performam abaixo da média geral.',
        'Formatos em carrossel de receitas tradicionais sofrem para reter a atenção rápida do usuário em comparação com os Reels.',
        'Publicações institucionais frias feitas no início da semana sem o fator humanizado apresentam sérias barreiras de atração inicial.'
      ]
    },
    dailyVariation: {
      desc: 'Análise visual da influência do tipo de conteúdo na taxa de engajamento diário da audiência.',
      nodes: [
        { percentage: '0,34%', meta: '56.327 / 190', label: 'Segunda-feira 15/06: Categoria RELACIONAL (Grupo: Casa do Patrão)', isPeak: false, highlight: 'Vale Profundo', image: 'https://i.imgur.com/vIYWgK1.png' },
        { percentage: '0,47%', meta: '28.728 / 134', label: 'Quinta-feira 18/06: Categoria RELACIONAL (Grupo: App Assaí)', isPeak: false, image: 'https://i.imgur.com/yLvoN1l.png' },
        { percentage: '0,42%', meta: '25.348 / 106', label: 'Sexta-feira 19/06: Categoria RELACIONAL (Grupo: Boletim da torcida)', isPeak: false, image: 'https://i.imgur.com/FfxWtT6.png' },
        { percentage: '2,19%', meta: '36.924 / 807', label: 'Sexta-feira 19/06: Categoria INFLUENCER (Grupo: @souluizteixeira - Jogo de sexta)', isPeak: true, image: 'https://i.imgur.com/0tGt5Dt.png' },
        { percentage: '2,38%', meta: '97.590 / 2.320', label: 'Sexta-feira 19/06: Categoria INFLUENCER (Grupo: Faro + iFood)', isPeak: true, image: 'https://i.imgur.com/IEbd9ko.png' },
        { percentage: '3,39%', meta: '43.899 / 1.486', label: 'Sexta-feira 19/06: Categoria RELACIONAL (Grupo: Palpite sobre o jogo)', isPeak: true, highlight: 'Maior Pico', image: 'https://i.imgur.com/HCGl5KB.png' }
      ]
    },
    champions: [
      {
        title: 'Entretenimento | Copa Junina (Top Performance)',
        desc: 'Entretenimento | Subgrupo: Copa Junina. Data: 19/06/2026 (Sexta-feira). 3,39% de Engajamento | 1.486 Interações totais | 66.423 Impressões.',
        link: 'https://www.instagram.com/p/DZw_M25Fsdn/',
        image: 'https://i.imgur.com/HCGl5KB.png',
        factors: [
             { num: '1', title: 'Por que funcionou', desc: 'Este post estático quebrou a soberania dos vídeos por utilizar o gatilho da gamificação e paixão nacional pelo futebol. Ao convidar o público a deixar o seu palpite para a partida nas vésperas do final de semana, gerou uma explosão orgânica na aba de comentários (966 mensagens), o que sinalizou alta relevância para o algoritmo do Instagram.' }
        ]
      }
    ],
    categories: {
      nodes: [
        { title: 'RELACIONAL', desc: 'Representa 26,67% dos posts | 386.404 Visualizações | 3.360 Interações', borderClass: 'border-rose-200 border-t-rose-500' },
        { title: 'OFERTAS', desc: 'Representa 25,00% dos posts | 477.331 Visualizações | 61.240 Interações', borderClass: 'border-orange-200 border-t-orange-500' },
        { title: 'INFLUENCIADOR', desc: 'Representa 25,00% dos posts | 170.018 Visualizações | 3.793 Interações', borderClass: 'border-purple-200 border-t-purple-600' },
        { title: 'FACILIDADES', desc: 'Representa 13,33% dos posts | 155.643 Visualizações | 2.650 Interações', borderClass: 'border-emerald-200 border-t-emerald-600' },
        { title: 'INSTITUCIONAL', desc: 'Representa 6,67% dos posts | 133.222 Visualizações | 845 Interações', borderClass: 'border-blue-200 border-t-blue-600' }
      ]
    },
    opportunities: [
      { title: 'Oportunidade', desc: 'Subaproveitamento da mecânica de gamificação em outras categorias, limitando os picos de comentários apenas à editoria de Entretenimento.' },
      { title: 'Oportunidade', desc: 'Falta de posts da categoria de Ofertas diretas no feed durante a semana, deixando de capturar a conversão imediata de preço.' },
      { title: 'Oportunidade', desc: 'Baixa eficiência dos formatos em Carrossel, que continuam registrando os piores engajamentos da grade.' },
      { title: 'Oportunidade', desc: 'Omissão de links ou CTAs de conversão transacional nas legendas dos Reels de maior sucesso com influenciadores.' }
    ],
    actionPlan: [
      { num: '01', colorClass: 'border-[#F37021]', title: 'Ação Estratégica', desc: 'Replicar o modelo interativo de "Palpites" criando enquetes e dinâmicas de votação de preços e produtos nas pautas de Ofertas.' },
      { num: '02', colorClass: 'border-emerald-500', title: 'Ação Estratégica', desc: 'Restringir e reformular as aparições da pauta "Casa do Patrão", migrando o foco para bastidores ou benefícios reais de economia.' },
      { num: '03', colorClass: 'border-[#0054A6]', title: 'Ação Estratégica', desc: 'Priorizar o formato Reels em Collab para todas as entregas com influenciadores parceiros, extinguindo os carrosséis estáticos com criadores.' },
      { num: '04', colorClass: 'border-rose-500', title: 'Ação Estratégica', desc: 'Aproveitar o alto alcance do formato estático informativo de quinta-feira para embutir carrosséis com as principais ofertas do final de semana.' }
    ]
  },
  instagramStoriesView: {
    learnings: [
      { title: 'Aprendizado 1', desc: 'A redução drástica de quase 47% no volume de posts higienizou o canal, eliminando visualizações ociosas e aumentando a relevância técnica perante o algoritmo.' },
      { title: 'Aprendizado 2', desc: 'A aplicação rigorosa de links direcionais obrigatórios converteu a atenção passiva em ações transacionais, gerando um salto de quase 60% nas interações totais.' },
      { title: 'Aprendizado 3', desc: 'Conteúdos focados em forte apelo de benefícios imediatos e parcerias de peso (como a ação Faro + iFood) são os maiores motores de cliques da rede' }
    ],
    panel: {
      reach: '1.256.464',
      reachComp: '-5,63% em relação ao período anterior (1.331.482)',
      engagement: '4,50%',
      engagementComp: '+95,65% comparado ao patamar anterior (2,30%)',
      impressions: '1.486.745',
      impressionsComp: '-25,31% frente ao volume ocioso anterior (1.990.524)',
      posts: '17',
      postsComp: '-46,88% no inventário de telas distribuídas (anterior foi de 32)',
      interactions: '58.886',
      interactionsComp: '+59,59% (anterior foi de 36.899)',
      insight: 'A vitória da escassez produtiva sobre o volume vazio: A correção de rota nos Stories comprovou que a audiência do canal busca utilidade imediata. Ao eliminar telas redundantes da "Casa do Patrão" e concentrar a grade em apenas 17 publicações altamente intencionais com links explícitos e CTAs fortes para a Copa Junina, a marca limpou as impressões ociosas e fez o engajamento médio dobrar (+95,65%), consolidando o formato como uma máquina eficiente de conversão.'
    },
    behavior: {
      good: [
        'Adesivos de link direcionando para cupons e descontos da parceria Faro + iFood disparam a taxa de cliques imediatos.',
        'Enquetes interativas e caixas de perguntas sobre palpites dos jogos da Copa Junina estimulam respostas em massa.',
        'Telas de ofertas com gatilhos de escassez e contagem regressiva para o final de semana aceleram as reações do público.',
        'Sequências curtas de vídeos de bastidores com criadores de conteúdo humanizam o canal e geram conversas diretas via Direct.'
      ],
      bad: [
        'Telas institucionais estáticas e corporativas sem nenhum tipo de botão de clique ou sticker interativo.',
        'Longas sequências de imagens com excesso de textos promocionais que poluem a mensagem e provocam a saída do usuário.',
        'Publicações sobre facilidades e serviços logísticos desprovidas de rostos humanos ou benefícios claros de economia.',
        'Lançamento de ofertas frias nas primeiras horas da manhã de segunda-feira sem dinâmicas de aquecimento de algoritmo.'
      ]
    },
    dailyVariation: {
      desc: 'Análise visual da influência do tipo de conteúdo na taxa de engajamento diário da audiência.',
      nodes: [
        { percentage: '0,54%', meta: '57.476 / 313', label: 'Sábado 20/06: Categoria INSTITUCIONAL (Grupo: Divulgação do churrascometro)', isPeak: false, highlight: 'Vale Profundo', image: 'https://i.imgur.com/8sd6ll7.png' },
        { percentage: '0,76%', meta: '62.018 / 471', label: 'Quinta-feira 18/06: Categoria RELACIONAL (Grupo: Eliminado - Casa do Patrão)', isPeak: false, image: 'https://i.imgur.com/J2yYcx3.png' },
        { percentage: '11,07%', meta: '52.813 / 5.845', label: 'Sexta-feira 19/06: Categoria OFERTAS (Grupo: Pós jogo)', isPeak: true, image: 'https://i.imgur.com/5dtGMHP.png' },
        { percentage: '16,27%', meta: '89.010 / 14.481', label: 'Terça-feira 16/06: Categoria OFERTAS (Grupo: Abasteça o seu comercio)', isPeak: true, highlight: 'Maior Pico', image: 'https://i.imgur.com/uoSCcqV.png' }
      ]
    },
    champions: [
      {
        title: 'Parceria Faro + iFood (Top Performance)',
        desc: 'Categoria: Ofertas / Facilidades | Subgrupo: Copa Junina / Collab. Data: 28/05/2026 (Quinta-feira). 6,12% de Engajamento | 18.450 Cliques e Interações diretas | 95.200 Impressões | 88.400 de Alcance.',
        link: 'https://w....',
        image: 'https://i.imgur.com/uoSCcqV.png',
        factors: [
             { num: '1', title: 'Por que funcionou', desc: 'O conteúdo aplicou perfeitamente o conceito de utilidade radical associado a um forte benefício financeiro. Ao unir o engajamento festivo da Copa Junina com um sticker de link direto para os cupons do iFood no Assaí, eliminou fricções na jornada e converteu a atenção em uma enxurrada de cliques rápidos nas vésperas do fim de semana.' }
        ]
      }
    ],
    categories: {
      nodes: [
        { title: 'RELACIONAL', desc: 'Representa 23,53% da grade | 280.000 Visualizações | 7.066 Interações', borderClass: 'border-rose-200 border-t-rose-500' },
        { title: 'OFERTAS', desc: 'Consolidou 41,18% dos posts | 520.000 Visualizações | 38.276 Interações', borderClass: 'border-orange-200 border-t-orange-500' },
        { title: 'FACILIDADES', desc: 'Respondeu por 12,50% da grade | 222.156 Visualizações | 12.399 Interações', borderClass: 'border-emerald-200 border-t-emerald-600' },
        { title: 'INSTITUCIONAL', desc: 'Menor participação com 5,88% | 96.464 Visualizações | 1.767 Interações', borderClass: 'border-blue-200 border-t-blue-600' }
      ]
    },
    opportunities: [
      { title: 'Oportunidade', desc: 'Ausência de stickers de teste ou termômetros para aquecer a entrega orgânica do canal antes de postar as telas comerciais principais.' },
      { title: 'Oportunidade', desc: 'Falta de uso de ferramentas de automação de Direct (como "comente QUERO para receber o link") para multiplicar o volume de interações.' },
      { title: 'Oportunidade', desc: 'Subaproveitamento de sequências curtas em formato de "Achadinhos Juninos" focadas exclusivamente no público de pequenos comerciantes.' },
      { title: 'Oportunidade', desc: 'Escassez de reposts de conteúdos gerados pelos próprios clientes consumindo os produtos sazonais nas lojas físicas.' }
    ],
    actionPlan: [
      { num: '01', colorClass: 'border-[#F37021]', title: 'Ação Estratégica', desc: 'Manter o teto rígido e enxuto de publicações diárias nos Stories para continuar protegendo a conta contra impressões ociosas.' },
      { num: '02', colorClass: 'border-emerald-500', title: 'Ação Estratégica', desc: 'Implementar gatilhos de automação de mensagens em 100% das telas que envolverem cupons ou ofertas de grande relevância.' },
      { num: '03', colorClass: 'border-[#0054A6]', title: 'Ação Estratégica', desc: 'Inserir cronômetros de contagem regressiva visual para ativar o senso de urgência nas promoções relâmpago de final de semana.' },
      { num: '04', colorClass: 'border-rose-500', title: 'Ação Estratégica', desc: 'Replicar o modelo de adesivos de links direcionais nos Stories da pauta Relacional com influenciadores para monetizar o entretenimento.' }
    ]
  },
  onePage: {
    header: {
      title: "Resultados e Estratégias 2026",
      period: "15 a 21 de Junho de 2026"
    },
    overview: {
      ig: { engagement: "1,77%", tag: "+62,38%", isUp: true },
      fb: { engagement: "0,79%", tag: "+9,26%", isUp: true },
      tk: { engagement: "2,74%", tag: "-1,26%", isUp: false },
      repost: { total: "761", tag: "+200,79%", isUp: true }
    },
    metas: {
      mensal: {
        ig_feed: { value: "1,23%", diff: "-0,32 P.P", isPositive: false },
        ig_stories: { value: "2,42%", diff: "+0,37 P.P", isPositive: true },
        fb: { value: "1,04%", diff: "-0,36 P.P", isPositive: false },
        tk: { value: "3,02%", diff: "+0,54 P.P", isPositive: true }
      },
      anual: {
        fb: { value: "1,25%", diff: "-0,50 P.P", isPositive: false },
        ig_feed: { value: "1,34%", diff: "-0,76 P.P", isPositive: false },
        ig_stories: { value: "5,02%", diff: "+0,48 P.P", isPositive: true },
        tk: { value: "3,09%", diff: "+0,16 P.P", isPositive: true }
      }
    },
    followers: {
      ig: { total: "8.349", new: "+0,19%" },
      fb: { total: "447", new: "+0,02%" },
      tk: { total: "1.492", new: "+1,56%" }
    },
    instagramDetails: {
      performance: "Formato humanizado estrelado por colaboradores reais (Josy no PDV), com ganchos de urgência (\"Último Dia\").",
      insights: "Ofertas em vídeo com contagem regressiva blindam a entrega orgânica e geram retenção profunda.",
      opportunities: "Transformar interações em frentes de caixa com uso obrigatório de CTAs e links direcionais nos Stories.",
      stats: {
        reach: "3.432.682",
        eng: "1,77%",
        newFollowers: "8.349",
        reposts: "761"
      },
      mockups: [
        { label: "Feed - ENG: 5,60%", imageUrl: "https://i.imgur.com/59US1XL.png" },
        { label: "Stories - ENG: 12,02%", imageUrl: "https://i.imgur.com/qRkcYSt.png" }
      ]
    },
    facebookDetails: {
      performance: "Ofertas em vídeo, como o conteúdo de antecipação \"É amanhã\", que gerou picos de 40,7 mil pessoas alcançadas.",
      insights: "Gatilhos de urgência funcionam bem no feed, tracionando organicamente o vídeo curto.",
      opportunities: "Escalar formatos audiovisuais com ofertas diretas para aproveitar o alto CTR do público maduro.",
      stats: {
        reach: "170.802",
        eng: "0,79%",
        newFollowers: "447",
        shares: "320"
      },
      mockups: [
        { label: "ENG: 1,02%", imageUrl: "https://i.imgur.com/XwQsimI.png" }
      ]
    },
    tiktokDetails: {
      performance: "Conteúdos humanizados estrelados por colaboradores nas lojas.",
      insights: "Rostos familiares e locais ancoram a maior probabilidade de alcance orgânico na plataforma.",
      opportunities: "Investir em vídeos focados em hacks educativos e dicas práticas de economia.",
      stats: {
        reach: "826.134",
        eng: "2,74%",
        newFollowers: "1.492"  ,
        shares: "640"
      },
      mockups: [
        { label: "ENG: 4,37%", imageUrl: "https://i.imgur.com/6YMY4SP.png" }
      ]
    },
    pillars: [
      {
        title: "Headlines Mais Fortes",
        desc: "Gatilhos de curiosidade explícita nos primeiros 3 segundos de vídeo elevaram a VTR (View-Through Rate) em 22% organicamente."
      },
      {
        title: "Foco em Vídeo",
        desc: "A massiva entrega algorítmica de Reels e Shorts compensou integralmente a queda basal de alcance em formatos estáticos e carrosséis."
      },
      {
        title: "Tendências + Humanização",
        desc: "Funcionários da linha de frente operando como protagonistas autênticos geraram o maior sentimento positivo (Sentiment Score) da marca."
      }
    ],
    projects: {
      subtitle: "Além do Assaí + iFood",
      desc: "O uso de influenciadores de grande porte gera um volume bruto de visualizações, conteúdos orgânicos institucionais com colaboradores locais atingem a maior eficiência de engajamento garantindo retenção e conversão reais.\n\nEsse comportamento justifica a recuperação do Instagram Feed, que com a presença do Dudu Camargo, com o plantão transfere o conteúdo de forma mais autentica e natural, E uma presença mais ativa dos colaboradores. Então o ponto chave nessa semana foi novamente a humanização.",
      mockups: [
        "https://i.imgur.com/sF3a5eT.png",
        "https://i.imgur.com/6YMY4SP.png",
        "https://i.imgur.com/59US1XL.png"
      ]
    }
  }
};
