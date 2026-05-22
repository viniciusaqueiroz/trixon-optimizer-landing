import {
  Activity,
  Cpu,
  Gauge,
  FileClock,
  Network,
  RotateCcw,
  Settings,
  ShieldCheck,
} from "lucide-react";

export const features = [
  {
    title: "Dashboard de saude do sistema",
    description:
      "Painel com saude geral, CPU, RAM, armazenamento, inicializacao, limpeza pendente, rede, DNS e historico recente.",
    icon: Gauge,
  },
  {
    title: "Limpeza segura e opt-in",
    description:
      "Scanner de TEMP, cache de navegadores, Windows Update e Lixeira com selecao explicita e confirmacao antes de apagar.",
    icon: ShieldCheck,
  },
  {
    title: "Gerenciamento de inicializacao",
    description:
      "Lista entradas do usuario e globais, protege itens somente leitura, desativa entradas gerenciaveis e cria backup.",
    icon: Activity,
  },
  {
    title: "Otimizacoes reversiveis",
    description:
      "RAM, volumes, planos de energia, efeitos visuais, privacidade e telemetria com historico e restauracao.",
    icon: Cpu,
  },
  {
    title: "Rede, DNS e diagnosticos",
    description:
      "Status de adaptadores, perfis DNS com backup, flush DNS, renovacao IPv4, ping, traceroute, speed test e banda ao vivo.",
    icon: Network,
  },
  {
    title: "Restauracao central",
    description:
      "Filtros para backups de inicializacao, DNS, otimizacoes, planos de energia e registros de ponto de restauracao.",
    icon: RotateCcw,
  },
  {
    title: "Logs e diagnostico em ZIP",
    description:
      "Registra acoes em logs, exporta relatorios e pacote completo de diagnostico para suporte e validacao.",
    icon: FileClock,
  },
  {
    title: "Configuracoes e changelog",
    description:
      "Permite ajustar confirmacoes, pasta de backups automaticos, diagnostico detalhado, assistente e versao instalada.",
    icon: Settings,
  },
];
