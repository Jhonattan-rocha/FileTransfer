import sys, socket

HOST = "127.0.0.1"
PORT = 8080

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server:

    server.bind((HOST, PORT))
    server.listen()
    
    print("Servidor rodando")
    while True:
        try:
            (client, address) = server.accept()
        
            print(f"Conexão com o cliente do address {address}")

            print(client, address)
            
            client.send(b"""
                    GET /socket.io/?EIO=4&transport=polling&t=OtNfxdY&b64=1 HTTP/1.1\r\nUser-Agent: node-XMLHttpRequest\r\nAccept: */*\r\nHost: 127.0.0.1:8080\r\nConnection: close\r\n\r\n
                    """)

            mes = client.recv(2048*10)
            
            print(mes)
        except KeyboardInterrupt:
            sys.exit(1)
        except Exception as e:
            print(e)
            sys.exit(1)