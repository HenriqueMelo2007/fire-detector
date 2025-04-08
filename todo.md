> To-Do ✅
## Versão 1.0

Leitura dos sensores DHT22, MQ-2 e LDR para obtenção dos dados ATUAIS e uso do FastAPI + ML para diagnosticar presença de incêndio. Exibição do diagnóstico + valores dos sensores no frontend com NextJS.

- Calibrar MQ-2
- Coletar dados dos sensores via ESP32 e exibir no monitor serial
- Criar script python para leitura da porta serial e gerar arquivos .csv de treino e teste
- Treinar e testar modelo de classificação do scikit-learn com os dados manualmente gerados e convertidos em .csv pelo script
- Salvar modelo
- Conectar ESP32 ao wi-fi
- Iniciar código do servidor para receber dados não-rotulados, dados de leituras novas e realizar a classificação de incêndio usando o modelo de machine learning (FastAPI)
- Preparar ESP32 para enviar requisições POST ao servidor (envio das leituras dos sensores)
- Iniciar frontend (primeiramente estático). Temperatura, umidade, luminosidade, presença de fumaça ou gases inflamáveis e diagnóstico de incêndio.
- Preparar servidor para fornecer dados ao frontend
- Dinamizar frontend para consumir os dados novos vindos do backend com a predição

## Futura versão 2.0

Uso de banco de dados para armazenamento do histórico de leituras. Frontend modificado para exibir valores passados.

## Futura versão 3.0

CRUD + leituras próprias de cada usuário.