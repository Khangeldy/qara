openssl req -new -sha256 -nodes -out \*.localhost.csr -newkey rsa:2048 -keyout \*.localhost.key -config <(
cat <<-EOF
[req]
default_bits = 2048
prompt = no
default_md = sha256
req_extensions = req_ext
distinguished_name = dn

[ dn ]
C=KZ
ST=Almaty
L=Rochester
O=End Point
OU=Testing Domain
emailAddress=hongeldon@inbox.ru
CN = localhost

[ req_ext ]
subjectAltName = @alt_names

[ alt_names ]
DNS.1 = www.bbazar.kz
DNS.2 = www.khangeldy.github.io
EOF
)
