"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, FileText, Globe } from "lucide-react";
import Footer from "@/app/components/landing/Footer";

export default function TermsPage() {
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
            <FileText className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Termos de Serviço</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Por favor, leia atentamente estes termos antes de utilizar a plataforma Revisy. Eles definem as regras e
            regulamentos para o uso do nosso Site.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full border border-border/50">
              <Clock className="h-3.5 w-3.5" />
              <span>Atualizado: 26 de Dezembro de 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-full border border-border/50">
              <Globe className="h-3.5 w-3.5" />
              <span>Versão 1.0</span>
            </div>
          </div>
        </div>

        {/* Corpo do Texto */}
        <article className="prose prose-zinc dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80 prose-a:no-underline hover:prose-a:underline prose-p:leading-8 prose-p:mb-8 prose-li:leading-7">
          <div className="p-8 rounded-2xl bg-[oklch(0.85_0.16_85)]/10 border border-[oklch(0.85_0.16_85)]/20 mb-12 text-base shadow-sm">
            <p className="m-0 font-medium text-foreground/90">
              <strong>Resumo rápido:</strong> O Revisy é uma plataforma para colaboração em arquivos de áudio.{" "}
              <strong>Você continua sendo dono do conteúdo</strong> que envia. Você precisa usar o Serviço de forma
              legal e respeitosa. Alguns recursos podem ser pagos no futuro (via <strong>Stripe</strong>). Para detalhes
              de dados e cookies (incluindo <strong>Google Analytics</strong>), veja nossa{" "}
              <Link href="/privacy">Política de Privacidade</Link>.
            </p>
          </div>

          <p>
            Estes Termos de Serviço (“<strong>Termos</strong>”) regem o acesso e uso do <strong>Revisy</strong>,
            incluindo nosso site, aplicativo e funcionalidades relacionadas (coletivamente, o “<strong>Serviço</strong>
            ”). Ao acessar ou usar o Serviço, você concorda com estes Termos e com nossa{" "}
            <Link href="/privacy">Política de Privacidade</Link>.
          </p>

          <h2>1. Identificação das Partes</h2>
          <p>
            <strong>Provedor:</strong> Revisy (empresa/projeto em constituição), operando a partir de{" "}
            <strong>Volta Redonda/RJ</strong>.
            <br />
            <strong>Contato:</strong> <a href="mailto:suporte@userevisy.com">suporte@userevisy.com</a>
          </p>

          <h2>2. O Serviço Revisy</h2>
          <p>
            O Revisy fornece uma plataforma baseada em nuvem para músicos, produtores e engenheiros de áudio colaborarem
            em projetos. As funcionalidades podem incluir: upload e armazenamento de arquivos de áudio, reprodução
            sincronizada, anotações por tempo (timestamp), chat em tempo real e gerenciamento de versões.
          </p>

          <h3>2.1. Disponibilidade</h3>
          <p>
            Podemos buscar alta disponibilidade, <strong>mas não garantimos funcionamento ininterrupto</strong>. O
            Serviço pode sofrer manutenções, falhas e interrupções, inclusive por dependência de serviços de terceiros
            (por exemplo, provedores de nuvem).
          </p>

          <h3>2.2. Alterações no Serviço</h3>
          <p>
            Podemos modificar, suspender ou descontinuar partes do Serviço a qualquer momento, inclusive recursos e
            integrações, por motivos técnicos, legais, comerciais ou de segurança. Quando razoável, avisaremos por
            e-mail, dentro do app ou no site.
          </p>

          <h2>3. Contas e Segurança</h2>
          <p>
            Para acessar a maior parte dos recursos, você deve registrar uma conta.{" "}
            <strong>Você é responsável por manter a confidencialidade de suas credenciais</strong> e por toda atividade
            realizada na sua conta.
          </p>
          <p>
            Você concorda em nos notificar imediatamente sobre <strong>qualquer uso não autorizado</strong> da sua conta
            ou violação de segurança.
          </p>

          <h2>4. Conteúdo do Usuário e Propriedade Intelectual</h2>

          <h3>4.1. Seu Conteúdo</h3>
          <p>
            “<strong>Conteúdo do Usuário</strong>” inclui arquivos de áudio, imagens, textos, comentários, mensagens e
            outros materiais enviados ao Serviço.
          </p>
          <p>
            <strong>Você mantém todos os direitos sobre seu Conteúdo do Usuário.</strong> Ao enviar Conteúdo do Usuário,
            você concede ao Revisy uma licença mundial, não exclusiva e isenta de royalties, limitada ao necessário para
            operar o Serviço, incluindo:
          </p>
          <ul>
            <li>hospedar, armazenar, processar e reproduzir seu conteúdo conforme suas ações e configurações;</li>
            <li>criar backups e cópias de segurança;</li>
            <li>
              gerar formas de onda, pré-visualizações e metadados técnicos necessários para o funcionamento da
              interface;
            </li>
            <li>compartilhar o conteúdo com colaboradores que você autorizar.</li>
          </ul>
          <p>
            O Revisy <strong>não reivindica propriedade</strong> sobre suas músicas e não cria obras derivadas para fins
            comerciais sem sua autorização expressa.
          </p>

          <h3>4.2. Responsabilidade pelo Conteúdo</h3>
          <p>
            Você declara que possui os direitos e autorizações necessárias para enviar e compartilhar seu Conteúdo do
            Usuário e que ele não viola direitos de terceiros.
          </p>
          <p>
            Podemos remover ou restringir conteúdo e/ou contas caso haja indícios razoáveis de violação destes Termos,
            de direitos de terceiros ou de leis aplicáveis.
          </p>

          <h3>4.3. Propriedade do Revisy</h3>
          <p>
            O Serviço (incluindo software, design, marcas, logotipos, interfaces e materiais do Revisy) é de{" "}
            <strong>propriedade exclusiva do Revisy</strong> e/ou de seus licenciadores, sendo protegido por leis de
            propriedade intelectual.
          </p>

          <h2>5. Uso Aceitável</h2>
          <p>Você concorda em não usar o Serviço para:</p>
          <ul>
            <li>
              carregar conteúdo que infrinja direitos autorais, marcas registradas ou outros direitos de terceiros;
            </li>
            <li>distribuir vírus, malware, worms ou qualquer outro código destrutivo;</li>
            <li>assediar, abusar, insultar, difamar, caluniar, ameaçar ou intimidar outros usuários;</li>
            <li>
              realizar acesso não autorizado, explorar vulnerabilidades, contornar medidas de segurança ou fazer
              engenharia reversa indevida (salvo quando permitido por lei);
            </li>
            <li>utilizar o Serviço para qualquer finalidade ilegal ou não autorizada.</li>
          </ul>
          <p>
            <strong>Reservamo-nos o direito de suspender ou encerrar seu acesso ao Serviço em caso de violação.</strong>
          </p>

          <h2>6. Planos, Pagamentos e Stripe</h2>

          <h3>6.1. Recursos pagos</h3>
          <p>
            O Revisy pode oferecer, agora ou no futuro, recursos pagos, assinaturas ou funcionalidades adicionais (“
            <strong>Recursos Pagos</strong>”). Quando aplicável, os valores, condições, período de cobrança e o que está
            incluído serão apresentados antes da confirmação da contratação.
          </p>

          <h3>6.2. Processamento de pagamentos pela Stripe</h3>
          <p>
            Quando houver cobrança no Serviço, os pagamentos poderão ser processados pela <strong>Stripe</strong>, uma
            plataforma de pagamentos de terceiros. Ao contratar Recursos Pagos, você concorda que:
          </p>
          <ul>
            <li>o processamento do pagamento poderá estar sujeito aos termos e políticas da Stripe;</li>
            <li>o Revisy geralmente não armazena os dados completos do seu cartão; eles são tratados pela Stripe;</li>
            <li>
              podemos receber informações necessárias para operar a assinatura e fornecer suporte (por exemplo: status
              do pagamento, data, valor, método e identificadores técnicos).
            </li>
          </ul>

          <h3>6.3. Cobranças recorrentes e falhas</h3>
          <p>
            Caso um plano seja recorrente, <strong>você autoriza cobranças automáticas até o cancelamento</strong>.
            Falhas de pagamento podem resultar na suspensão de Recursos Pagos até regularização.
          </p>

          <h3>6.4. Cancelamento e reembolsos</h3>
          <p>
            Condições de cancelamento e reembolso (se existirem) serão apresentadas no momento da contratação e/ou em
            política específica. Na ausência de previsão, <strong>pagamentos são não reembolsáveis</strong>, exceto
            quando exigido por lei.
          </p>

          <h2>7. Suspensão e Encerramento</h2>
          <p>
            Podemos suspender ou encerrar seu acesso ao Serviço se você violar estes Termos, se houver exigência legal,
            risco à segurança do Serviço ou uso indevido.
          </p>
          <p>
            Você pode parar de usar o Serviço a qualquer momento. A exclusão da conta (quando disponível) pode acarretar{" "}
            <strong>perda de acesso e de conteúdo</strong>, conforme regras de retenção informadas na Política de
            Privacidade e obrigações legais.
          </p>

          <h2>8. Isenção de Garantias</h2>
          <p>
            Na máxima extensão permitida por lei, o Serviço é fornecido “<strong>como está</strong>” e “
            <strong>conforme disponível</strong>”, sem garantias de disponibilidade ininterrupta, ausência de erros ou
            adequação a um propósito específico.
          </p>

          <h2>9. Limitação de Responsabilidade</h2>
          <p>
            Na extensão máxima permitida pela lei aplicável, em nenhum caso o Revisy, seus diretores, funcionários ou
            agentes serão responsáveis por quaisquer danos indiretos, punitivos, incidentais, especiais, consequenciais
            ou exemplares, incluindo perdas de lucros, receitas, dados, boa vontade ou outras perdas intangíveis.
          </p>

          <h2>10. Alterações nos Termos</h2>
          <p>
            Podemos atualizar estes Termos periodicamente. Quando a alteração for relevante, faremos esforços razoáveis
            para avisar por e-mail, dentro do app ou no site.{" "}
            <strong>
              O uso contínuo do Serviço após a entrada em vigor das mudanças significa aceitação dos Termos atualizados.
            </strong>
          </p>

          <h2>11. Lei Aplicável e Foro</h2>
          <p>
            Estes Termos serão regidos pelas leis do Brasil. Fica eleito o foro da comarca de{" "}
            <strong>Volta Redonda/RJ</strong>, salvo disposição legal em contrário.
          </p>

          <hr className="my-12 border-border" />

          <h3>Contato</h3>
          <p>
            Se você tiver alguma dúvida sobre estes Termos, entre em contato:
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
