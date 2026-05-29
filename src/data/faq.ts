export const faqs = [
  {
    question: "O Trixon Optimizer é seguro?",
    answer:
      "O app foi desenhado com confirmações, logs, backups para alterações reversíveis, IPC controlado e scripts PowerShell allowlisted. A proposta é manutenção transparente, não otimização milagrosa.",
  },
  {
    question: "Precisa executar como administrador?",
    answer:
      "Parte dos diagnósticos funciona sem administrador. Ações como ponto de restauração, telemetria, DNS ou otimização de volumes podem exigir elevação e devem ser bloqueadas ou sinalizadas quando o app não estiver em modo administrador.",
  },
  {
    question: "Ele apaga arquivos pessoais?",
    answer:
      "Não é esse o objetivo. As limpezas focam TEMP, caches e alvos técnicos. Cache de navegadores, Windows Update e Lixeira usam opt-in explícito e confirmação dedicada.",
  },
  {
    question: "Funciona no Windows 10 e 11?",
    answer:
      "Sim, o alvo do projeto é Windows 10 ou superior, com checklist de QA planejado para Windows 10 e Windows 11 em usuário padrão e administrador.",
  },
  {
    question: "Já existe instalador?",
    answer:
      "O repositório publica o instalador 0.3.4 para QA interno e validação. A própria documentação indica que distribuição pública deve usar build assinada.",
  },
  {
    question: "O projeto é open source?",
    answer:
      "O repositório está público no GitHub, incluindo README, roadmap, páginas do app, scripts, docs de distribuição e checklist de QA.",
  },
];
