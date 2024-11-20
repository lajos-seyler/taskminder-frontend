# Set default environment to 'local' if none is provided
ENV ?= local

# Default target: show available commands when no target is specified
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make up ENV=local|prod                            - Bring up the services with Docker Compose (--build)"
	@echo "  make down ENV=local|prod                          - Bring down the services"
	@echo "  make shell ENV=local|prod                         - Start ash shell"


# Command to bring up the services with --build option based on the environment
up:
ifeq ($(ENV),local)
	@docker compose -f docker-compose.local.yaml up --build -d
else ifeq ($(ENV),prod)
	@docker compose -f docker-compose.production.yaml up --build -d
else
	@echo "Invalid ENV value! Please specify ENV=local or ENV=prod."
	exit 1
endif

# Command to bring down the services based on the environment
down:
ifeq ($(ENV),local)
	@docker compose -f docker-compose.local.yaml down
else ifeq ($(ENV),prod)
	@docker compose -f docker-compose.production.yaml down
else
	@echo "Invalid ENV value! Please specify ENV=local or ENV=prod."
	exit 1
endif


# Command to run Django shell with the appropriate docker-compose file
shell:
ifeq ($(ENV),local)
	@docker compose -f docker-compose.local.yaml run --rm react /bin/ash
else ifeq ($(ENV),prod)
	@docker compose -f docker-compose.production.yaml run --rm react /bin/ash
else
	@echo "Invalid ENV value! Please specify ENV=local or ENV=prod."
	exit 1
endif
