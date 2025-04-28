import os
from flask import Flask, send_from_directory, session
from datetime import timedelta
import logging
from settings import PROXY_PORT, PROXY_DEBUG, TEMPO_SESSION # carrega o arquivo .env, variáveis de ambiente

# Configuração básica de logging
logging.basicConfig(level=logging.INFO)

# Aplicação Flask
app = Flask(__name__)

# Flask não serve automaticamente o favicon, então você precisa criar uma rota para ele
# crie um arquivo favicon.ico na pasta static
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(
    directory='static',
    path='favicon.ico',
    mimetype='image/vnd.microsoft.icon'
    )
    
# gerando uma chave randômica para secret_key
app.secret_key = os.urandom(12).hex()
# configuração do tempo de expiração da sessão (em minutos), o padrão é 31 dias
app.permanent_session_lifetime = timedelta(minutes=int(TEMPO_SESSION))
# Configuração do SameSite para cookies
app.config['SESSION_COOKIE_SAMESITE'] = 'None'
# Configuração para enviar cookies apenas em conexões HTTPS
app.config['SESSION_COOKIE_SECURE'] = True

# o decorador @app.before_request é chamado antes de cada requisição
@app.before_request
def before_request():
    # renovar o tempo da sessão automaticamente conforme o usuário interage com a aplicação
    session.permanent = True
    
# ponto de entrada para execução
if __name__ == '__main__':
    logging.info(f"Iniciando o servidor Flask na porta: {PROXY_PORT}")
    # Roda o servidor Flask em modo de debug (recarrega automaticamente e mostra mais erros)
    # Desative o debug em produção!
    app.run(host='0.0.0.0', port=PROXY_PORT, debug=PROXY_DEBUG, use_reloader=PROXY_DEBUG)