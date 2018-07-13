/**
* Author: CZ cz.devnet@gmail.com
 */

package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"io/ioutil"
	"os"
)

func main() {
	if Flag.Version {
		fmt.Printf("Version:%s \n", Version())
		return
	}

	if Flag.SourceFile == "" || Flag.DestFile == "" {
		flag.Usage()
		return
	}

	wx, err := parseFile(Flag.SourceFile)
	if err != nil {
		fmt.Printf("Parse file error:%s", err.Error())
		return
	}

	funs, err := genTS(wx)
	if err != nil {
		fmt.Printf("genTS error:%s", err.Error())
		return
	}

	err = saveFuns(funs)
	if err != nil {
		fmt.Printf("Save file error:%s", err.Error())
		return
	}

}

type ReturnType struct {
	Type string
	Name string
}

type Param struct {
	Type string
	Name string
}

type API struct {
	Type   string
	Name   string
	Desc   string
	Return ReturnType
	Params []Param `json:"parameters"`
}

type WX struct {
	Type    string
	Name    string
	Members []API
}
type WXInterface struct {
	Interface []WX `json:"interfaces"`
}

func parseFile(sf string) (wx *WX, err error) {
	f, err := os.Open(sf)
	if err != nil {
		fmt.Printf("Open file error:%s \n", err.Error())
		return nil, err
	}
	defer f.Close()
	var wxi WXInterface
	dec := json.NewDecoder(f)
	for {
		if err := dec.Decode(&wxi); err == io.EOF {
			break
		} else if err != nil {
			fmt.Printf("Decode Error \n")
			return nil, err
		}
	}
	return &wxi.Interface[0], nil
}

func genTS(wx *WX) (funs string, err error) {
	for _, api := range wx.Members {
		if api.Type != "function" {
			continue
		}
		comm := fmt.Sprintf("/**\n* %s \n*/", api.Desc)
		f := fmt.Sprintf("function %s", api.Name)
		p := ""
		s := ""
		for _, arg := range api.Params {
			p += s + arg.Name + ": " + arg.Type
			s = ", "
		}
		r := ": void"
		if len(api.Return.Name) > 0 {
			r = ": " + api.Return.Type
		}
		fun := fmt.Sprintf("%s \n%s(%s)%s;\n\n", comm, f, p, r)
		funs += fun
	}
	return funs, nil
}

func saveFuns(funs string) (err error) {
	err = ioutil.WriteFile(Flag.DestFile, []byte(funs), 0644)
	return err
}
