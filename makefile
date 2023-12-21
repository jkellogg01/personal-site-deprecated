TARGET := server

run: build
	./bin/$(TARGET)

build:
	cd client; node esbuild.mjs;
	cd client; npx tailwindcss -i ./src/input.css -o ../dist/output.css;
	go build -C src -o ../bin/$(TARGET) main.go