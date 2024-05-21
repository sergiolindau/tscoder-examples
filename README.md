# tscoder-examples
Collection of examples and end user's tests for tscoder package.
Para calcular o Dia Juliano (JD) a partir de uma data e hora específicas, use a seguinte fórmula:

\[ JD = 367Y - \left\lfloor \frac{7}{4} \times \left(Y + \left\lfloor \frac{M + 9}{12} \right\rfloor \right) \right\rfloor + \left\lfloor \frac{275M}{9} \right\rfloor + D + 1721013.5 + \frac{UT}{24} \]

Onde:
- \( Y \) é o ano.
- \( M \) é o mês (3 para março, 4 para abril, ... , 12 para dezembro; janeiro e fevereiro são tratados como meses do ano anterior, ou seja, \( Y = Y - 1 \) e \( M = M + 12 \)).
- \( D \) é o dia do mês.
- \( UT \) é a hora universal (tempo em UTC) em horas decimais.
