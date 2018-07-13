### Makefile --- 

## Author: C.Z. cz.devnet@gmail.com
## Version: $Id: Makefile,v 0.0 2017/12/04 11:18:41 apollo Exp $

TARGET := parse 

#SRC_FILES := $(shell ls ../*.go )
SRC_FILES := $(shell find . -type  f | grep "\.go"  )
#SRC_FILES += main.go flag.go config_xml.go

#VERSION := $(shell git log  | head -n 1 | awk '{print $2}')
VERSION := `git log  | head -n 1 | sed 's/commit //g'`
DIST_NAME := dist_$(VERSION)

.DEFAULT:all

all : $(TARGET)
	-rm -rf log
	@echo "[SUCCESS] Done go build parse svr."


$(TARGET): $(SRC_FILES)
	@echo "src :"$(SRC_FILES)
	go build  -v -o $(TARGET)

fmt : $(SRC_FILES)
	go fmt
	@echo "[SUCCESS] Done go fmt"

.PHONY:clean dist

test:
	@echo $(VERSION)
	@echo $(DIST_NAME)

dist:
	-rm -rf dist_*
	mkdir -p $(DIST_NAME)/bin
	cp $(TARGET) $(DIST_NAME)/bin

clean:
	go clean
	-rm -rf $(TARGET)
	-rm -rf log

### Makefile ends here
