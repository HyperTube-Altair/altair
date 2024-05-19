all : up

build :
	docker-compose build

up : build
	docker-compose up -d

down :
	docker-compose down

re: down up

clean: down
	@echo " this will remove all data and db files are you sure? [y/N]"
	@read ans; \
	if [ "$$ans" = "y" ]; then \
		rm -rf db data; \
		echo "removed db and data"; \
	fi

env : template.env
	@cp template.env .env
	@echo "created .env file"