package main

import (
	"flag"
	"fmt"
)

//Flag Flag
var Flag FlagInfo

//FlagInfo FlagInfo
type FlagInfo struct {
	Version    bool
	SourceFile string
	DestFile   string
}

func init() {
	flag.Usage = func() {
		fmt.Printf("Parse WX's API of Javascript\n")
		fmt.Println("Usage: parse -[vdcp]")
		flag.PrintDefaults()
	}

	flag.BoolVar(&Flag.Version, "v", false, "Show Parse's Version")
	flag.StringVar(&Flag.SourceFile, "s", "", "Source API file to parse")
	flag.StringVar(&Flag.DestFile, "d", "", "Output Typescript .d.ts file")
	flag.Parse()

}
