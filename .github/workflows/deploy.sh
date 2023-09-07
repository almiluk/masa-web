lftp -e "set ftp:ssl-allow no; set ssl:check-hostname no; mirror -R --verbose=2 --only-newer -F tasks/*; bye;" -u $LFTP_USER,$LFTP_PASSWORD $LFTP_HOST | grep -v "/"
