require 'webrick'

server = WEBrick::HTTPSerer.new(
  DocumentRoot: './',
  BindAddres: '0.0.0.0',
  Port: 8000
)

server.mount_proc('/') do |req, res|
  res.body = 'hello'
end

server.start
