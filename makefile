all : up

build :
	docker-compose build

up : build
	docker-compose up -d

down :
	docker-compose down

re: down up

clean: down
	@echo " this will remove all redis, blob and db files are you sure? [y/N]"
	@read ans; \
	if [ "$$ans" = "y" ]; then \
		rm -rf db blob redis; \
		echo "removed db, blob and redis"; \
	fi

env : template.env
	@cp template.env .env
	@echo "created .env file"
