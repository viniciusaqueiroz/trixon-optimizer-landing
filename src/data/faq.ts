export const faqs = [
  {
    question: "O Trixon Optimizer e seguro?",
    answer:
      "O app foi desenhado com confirmacoes, logs, backups para alteracoes reversiveis, IPC controlado e scripts PowerShell allowlisted. A proposta e manutencao transparente, nao otimizacao milagrosa.",
  },
  {
    question: "Precisa executar como administrador?",
    answer:
      "Parte dos diagnosticos funciona sem administrador. Acoes como ponto de restauracao, telemetria, DNS ou otimizacao de volumes podem exigir elevacao e devem ser bloqueadas ou sinalizadas quando o app nao estiver em modo administrador.",
  },
  {
    question: "Ele apaga arquivos pessoais?",
    answer:
      "Nao e esse o objetivo. As limpezas focam TEMP, caches e alvos tecnicos. Cache de navegadores, Windows Update e Lixeira usam opt-in explicito e confirmacao dedicada.",
  },
  {
    question: "Funciona no Windows 10 e 11?",
    answer:
      "Sim, o alvo do projeto e Windows 10 ou superior, com checklist de QA planejado para Windows 10 e Windows 11 em usuario padrao e administrador.",
  },
  {
    question: "Ja existe instalador?",
    answer:
      "O repositorio publica o instalador 0.3.4 para QA interno e validacao. A propria documentacao indica que distribuicao publica deve usar build assinada.",
  },
  {
    question: "O projeto e open source?",
    answer:
      "O repositorio esta publico no GitHub, incluindo README, roadmap, paginas do app, scripts, docs de distribuicao e checklist de QA.",
  },
];
