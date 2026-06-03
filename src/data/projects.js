export const projects = [
  {
    slug: "crm",
    image: "/projects/crm1.png",
    images: [
      {
        src: "/projects/crm1.png",
        alt: {
          pt: "Tela principal do CRM com lista de clientes e indicadores comerciais.",
          en: "CRM main screen with customer list and sales indicators.",
        },
      },
      {
        src: "/projects/crm2.png",
        alt: {
          pt: "Tela de detalhes do cliente no CRM.",
          en: "Customer details screen in the CRM.",
        },
      },
      {
        src: "/projects/crmcotacao.png",
        alt: {
          pt: "Tela de cotacao do CRM.",
          en: "CRM quote screen.",
        },
      },
      {
        src: "/projects/detalhescotacao.png",
        alt: {
          pt: "Detalhes de cotacao dentro do CRM.",
          en: "Quote details inside the CRM.",
        },
      },
    ],
    title: {
      pt: "CRM",
      en: "CRM",
    },
    shortDescription: {
      pt: "Sistema CRM para organizar clientes, contatos, oportunidades e acompanhamento comercial em uma interface administrativa.",
      en: "A CRM system for organizing customers, contacts, opportunities, and sales follow-up in an administrative interface.",
    },
    description: {
      pt: "Projeto de CRM desenvolvido para centralizar o relacionamento com clientes, facilitar o acompanhamento de oportunidades e organizar o fluxo comercial. A interface apresenta uma experiência administrativa com foco em cadastro, consulta, status de atendimento e visão prática para a rotina de vendas.",
      en: "A CRM project built to centralize customer relationships, make opportunity tracking easier, and organize the sales workflow. The interface provides an administrative experience focused on registration, search, service status, and a practical view for sales routines.",
    },
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    highlights: {
      pt: [
        "Cadastro e organização de clientes",
        "Acompanhamento de contatos e oportunidades",
        "Interface administrativa para rotina comercial",
        "Estrutura preparada para filtros, status e consultas",
      ],
      en: [
        "Customer registration and organization",
        "Contact and opportunity tracking",
        "Administrative interface for sales routines",
        "Structure prepared for filters, statuses, and searches",
      ],
    },
    challenges: {
      pt: [
        "Organizar informações comerciais de forma clara",
        "Criar uma experiência simples para consulta e acompanhamento",
        "Pensar em uma base escalável para novos módulos do CRM",
      ],
      en: [
        "Organizing sales information clearly",
        "Creating a simple experience for search and follow-up",
        "Designing a scalable base for new CRM modules",
      ],
    },
    learnings: {
      pt: [
        "Modelagem de dados para relacionamento com clientes",
        "Criação de interfaces administrativas",
        "Organização de fluxos comerciais em uma aplicação web",
      ],
      en: [
        "Data modeling for customer relationships",
        "Building administrative interfaces",
        "Organizing sales workflows in a web application",
      ],
    },
    nextSteps: {
      pt: [
        "Adicionar funil de vendas",
        "Criar histórico de interações por cliente",
        "Implementar filtros por status e responsável",
      ],
      en: [
        "Add a sales pipeline",
        "Create customer interaction history",
        "Implement filters by status and owner",
      ],
    },
  },
  {
    slug: "rota-de-oportunidade",
    image: "/projects/rota-oportunidade.png",
    imageView: {
      card: {
        transform: "scale(1.28) translateY(-9%)",
        transformOrigin: "center center",
      },
      detail: {
        transform: "scale(1.18) translateY(-15%)",
        transformOrigin: "center center",
      },
    },
    title: {
      pt: "Rota de Oportunidade",
      en: "Route of Opportunity",
    },
    shortDescription: {
      pt: "Projeto desenvolvido para votação interna e externa de elogios para motoristas, como parte de uma campanha criada para valorizar os profissionais da estrada.",
      en: "A project built for internal and external driver recognition voting as part of a campaign created to value road professionals.",
    },
    description: {
      pt: "Projeto full stack desenvolvido com HTML, CSS, JavaScript, Node.js e PostgreSQL. O backend foi estruturado com rotas em server.js, com criação de tabelas no PostgreSQL e queries para cadastro, listagem, atualização e exclusão de dados. O frontend foi integrado à API REST para consumo e envio das informações.",
      en: "A full stack project built with HTML, CSS, JavaScript, Node.js, and PostgreSQL. The backend was structured with routes in server.js, PostgreSQL tables, and queries for create, list, update, and delete operations. The frontend was integrated with the REST API for data submission and consumption.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
    highlights: {
      pt: [
        "Backend em Node.js com rotas organizadas em server.js",
        "Criação de tabelas do zero no PostgreSQL com o Prisma",
        "Queries SQL para CRUD e listagens",
        "Integração do frontend com backend",
      ],
      en: [
        "Node.js backend with routes organized in server.js",
        "PostgreSQL tables created from scratch with Prisma",
        "SQL queries for CRUD operations and listings",
        "Frontend and backend integration",
      ],
    },
    challenges: {
      pt: [
        "Estruturar a comunicação entre frontend, backend e banco",
        "Garantir queries consistentes para cadastro e listagem",
        "Organizar a lógica das rotas de forma simples",
      ],
      en: [
        "Structuring communication between frontend, backend, and database",
        "Keeping registration and listing queries consistent",
        "Organizing route logic in a simple way",
      ],
    },
    learnings: {
      pt: [
        "Prática com API REST",
        "Criação de tabelas e consultas SQL",
        "Integração entre camadas da aplicação",
      ],
      en: [
        "Hands-on practice with REST APIs",
        "Creating tables and writing SQL queries",
        "Integration across application layers",
      ],
    },
    nextSteps: {
      pt: [
        "Adicionar autenticação",
        "Melhorar validações",
        "Criar filtros de busca",
      ],
      en: [
        "Add authentication",
        "Improve validations",
        "Create search filters",
      ],
    },
  },
  {
    slug: "dashboard-com-dados-do-banco",
    image: "/projects/dashboard-banco.png",
    imageView: {
      card: {
        transform: "scale(1.18) translate(-7%, -1%)",
        transformOrigin: "center center",
      },
      detail: {
        transform: "scale(1.14) translate(-6%, -1%)",
        transformOrigin: "center center",
      },
    },
    title: {
      pt: "Dashboard com dados do banco",
      en: "Database Metrics Dashboard",
    },
    shortDescription: {
      pt: "Dashboard web com exibição de métricas e dados em cards e tabelas, consumindo dados do banco.",
      en: "A web dashboard that displays metrics and database data in cards and tables.",
    },
    description: {
      pt: "Projeto desenvolvido com HTML, CSS, JavaScript, Node.js e PostgreSQL, com foco na visualização de dados vindos do banco por meio de API. A interface apresenta cards e tabela com tratamento de erro e organização visual das informações.",
      en: "A project built with HTML, CSS, JavaScript, Node.js, and PostgreSQL, focused on visualizing database data through an API. The interface uses cards and tables with error handling and clear information hierarchy.",
    },
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
    highlights: {
      pt: [
        "Dashboard com dados dinâmicos",
        "Consumo de API para exibir informações do banco",
        "Cards e tabela para organização visual",
        "Tratamento de erros na interface",
      ],
      en: [
        "Dashboard with dynamic data",
        "API consumption to display database information",
        "Cards and tables for visual organization",
        "Error handling in the interface",
      ],
    },
    challenges: {
      pt: [
        "Organizar a exibição de dados de forma clara",
        "Tratar erros de carregamento",
        "Pensar em estrutura escalável para novas métricas",
      ],
      en: [
        "Organizing data display in a clear way",
        "Handling loading errors",
        "Designing a scalable structure for new metrics",
      ],
    },
    learnings: {
      pt: [
        "Consumo de dados via API",
        "Organização visual de dashboards",
        "Consultas SQL aplicadas a métricas",
      ],
      en: [
        "Data consumption through APIs",
        "Visual organization of dashboards",
        "SQL queries applied to metrics",
      ],
    },
    nextSteps: {
      pt: [
        "Adicionar gráficos",
        "Criar filtros",
        "Implementar autenticação",
      ],
      en: [
        "Add charts",
        "Create filters",
        "Implement authentication",
      ],
    },
  },
  {
    slug: "retropatio",
    image: "/projects/retropatio.png",
    imageView: {
      card: {
        transform: "scale(1.12) translateX(-4%)",
        transformOrigin: "center center",
      },
      detail: {
        transform: "scale(1.08) translateX(-3%)",
        transformOrigin: "center center",
      },
    },
    title: {
      pt: "Retropatio",
      en: "Retropatio",
    },
    shortDescription: {
      pt: "Sistema para controle de entrada e saída de veículos, com listagem, histórico e busca por placa.",
      en: "A system for tracking vehicle entry and exit, with listing, history, and license plate search.",
    },
    description: {
      pt: "Projeto pensado para gestão de movimentação de veículos em pátio, com foco em registro de entrada e saída, listagem dos veículos presentes, histórico de movimentações e busca por placa. A proposta utiliza Next.js no frontend e pode se integrar a Node.js e PostgreSQL.",
      en: "A project designed for yard vehicle movement management, focused on entry and exit records, current vehicle listing, movement history, and plate search. The proposal uses Next.js on the frontend and can integrate with Node.js and PostgreSQL.",
    },
    stack: ["Next.js", "React", "Node.js", "PostgreSQL"],
    highlights: {
      pt: [
        "Registro de entrada e saída",
        "Listagem dos veículos no pátio",
        "Histórico de movimentações",
        "Busca por placa",
        "Cadastro de motoristas e veículos",
        "Dashboard de controle financeiro",
      ],
      en: [
        "Entry and exit registration",
        "Vehicle listing in the yard",
        "Movement history",
        "Plate search",
        "Driver and vehicle registration",
        "Financial control dashboard",
      ],
    },
    challenges: {
      pt: [
        "Modelar um fluxo simples e funcional",
        "Organizar a exibição de histórico",
        "Pensar na separação entre dados atuais e movimentações",
      ],
      en: [
        "Modeling a simple and functional flow",
        "Organizing history display",
        "Separating current data from movement records",
      ],
    },
    learnings: {
      pt: [
        "Estruturação de projeto com Next.js",
        "Organização de fluxo de dados",
        "Pensar regras de negócio em sistema realista",
      ],
      en: [
        "Project structuring with Next.js",
        "Data flow organization",
        "Thinking through business rules in a realistic system",
      ],
    },
    nextSteps: {
      pt: [
        "Criar autenticação",
        "Adicionar filtros por período",
        "Melhorar dashboard operacional",
        "Automação com câmeras para placas",
      ],
      en: [
        "Create authentication",
        "Add date-range filters",
        "Improve the operational dashboard",
        "Add camera automation for plate capture",
      ],
    },
  },
  {
    slug: "rota-sustentavel",
    image: "/projects/intranet.png",
    imageView: {
      card: {
        transform: "scale(1.18) translate(-8%, -1%)",
        transformOrigin: "center center",
      },
      detail: {
        transform: "scale(1.14) translate(-7%, -1%)",
        transformOrigin: "center center",
      },
    },
    title: {
      pt: "Rota Sustentável",
      en: "Sustainable Route",
    },
    shortDescription: {
      pt: "Área interna para campanhas, missões, feed e ranking de engajamento dos colaboradores.",
      en: "Internal area for campaigns, missions, feed, and employee engagement ranking.",
    },
    description: {
      pt: "Projeto de intranet voltado para campanhas internas, com tela de missões, feed, ranking e navegação por áreas administrativas. A interface foi pensada para centralizar ações de engajamento e facilitar a participação dos colaboradores.",
      en: "An intranet project focused on internal campaigns, with missions, feed, ranking, and administrative navigation. The interface was designed to centralize engagement actions and make employee participation easier.",
    },
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    highlights: {
      pt: [
        "Tela de campanha com feed e ranking",
        "Área administrativa para colaboradores",
        "Estrutura preparada para missões internas",
        "Interface responsiva com navegação lateral",
      ],
      en: [
        "Campaign screen with feed and ranking",
        "Administrative area for employees",
        "Structure prepared for internal missions",
        "Responsive interface with sidebar navigation",
      ],
    },
    challenges: {
      pt: [
        "Organizar uma experiência clara para diferentes perfis de usuário",
        "Criar uma base visual consistente para módulos internos",
        "Pensar no fluxo entre campanhas, feed e ranking",
      ],
      en: [
        "Organizing a clear experience for different user profiles",
        "Creating a consistent visual base for internal modules",
        "Designing the flow between campaigns, feed, and ranking",
      ],
    },
    learnings: {
      pt: [
        "Construção de layout administrativo",
        "Organização de navegação por módulos",
        "Planejamento de telas para engajamento interno",
      ],
      en: [
        "Building administrative layouts",
        "Organizing module-based navigation",
        "Planning screens for internal engagement",
      ],
    },
    nextSteps: {
      pt: [
        "Adicionar publicação de missões",
        "Integrar ranking com dados reais",
        "Criar permissões por perfil",
      ],
      en: [
        "Add mission publishing",
        "Integrate ranking with real data",
        "Create role-based permissions",
      ],
    },
  },
  {
    slug: "controle-de-portaria",
    image: "/projects/image.png",
    imageView: {
      card: {
        transform: "scale(1.12) translateX(-4%)",
        transformOrigin: "center center",
      },
      detail: {
        transform: "scale(1.08) translateX(-3%)",
        transformOrigin: "center center",
      },
    },
    title: {
      pt: "Controle de Portaria",
      en: "Gatehouse Control",
    },
    shortDescription: {
      pt: "Tela operacional para controle de veículos, visitantes, vagas livres e vagas ocupadas em tempo real.",
      en: "Operational screen for tracking vehicles, visitors, free spots, and occupied spots in real time.",
    },
    description: {
      pt: "Módulo operacional para controle de portaria, com visualização de veículos ativos, visitantes, registros do dia e indicadores de vagas. A proposta ajuda a acompanhar o fluxo de entrada e saída de forma clara e objetiva.",
      en: "Operational module for gatehouse control, with active vehicles, visitors, daily records, and parking spot indicators. The proposal helps monitor entry and exit flow in a clear and objective way.",
    },
    stack: ["React", "Next.js", "Node.js", "PostgreSQL"],
    highlights: {
      pt: [
        "Cards operacionais para veículos e visitantes",
        "Indicadores de vagas livres e ocupadas",
        "Visualização rápida para equipe de portaria",
        "Base preparada para integração com dados do pátio",
      ],
      en: [
        "Operational cards for vehicles and visitors",
        "Indicators for free and occupied spots",
        "Quick view for gatehouse staff",
        "Base prepared for yard data integration",
      ],
    },
    challenges: {
      pt: [
        "Transformar dados operacionais em leitura simples",
        "Organizar métricas importantes em uma tela única",
        "Pensar em fluxo prático para uso diário",
      ],
      en: [
        "Turning operational data into a simple reading experience",
        "Organizing important metrics on a single screen",
        "Designing a practical flow for daily use",
      ],
    },
    learnings: {
      pt: [
        "Criação de dashboards operacionais",
        "Hierarquia visual para dados em tempo real",
        "Modelagem de informações de controle de acesso",
      ],
      en: [
        "Creating operational dashboards",
        "Visual hierarchy for real-time data",
        "Modeling access control information",
      ],
    },
    nextSteps: {
      pt: [
        "Conectar com registros reais de entrada e saída",
        "Adicionar histórico por veículo",
        "Criar filtros por data e status",
      ],
      en: [
        "Connect with real entry and exit records",
        "Add vehicle history",
        "Create filters by date and status",
      ],
    },
  },
];
