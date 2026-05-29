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
    title: "Dashboard de saúde do sistema",
    description:
      "Painel com saúde geral, CPU, RAM, armazenamento, inicialização, limpeza pendente, rede, DNS e histórico recente.",
    icon: Gauge,
  },
  {
    title: "Limpeza segura e opt-in",
    description:
      "Scanner de TEMP, cache de navegadores, Windows Update e Lixeira com seleção explícita e confirmação antes de apagar.",
    icon: ShieldCheck,
  },
  {
    title: "Gerenciamento de inicialização",
    description:
      "Lista entradas do usuário e globais, protege itens somente leitura, desativa entradas gerenciáveis e cria backup.",
    icon: Activity,
  },
  {
    title: "Otimizações reversíveis",
    description:
      "RAM, volumes, planos de energia, efeitos visuais, privacidade e telemetria com histórico e restauração.",
    icon: Cpu,
  },
  {
    title: "Rede, DNS e diagnósticos",
    description:
      "Status de adaptadores, perfis DNS com backup, flush DNS, renovação IPv4, ping, traceroute, speed test e banda ao vivo.",
    icon: Network,
  },
  {
    title: "Restauração central",
    description:
      "Filtros para backups de inicialização, DNS, otimizações, planos de energia e registros de ponto de restauração.",
    icon: RotateCcw,
  },
  {
    title: "Logs e diagnóstico em ZIP",
    description:
      "Registra ações em logs, exporta relatórios e pacote completo de diagnóstico para suporte e validação.",
    icon: FileClock,
  },
  {
    title: "Configurações e changelog",
    description:
      "Permite ajustar confirmações, pasta de backups automáticos, diagnóstico detalhado, assistente e versão instalada.",
    icon: Settings,
  },
];
