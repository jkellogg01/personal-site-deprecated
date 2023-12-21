TARGET := server

run: build
	./bin/$(TARGET)

build:
	client/node_modules/.bin/esbuild client/src/main.tsx --bundle --outfile='../dist/app.js';
	cd client; npx tailwindcss -i ./src/input.css -o ../dist/output.css;
	go build -C src -o ../bin/$(TARGET) main.go