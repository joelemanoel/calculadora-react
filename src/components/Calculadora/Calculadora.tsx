import React, { useEffect, useRef, useState } from 'react';
import botoes from './constants/botoes';
import Botao from './components/Botao/Botao';
import Visor from './components/Visor/Visor';
import { CalculadoraAcoes } from './types/index';
import { BotaoEscondidoParaAdicionarOFocoNaCalculadora, BotoesContainer, CalculadoraContainer } from './StyledComponents';
import calculate from './helpers/calculate';
import teclas from './constants/teclas';

const Calculadora = () => {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('');
  const [erro, setErro] = useState('');
  const calculadora = useRef<HTMLDivElement>(null);

  useEffect(() => {
    calculadora
      .current
      ?.querySelector('button')
      ?.focus();
  }, []);

  const calcular = (expressao: string) => {
    try {
      const res = calculate(expressao);
      setResultado(res.toString());
      setExpressao(expressao);
    } catch (error) {
      exibeErro(error.toString());
    }
  }

  const exibeErro = (mensagem: string) => {
    setErro(mensagem.replace('Error: ', ''));

    setTimeout(() => {
      setErro('');
    }, 3000);
  }

  const limparVisor = () => {
    setExpressao('');
    setResultado('');
  }

  const apagarUltimoItem = () => {
    setResultado(resultado.slice(0, -1));
  }

  const executarAcao = (botaoClicado: string) => {
    if (botaoClicado === CalculadoraAcoes.calcular)
      return calcular(resultado);

    if (botaoClicado === CalculadoraAcoes.limparVisor)
      return limparVisor();

    if (botaoClicado === CalculadoraAcoes.apagarUltimoItem)
      return apagarUltimoItem();

    setResultado(`${resultado}${botaoClicado}`);
  }

  const handleOnClickAndSetFocus = () => {
    calculadora
      .current
      ?.querySelector('button')
      ?.focus();
  }

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const botaoClicado = event.currentTarget.innerText;
    executarAcao(botaoClicado);
    event.currentTarget.blur();
  }

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
    event.stopPropagation();

    let tecla = event.key;

    if (tecla === 'Backspace')
      tecla = CalculadoraAcoes.apagarUltimoItem;
    else if (tecla === 'Delete' || tecla === 'ESC')
      tecla = CalculadoraAcoes.limparVisor;
    else if (tecla === 'Enter')
      tecla = CalculadoraAcoes.calcular;
    else if (tecla === '/')
      tecla = CalculadoraAcoes.dividir;
    else if (tecla === '*')
      tecla = CalculadoraAcoes.multiplicar;
    else if (tecla === 'c')
      tecla = CalculadoraAcoes.limparVisor;
    else if (tecla === ',')
      tecla = '.';

    if (teclas.includes(tecla))
      executarAcao(tecla);
  }

  return (
    <CalculadoraContainer
      id="calculadora"
      onKeyDown={handleOnKeyDown}
      onClick={handleOnClickAndSetFocus}
      ref={calculadora}
    >
      <Visor
        erro={erro}
        expressao={expressao}
        resultado={resultado}
      />
      <BotoesContainer>
        <BotaoEscondidoParaAdicionarOFocoNaCalculadora />
        {
          botoes.map(botao => (
            <Botao
              onClick={handleOnClick}
              label={botao.label.toString()}
              background={botao.background}
              color={botao.color}
              key={botao.label}
            />
          ))
        }
      </BotoesContainer>
    </CalculadoraContainer>
  );
}

export default Calculadora;
