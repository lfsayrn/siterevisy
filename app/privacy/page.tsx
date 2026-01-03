"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Shield, Lock, Eye, Database } from "lucide-react";
import Footer from "@/app/components/landing/Footer";

export default function PrivacyPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="dark min-h-screen bg-background font-sans selection:bg-primary/30">
      {/* Header igual à landing page */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-24 h-10 transition-transform group-hover:scale-105">
              <Image src="/logo.png" alt="Revisy Logo" fill className="object-contain object-left invert" />
            </div>
          </Link>

          {/* Nav */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-3xl">
        {/* Cabeçalho do Documento */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-2xl bg-[oklch(0.85_0.16_85)]/10 text-[oklch(0.85_0.16_85)] ring-1 ring-[oklch(0.85_0.16_85)]/20 shadow-[0_0_30px_-10px_oklch(0.85_0.16_85)]">
            <Shield className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Política de Privacidade</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Esta Política de Privacidade explica como o Revisy (“Revisy”, “nós”) coleta, usa, compartilha e protege
            dados pessoais quando você acessa ou utiliza nosso site, aplicativo e serviços relacionados.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full border border-border/50">
              <Clock className="h-3.5 w-3.5" />
              <span>Atualizado: 26 de Dezembro de 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full border border-border/50">
              <Lock className="h-3.5 w-3.5" />
              <span>Criptografia Ativa</span>
            </div>
          </div>
        </div>

        {/* Destaques (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow group">
            <div className="mb-4 inline-flex p-2.5 rounded-xl bg-[oklch(0.85_0.16_85)]/10 text-[oklch(0.85_0.16_85)] group-hover:bg-[oklch(0.85_0.16_85)] group-hover:text-black transition-colors">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Coleta Mínima</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Apenas os dados estritamente necessários para o serviço funcionar com excelência.
            </p>
          </div>
          <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow group">
            <div className="mb-4 inline-flex p-2.5 rounded-xl bg-[oklch(0.85_0.16_85)]/10 text-[oklch(0.85_0.16_85)] group-hover:bg-[oklch(0.85_0.16_85)] group-hover:text-black transition-colors">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Sem Venda de Dados</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seus dados pessoais são sagrados e nunca são vendidos para anunciantes.
            </p>
          </div>
          <div className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow group">
            <div className="mb-4 inline-flex p-2.5 rounded-xl bg-[oklch(0.85_0.16_85)]/10 text-[oklch(0.85_0.16_85)] group-hover:bg-[oklch(0.85_0.16_85)] group-hover:text-black transition-colors">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Segurança Total</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Criptografia de ponta em repouso e em trânsito para proteger sua arte.
            </p>
          </div>
        </div>

        {/* Corpo do Texto */}
        <article className="prose prose-zinc dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-a:no-underline hover:prose-a:underline prose-p:leading-8 prose-p:mb-8 prose-li:leading-7">
          <div className="p-8 rounded-2xl bg-[oklch(0.85_0.16_85)]/10 border border-[oklch(0.85_0.16_85)]/20 mb-12 text-base shadow-sm">
            <p className="m-0 font-medium text-foreground/90">
              <strong>Resumo rápido:</strong> Nós coletamos o mínimo necessário para o Revisy funcionar (conta, uso
              técnico e seu conteúdo). <strong>Não vendemos seus dados.</strong> Usamos{" "}
              <strong>Google Analytics</strong> para entender o uso do produto (quando aplicável, com consentimento). E,
              quando houver recursos pagos, pagamentos podem ser processados pela <strong>Stripe</strong>.
            </p>
          </div>

          <p>
            Esta Política de Privacidade explica como o Revisy (“<strong>Revisy</strong>”, “<strong>nós</strong>”)
            coleta, usa, compartilha e protege dados pessoais quando você acessa ou utiliza nosso site, aplicativo e
            serviços relacionados (coletivamente, o “<strong>Serviço</strong>”). Ao usar o Serviço, você concorda com as
            práticas descritas aqui.
          </p>

          <h2>1. Controlador e contato</h2>
          <p>
            <strong>Controlador:</strong> Revisy (empresa/projeto em constituição), com operação em{" "}
            <strong>Volta Redonda/RJ</strong> – Brasil.
            <br />
            <strong>Contato para privacidade e suporte:</strong>{" "}
            <a href="mailto:suporte@userevisy.com">suporte@userevisy.com</a>
          </p>

          <h2>2. Dados que coletamos</h2>

          <h3>2.1. Dados que você fornece</h3>
          <ul>
            <li>
              <strong>Cadastro:</strong> nome e e-mail; senha (armazenada de forma segura, com hash).
            </li>
            <li>
              <strong>Perfil e preferências:</strong> foto de perfil, idioma, tema (claro/escuro), configurações e
              preferências.
            </li>
            <li>
              <strong>Conteúdo do Usuário:</strong> arquivos de áudio, imagens de capa, comentários, notas, marcações
              por tempo (timestamp), mensagens de chat, metadados e informações inseridas em projetos.
            </li>
            <li>
              <strong>Suporte:</strong> informações que você enviar quando falar com a gente.
            </li>
          </ul>

          <h3>2.2. Dados coletados automaticamente</h3>
          <ul>
            <li>
              <strong>Logs e dados técnicos:</strong> endereço IP, data/hora, páginas/telas acessadas, eventos do app,
              tipo de navegador/dispositivo, sistema operacional, identificadores técnicos e registros de erro/falha.
            </li>
            <li>
              <strong>Cookies e armazenamento local:</strong> para autenticação, segurança, manter sessão e lembrar
              preferências.
            </li>
          </ul>

          <h3>2.3. Dados de analytics (Google Analytics)</h3>
          <p>
            Utilizamos <strong>Google Analytics</strong> para entender como o Serviço é usado (por exemplo, páginas mais
            acessadas, tempo de navegação, eventos e desempenho). O Google Analytics pode coletar e tratar dados como:
          </p>
          <ul>
            <li>identificadores de cookie/tecnologias similares;</li>
            <li>informações do navegador/dispositivo;</li>
            <li>eventos de navegação e interações;</li>
            <li>endereço IP e localização aproximada (dependendo da configuração).</li>
          </ul>
          <p>
            Quando aplicável, tratamos analytics como <strong>não essencial</strong> e sujeito a{" "}
            <strong>consentimento</strong> (veja a seção de Cookies).
          </p>

          <h3>2.4. Pagamentos (Stripe)</h3>
          <p>
            Quando houver funcionalidades pagas, pagamentos e assinaturas podem ser processados pela{" "}
            <strong>Stripe</strong>. Em geral, não armazenamos dados completos do cartão. A Stripe processa essas
            informações. Podemos receber dados limitados como: status do pagamento, data, valor, moeda, método de
            pagamento (ex.: tipo/últimos dígitos quando aplicável) e identificadores técnicos para conciliação, suporte
            e prevenção a fraudes.
          </p>

          <h2>3. Como usamos seus dados (finalidades)</h2>
          <p>Usamos seus dados para:</p>
          <ul>
            <li>
              <strong>Fornecer e operar o Serviço</strong> (criar conta, autenticar, permitir colaboração em tempo real,
              armazenar e reproduzir arquivos).
            </li>
            <li>
              <strong>Melhorar funcionalidades e estabilidade</strong> (performance, correções e evolução do produto).
            </li>
            <li>
              <strong>Comunicações essenciais</strong> (avisos de segurança, mudanças relevantes, mensagens
              transacionais).
            </li>
            <li>
              <strong>Segurança e prevenção de fraudes/abuso</strong> (monitorar acessos suspeitos, aplicar regras,
              proteger contas).
            </li>
            <li>
              <strong>Cumprir obrigações legais</strong> e responder a solicitações válidas.
            </li>
            <li>
              <strong>Cobrança e gestão de assinaturas</strong> (quando aplicável), via Stripe.
            </li>
          </ul>
          <p>
            <strong>Bases legais (LGPD):</strong> execução de contrato; legítimo interesse (ex.: segurança e melhoria);
            cumprimento de obrigação legal; e consentimento quando aplicável (ex.: cookies de analytics).
          </p>

          <h2>4. Compartilhamento de dados</h2>
          <p>
            <strong>Não vendemos seus dados.</strong> Compartilhamos somente quando necessário:
          </p>
          <ul>
            <li>
              <strong>Provedores de serviço (operadores):</strong>
              <ul className="list-[circle] pl-4 mt-2 mb-2">
                <li>
                  <strong>Google Cloud Platform (GCP):</strong> hospedagem/armazenamento.
                </li>
                <li>
                  <strong>Firebase:</strong> autenticação e recursos relacionados.
                </li>
                <li>
                  <strong>Google Analytics:</strong> métricas e análise de uso do Serviço.
                </li>
                <li>
                  <strong>Stripe:</strong> processamento de pagamentos/assinaturas (quando aplicável).
                </li>
              </ul>
            </li>
            <li>
              <strong>Exigência legal:</strong> quando necessário para cumprir leis, ordens judiciais ou solicitações
              válidas.
            </li>
            <li>
              <strong>Proteção de direitos e segurança:</strong> para investigar fraudes, abusos ou proteger o Serviço e
              usuários.
            </li>
          </ul>

          <h2>5. Transferência internacional</h2>
          <p>
            Alguns provedores (como Google/Firebase/Stripe) podem tratar dados fora do Brasil. Quando isso ocorrer,
            adotamos medidas razoáveis para proteger os dados e utilizar mecanismos compatíveis com a LGPD (por exemplo,
            contratos e práticas de segurança apropriadas).
          </p>

          <h2>6. Retenção e exclusão</h2>
          <p>Guardamos dados pelo tempo necessário para:</p>
          <ul>
            <li>operar o Serviço e manter sua conta ativa;</li>
            <li>cumprir obrigações legais/regulatórias;</li>
            <li>resolver disputas e reforçar segurança/antifraude.</li>
          </ul>
          <p>
            <strong>Exclusão:</strong> você pode solicitar a exclusão da conta. Removeremos ou anonimizaremos dados
            pessoais quando possível, exceto quando a retenção for necessária por obrigação legal ou por motivos
            legítimos (ex.: segurança, prevenção a fraude e backups por período limitado).
          </p>

          <h2>7. Segurança</h2>
          <p>Usamos medidas técnicas e organizacionais para proteger dados, incluindo:</p>
          <ul>
            <li>criptografia TLS/SSL na transmissão;</li>
            <li>controles de acesso e segregação de permissões;</li>
            <li>armazenamento protegido (ex.: buckets privados e regras de acesso).</li>
          </ul>
          <p>
            Ainda assim, <strong>nenhum método é 100% seguro</strong>. Você também deve manter sua senha e dispositivo
            protegidos.
          </p>

          <h2>8. Cookies e tecnologias similares</h2>
          <p>Usamos cookies/local storage para:</p>
          <ul>
            <li>
              <strong>Essenciais (necessários):</strong> login, sessão, segurança e funcionamento do Serviço.
            </li>
            <li>
              <strong>Preferências:</strong> tema, idioma e UI.
            </li>
            <li>
              <strong>Analytics (Google Analytics):</strong> medição de uso e melhoria do produto.
            </li>
          </ul>
          <p>
            Quando aplicável, você pode aceitar ou recusar cookies de analytics por meio do aviso/gerenciador de
            cookies. Você também pode ajustar seu navegador para bloquear cookies — mas isso pode impactar recursos
            essenciais.
          </p>

          <h2>9. Seus direitos (LGPD)</h2>
          <p>
            Você pode solicitar: <strong>acesso</strong>, <strong>correção</strong>, <strong>eliminação</strong> (quando
            aplicável), <strong>portabilidade</strong> (quando aplicável) e informação sobre compartilhamento.
          </p>
          <p>
            Para exercer direitos, contate <a href="mailto:suporte@userevisy.com">suporte@userevisy.com</a>. Podemos
            solicitar confirmação de identidade por segurança.
          </p>

          <h2>10. Privacidade de crianças</h2>
          <p>
            O Revisy <strong>não é direcionado a menores de 13 anos</strong>. Se identificarmos dados coletados
            indevidamente, tomaremos medidas para remover/anonimizar conforme aplicável.
          </p>

          <h2>11. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política. Publicaremos a nova versão nesta página e, se a mudança for relevante,
            poderemos notificar por e-mail e/ou dentro da plataforma.
          </p>

          <hr className="my-12 border-border" />

          <h3>Contato</h3>
          <p>
            Para questões relacionadas à privacidade e proteção de dados:
            <br />
            <a href="mailto:suporte@userevisy.com" className="text-xl font-medium">
              suporte@userevisy.com
            </a>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
