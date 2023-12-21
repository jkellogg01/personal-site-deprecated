TARGET := server

run: build
	./bin/$(TARGET)

build:
	cd client; node esbuild.js;
	cd client; npx tailwindcss -i ./src/input.css -o ../dist/output.css;
	go build -C src -o ../bin/$(TARGET) main.go