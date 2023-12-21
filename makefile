TARGET := server

run: build
	./bin/$(TARGET)

build:
	@cd client; npm run build;
	go build -C src -o ../bin/$(TARGET) main.go