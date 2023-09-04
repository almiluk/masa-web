echo $HOME
echo $LFTP_HOST
lftp -e "set ssl:check-hostname no; mirror -R --only-newer -F ../../tasks/*; bye;" -u $LFTP_USER,$LFTP_PASSWORD $LFTP_HOST
