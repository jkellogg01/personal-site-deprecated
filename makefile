TARGET := server

run: build
	./bin/$(TARGET)

build:
<<<<<<< HEAD
	cd client; node esbuild.js;
=======
	cd client; node esbuild.mjs;
>>>>>>> dbaace919d5ec8517478555e5e927d7369e0a443
	cd client; npx tailwindcss -i ./src/input.css -o ../dist/output.css;
	go build -C src -o ../bin/$(TARGET) main.go