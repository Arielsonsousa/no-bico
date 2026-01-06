# Design Specs — No Bico (MVP)

## Paleta de Cores
- Primária: #0066FF (brand blue)
- Sucesso: #10B981
- Neutro escuro: #111827
- Neutro médio: #6B7280
- Fundo: #F6F7FB
- Branco: #FFFFFF

## Tipografia
- Fonte principal: Inter (weights: 400, 600, 700)
- H1: 28–32px, 700
- H2: 20–24px, 600
- Body: 14–16px, 400

## Espaçamentos (Design Tokens)
- Spacing small: 8px
- Spacing base: 16px
- Spacing large: 24px
- Border radius padrão: 8px

## Componentes principais
- Header: logo à esquerda, busca central, CTA(s) à direita
- Card de Profissional: avatar, selo nível, nota, preço, botão 'Pedir Orçamento'
- Modal de Checkout: resumo, breakdown de taxas, botão 'Depositar em Garantia' (primário), botão secundário cancelar
- Botão Liberar: confirmação 2-step, 2FA para valores altos
- Upload de Evidências: thumbnails, metadados (timestamp, geotag), botão 'Adicionar' com câmera

## Estados e Interações
- Botões: hover/active/disabled com variações de 10–15% de brilho
- Toasts: sucesso (verde), erro (vermelho) e info (azul)

## Export & Assets
- Exportar SVGs dos ícones em 24x24; fornecer PNG 2x para mobile
- Organizar assets em `/assets/icons/` e `/assets/images/` com nomes descritivos

## Anotações de Implementação
- Usar tokens CSS (variables) para cores, tipografia e espaçamentos
- Acessibilidade: contraste mínimo 4.5:1 para textos importantes; labels para inputs; foco visível.
