dev:
	@echo "as of 21DEC2023 this command only builds the react app!"
	@cd client && npm run dev

react: dist/app.js

dist/app.js:
	@cd client && npm run build